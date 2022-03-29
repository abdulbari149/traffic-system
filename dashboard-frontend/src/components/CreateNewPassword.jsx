import React from 'react'
import styles from '../styles/Auth.module.css';

import { Box, Paper } from '@mui/material';

import Form from '../containers/Form';


const CreateNewPassword = () => {

    const formData = {
        names: [
            'Password',
            'Confirm_Password'
        ],
        placeholders: [
            'Enter your password',
            'Retype your password'
        ],
        types: ['password', 'password']
    }

    return (<Box className={styles.loginBox}>
        <Paper elevation={3} className={styles.formCard} style={{ paddingBlock: 320 }}>
            <h1 className={styles.heading}>Create New Password</h1>
            <p className={styles.subtitle}>Your new password must be different from previous password.</p>
            <Form
                data={formData}
                handleSubmit={(values) => {
                    console.log(values);
                }}
                btn={{
                    navigate: '/dashboard',
                    title: 'Send',
                    amount: 2
                }}
            />
        </Paper>
    </Box>)
}

export default CreateNewPassword