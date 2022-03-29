import React from 'react'
import styles from '../styles/Auth.module.css';

import { Paper, Grid, Typography } from '@mui/material';

import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import Form from '../containers/Form';

import { useNavigate } from 'react-router-dom'


const Login = () => {

    const formData = {
        names: [
            'Email_address',
            'Password'
        ],
        placeholders: [
            'Enter your email address',
            'Password'
        ],
        types: ['text', 'password']
    }

    const navigate = useNavigate()

    return (
        <Grid container spacing={0} className={styles.loginBox}>
            <Grid item>
                <Typography variant="h1" fontSize={40} textAlign="center" className={styles.heading}>LOGIN</Typography>
                <Paper elevation={3} className={styles.formCard}>
                    <AccountCircleRoundedIcon className={styles.icon} />
                    <Form
                        data={formData}
                        handleSubmit={(values) => {
                            console.log(values);
                        }}
                        btn={{
                            navigate: '/dashboard',
                            title: 'Login'
                        }}
                        forgotPassword={() => navigate('forgot-ps')}
                    />
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Login