import React from "react";
import { Text, StyleSheet, Pressable, TouchableOpacity } from "react-native";

const sizeStyles = (size) => {
  let btnStyles = {},
    textStyles = {};
  switch (size) {
    case "sm":
      btnStyles = {
        paddingVertical: 8,
        height: 35,
      };
      textStyles = {
        fontSize: 13,
        lineHeight: 20,
      };
      break;

    default:
      btnStyles = {
        paddingVertical: 12,
      };
      textStyles = {
        fontSize: 16,
        lineHeight: 25,
      };
      break;
  }
  return [btnStyles, textStyles];
};

const Button = ({
  size = "md",
  variant = "solid",
  onPress,
  title = "Next",
  style = {},
  disabled = false
}) => {
  const [btnSizeStyles, textSizeStyles] = sizeStyles(size);

  const outlinedStyles =
    variant === "outlined"
      ? {
          borderWidth: 2,
          borderStyle: "solid",
          borderColor: "#0038FF",
          backgroundColor: "#E7EBFD",
          color: "#0038FF",
          boxSizing: "border-box",
        }
      : {};

  const solidStyles =
    variant === "solid"
      ? {
          backgroundColor: "#0038FF",
        }
      : {};

    const PressableStyles = [style, styles.button, outlinedStyles, solidStyles, btnSizeStyles]

    if(disabled)  {
      PressableStyles.push({
        backgroundColor: "#0f21ac"
      })
    }
  return (
    <Pressable
      style={PressableStyles}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <Text
        style={[
          styles.text,
          { color: variant === "outlined" ? "#0038FF" : "#fff" },
          textSizeStyles,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export const TextBtn = ({ text, onPress, styles={} }) => {
  return (
    <Pressable onPress={onPress} style={styles.textBtn}>
      <Text style={[styles.text, { color: "#0038ff" }, styles]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,

    elevation: 3,
    borderRadius: 1000,
  },
  text: {
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  textBtn: { width: "50%", alignSelf: "center", textAlign: "center" },
});

export default Button;
