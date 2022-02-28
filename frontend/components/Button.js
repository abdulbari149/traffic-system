import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';

<<<<<<< Updated upstream
export default function Button(props) {
  const {onPress, title = 'Save'} = props;
=======
const Button = ({ variant = "solid", onPress, title = "Next", style = {} }) => {
  const outlinedStyles =
    variant === "outlined"
      ? {
        borderWidth: 3,
        borderStyle: "solid",
        borderColor: "#0038FF",
        backgroundColor: "#E7EBFD",
        color: "#0038FF",
      }
      : {};

  const solidStyles =
    variant === "solid"
      ? {
        backgroundColor: "#0038FF",
      }
      : {};
  return (
    <Pressable
      style={{
        ...style,
        ...styles.button,
        ...outlinedStyles,
        ...solidStyles,
      }}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, { color: variant === "outlined" ? "#0038FF" : "#fff" }]}>{title}</Text>
    </Pressable>
  );
};

export const TextBtn = ({ text, onPress }) => {
>>>>>>> Stashed changes
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={.8}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    zIndex: 1,
<<<<<<< Updated upstream
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: '#0038ff',
=======
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 28,

>>>>>>> Stashed changes
    elevation: 3,
    borderRadius: 1000,
  },
  text: {
    fontSize: 16,
    lineHeight: 25,
<<<<<<< Updated upstream
    fontWeight: 'bold',
=======
>>>>>>> Stashed changes
    letterSpacing: 0.25,
    color: 'white',
  },
});
