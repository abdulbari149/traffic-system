import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';

export default function Button(props) {
  const {onPress, title = 'Save'} = props;
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={.8}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: '#0038ff',
    elevation: 3,
    borderRadius: 1000,
  },
  text: {
    fontSize: 16,
    lineHeight: 25,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
