import React, { useRef, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { StyleSheet } from "react-native";
import { View, Text } from "native-base";
const Select = ({
  items,
  placeholder,
  label,
  containerStyles = {},
  value,
  handleChange,
  defaultItem,
  message = "",
  error = "",
}) => {
  return (
    <View style={{ width: "100%", marginBottom: 20 }}>
      <Text style={styles.labelText}>{label}</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={value}
          mode="dropdown"
          style={{
            width: "100%",
          }}
          placeholder={placeholder}
          onValueChange={handleChange}
        >
          {items.length > 0 && (
            <Picker.Item label={defaultItem} enabled={false} />
          )}
          {items.length > 0 ? (
            items.map((item) => (
              <Picker.Item
                label={item.label}
                value={item.value}
                key={item.id}
              />
            ))
          ) : (
            <Picker.Item
              color="#a3a3a3"
              label={message}
              value=""
              enabled={false}
            />
          )}
        </Picker>
      </View>
      {!!error && (
        <Text pl="2" pt="1" color="#ff101a" fontSize="10">
          {error}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  labelText: {
    fontSize: 16,
    paddingLeft: 10,
    textTransform: "capitalize",
    color: "#000",
    marginBottom: 10,
  },
  pickerContainer: {
    borderRadius: 20,
    backgroundColor: "#F2F5FF",
    width: "100%",
    overflow: "hidden",
  },
});
export default React.memo(Select);
