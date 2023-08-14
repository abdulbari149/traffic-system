import React, { useState, useEffect } from "react";
import { Image, Text, Box, ScrollView, View } from "native-base";
import { Alert } from "react-native";
import { Formik } from "formik";
import styles from "../styles";
import { LOGIN_SCREEN } from "routes";
import { LoadingButton, Field, Modal } from "components/index";
import { useChangePasswordMutation } from "api";
import { createNewPasswordValidationSchema } from "../validators";
import { createNewPasswordInitialValues } from "../constants";
import { NEW_PASSWORD_ERROR, PASSWORD_CHANGED } from "../messages";
import { errorAlert } from "utils/alert";
const CreateNewPassword = ({ navigation }) => {
  
  const [modalVisible, setModalVisible] = useState(false);
  const [changePassword, { data, error, isError, isSuccess, isLoading }] =
    useChangePasswordMutation();  

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    let data = {
      password: values?.new_password,
      confirm_password: values?.confirm_password,
    };
    await changePassword(data);
    setTimeout(() => setSubmitting(false), 1000);
  };
  useEffect(() => {
    if (isSuccess) {
      setModalVisible(true);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      if(error.data.message){
        NEW_PASSWORD_ERROR.body = error.data.message
      }
      errorAlert(NEW_PASSWORD_ERROR);
    }
  }, [isError]);

  return (
    <ScrollView flex={1} style={styles.scrollView}>
      <Box pos="absolute" w="100%" marginTop={10}>
        <Text style={styles.changePasswordHeading}>Create New Password</Text>
        <Image
          alignSelf="center"
          size={200}
          alt="New_password"
          source={require("assets/images/create-password.png")}
        />
        <Text style={styles.changePasswordSubtitle}>
          Your new password must be different from previous password.
        </Text>
      </Box>
      <Formik
        initialValues={createNewPasswordInitialValues}
        validationSchema={createNewPasswordValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, handleBlur, handleChange, values, isSubmitting }) => {
          return (
            <View px="2">
              <Field
                onChange={handleChange("new_password")}
                onBlur={handleBlur("new_password")}
                name="new_password"
                placeholder="Enter your new password"
                value={values.new_password}
                label="New Password"
                password={true}
              />
              <Field
                onChange={handleChange("confirm_password")}
                onBlur={handleBlur("confirm_password")}
                name="confirm_password"
                placeholder="Retype the above password"
                value={values.confirm_password}
                label="Confirm Password"
                password={true}
              />
              <LoadingButton
                text="Submit"
                disabled={isSubmitting}
                onPress={handleSubmit}
              />
            </View>
          );
        }}
      </Formik>
      <Modal
        {...PASSWORD_CHANGED}
        btnText="Okay"
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        image={require("assets/images/password-updated.png")}
        onConfirm={() => {
          setModalVisible(false);
          navigation.navigate(LOGIN_SCREEN);
        }}
      />
    </ScrollView>
  );
};

export default CreateNewPassword;
