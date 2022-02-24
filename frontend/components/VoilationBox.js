import React from "react";
import { Text, Box, Checkbox, Flex } from "native-base";
import { StyleSheet } from "react-native";

const VoilationBox = ({ item }) => {
  console.log(item)
  return (
    <Flex style={styles.voilationContainer} direction="row">
      <Text lineHeight="23px" w="85%" color="#0038FF">
        {item.title}
      </Text>
      <Checkbox value={item.id} ml="3" accessibilityLabel="check the voilation" />
    </Flex>
  );
};

const styles = StyleSheet.create({
  voilationContainer: {
    cursor: "pointer",
    backgroundColor: "rgba(0, 56, 255, 0.05)",
    width: "100%",
    padding: 20,
    alignItems: "center",
    textAlign: "center",
    border: "none",
    borderRadius: 10,
    marginTop: 10,
  },
});

export default VoilationBox;
