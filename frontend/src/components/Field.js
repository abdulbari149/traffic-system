import React, { useState, useCallback } from "react";
import {
  FormControl,
  Stack,
  Input,
  WarningOutlineIcon,
  Text,
} from "native-base";
import { useField } from "formik";
import { StyleSheet, TextInput, Pressable,   View} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useTogglePasswordVisibility } from "src/hooks/useTogglePasswordVisibility";
const Field = ({ isReadOnly, label, ...props }) => {
  const [{ name, value }, meta, helpers] = useField(props);
  const [visible, setVisible] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const changeIsPressed = useCallback(
    () => setIsPressed((press) => !press),
    [isPressed]
  );
  const { placeholder, type } = props;
  const passwordInput = props.type === "password" && {
    secureTextEntry: passwordVisibility,
  };

  return (
    <FormControl>
      <Stack my="3">
        <FormControl.Label style={styles.inputLabel}>
          <Text style={styles.inputLabelText}>{label}</Text>
        </FormControl.Label>

        <View
          style={[
            styles.inputField,
            { backgroundColor: isReadOnly ? "#f4f4f4" : "#F2F5FF" },
          ]}
        >
          <TextInput
            name={name}
            value={value}
            onChangeText={props.onChange}
            onBlur={props.onBlur}
            {...passwordInput}
            style={{ flex: 1 }}
            placeholder={placeholder ?? ""}
            type={type !== "password" ? type : visible ? "text" : "password"}
            editable={!isReadOnly}
          />
          {type === "password" && (
            <Pressable onPress={handlePasswordVisibility}>
              <MaterialCommunityIcons
                name={rightIcon}
                size={22}
                color="#232323"
              />
            </Pressable>
          )}
        </View>

        {!!meta.error ? (
          <Text pl="2" pt="1" color="#ff101a" fontSize="10">{meta?.error}</Text>
        ) : (
          <></>
        )}
      </Stack>
    </FormControl>
  );
};

const styles = StyleSheet.create({
  inputField: {
    borderRadius: 20,
    paddingHorizontal: 16,
    backgroundColor: "#F2F5FF",
    fontSize: 14,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  inputLabel: {
    marginBottom: 5,
  },
  inputLabelText: {
    fontSize: 16,
    paddingLeft: 10,
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
