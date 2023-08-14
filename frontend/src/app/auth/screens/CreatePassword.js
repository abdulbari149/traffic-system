import React, { useState } from "react";
import { LOGIN_SCREEN, PASSWORD_CHANGED_SCREEN } from "src/routes";
import Password from "../components/Password";
import * as yup from "yup";
import { useChangePasswordMutation } from "src/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Modal, Button } from "src/components";
import { navigateBetweenTwoScreens } from "../navigation";
import { Alert } from "react-native";
import { getAuthToken, setAuthToken } from "src/utils/async-storage";
import { createPasswordFormData } from "../constants";
const validationSchema = yup.object({
  new_password: yup
    .string()
    .required("This is a required field")
    .min(8, "Password must be minimum of 8 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*^?&])[A-Za-z\d@$!%*^#?&]{8,}$/,
      "Password must contain atleast one number, one special character, one uppercase and lowercase letter "
    ),
  confirm_password: yup
    .string()
    .required("This is a required field")
    .oneOf([yup.ref("new_password"), null], "Passwords must match"),
});

const CreatePassword = ({ navigation, route }) => {
  const [changePassword, result] = useChangePasswordMutation();
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = async (values) => {
    try {
      const authToken = await getAuthToken("password");
      console.log({ authToken });
      const { data, error } = await changePassword({
        ...values,
        headers: {
          authToken,
        },
      });
      if (data) {
        console.log("Submitted");
        setAuthToken("password");
        setModalVisible(true);
      }
      if (error) {
        Alert.alert(error?.message);
      }
    } catch (error) {}
  };
  return (
    <Password
      data={createPasswordFormData}
      text="Your new password must be different from your old password."
      handleSubmit={handleSubmit}
      route={route}
      validationSchema={validationSchema}
      renderModal={() => (
        <Modal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          image={{
            source: require("src/cdn/uploaded_successfully.png"),
            alt: "Uploaded Success",
          }}
          title="Confirmation"
          subTitle="Password has been changed"
          onConfirm={() => {
            navigation.navigate(LOGIN_SCREEN);
          }}
          renderButton={(onConfirm) => (
            <Button onPress={onConfirm} title="Login" />
          )}
        />
      )}
    />
  );
};
export default CreatePassword;
