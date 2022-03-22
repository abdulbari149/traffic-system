import React, { useEffect, useState } from "react";

import { Text, View, Image, Button as NBButton } from "native-base";

import Button from "../../../components/Button";

import VerificationCodeInput from "../../../components/VerificationCodeInput";
import { Alert } from "react-native";
import { CREATE_NEW_PASSWORD, CHALLAN_HOME } from "../../../routes";
import { useSmsVerificationMutation } from "../../../api";

const VerificationCodeScreen = ({ navigation, route }) => {
  const [value, setValue] = useState("");
  const { next, phone_number } = route.params;
  const [mobileSMSVerification, result] = useSmsVerificationMutation();

  const [serverCode, setServerCode] = useState(0);
	console.log({ serverCode, phone_number })
  async function sendMobileVerificationCode() {
    try {
      const { data, error } = await mobileSMSVerification({
        phone_number: phone_number,
      });
			if(data) {
				setServerCode(data?.data.code);
			} else {
				console.log(error)
			}
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    sendMobileVerificationCode();
  }, []);
  const handlePinCode = () => {
    if (value === serverCode) {
      if (next === CHALLAN_HOME) {
        dispatch(setLogin(true));
      } else {
        navigation.navigate(next);
      }
    } else {
      Alert.alert("You have entered a wrong verification Code");
    }
  };
  return (
    <View backgroundColor="#B21B1B" flex={1}>
      <View padding={5}>
        <Image
          source={require("../../../assets/images/verification-code-image.png")}
          alt="verification-code-image"
          style={{ alignSelf: "center", marginTop: 30 }}
          size={260}
          resizeMode="contain"
        />
        <Text fontSize="3xl" fontWeight="extrabold" color="white">
          Verification Code
        </Text>
        <Text fontSize="15" color="white">
          Please enter the 4 digit code sent to +92314XXXXXXX
        </Text>
        <VerificationCodeInput value={value} setValue={setValue} />
        <NBButton style={{ backgroundColor: "transparent" }}>
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
          disabled={value.length < 4}
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
