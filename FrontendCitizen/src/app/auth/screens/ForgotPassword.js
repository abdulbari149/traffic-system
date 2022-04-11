import React, { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { Image, Text, Box, ScrollView, VStack, Button, View } from "native-base";
import Form from "../../../components/Form";
import styles from "../../../styles/Auth.styles";
import { CREATE_NEW_PASSWORD, VERIFICATION_SCREEN } from "../../../routes";
import * as yup from "yup";
import { useForgetPasswordMutation } from "../../../api";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { setPasswordToken } from "../slice";
import { Formik } from "formik";
import Field from "../../../components/Field";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email formmat")
    .required("This is a required field"),
});

const ForgotPassword = ({ navigation }) => {
  const [forgotpassword, { isSuccess, isError, error, data }] =
    useForgetPasswordMutation();

  const dispatch = useDispatch();

  const handleSubmit = async (value, { setSubmitting }) => {
    // console.log("Handle Submitting")
    setSubmitting(true);
    await forgotpassword(value.email);
    setTimeout(() => setSubmitting(false), 2000);
  };

  // Success Handler
  useEffect(() => {
    if (isSuccess) {
      dispatch(setPasswordToken({ data: data.authToken }));
      // navigation.navigate(VERIFICATION_SCREEN);
    }
  }, [isSuccess]);

  // Error Handler
  useEffect(() => {
    if (isError) {
      Alert.alert("Error Occured", JSON.stringify(error.data, null, 1));
    }
  }, [isError]);

  return (
    <ScrollView style={{ ...styles.scrollView, flex: 1 }}>
      <Box w="100%" style={styles.forgotPasswordUpperCard}>
        <Image
          style={styles.forgotPasswordImage}
          alt="hooman"
          size={120}
          source={require("../../../assets/images/human.png")}
        />
        <Text style={styles.forgotPasswordHeading}>Forgot Password?</Text>
        <Text style={styles.forgotPasswordSubTitle}>
          Please enter your email address to recieve the verification code.
        </Text>
      </Box>
      <Formik
        initialValues={{ email: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ values, handleChange, handleBlur, handleSubmit:formikSubmit, isSubmitting }) => (
          <VStack px={14}>
            <Field
              name="email"
              value={values.email}
              onChange={handleChange("email")}
              onBlur={handleBlur("email")}
              placeholder="Enter your email address"
              label="Email Address"
              type="text"
            />
            <Button
              disabled={isSubmitting}
              onPress={formikSubmit}
              style={[
                styles.loginButton,
                { color: isSubmitting ? "#400606" : "#B21B1B" },
              ]}
            >
              
                {isSubmitting && (
                  <ActivityIndicator
                    style={{ paddingRight: 20, position: "absolute", left: -25, top: -3 }}
                    size={24}
                    color="#fff"
                  />
                )}
                <Text style={styles.loginButtonText}>Submit</Text>
            </Button>
          </VStack>
        )}
      </Formik>
    </ScrollView>
  );
};

export default ForgotPassword;
