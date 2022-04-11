import React, { useEffect } from "react";
import { Image, Text, View, Box, ScrollView, Button } from "native-base";
import { Pressable } from "react-native";
import { Formik } from "formik";
import styles from "../../../styles/Auth.styles";
import Field from "../../../components/Field";
import * as routes from "../../../routes";
import { useLoginMutation } from "../../../api";
import * as yup from "yup";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../slice";

const validationSchema = yup.object({
  cnic_no: yup
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

  const dispatch = useDispatch();

  const [login, { isLoading, isError, isSuccess, data, error }] = useLoginMutation();

  const handleSubmit = async (values) => {
    let data = {
      cnic_no: values.cnicNo,
      password: values.password,
    };
    await login(data);
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUser({ data: data.data }));
      navigation.navigate(routes.VERIFICATION_SCREEN);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      Alert.alert("Login Error", JSON.stringify(error));
    }
  }, [isError]);

  return (
    <ScrollView style={styles.scrollView}>
      <Box pos="absolute" w="100%" h="35%">
        <View style={styles.loginScreenUpperCard}>
          <Text style={styles.logo}>{"C I T I Z E N"}</Text>
          <Image
            style={styles.loginImage}
            size={170}
            source={require("../../../assets/images/login.png")}
            alt="Login images"
          />
        </View>
      </Box>
      <Formik
        initialValues={{ cnic_no: "", password: "" }}
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
              <Text fontSize="2xl" style={styles.loginHeading}>
                {"L O G I N"}
              </Text>
              <Field
                onChange={handleChange("cnic_no")}
                onBlur={handleBlur("cnic_no")}
                name="cnic_no"
                type="text"
                placeholder="Enter CNIC Number"
                label="C N I C "
                error={errors.cnic_no}
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
                onPress={() => navigation.navigate(routes.FORGOT_PASSWORD)}
              >
                Forgot password?
              </Text>

              <Button onPress={formikSubmit} style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Login</Text>
              </Button>
              <Box style={styles.notHaveAnAccountBtn} maxWidth="200px">
                Don't have an account?{" "}
                <Pressable
                  onPress={() => navigation.navigate(routes.SIGNUP_SCREEN)}
                >
                  <Text style={{ color: "#B21B1B", fontWeight: "bold" }}>
                    SignUp
                  </Text>
                </Pressable>
              </Box>
            </View>
          );
        }}
      </Formik>
    </ScrollView>
  );
};

export default LoginScreen;
