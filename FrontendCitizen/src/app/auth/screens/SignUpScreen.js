import React from 'react'

import { ScrollView, Text, View } from 'native-base';

import Form from '../../../components/Form';

import styles from '../../../styles/Auth.styles';

import { LOGIN_SCREEN, VERIFICATION_SCREEN } from '../../../routes';
import { useRegisterMutation } from '../../../api';
import { Alert } from 'react-native';

const SignUpScreen = ({ navigation }) => {

    const formData = {
        names: [
            'first_name',
            'last_name',
            'CNIC_No',
            'phone_number',
            'email',
            'password',
            'confirm_password',
        ],
        placeholders: [
            'Enter your First Name',
            'Enter your Last Name',
            'Enter CNIC Number',
            'Enter Phone Number i.e. +12 345 678900',
            'Enter your Email Address',
            'Enter your Password',
            'Retype the Password',
        ],
        types: ['text', 'text', 'number', 'number', 'email', 'password', 'password'],
    }

    const [registerUser, result] = useRegisterMutation()

    return (<ScrollView style={{ ...styles.scrollView, paddingLeft: -15 }}>
        <Text style={styles.signUpHeading}>Create New Account</Text>
        <Form
            data={formData}
            handleSubmit={(values, actions) => {
                console.log('Ignition...')
                registerUser({
                    authorized: false,
                    cnic_no: 546546546,
                    email: "saadfarhan347@gmail.com",
                    first_name: "Saad",
                    last_name: "Farhan",
                    password: "flatNumberh34&",
                    phone_number: "3370379346",
                    confirm_password: "flatNumberh34&"
                })
                if (result) return console.log(result)
                else Alert.alert('Error...'),
                    actions.setSubmitting(false)
            }}
            _btn={{
                title: 'Signup',
                style: {
                    width: 150,
                    marginTop: 30
                }
            }}
        />
        <Text style={styles.alreadyHaveAnAccount} onPress={() => navigation.navigate(LOGIN_SCREEN)} maxWidth='200px'>
            Already have account? Login
        </Text>
    </ScrollView>)
}

export default SignUpScreen;