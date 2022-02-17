import React from "react";
import { View, Text } from "react-native";
import { Button } from "../../components";

const ChallanForm = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "#fff", height: "100%" }}>
      <Text> ChallanForm </Text>
      <Button onPress={() => navigation.navigate("Voilation")} />
    </View>
  );
};

export default ChallanForm;
