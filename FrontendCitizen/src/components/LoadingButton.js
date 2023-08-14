import React from "react";
import { Button, Text } from "native-base";
import { ActivityIndicator, StyleSheet } from "react-native";

const LoadingButton = ({ onPress, disabled, text }) => {
  const buttonStyles = [
    styles.buttonContainer,
    disabled ? styles.disabled : styles.enabled,
  ];
  return (
    <Button disabled={disabled} onPress={onPress} style={buttonStyles}>
      {disabled && (
        <ActivityIndicator style={styles.loading} size={24} color="#fff" />
      )}
      <Text style={styles.text}>{text}</Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 150,
    alignSelf: "center",
    height: 45,
    marginVertical: 18,
  },
  text: {
    fontSize: 18,
    color: "white",
  },
  disabled: {
    backgroundColor: "#400606",
  },
  enabled: {
    backgroundColor: "#B21B1B",
  },
  loading: {
    paddingRight: 20,
    position: "absolute",
    left: -25,
    top: -3,
  },
});

export default LoadingButton;
