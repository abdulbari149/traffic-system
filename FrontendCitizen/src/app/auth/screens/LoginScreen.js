import React from "react";

import { Image, Text, View, Box, ScrollView, Button } from "native-base";

import { Formik } from "formik";

import styles from "../../../styles/Auth.styles";

import Field from "../../../components/Field";

import * as routes from "../../../routes";
import { useLoginMutation } from "../../../api";
import * as yup from "yup";
import { Alert } from "react-native";

const validationSchema = yup.object({
  cnicNo: yup
    .string()
    .matches(
      /^[0-9]{5}-[0-9]{7}-[0-9]$/,
      "CNIC No must follow the XXXXX-XXXXXXX-X format!"
    )
    .required("This is a required field"),
  password: yup
    .string()
    .required("This is a required field")
    .min(8, "Password must be minimum of 8 characters long"),
});
const LoginScreen = ({ navigation }) => {
  const [login, { isLoading, isFetching }] = useLoginMutation();

  const handleSubmit = async (values) => {
    console.log({ values });
    try {
      const { data, error } = await login({ ...values });
      if (data) {
        navigation.navigate(routes.VERIFICATION_SCREEN, {
          phone_number: data.data.phone_number,
        });
      } else if (error) {
        throw new Error(error?.data.message);
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <ScrollView style={styles.scrollView}>
      <Box pos="absolute" w="100%" h="35%">
        <View style={styles.loginScreenUpperCard}>
          <Text style={styles.logo}>Logo Here</Text>
          <Image
            style={styles.loginImage}
            size={170}
            source={require("../../../assets/images/login.png")}
          />
        </View>
      </Box>
      <Formik
        initialValues={{ cnicNo: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({
          initialValues,
          errors,
          handleChange,
          handleBlur,
          handleSubmit: formikSubmit,
        }) => {
          return (
            <View flex={1} styles={styles.loginContainer} px="12px">
              <Text fontSize="3xl" style={styles.loginHeading}>
                Login
              </Text>
              <Field
                onChange={handleChange("cnicNo")}
                onBlur={handleBlur("cnicNo")}
                name="cnicNo"
                type="text"
                placeholder="Enter CNIC Number"
                label="CNIC No"
                error={errors.cnicNumber}
              />
              <Field
                onChange={handleChange("password")}
                onBlur={handleBlur("password")}
                name="password"
                type="password"
                placeholder="Enter your password"
                label="Password"
                error={errors.password}
              />
              <Text
                style={styles.forgotPasswordButton}
                maxWidth="200px"
                onPress={() => navigation.navigate("Forgot Password")}
              >
                Forgot password?
              </Text>

              <Button onPress={formikSubmit} style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Login</Text>
              </Button>
              <Text
                style={styles.notHaveAnAccountBtn}
                onPress={() => navigation.navigate("Signup Screen")}
                maxWidth="200px"
              >
                Don't have an account? Signup
              </Text>
            </View>
          );
        }}
      </Formik>
    </ScrollView>
  );
};

export default LoginScreen;
