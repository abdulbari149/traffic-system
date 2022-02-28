<<<<<<< Updated upstream
=======
import React, { useState } from "react";
import { FormControl, Stack, Input, WarningOutlineIcon, Text } from "native-base";
import styles from "../styles/Auth.styles";
import { useField } from "formik";

import Icon from 'react-native-vector-icons/Feather'

const Field = ({ label, ...props }) => {
  const [form, meta, field] = useField(props);
  const [visible, setVisible] = useState(false)

  const passwordInput = props.type === "password" ? { InputRightElement: <Icon name={visible ? "eye-off" : "eye"} size={24} style={{ marginRight: 10, color: '#001048' }} onPress={() => setVisible(!visible)} /> } : {}

  return (
    <FormControl>
      <Stack my="3" >
        <FormControl.Label style={styles.inputLabel}>
          <Text style={styles.inputLabelText} color="#000">{label}</Text>
        </FormControl.Label>
        <Input
          {...field}
          placeholder={props?.placeholder ?? ""}
          type={props.type !== "password" ? props.type : visible ? "text" : "password"}
          backgroundColor="#F2F5FF"
          border="none"
          borderRadius={20}
          paddingLeft={5}
          outline={null}
          color="#000000"
          maxWidth="700px"
          {...passwordInput}
        />
        {meta.touched && meta.error ? (
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Please enter the missed field..
          </FormControl.ErrorMessage>
        ) : <></>}
      </Stack>
    </FormControl>
  );
};

export default Field;
>>>>>>> Stashed changes
