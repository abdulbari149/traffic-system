import React from "react";
import { Image, Flex, Box, Text } from "native-base";
import { Form } from "../../components";

const CreateNewPassword = ({ navigation }) => {

    const formData = {
        names: [
            "password",
            "Confirm Password"
        ],
        placeholders: [
            "Enter new password",
            "Retype new password",
        ],
        types: ["password", "password"],
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
                <Text fontSize="3xl" style={{ color: 'white', fontWeight: 'bold', paddingBottom: 32 }}>Create New Password</Text>
                <Image
                    source={{
                        uri: "https://res.cloudinary.com/saadfarhan/image/upload/v1646021645/open_lock_mzmubw.png",
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
                }}>Your new password must be different from your old password.</Text>
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
                handleSubmit={() => navigation.navigate('Password Confirmation')}
                _btn={{
                    title: "Save",
                    style: {
                        width: 250,
                        marginVertical: 15
                    }
                }}
            />
        </Flex>
    );
};

export default CreateNewPassword;
