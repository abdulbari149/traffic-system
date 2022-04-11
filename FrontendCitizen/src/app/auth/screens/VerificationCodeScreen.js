import React, { useEffect, useState } from "react";

import { Text, View, Image, Button as NBButton } from "native-base";

import Button from "../../../components/Button";

import VerificationCodeInput from "../../../components/VerificationCodeInput";
import { Alert } from "react-native";
import {
  CREATE_NEW_PASSWORD,
  CHALLAN_HOME,
  LOGIN_SCREEN,
  FORGOT_PASSWORD,
} from "../../../routes";
import { useSmsVerificationMutation } from "../../../api";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../slice";
import { setAuthToken } from "../../../utils/async-storage";

const VerificationCodeScreen = ({ navigation, route }) => {
  // Component State
  const [value, setValue] = useState("");
  const [serverCode, setServerCode] = useState(0);
  // React-Redux
  const { citizen, accessToken } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  // Mutation
  const [mobileSMSVerification, { isSuccess, data, error, isError }] =
    useSmsVerificationMutation();

  async function sendMobileVerificationCode() {
    await mobileSMSVerification(citizen.phone_number);
  }
  // Success Handler
  useEffect(() => {
    if (isSuccess) {
      setServerCode(data.data.code);
    }
  }, [isSuccess]);

  // Error Handler

  useEffect(() => {
    if (isError) {
      Alert.alert(
        "Server Error Occured",
        "There was an error while sending the code please try again in a few seconds"
      );
    }
  }, [isError]);

  // Sending inital Pin Code
  useEffect(() => {
    sendMobileVerificationCode();
  }, []);

  // Handling Pin Code Input
  const handlePinCode = async () => {
    if (value.length !== 4 || value !== serverCode) {
      Alert.alert("Invalid Code", "Please Type A Valid Code");
      return;
    }
    const { routes } = navigation.getState();
    const parent = routes[routes.length - 2].name;
    if (parent === LOGIN_SCREEN) {
      await setAuthToken("access", accessToken);
      dispatch(setLogin(true));
    } else if (parent === FORGOT_PASSWORD) {
      navigation.navigate(CREATE_NEW_PASSWORD);
    }
  };
  return (
    <View backgroundColor="#B21B1B" flex={1}>
      <View padding={5}>
        <Image
          source={require("../../../assets/images/verification-code-image.png")}
          alt="verification-code-image"
          style={{ alignSelf: "center", marginTop: 30 }}
          size={220}
          resizeMode="contain"
        />
        <Text fontSize="3xl" fontWeight="extrabold" color="white">
          Verification Code
        </Text>
        <Text fontSize="15" color="white">
          Please enter the 4 digit code sent to {citizen.phone_number}
        </Text>
        <VerificationCodeInput value={value} setValue={setValue} />
        <NBButton
          style={{ backgroundColor: "transparent" }}
        // onPress={sendMobileVerificationCode}
        >
          <Text
            style={{
              color: "white",
              textDecorationLine: "underline",
              fontSize: 16,
              fontWeight: "bold",
              paddingTop: 20,
            }}
          >
            Resend Code
          </Text>
        </NBButton>
        <Button
          title="Confirm"
          variant="outlined"
          style={{
            btn: {
              width: 200,
              alignSelf: "center",
            },
          }}
          onPress={handlePinCode}
        />
      </View>
    </View>
  );
};

export default VerificationCodeScreen;
