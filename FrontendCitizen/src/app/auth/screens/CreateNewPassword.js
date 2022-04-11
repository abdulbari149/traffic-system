import React, { useState } from "react";

import { Image, Text, Box, ScrollView } from "native-base";

import Form from "../../../components/Form";
import Modal from "../../../components/Modal";
import { LOGIN_SCREEN } from "../../../routes"
import styles from "../../../styles/Auth.styles";
import { getAuthToken, setAuthToken } from "../../../utils/async-storage";
import { useChangePasswordMutation } from "../../../api"
import * as yup from "yup"
const validationSchema = yup.object({
  new_password: yup
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
    .oneOf([yup.ref("new_password"), null], "Passwords must match"),
});

const CreateNewPassword = ({ navigation }) => {

  const { passwordToken } = useSelector(state => state.auth)
  const [changePassword, result] = useChangePasswordMutation();
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = async (values) => {
    try {
      const authToken = await getAuthToken("password");
      console.log({ authToken })
      const { data, error } = await changePassword({
        ...values,
        headers: {
          authToken,
        },
      });
      if (data) {
        await setAuthToken("password");
        setModalVisible(true);
      }
      if (error) {
        Alert.alert(error?.message);
      }
    } catch (error) {}
  };
  const formData = {
    names: ["new_password", "confirm_password"],
    placeholders: ["Enter your Password", "Retype the Password"],
    types: ["password", "password"],
  };

  return (
    <ScrollView flex={1} style={styles.scrollView}>
      <Box pos="absolute" w="100%" marginTop={10}>
        <Text style={styles.changePasswordHeading}>Create New Password</Text>
        <Image
          alignSelf="center"
          size={200}
          source={require("../../../assets/images/create-password.png")}
        />
        <Text style={styles.changePasswordSubtitle}>
          Your new password must be different from previous password.
        </Text>
      </Box>
      <Form
        data={formData}
        _btn={{
          title: "Submit",
          style: {
            width: 150,
            marginTop: 16,
            marginBottom: 16,
          },
        }}
        handleSubmit={handleSubmit}
        validationSchema={validationSchema}
      />
      <Modal
        title="Updated"
        subTitle="Your new password has been updated successfully."
        btnTitle="Login"
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        image={require("../../../assets/images/password-updated.png")}
        handleSubmit={() => {
          setModalVisible(false);
          navigation.navigate(LOGIN_SCREEN)
        }}
      />
    </ScrollView>
  );
};

export default CreateNewPassword;
