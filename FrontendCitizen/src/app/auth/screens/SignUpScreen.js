import React from 'react'
import { ScrollView, Text, View } from 'native-base';
import Form from '../../components/Form';
import styles from '../../styles/Auth.styles';
import { LOGIN_SCREEN, VERIFICATION_SCREEN } from '../../routes';

const SignUpScreen = ({ navigation }) => {

    const formData = {
        names: [
            "first_name",
            "last_name",
            "CNIC No",
            "phone_number",
            "email",
            "password",
            "confirm_password",
        ],
        placeholders: [
            "Enter your First Name",
            "Enter your Last Name",
            "Enter CNIC Number",
            "Enter Phone Number i.e. +12 345 678900",
            "Enter your Email Address",
            "Enter your Password",
            "Retype the Password",
        ],
        types: ["text", "text", "number", "number", "email", "password", "password"],
    }

    return (<ScrollView style={{ ...styles.scrollView, paddingLeft: -15 }}>
        <Text style={styles.signUpHeading}>Create New Account</Text>
        <Form
            data={formData}
            handleSubmit={() => navigation.navigate(VERIFICATION_SCREEN)}
            _btn={{
                title: "Signup",
                style: {
                    width: 150,
                    marginTop: 30
                }
            }}
        />
        <Text style={styles.alreadyHaveAnAccount} onPress={() => navigation.navigate(LOGIN_SCREEN)} maxWidth="200px">
            Already have account? Login
        </Text>
    </ScrollView>)
}

export default SignUpScreen;