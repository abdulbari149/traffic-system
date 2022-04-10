import React, { useEffect, useState } from "react";
import { View } from "native-base";
import KeyPad from "../components/KeyPad";
import { HeaderText, Dots } from "@components";
import { CHALLAN_HOME_SCREEN } from "src/routes";
import { useNavigationState } from "@react-navigation//native";
import { Alert } from "react-native";
import { useSmsVerificationMutation } from "src/api";
import { setLogin } from "../slice";
import { useDispatch } from "react-redux";
const Verification = ({ navigation, route }) => {
  const { next, phone_number } = route.params;
  const state = useNavigationState((state) => state);
  const dispatch = useDispatch();
  const [mobileSMSVerification, result] = useSmsVerificationMutation();

  const [serverCode, setServerCode] = useState(0);

   async function sendMobileVerificationCode () {
    try {
      const { data, error } = await mobileSMSVerification({
        phone_number: phone_number,
      });
      setServerCode(data?.data.code);
      if(error) {
        throw new Error(JSON.stringify(error.data.message))
      }
    } catch (error) {
      Alert.alert(error.message)
    }
  }

  useEffect(() => {
    sendMobileVerificationCode()
  }, []);

  const handlePinCode = (code) => {
    console.log({ code })
    if (code === serverCode) {
      if (next === CHALLAN_HOME_SCREEN) {
        console.log("Dispatch runs")
        dispatch(setLogin(true));
      } else {
        navigation.navigate(next);
      }
    }else {
      Alert.alert("The verification code is incorrect")
    }
  };

  return (
    <View flex={1} bg="#fff" alignItems="center">
      <HeaderText
        title="Verification Code"
        subTitle="We have send code at +92 333 3456789"
      />
      <KeyPad
        handleSubmit={handlePinCode}
      />
      <Dots activeScreen={3} />
    </View>
  );
};

export default Verification;
