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
            "Enter Phone Number i.e. +12345 678 9000",
            "Enter your Email Address",
            "Enter your Password",
            "Retype the Password",
        ],
        types: ["text", "text", "number", "number", "email", "password", "password"],
    }

    return (<ScrollView style={{ marginHorizontal: 15, backgroundColor: 'white', paddingBottom: 'auto' }}>
        <Text style={{ fontSize: 30, color: 'black', fontWeight: 'bold', paddingTop: 100, paddingLeft: 5 }}>Create New Account</Text>
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