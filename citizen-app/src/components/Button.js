import React from "react";

import { Text, StyleSheet, Pressable } from "react-native";

const Button = ({
  variant = "solid",
  onPress,
  title = "Next",
  disabled = false,
  style = {},
  textDecoration,
}) => {
  const outlinedStyles =
    variant === "outlined"
      ? {
          borderWidth: 3,
          borderStyle: "solid",
          borderColor: "white",
          backgroundColor: "#B21B1B",
          color: "white",
        }
      : {};

  const solidStyles =
    variant === "solid"
      ? {
          backgroundColor: "#B21B1B",
        }
      : {};
  return (
    <Pressable
      disabled={disabled}
      style={{
        ...style.btn,
        ...styles.button,
        ...outlinedStyles,
        ...solidStyles,
      }}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text
        style={[
          styles.text,
          style.text,
          {
            textDecorationLine:
              textDecoration === "underline" ? "underline" : "none",
            color: textDecoration === "underline" ? "#444444" : "white",
            fontSize: variant === "ghost" ? 16 : 19,
          },
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export const TextBtn = ({ text, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.textBtn}>
      <Text style={[styles.text, { color: "#0038ff" }]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 4,
    marginTop: 40,
  },
  text: {
    fontSize: 19,
    lineHeight: 25,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  textBtn: {
    width: "50%",
    alignSelf: "center",
    textAlign: "center",
  },
});

export default Button;
