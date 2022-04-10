import React from "react";
import { Box, ScrollView } from "native-base";
import { HeaderText, Form, TextBtn } from "@components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "../styles";

import { IDENTITY_PROOF_SCREEN, LOGIN_SCREEN, UPLOAD_PROFILE_PIC_SCREEN } from "src/routes";
import { navigateBetweenTwoScreens } from "../navigation";

const SignUp = ({ navigation, route }) => {


  const handleSignUpRouting = () => {
    const parent = navigation.getParent()
    console.log({ parent })
  }

  handleSignUpRouting()
  const formData = {
    names: [
      "first_name",
      "last_name",
      "email",
      "phone_number",
      "password",
      "confirm_password",
    ],
    placeholders: [
      "Enter your first name",
      "Enter your last name",
      "Enter your email",
      "Enter your phone number e.g 03122304798",
      "Enter your password",
      "Retype the Password",
    ],
    types: ["text", "text", "email", "numeric", "password", "password"],
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ backgroundColor: "#fff", flex: 1 }}
    >
      <ScrollView style={styles.signUpContainer}>
        <HeaderText title="Signup" my="20px" />
        <Form
          data={formData}
          handleSubmit={() => navigation.navigate(IDENTITY_PROOF_SCREEN)}
          _btn={{
            title: "Create Account",
            style: {
              width: 250,
            },
          }}
        />
        <Box flexDirection="row" alignItems="center" justifyContent="center" w="100%" mt="2" mb="5"> 
          Already have an account?
          <TextBtn
            text="Login"
            onPress={() => {
              navigation.dispatch(navigateBetweenTwoScreens(LOGIN_SCREEN))
            }}
            styles={{ fontWeight: "bold", paddingLeft: 5 }}
          />
        </Box>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default SignUp;
