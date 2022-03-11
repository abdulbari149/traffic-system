import React from 'react';
import { Image, Text, Box, ScrollView } from 'native-base'
import Form from '../../../components/Form';
import styles from '../../../styles/Auth.styles';
import { VERIFICATION_SCREEN } from '../../../routes';

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

    return (<ScrollView style={{ ...styles.scrollView, flex: 1, }}>
        <Box w="100%" style={styles.forgotPasswordUpperCard}>
            <Image style={styles.forgotPasswordImage} alt="hooman" size={170} source={require('../../assets/images/human.png')} />
            <Text style={styles.forgotPasswordHeading}>Forgot Password?</Text>
            <Text style={styles.forgotPasswordSubTitle}>Please enter your email address to recieve the verification code.</Text>
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
            handleSubmit={() => navigation.navigate(VERIFICATION_SCREEN)}
        />
    </ScrollView>)
}

export default ForgotPassword;