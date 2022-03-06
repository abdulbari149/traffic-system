import React from 'react';
import { Image, Text, View, Box, ScrollView } from 'native-base'
import { Formik } from 'formik';
import styles from '../styles/Auth.styles';
import Field from '../components/Field';
import Button from '../components/Button';

const LoginScreen = ({ navigation }) => {
    return (<ScrollView style={{ backgroundColor: 'white', paddingBottom: 'auto' }}>
        <Box pos="absolute" w="100%" h="35%">
            <View style={{ backgroundColor: '#B21B1B' }}>
                <Text style={{ color: 'white', paddingVertical: 40, fontSize: 30, alignSelf: 'center', fontWeight: 'bold' }}>Logo Here</Text>
                <Image style={{ alignSelf: 'center', marginBottom: -35 }} size={170} source={require('../assets/images/login.png')} />
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
                        <Text style={{ color: '#444444', backgroundColor: 'white', fontWeight: 'bold', alignSelf: 'flex-end' }} maxWidth="200px" onPress={() => navigation.navigate('Forgot Password')}>
                            Forgot password?
                        </Text>

                        <Button
                            title="Login"
                            onPress={() => navigation.navigate('Verification Screen')}
                            style={{
                                width: 150,
                                alignSelf: 'center',
                                color: '#B21B1B',
                                marginVertical: 14
                            }}
                        />
                        <Text style={{ color: '#444444', backgroundColor: 'white', fontWeight: 'bold', alignSelf: 'center' }} onPress={() => navigation.navigate('Signup Screen')} maxWidth="200px">
                            Don't have an account? Signup
                        </Text>
                    </View>
                );
            }}
        </Formik>
    </ScrollView>)
}

export default LoginScreen;