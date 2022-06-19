import React, { useState, useEffect } from "react";
import { Button, ScrollView, Text, View } from "native-base";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import styles from "../styles";
import { LOGIN_SCREEN, VERIFICATION_SCREEN } from "routes";
import { useSignupMutation } from "api/index";
import { Field, LoadingButton,  Modal } from "components/index";
import { signupInitialValues } from "../constants";
import transformPhoneNumber from "utils/transformPhoneNumber";
import { REGISTRATION_COMPLETED, SIGNUP_ERROR  } from "../messages";
import { signupValidationSchema } from "../validators";
import { errorAlert } from "utils/alert";

const SignUpScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [signup, { data, error, isSuccess, isError, isLoading }] =
    useSignupMutation();

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    const phoneNo = transformPhoneNumber(values.phone_number)
    let data = {
      ...values,
      phone_number: phoneNo,
    };
    await signup(data);
    setTimeout(() => setSubmitting(false), 1000);
  };

  useEffect(() => {
    if (isSuccess) setModalVisible(true);
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      SIGNUP_ERROR.body = error?.data?.message ?? "";
      errorAlert(SIGNUP_ERROR);
    }
  }, [isError]);

  const toLogin = () => {
    navigation.navigate(LOGIN_SCREEN);
  };

  return (
    <ScrollView style={styles.scrollView}>
      <Text style={styles.signUpHeading}>Create New Account</Text>
      <Formik
        initialValues={signupInitialValues}
        onSubmit={handleSubmit}
        validationSchema={signupValidationSchema}
      >
        {({ values, handleChange, handleBlur, errors, handleSubmit, isSubmitting }) => {
          return (
            <View style={styles.loginContainer}>
              <Field
                value={values.first_name}
                onChange={handleChange("first_name")}
                onBlur={handleBlur("first_name")}
                placeholder="Enter Your First Name"
                label="First Name"
                name="first_name"
                maxLength={12}
              />
              <Field
                value={values.last_name}
                onChange={handleChange("last_name")}
                onBlur={handleBlur("last_name")}
                placeholder="Enter Your Last Name"
                label="Last Name"
                name="last_name"
                maxLength={12}
              />
              <Field
                value={values.cnic_no}
                onChange={handleChange("cnic_no")}
                onBlur={handleBlur("cnic_no")}
                placeholder="Enter Your CNIC number"
                label="C N I C"
                keyboardType="number-pad"
                name="cnic_no"
                maxLength={15}
              />
              <Field
                value={values.phone_number}
                onChange={handleChange("phone_number")}
                onBlur={handleBlur("phone_number")}
                placeholder="Enter Your contact number"
                label="Contact Number"
                keyboardType="phone-pad"
                name="phone_number"
              />
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
              <Field
                onChange={handleChange("password")}
                onBlur={handleBlur("password")}
                name="password"
                placeholder="Enter your password"
                value={values.password}
                label="Password"
                password={true}
              />
              <Field
                onChange={handleChange("confirm_password")}
                onBlur={handleBlur("confirm_password")}
                name="confirm_password"
                placeholder="Enter your Confirm Password"
                value={values.confirm_password}
                label="Confirm Password"
                password={true}
              />
              <LoadingButton
                onPress={handleSubmit}
                disabled={isSubmitting}
                text="Continue"
              />
            </View>
          );
        }}
      </Formik>
      <Text
        style={styles.alreadyHaveAnAccount}
        onPress={toLogin}
        maxWidth="200px"
      >
        Already have account? Login
      </Text>
      <Modal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        {...REGISTRATION_COMPLETED}
        onConfirm={toLogin}
        btnText="Login"
      />
    </ScrollView>
  );
};

export default SignUpScreen;
