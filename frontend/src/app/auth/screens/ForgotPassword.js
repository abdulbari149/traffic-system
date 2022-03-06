import React from "react";
import { CREATE_PASSWORD_SCREEN, VERIFICATION_SCREEN } from "src/routes";
import Password from "../components/Password";

const ForgotPassword = ({ navigation, route }) => {
  const handleSubmit = () => {
    navigation.navigate(VERIFICATION_SCREEN, { next: CREATE_PASSWORD_SCREEN });
  };
  return (
    <Password
      data={{
        names: ["email"],
        placeholders: ["Enter your email address"],
        types: ["text"],
      }}
      text="Please enter your email address to receive the verification code"
      handleSubmit={handleSubmit}
      route={route}
    />
  );
};
export default ForgotPassword