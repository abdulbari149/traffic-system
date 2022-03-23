import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Login.module.css';

import { Box, Button, Paper } from '@mui/material';

import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';


const Login = () => {
    return (<Box className={styles.loginBox}>
        <h1 className={styles.heading}>LOGIN</h1>
        <Paper elevation={3} className={styles.formCard}>
            <AccountCircleRoundedIcon className={styles.icon} />
            <form className={styles.form}>
                <label for="email-address" className={styles.label}>Email</label>
                <input placeholder="Enter your email address" className={styles.input} />
                <label for="address" className={styles.label}>Password</label>
                <input placeholder="Enter your password" className={styles.input} />
                <p className={styles.underline}>Forgot password?</p>
                <Button className={styles.button}>
                    <Link to="/dashboard" className={styles.buttonText}>Login</Link>
                </Button>
            </form>
        </Paper>
    </Box>)
}

export default Login