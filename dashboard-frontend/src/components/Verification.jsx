import React from 'react'
import styles from '../styles/Auth.module.css';

import { Box, Paper, Typography } from '@mui/material';

import Form from '../containers/Form';


const Verification = () => {

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
            <Typography variant="h4" className={styles.heading}>Verify our Email</Typography>
            <Typography className={styles.subtitle} variant="h6">We have send code to  your email codewithharsh16@gmail.com</Typography>
            <Form
                data={formData}
                handleSubmit={(values) => {
                    console.log(values);
                }}
                variety='verification'
                btn={{
                    navigate: '/dashboard',
                    title: 'Send',
                    amount: 2
                }}
            />
        </Paper>
    </Box>)
}

export default Verification