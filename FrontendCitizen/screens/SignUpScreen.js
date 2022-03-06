import React from 'react'
import { ScrollView, Text, View } from 'native-base';
import Form from '../components/Form';

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

    return (<ScrollView style={{ backgroundColor: 'white', paddingBottom: 'auto', paddingLeft: -15 }}>
        <Text style={{ fontSize: 30, color: 'black', fontWeight: 'bold', paddingTop: 30, paddingLeft: 15 }}>Create New Account</Text>
        <Form
            data={formData}
            handleSubmit={() => console.log('Submitted')}
            _btn={{
                title: "Signup",
                style: {
                    width: 150,
                    marginTop: 30
                }
            }}
        />
        <Text style={{ color: '#444444', fontWeight: 'bold', alignSelf: 'center', marginTop: 10, marginBottom: 20, fontSize: 15 }} onPress={() => navigation.navigate('Login Screen')} maxWidth="200px">
            Already have account? Login
        </Text>
    </ScrollView>)
}

export default SignUpScreen;