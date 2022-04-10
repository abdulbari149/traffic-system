import React from "react";
import { Flex, Box, VStack, Text, Image } from "native-base";
import styles from "../styles";
import { Formik } from "formik";
import { Field, TextBtn, Button, Dots } from "@components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as yup from "yup";
import {
  VERIFICATION_SCREEN,
  SIGNUP_SCREEN,
  CHALLAN_HOME_SCREEN,
} from "src/routes";
import {
  navigateBetweenTwoScreens,
  navigateToForgotPassword,
} from "../navigation";
import { useLoginMutation } from "src/api";
import { Alert } from "react-native";
const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email formmat")
    .required("This is a required field"),
  password: yup
    .string()
    .required("This is a required field")
    .min(8, "Password must be minimum of 8 characters long"),
});

const Login = ({ navigation }) => {
  const [login, result] = useLoginMutation();

  const handleSubmit = async (values) => {
    try {
      const { data, error } = await login({ ...values });
      if (data) {
        navigation.navigate(VERIFICATION_SCREEN, {
          next: CHALLAN_HOME_SCREEN,
          phone_number: data.phone_number,
        });
      } else if (error) {
          throw new Error(error?.data.message);
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ backgroundColor: "#fff", flex: 1 }}
    >
      <Flex flex={1} bgColor="#6497F7">
        <Flex
          pos="absolute"
          top="0"
          w="100%"
          h="35%"
          alignItems="center"
          justifyContent="center"
        >
          <Text
            style={{
              fontSize: 30,
              padding: 20,
              fontWeight: "bold",
              opacity: 0.7,
            }}
          >
            E-Challan
          </Text>
        </Flex>

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({
            initialValues,
            errors,
            handleChange,
            handleBlur,
            values,
            handleSubmit: formikSubmit,
          }) => {
            return (
              <VStack flex={1} style={styles.loginContainer} px="12px">
                <Text fontSize="3xl" style={styles.loginHeading}>
                  Login
                </Text>
                <Field
                  onChange={handleChange("email")}
                  onBlur={handleBlur("email")}
                  isReadOnly={false}
                  name="email"
                  type="text"
                  placeholder="Enter email address"
                  label="Email Address"
                />
                <Field
                  onChange={handleChange("password")}
                  onBlur={handleBlur("password")}
                  isReadOnly={false}
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  label="Password"
                />
                <Button
                  title="Login"
                  onPress={formikSubmit}
                  style={{
                    width: 200,
                  }}
                />
                <Flex
                  direction="row"
                  justify="space-between"
                  width="100%"
                  mt="3"
                  align="center"
                >
                  <TextBtn
                    styles={{ fontWeight: "bold" }}
                    text="Forgot Password?"
                    onPress={() => navigateToForgotPassword(navigation)}
                  />
                  <Box flexDirection="row">
                    Don't have an account?
                    <TextBtn
                      text="Signup"
                      onPress={() =>
                        navigation.dispatch(
                          navigateBetweenTwoScreens(SIGNUP_SCREEN)
                        )
                      }
                      styles={{ fontWeight: "bold", paddingLeft: 5 }}
                    />
                  </Box>
                </Flex>
              </VStack>
            );
          }}
        </Formik>
        <Box
          pos="absolute"
          bottm="0"
          w="100%"
          bg={"#fff"}
          flex={1}
          alignItems="center"
        >
          <Dots activeScreen={2} />
        </Box>
      </Flex>
    </KeyboardAwareScrollView>
  );
};

export default Login;
