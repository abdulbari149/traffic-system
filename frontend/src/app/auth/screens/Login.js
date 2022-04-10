import React from "react";
import { Flex, Box, VStack, Text, Image } from "native-base";
import styles from "../styles";
import { Formik } from "formik";
import { Field, TextBtn, Button, Dots } from "@components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import {
  VERIFICATION_SCREEN,
  SIGNUP_SCREEN,
  CHALLAN_HOME_SCREEN,
} from "src/routes";
import {
  navigateBetweenTwoScreens,
  navigateToForgotPassword,
} from "../navigation";

const Login = ({ navigation }) => {
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ backgroundColor: "#fff", flex: 1 }}
    >
      <Flex flex={1} bgColor="#6497F7">
        <Flex pos="absolute" top="0" w="100%" h="35%" alignItems="center" justifyContent="center">
          <Text style={ { fontSize:30, padding: 20, fontWeight: "bold" ,opacity: .7 } }>E-Challan</Text>
        </Flex>

        <Formik
          initialValues={{ wardenId: "", password: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({ initialValues, errors, handleChange, handleBlur, values }) => {
            return (
              <VStack flex={1} style={styles.loginContainer} px="12px">
                <Text fontSize="3xl" style={styles.loginHeading}>
                  Login
                </Text>
                <Field
                 onChange={handleChange("wardenId")}
                 onBlur={handleBlur("wardenId")}
                 isReadOnly={false}
                  name="wardenId"
                  type="text"
                  placeholder="Enter warden's Id"
                  label="Warden's Id"
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
                  onPress={() => navigation.navigate(VERIFICATION_SCREEN, { next: CHALLAN_HOME_SCREEN })}
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
                      onPress={() => navigation.dispatch(navigateBetweenTwoScreens(SIGNUP_SCREEN))}
                      styles={{ fontWeight: "bold", paddingLeft: 5 }}
                    />
                  </Box>
                </Flex>

                <Dots activeScreen={2} />
              </VStack>
            );
          }}
        </Formik>
      </Flex>
    </KeyboardAwareScrollView>
  );
};

export default Login;
