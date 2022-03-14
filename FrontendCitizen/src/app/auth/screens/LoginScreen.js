import React from 'react';

import { Image, Text, View, Box, ScrollView, Button } from 'native-base'

import { Formik } from 'formik';

import styles from '../../../styles/Auth.styles';

import Field from '../../../components/Field';

import * as routes from '../../../routes';

const LoginScreen = ({ navigation }) => {
    return (<ScrollView style={styles.scrollView}>
        <Box pos="absolute" w="100%" h="35%">
            <View style={styles.loginScreenUpperCard}>
                <Text style={styles.logo}>Logo Here</Text>
                <Image style={styles.loginImage} size={170} source={require('../../../assets/images/login.png')} />
            </View>
        </Box>
        <Formik
            initialValues={{ cnicNumber: '', password: '' }}
            onSubmit={(values) => console.log(values)}
        >
            {({ initialValues, errors, handleChange }) => {
                return (
                    <View flex={1} styles={styles.loginContainer} px="12px">
                        <Text fontSize="3xl" style={styles.loginHeading}>
                            Login
                        </Text>
                        <Field
                            name="cnicNo"
                            type="text"
                            placeholder="Enter CNIC Number"
                            label="CNIC No"
                        />
                        <Field
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            label="Password"
                        />
                        <Text style={styles.forgotPasswordButton} maxWidth="200px" onPress={() => navigation.navigate('Forgot Password')}>
                            Forgot password?
                        </Text>

                        <Button
                            onPress={() => {
                                navigation.navigate(routes.CHALLAN_HOME)
                            }}
                            style={styles.loginButton}
                        >
                            <Text style={styles.loginButtonText}>
                                Login
                            </Text>
                        </Button>
                        <Text style={styles.notHaveAnAccountBtn} onPress={() => navigation.navigate('Signup Screen')} maxWidth="200px">
                            Don't have an account? Signup
                        </Text>
                    </View>
                );
            }}
        </Formik>
    </ScrollView>)
}

export default LoginScreen;