import { Typography } from '@mui/material'
import React from 'react'
import Form from '../containers/Form'

import styles from '../styles/SuperAdminSignUp.module.css'

const SuperAdminSignUp = () => {

    const formData = {
        names: [
            'Username',
            'Email',
            'Password',
            'Confirm_Password'
        ],
        placeholders: [
            'Enter your username',
            'Enter your email address',
            'Enter your password',
            'Retype your password'
        ],
        types: ['text', 'text', 'password', 'password']
    }

    return (<div className={styles.Box}>
        <Typography variant="h5" className={styles.heading}>Super Admin Registration</Typography>
        <Form
            data={formData}
            handleSubmit={(values) => {
                console.log(values);
            }}
            btn={{
                navigate: '/dashboard',
                title: 'Signup'
            }}
        />
    </div>)
}

export default SuperAdminSignUp