import React from "react";
import { View } from "native-base";
import KeyPad from "../components/KeyPad"
import { HeaderText, Dots } from "@components";
import { CHALLAN_HOME_SCREEN } from "src/routes";
import { useNavigationState } from "@react-navigation//native"
import { Alert } from "react-native";
const Verification = ({ navigation, route }) => {
  const {next} = route.params
  const state = useNavigationState((state) => state)

  return (
    <View flex={1} bg="#fff" alignItems="center">
      <HeaderText
        title="Verification Code"
        subTitle="We have send code at +92 333 3456789"
      />
      <KeyPad onEnteredPincode={(code) => console.log(code)} handleSubmit={() => Alert.alert("Verification Code is correct")} />
      <Dots activeScreen={3} />
    </View>
  );
};

export default Verification;
