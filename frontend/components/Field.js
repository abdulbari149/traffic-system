import React from "react";
import { FormControl, Stack, Input, WarningOutlineIcon } from "native-base";
import styles from "../styles/Login.styles";
import { useField } from "formik";
import{ Text } from "react-native"
const Field = ({ label, ...props }) => {
  const [form, meta, field] = useField(props);

  return (
    <FormControl>
      <Stack mx="4">
        <FormControl.Label style={styles.inputLabel}>
          <Text style={styles.inputLabelText}>{label}</Text>
        </FormControl.Label>
        <Input
          {...field}
          placeholder={props.placeholder}
          type={props.type}
          backgroundColor="#F2F5FF"
          borderRadius={20}
          paddingLeft={5}
          outline={null}
          marginBottom={5}
          color="#000000"
          maxWidth="300px"
        />
        {meta.touched && meta.error ? (
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Please enter the missed field..
          </FormControl.ErrorMessage>
        ): <></>}
      </Stack>
    </FormControl>
  );
};

export default Field;