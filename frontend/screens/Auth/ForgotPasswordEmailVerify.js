import React from "react";
import { Image, Flex, VStack, Box, Text } from "native-base";
import styles from "../../styles/Auth.styles";
import { Form } from "../../components";

const ForgotPasswordEmailVerify = ({ navigation }) => {

    const formData = {
        names: [
            "email",
        ],
        placeholders: [
            "Enter your email address",
        ],
        types: ["text"],
    }

    return (
        <Flex pos="relative" style={{ backgroundColor: '#6497F7' }} flex={1} align="center" overflowX="hidden">
            <Box
                bgColor="#6497F7"
                width="100%"
                alignItems="center"
                justifyContent="center"
                py="60px"
            >
                <Text fontSize="3xl" style={{ color: 'white', fontWeight: 'bold', paddingBottom: 32 }}>Forgot Password</Text>
                <Image
                    source={{
                        uri: "https://res.cloudinary.com/saadfarhan/image/upload/v1645981928/Vector_ofcysn.png",
                    }}
                    alt="Alternative Text"
                    style={{
                        width: 120,
                        height: 130
                    }}
                />
                <Text style={{
                    color: 'white',
                    margin: 35,
                    fontSize: 17,
                    textAlign: 'center'
                }}>Please enter your email address to recieve verification code.</Text>
            </Box>
            <Form
                data={formData}
                containerStyles={{
                    backgroundColor: 'white',
                    width: '190%',
                    height: '50%',
                    borderTopLeftRadius: 450,
                    borderTopRightRadius: 450,
                    paddingLeft: 200,
                    paddingRight: 200,
                    paddingTop: 50,
                    marginTop: -70
                }}
                handleSubmit={() => navigation.navigate('Create New Password')}
                _btn={{
                    title: "Send",
                    style: {
                        width: 250,
                        marginVertical: 15
                    }
                }}
            />
        </Flex>
    );
};

export default ForgotPasswordEmailVerify;
