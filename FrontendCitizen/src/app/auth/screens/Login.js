import React, { useEffect } from "react";
import { Pressable, ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import { Image, Text, View, Box, } from "native-base";
import { Formik } from "formik";
import styles from "../styles";
import { VERIFICATION_SCREEN, FORGOT_PASSWORD, SIGNUP_SCREEN, CHALLAN_HOME } from "routes";
import { Field, LoadingButton } from "components";
import { useLoginMutation } from "api";
import { setAccessToken, setLogin, setUser } from "../slice";
import { loginValidationSchema } from "../validators";
import { setAuthToken } from "utils/async-storage";
import { errorAlert } from "utils/alert"
import { ACCESS_TOKEN_ERROR, LOGIN_ERROR } from "../messages";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [login, { isLoading, isError, isSuccess, data, error }] =
    useLoginMutation();

  const successParams = (data) => ({
    phone_number: data?.data?.phone_number,
    screen: "login",
  });

  const handleSubmit = async (values) => {
    let data = {
      cnic_no: values.cnicNo,
      password: values.password,
    };
    await login(data);
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUser({ data: { ...data?.data, token: undefined } }));
      dispatch(setAccessToken({ data: data?.data?.token }));
      navigation.navigate(VERIFICATION_SCREEN, successParams(data));
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      LOGIN_ERROR.body = error?.data?.message ?? ""
      errorAlert(LOGIN_ERROR)
    }
  }, [isError]);

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <Box h="250px" bg="#B21B1B">
        <Text style={styles.logo}>{"C I T I Z E N"}</Text>
        <Image
          style={styles.loginImage}
          size={170}
          source={require("assets/images/login.png")}
          alt="Login images"
        />
      </Box>
      <Formik
        initialValues={{ cnic_no: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={loginValidationSchema}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit: formikSubmit,
          isSubmitting
        }) => {
          return (
            <View styles={styles.loginContainer} px="3">
              <Text fontSize="2xl" style={styles.loginHeading}>
                {"L O G I N"}
              </Text>
              <Field
                onChange={handleChange("cnic_no")}
                onBlur={handleBlur("cnic_no")}
                name="cnic_no"
                value={values.cnic_no}
                keyboardType="numeric"
                maxLength={15}
                placeholder="Enter CNIC Number"
                label="C N I C "
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
              <Text
                style={styles.forgotPasswordButton}
                maxWidth="200px"
                onPress={() => navigation.navigate(FORGOT_PASSWORD)}
              >
                Forgot password?
              </Text>

              <LoadingButton onPress={formikSubmit} disabled={isSubmitting} text="login" />
            </View>
          );
        }}
      </Formik>
      <Box style={styles.bottomButton}>
        Don't have an account?{" "}
        <Pressable onPress={() => navigation.navigate(SIGNUP_SCREEN)}>
          <Text style={{ color: "#B21B1B", fontWeight: "bold" }}>SignUp</Text>
        </Pressable>
      </Box>
    </ScrollView>
  );
};

export default Login;
