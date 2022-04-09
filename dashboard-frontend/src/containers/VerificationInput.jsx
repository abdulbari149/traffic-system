import React from 'react'
import VI from "react-verification-input";
import styles from '../styles/Auth.module.css'
import { Typography, Button } from '@mui/material'

const VerificationInput = () => {
    return (<>
        <VI
            length={4}
            removeDefaultStyles
            classNames={{
                container: styles.container,
                character: styles.character,
                characterInactive: styles.characterInactive,
                characterSelected: styles.characterSelected,
            }}
        />
        <div className={styles.button}>
            <Typography className={styles.text}>Didn't receive code?&nbsp; </Typography>
            <Button className={styles.buttonText}>Resend</Button>
        </div>
        <div className={styles.verificationButtonGroup}>
            <Button className={styles.verificationGhostButton}>Cancel</Button>
            <Button className={styles.verificationBlueButton}>Verify</Button>
        </div>
    </>)
}

export default VerificationInput