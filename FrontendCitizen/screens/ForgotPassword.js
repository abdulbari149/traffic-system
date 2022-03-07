import React from 'react';
import { Image, Text, View, Flex, VStack, Box, Button as NBButton, ScrollView } from 'native-base'
import { Formik } from 'formik';
import styles from '../styles/Auth.styles';
import Field from '../components/Field';
import Button from '../components/Button';
import Form from '../components/Form';

const ForgotPassword = ({ navigation }) => {

    const formData = {
        names: [
            "Email",
        ],
        placeholders: [
            "Enter your Email Address",
        ],
        types: ["text"],
    }

    return (<ScrollView style={{ backgroundColor: 'white', flex: 1, paddingBottom: 'auto' }}>
        <Box w="100%" style={{ backgroundColor: '#B21B1B', paddingTop: 30 }}>
            <Image style={{ alignSelf: 'center', height: 170, width: 170 }} alt="hooman" size={170} source={require('../assets/images/human.png')} />
            <Text style={{ color: 'white', paddingTop: 40, fontSize: 30, alignSelf: 'center', fontWeight: 'bold' }}>Forgot Password?</Text>
            <Text style={{ color: 'white', paddingVertical: 25, fontSize: 18, textAlign: 'center', marginLeft: 30, marginRight: 30, lineHeight: 27 }}>Please enter your email address to recieve the verification code.</Text>
        </Box>
        <Form
            data={formData}
            _btn={{
                title: "Send",
                style: {
                    width: 150,
                    marginTop: 30,
                    marginBottom: 20
                }
            }}
            handleSubmit={() => navigation.navigate('Verification Screen')}
        />
    </ScrollView>)
}

export default ForgotPassword;