import React, { useState } from "react";
import { Box, ScrollView } from "native-base";
import { HeaderText, Form, TextBtn } from "@components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "../styles";
import { useDispatch } from "react-redux";
import {
  IDENTITY_PROOF_SCREEN,
  LOGIN_SCREEN,
  UPLOAD_PROFILE_PIC_SCREEN,
} from "src/routes";
import { navigateBetweenTwoScreens } from "../navigation";
import { useCheckUserExistsMutation } from "src/api";
import * as yup from "yup";
import { addWardenInfo } from "../slice";
import { Alert } from "react-native";
import { signUpFormData } from "../constants/index";
const validationSchema = yup.object().shape({
  first_name: yup
    .string()
    .min(3, "Your first name length should atleast 3 characters")
    .max(256, "first name cannot exceed 256 characters")
    .required("This is a required field")
    .trim(),
  last_name: yup
    .string()
    .min(3, "Your last name length should atleast 3 characters")
    .max(256, "last name cannot exceed 256 characters")
    .required("This is a required field")
    .trim(),
  email: yup
    .string()
    .email("Invalid email formmat")
    .required("This is a required field"),
  password: yup
    .string()
    .required("This is a required field")
    .min(8, "Password must be minimum of 8 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*^?&])[A-Za-z\d@$!^%*#?&]{8,}$/,
      "Password must contain atleast one number, one special character, one uppercase and lowercase letter "
    ),
  confirm_password: yup
    .string()
    .required("This is a required field")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  phone_number: yup
    .string()
    .trim()
    .matches(/^[0-9]+$/, "The phone cannot contain non-numeric characters")
    .length(11, "The phone number should be 11 digits long"),
  service_id: yup
    .string()
    .required("This is a required field")
    .matches(/^[0-9]+$/, "warden id contain non-numeric characters"),
  traffic_sector: yup.string().required(),
  designation: yup.string()
});

const SignUp = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [checkUserExists, { isSuccess, isError, data, error, isLoading }] = useCheckUserExistsMutation();

  const [modalError, setModalError ] = useState()

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true)
    try {
      const { data, error } = await checkUserExists({ email: values.email });
      if (error && !data) {
        throw new Error("Server Error Occured. Try again after a few seconds");
      }

      if (!data.data.userExists) {
        const phone_number = values.phone_number.startsWith("+92")
          ? values.phone_number
          : values.phone_number.replace("0", "+92");
        console.log({ phone_number })
        dispatch(addWardenInfo({ ...values, phone_number }));
        navigation.navigate(UPLOAD_PROFILE_PIC_SCREEN);
        setSubmitting(false)
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      Alert.alert(error.message);
      setSubmitting(false)
    }
  };


  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ backgroundColor: "#fff", flex: 1 }}
    >
      <ScrollView style={styles.signUpContainer}>
        <HeaderText title="Signup" my="20px" />
        <Form
          data={signUpFormData}
          handleSubmit={handleSubmit}
          validationSchema={validationSchema}
          _btn={ {
            title: "Create Account",
            style: {
              width: 250,
            },
          }}
        />
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          w="100%"
          mt="2"
          mb="5"
        >
          Already have an account?
          <TextBtn
            text="Login"
            onPress={() => {
              navigation.dispatch(navigateBetweenTwoScreens(LOGIN_SCREEN));
            }}
            styles={{ fontWeight: "bold", paddingLeft: 5 }}
          />
        </Box>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default SignUp;
