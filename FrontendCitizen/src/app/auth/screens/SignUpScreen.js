import React, { useState } from "react";
import { ScrollView, Text, View } from "native-base";
import Form from "../../../components/Form";
import styles from "../../../styles/Auth.styles";
import { LOGIN_SCREEN, VERIFICATION_SCREEN } from "../../../routes";
import { useDispatch } from "react-redux";
import { useSignupMutation } from "../../../api";
import * as yup from "yup";
import Modal from "../../../components/Modal";
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
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*^?&])[A-Za-z\d@$!%*?&]{8,}$/,
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
  cnic_no: yup
    .string()
    .matches(
      /^[0-9]{5}-[0-9]{7}-[0-9]$/,
      "CNIC No must follow the XXXXX-XXXXXXX-X format!"
    )
    .required("This is a required field"),
});
const SignUpScreen = ({ navigation }) => {
  const formData = {
    names: [
      "first_name",
      "last_name",
      "cnic_no",
      "phone_number",
      "email",
      "password",
      "confirm_password",
    ],
    placeholders: [
      "Enter your First Name",
      "Enter your Last Name",
      "Enter CNIC Number like XXXXX-XXXXXXX-X",
      "Enter Phone Number i.e. 0345 678900",
      "Enter your Email Address",
      "Enter your Password",
      "Retype the Password",
    ],
    types: [
      "text",
      "text",
      "number",
      "number",
      "email",
      "password",
      "password",
    ],
  };

  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

  const [signup, result] = useSignupMutation();
  const handleSubmit = async (values) => {
    try {
      const phone_number = values.phone_number.startsWith("+92")
        ? values.phone_number
        : "+92" + values.phone_number.slice(1, values.phone_number.length);
				console.log({ phone_number })
      const { data, error } = await signup({
        ...values,
        phone_number,
      });
      if (data) {
        setModalVisible(true);
      }
      if (error) {
        console.log(error);
        throw new Error(error?.message);
      }
    } catch (error) {
      Alert.alert(error);
    }
  };

  const buttonProps = {
    title: "Signup",
    style: {
      width: 150,
      marginTop: 30,
    },
  };

  return (
    <ScrollView style={{ ...styles.scrollView, paddingLeft: -15 }}>
      <Text style={styles.signUpHeading}>Create New Account</Text>
      <Form
        data={formData}
        handleSubmit={handleSubmit}
        _btn={buttonProps}
        validationSchema={validationSchema}
      />
      <Text
        style={styles.alreadyHaveAnAccount}
        onPress={() => navigation.navigate(LOGIN_SCREEN)}
        maxWidth="200px"
      >
        Already have account? Login
      </Text>
      <Modal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        title="Registration Completed"
        subTitle="You have successfully registered as a citizen. Now you can login and easily access the app"
        handleSubmit={() => navigation.navigate(LOGIN_SCREEN)}
        btnTitle="Login"
      />
    </ScrollView>
  );
};

export default SignUpScreen;
