import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";

const GoBackIcon = ({ theme = "light" }) => {
  const navigation = useNavigation();
  const color = theme === "light" ? "black" : "white";
  const backgroundColor = theme === "light" ? "white" : "black";
  return (
    <View px={1} py={2} bg={backgroundColor} mt={5}>
      <Icon
        name="ios-chevron-back-outline"
        size={22}
        color={color}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default GoBackIcon;
