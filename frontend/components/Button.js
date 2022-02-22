import React from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";

const Button = ({ onPress, title="Next" }) => {
  return (
    <Pressable
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

export const TextBtn = ({ text, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.textBtn}>
      <Text style={[styles.text, { color: "#0038ff" }]}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: "#0038ff",
    elevation: 3,
    borderRadius: 1000,
  },
  text: {
    fontSize: 16,
    lineHeight: 25,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  textBtn: { width: "50%", alignSelf: "center", textAlign: "center" },
});

export default Button