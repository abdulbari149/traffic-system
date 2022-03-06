import React, { useState } from 'react';
import {
    Image,
    Text,
    Box,
    ScrollView,
    // Modal,
} from 'native-base'
import Form from '../components/Form';

const CreateNewPassword = ({ navigation }) => {

    const formData = {
        names: [
            "password",
            "confirm_password",
        ],
        placeholders: [
            "Enter your Password",
            "Retype the Password",
        ],
        types: ["password", "password"],
    }

    // const [modalOpen, isModalOpen] = useState(false);

    return (<ScrollView flex={1} style={{ backgroundColor: 'white', margin: 10, paddingBottom: 'auto' }}>
        <Box pos="absolute" w="100%" marginTop={10}>
            <Text style={{ color: 'black', paddingVertical: 40, fontSize: 25, alignSelf: 'center', fontWeight: 'bold' }}>Create New Password</Text>
            <Image style={{ alignSelf: 'center' }} size={200} source={require('../assets/images/create-password.png')} />
            <Text style={{ color: 'black', paddingVertical: 20, fontSize: 18, textAlign: 'center', marginHorizontal: 15 }}>Your new password must be different from previous password.</Text>
        </Box>
        <Form
            data={formData}
            _btn={{
                title: "Save",
                style: {
                    width: 150,
                    marginTop: 30,
                    marginBottom: 20
                }
            }}
            handleSubmit={(vals) => {
                // isModalOpen(true)
                console.log(vals)
            }}
        />
        {/* <Modal isOpen={modalOpen} onClose={() => isModalOpen(false)} mt={12}>
            <Modal.Content maxWidth="350">
                <Modal.CloseButton />
                <Modal.Header>Updated</Modal.Header>
                <Modal.Body>
                    <Text>Password Changed Succcessfully</Text>
                </Modal.Body>
                <Modal.Footer>
                    <Button.Group space={2}>
                        <Button onPress={() => {
                            isModalOpen(false);
                        }}>
                            Continue
                        </Button>
                    </Button.Group>
                </Modal.Footer>
            </Modal.Content>
        </Modal> */}
    </ScrollView>)
}

const modalStyles = {
    top: {
        marginBottom: "auto",
        marginTop: 0
    },
    bottom: {
        marginBottom: 0,
        marginTop: "auto"
    },
    left: {
        marginLeft: 0,
        marginRight: "auto"
    },
    right: {
        marginLeft: "auto",
        marginRight: 0
    },
    center: {}
};

export default CreateNewPassword;