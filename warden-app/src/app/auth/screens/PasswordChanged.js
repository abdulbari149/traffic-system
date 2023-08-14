import React from "react";

import { Text, View } from "native-base";

import Icon from "react-native-vector-icons/AntDesign";
import { Button } from "src/components";
import { LOGIN_SCREEN } from "src/routes";

const PasswordChanged = ({ navigation }) => {
  return (
    <View style={{ paddingTop: 70 }}>
      <Text
        fontSize="3xl"
        style={{
          color: "black",
          fontWeight: "bold",
          paddingBottom: 32,
          textAlign: "center",
        }}
      >
        Create New Password
      </Text>
      <Icon
        name="checkcircle"
        color="#367CFF"
        size={100}
        style={{ alignSelf: "center" }}
      />
      <Text
        style={{
          fontSize: 18,
          paddingTop: 20,
          textAlign: "center",
          paddingHorizontal: 40,
          lineHeight: 25,
        }}
      >
        Your password has been successfully changed.
      </Text>
      <Button
        title="Login"
        style={{ width: "50%", alignSelf: "center", marginVertical: 30 }}
        onPress={() => navigation.navigate(LOGIN_SCREEN)}
      />
    </View>
  );
};

export default PasswordChanged;
