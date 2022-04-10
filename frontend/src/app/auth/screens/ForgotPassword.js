import React from "react";
import { CREATE_PASSWORD_SCREEN, VERIFICATION_SCREEN } from "src/routes";
import Password from "../components/Password";
import * as yup from "yup";
import { useForgetPasswordMutation } from "src/api";
import { Alert } from "react-native";
const validationSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email formmat")
    .required("This is a required field"),
});

const ForgotPassword = ({ navigation, route }) => {
  const [forgotpassword] = useForgetPasswordMutation();
  const handleSubmit = async (value) => {
    try {
      const { data, error } = await forgotpassword({ email: value.email });

      if (data) {
        navigation.navigate(VERIFICATION_SCREEN, {
          next: CREATE_PASSWORD_SCREEN,
          phone_number: data.data.phone_number,
        });
      } else if (error) {
        throw new Error(error?.message);
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <Password
      data={{
        names: ["email"],
        placeholders: ["Enter your email address"],
        types: ["text"],
      }}
      validationSchema={validationSchema}
      text="Please enter your email address to receive the verification code"
      handleSubmit={handleSubmit}
      route={route}
    />
  );
};
export default ForgotPassword;
