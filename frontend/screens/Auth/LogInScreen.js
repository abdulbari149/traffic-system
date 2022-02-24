import React from 'react';
import { ImageBackground } from 'react-native';
import { Flex, Box, VStack, Text, Image } from 'native-base';
import styles from '../../styles/Auth.styles';
import { Formik } from 'formik';
import { Field, TextBtn, Button, Dots } from '../../components';
const LoginScreen = ({ navigation }) => {
  const imagebg = {
    uri: 'https://res.cloudinary.com/saadfarhan/image/upload/v1643909305/loginBg_rcsqrv.png',
  };

  return (
    <Flex flex={1} bgColor="#6497F7" >
      <Box pos="absolute" top="0" w="100%" h="35%">
        <Image
          source={{ url: '../../assets/bubbles/Vector-B.png' }}
          style={{
            flex: 1,
            justifyContent: 'center',
            position: 'absolute',
            top: 0,
            bottom: 0,
          }}
        />
      </Box>

      <Formik
        initialValues={{ wardenId: '', password: '' }}
        onSubmit={(values) => console.log(values)}>
        {({ initialValues, errors, handleChange, handleBlur, values }) => {
          return (
            <VStack flex={1} style={styles.loginContainer} px="12px">
              <Text fontSize="3xl" style={styles.loginHeading}>
                Login
              </Text>
              <Field
                name="wardenId"
                type="text"
                placeholder="Enter warden's Id"
                label="Warden's Id"
              />
              <Field
                name="password"
                type="password"
                placeholder="Enter your password"
                label="Password"
              />
              <Button
                title="Login"
                onPress={() => navigation.navigate('Verification Screen')}
                style={{
                  width: 200,
                  
                }}
              />
              <TextBtn
                style={{ marginTop: '12px' }}
                text="Forgot Password?"
                onPress={() => console.log('Forgot Password')}

              />
              <Dots activeScreen={2} />
            </VStack>
          );
        }}
      </Formik>
    </Flex>
  );
};

export default LoginScreen;
