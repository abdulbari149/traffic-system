import React from 'react';
import {Text,View} from 'native-base';
import { KeyPad } from "../../components"
import { StyleSheet } from "react-native"
const VerificationScreen = () => {
  return (
    <View flex={1} >
      <KeyPad onEnteredPincode={(code) => console.log(code)} />
    </View>
  );
};

export default VerificationScreen;
