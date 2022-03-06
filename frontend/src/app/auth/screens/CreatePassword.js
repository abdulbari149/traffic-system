import React from "react";
import { PASSWORD_CHANGED_SCREEN } from "src/routes";
import Password from "../components/Password";

const CreatePassword = ({ navigation, route }) => {
  const handleSubmit = () => {
    navigation.navigate(PASSWORD_CHANGED_SCREEN);
  };
  return (
    <Password
      data={{
        names: ["password", "Confirm Password"],
        placeholders: ["Enter new password", "Retype new password"],
        types: ["password", "password"],
      }}
      text="Your new password must be different from your old password."
      handleSubmit={handleSubmit}
      route={route}
    />
  );
};
export default CreatePassword;
