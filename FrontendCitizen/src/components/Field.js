import React, { useState } from "react";

import { FormControl, Stack, Input, Text } from "native-base";
import Icon from 'react-native-vector-icons/Feather'

import styles from "../styles/Auth.styles";

import { useField } from "formik";

const Field = ({ label, isLabel = true, ...props }) => {

    const [form, meta, field] = useField(props);
    const [visible, setVisible] = useState(false)

    const passwordInput = props.type === "password" ? { InputRightElement: <Icon name={visible ? "eye-off" : "eye"} color="black" onPress={() => setVisible(!visible)} size={20} style={{ marginRight: 10 }} /> } : {}
    const searchInput = props.type === "search" ? {
        InputLeftElement: <Icon name="search" size={20} color="#9c9c9c" style={{ marginLeft: 17 }} />
    } : {}

    console.log(props.type);

    return (
        <FormControl isRequired={isLabel} isInvalid={meta.touched && meta.error}>
            <Stack my="3" >
                {isLabel && <FormControl.Label style={styles.inputLabel}>
                    <Text style={styles.inputLabelText} color="#000">{label}</Text>
                </FormControl.Label>}
                <Input
                    {...field}
                    placeholder={props?.placeholder ?? ""}
                    type={props.type !== "password" ? props.type : visible ? "text" : "password"}
                    backgroundColor="#F2F2F2"
                    border="none"
                    borderRadius={4}
                    paddingLeft={5}
                    marginLeft={1}
                    placeholderTextColor='#444444'
                    marginRight={1}
                    outline={null}
                    maxWidth="700px"
                    placeholderTextColor="#9c9c9c"
                    fontSize={16}
                    {...passwordInput}
                    {...searchInput}
                    {...props.style}
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