import React from "react";
import { View } from "native-base";
import { HeaderText, KeyPad } from "../../components";

const VerificationScreen = () => {
  return (
    <View flex={1} bg="#fff" alignItems="center">
      <HeaderText
        title="Verification Code"
        subTitle="We have send code at +92 333 3456789"
      />
      <KeyPad onEnteredPincode={(code) => console.log(code)} />
    </View>
  );
};

export default VerificationScreen;
