import React from "react";
import { FormControl, Stack, Input, Text } from "native-base";
import { useField } from "formik";
import { StyleSheet, TextInput, Pressable, View } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useTogglePasswordVisibility } from "hooks/useTogglePasswordVisibility";

const Field = ({
  label,
  password = false,
  keyboardType = "default",
  maxLength = 25,
  ...props
}) => {
  const [field, meta, helpers] = useField(props);
  const { passwordVisibility, handlePasswordVisibility, rightIcon } = useTogglePasswordVisibility()

  console.log({ ...meta })

  return (
    <FormControl>
      <Stack my="3">
        <FormControl.Label style={styles.inputLabel}>
          <Text style={styles.inputLabelText} color="#000">
            {label}
          </Text>
        </FormControl.Label>
        <View style={[styles.inputField]}>
          <TextInput
            onChangeText={props.onChange}
            onBlur={props.onBlur}
            style={{ flex: 1 }}
            placeholder={props.placeholder}
            keyboardType={keyboardType}
            placeholderTextColor="#4444"
            maxLength={maxLength}
            secureTextEntry={password && passwordVisibility}
            autoComplete="off"
          />
          {password &&
            <Pressable onPress={handlePasswordVisibility}>
              <FeatherIcon name={rightIcon} size={20} />
            </Pressable>
          }
        </View>
        {!!meta.error && meta.touched && (
          <Text pl="2" pt="1" color="#ff101a" fontSize="10">
            {meta?.error}
          </Text>
        )}
      </Stack>
    </FormControl>
  );
};

const styles = StyleSheet.create({
  inputField: {
    borderRadius: 4,
    paddingHorizontal: 16,
    backgroundColor: "#F2F5F2",
    fontSize: 14,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputLabel: {
    marginBottom: 5,
  },
  inputLabelText: {
    fontSize: 16,
    paddingLeft: 10,
    marginBottom: 8,
    textTransform: "capitalize",
  },
  inputText: {
    borderWidth: 0,
    color: "#000",
    backgroundColor: "#f2f5ff",
  },
  readOnlyInput: {
    backgroundColor: "#2f2",
    letterSpacing: 0.5,
  },
});

export default React.memo(Field);
