import React, { useEffect, useRef, useState } from "react";
import { Text, View, Image, Button as NBButton } from "native-base";
import { VerificationCodeInput, Button } from "components";
import { useSmsVerificationMutation } from "api";
import {
  INVALID_CODE,
  VERIFICATION_CODE_ERROR,
  ENOUGH_TRIES_ERROR,
  ACCESS_TOKEN_ERROR,
} from "../messages";
import { errorAlert } from "utils/alert";
import { forgotPasswordFinalizer } from "../helper";
import { CHALLAN_HOME, CREATE_NEW_PASSWORD } from "routes";
import { useSelector, useDispatch } from "react-redux";
import { setLogin } from "../slice";
import { setAuthToken } from "utils/async-storage";
import { TextBtn } from "../../../components/Button";

const VerificationCode = ({ navigation, route }) => {
  const accessToken = useSelector((state) => state.auth.accessToken);
  const dispatch = useDispatch();
  const { phone_number, screen } = route.params;
  const triesRef = useRef(0);
  const [value, setValue] = useState("");
  const [serverCode, setServerCode] = useState(0);
  const [sendSMS, { data, isSuccess, isError }] = useSmsVerificationMutation();

  const sendCode = async () => {
    await sendSMS(phone_number);
  };
  const ref = useRef(0);

  useEffect(() => {
    sendCode();
  }, []);

  useEffect(() => {
    if (triesRef.current === 5) {
      sendCode();
      triesRef.current = 0;
      errorAlert(ENOUGH_TRIES_ERROR);
    }
  }, [triesRef.current]);

  useEffect(() => {
    if (isSuccess) setServerCode(data?.data?.code);
  }, [isSuccess]);

  useEffect(() => {
    if (isError) return errorAlert(VERIFICATION_CODE_ERROR);
  }, [isError]);

  const handlePinCode = async () => {
    if (value.length !== 4) return;
    triesRef.current++;
    if (value !== serverCode) {
      errorAlert(INVALID_CODE);
      return;
    }
    switch (screen) {
      case "forgotpassword":
        navigation.navigate(CREATE_NEW_PASSWORD);
        return;
      case "login":
        try {
          await setAuthToken("access", accessToken);
          dispatch(setLogin(true));
          navigation.navigate(CHALLAN_HOME);
        } catch (error) {
          errorAlert(ACCESS_TOKEN_ERROR);
        } finally {
          return;
        }
      default:
        return;
    }
  };

  return (
    <View backgroundColor="#B21B1B" flex={1}>
      <View padding={5}>
        <Image
          source={require("assets/images/verification-code-image.png")}
          alt="verification-code-image"
          style={{ alignSelf: "center", marginTop: 30 }}
          size={220}
          resizeMode="contain"
        />
        <Text fontSize="2xl" fontWeight="extrabold" color="white">
          Verification Code
        </Text>
        <Text fontSize="15" color="white">
          Please enter the 4 digit code sent to {phone_number}
        </Text>
        <VerificationCodeInput value={value} setValue={setValue} />
        <NBButton
          style={{
            width: 120,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 20,
            backgroundColor: "transparent",
          }}
          _text={{
            style: {
              fontSize: 16,
              paddingBottom: 2,
              textDecorationLine: "underline",
            },
          }}
          onPress={sendCode}
        >
          Resend Code
        </NBButton>
        <Button
          title="Confirm"
          variant="outlined"
          style={{
            btn: {
              width: 200,
              alignSelf: "center",
              marginTop: 10,
            },
          }}
          onPress={handlePinCode}
        />
      </View>
    </View>
  );
};

export default VerificationCode;
