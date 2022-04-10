import React from 'react'
import styles from '../styles/Auth.module.css';

import { Box, Paper, Typography } from '@mui/material';

import Form from '../containers/Form';


const Verfication = () => {

    return (<Box className={styles.loginBox}>
        <Paper elevation={3} className={styles.formCard} style={{ paddingBlock: 350 }}>
            <Typography variant="h4" className={styles.heading}>Verify Your Email</Typography>
            <Typography variant="h6" className={styles.subtitle}>We have send code to  your email codewithharsh16@gmail.com</Typography>
            <Form
                variety="verification"
                btn={{
                    navigate: '/dashboard',
                    title: 'Verify',
                    amount: 2
                }}
            />
        </Paper>
    </Box>)
}

export default Verfication