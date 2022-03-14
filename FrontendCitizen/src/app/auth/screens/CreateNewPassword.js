import React, { useState } from 'react';

import {
    Image,
    Text,
    Box,
    ScrollView,
} from 'native-base';

import Form from '../../../components/Form';
import Modal from '../../../components/Modal';

import styles from '../../../styles/Auth.styles'

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

    const [modalVisible, setModalVisible] = useState(false);

    return (<ScrollView flex={1} style={styles.scrollView}>
        <Box pos="absolute" w="100%" marginTop={10}>
            <Text style={styles.changePasswordHeading}>Create New Password</Text>
            <Image alignSelf='center' size={200} source={require('../../../assets/images/create-password.png')} />
            <Text style={styles.changePasswordSubtitle}>Your new password must be different from previous password.</Text>
        </Box>
        <Form
            data={formData}
            _btn={{
                title: "Save",
                style: {
                    width: 150,
                    marginTop: 16,
                    marginBottom: 16
                }
            }}
            handleSubmit={(vals) => {
                setModalVisible(true);
            }}
        />
        <Modal
            title="Updated"
            subTitle="Your new password has been updated successfully."
            btnTitle="Continue"
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            image={require('../../../assets/images/password-updated.png')}
            handleSubmit={() => {
                setModalVisible(false)
            }}
        />
    </ScrollView>)
}

export default CreateNewPassword;