import React from 'react'
import styles from '../styles/Auth.module.css';

import { Box, Paper, Typography } from '@mui/material';

import Form from '../containers/Form';


const ForgotPassword = () => {

    const formData = {
        names: [
            'Email',
        ],
        placeholders: [
            'Enter your email address',
        ],
        types: ['text']
    }

    return (<Box className={styles.loginBox}>
        <Paper elevation={3} className={styles.formCard} style={{ paddingBlock: 350 }}>
            <img src={require("../images/ghost.png")} className={styles.ghost} alt="ghost" />
            <Typography variant="h4" className={styles.heading}>Forgot Password</Typography>
            <Typography variant="h6" className={styles.subtitle}>Please enter your email address to receive a verification code</Typography>
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

export default ForgotPassword