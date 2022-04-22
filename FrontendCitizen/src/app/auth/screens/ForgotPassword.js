import React, { useEffect } from "react";
import { Image, Text, Box, ScrollView, VStack } from "native-base";
import styles from "../styles";
import { LoadingButton, Field } from "components/index";
import { CREATE_NEW_PASSWORD, VERIFICATION_SCREEN } from "routes";
import { useForgetPasswordMutation } from "api";
import { useDispatch } from "react-redux";
import { setPasswordToken } from "../slice";
import { Formik } from "formik";
import { forgotPasswordValidationSchema } from "../validators";
import { errorAlert } from "utils/alert";

const ForgotPassword = ({ navigation }) => {
  const [forgotpassword, { isSuccess, isError, error, data }] =
    useForgetPasswordMutation();

  const dispatch = useDispatch();

  const successParams = (data) => ({
    phone_number: data?.data?.phone_number,
    screen: "forgotpassword",
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    await forgotpassword(values.email);
    setTimeout(() => setSubmitting(false), 2000);
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(setPasswordToken({ data: data?.data?.token }));
      navigation.navigate(VERIFICATION_SCREEN, successParams(data));
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      const FORGOT_PASSWORD_ERROR = {
        title: "Server Error Occured",
        body: error?.data?.message,
      };
      errorAlert(FORGOT_PASSWORD_ERROR);
    }
  }, [isError]);

  return (
    <ScrollView style={{ ...styles.scrollView, flex: 1 }}>
      <Box w="100%" style={styles.forgotPasswordUpperCard}>
        <Image
          style={styles.forgotPasswordImage}
          alt="hooman"
          size={120}
          source={require("assets/images/human.png")}
        />
        <Text style={styles.forgotPasswordHeading}>Forgot Password?</Text>
        <Text style={styles.forgotPasswordSubTitle}>
          Please enter your email address to recieve the verification code.
        </Text>
      </Box>
      <Formik
        initialValues={{ email: "" }}
        onSubmit={handleSubmit}
        validationSchema={forgotPasswordValidationSchema}
      >
        {({
          values,
          handleChange,
          errors,
          handleBlur,
          handleSubmit: submitHandler,
          isSubmitting,
        }) => (
          <VStack px={14}>
            <Field
              value={values.email}
              onChange={handleChange("email")}
              onBlur={handleBlur("email")}
              placeholder="Enter Your Email Address"
              label="Email Address"
              keyboardType="email-address"
              name="email"
              maxLength={25}
            />
            <LoadingButton
              onPress={() => {
                console.log("Form Submitting");
                submitHandler();
              }}
              disabled={isSubmitting}
              text={"Submit"}
            />
          </VStack>
        )}
      </Formik>
    </ScrollView>
  );
};

export default ForgotPassword;
