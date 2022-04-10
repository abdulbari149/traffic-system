import { Typography, IconButton } from '@mui/material';
import React from 'react';

import styles from '../styles/AppBar.module.css'

import AdminImage from '../images/admin-image.png'

import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';


const AppBar = ({ menuOpened, isMenuOpened }) => {
    return (
        <div className={styles.container}>
            <div className={styles.userIdentity}>
                <img src={AdminImage} className={styles.image} alt="admin" />
                <Typography variant="h5" className={styles.heading}>Admin</Typography>
            </div>
            <div className={styles.buttons}>
                <IconButton>
                    <LogoutSharpIcon style={{ color: 'white', fontSize: 38 }} />
                </IconButton>
                <IconButton onClick={() => isMenuOpened(!menuOpened)}>
                    {menuOpened ? <CloseSharpIcon style={{ color: 'white', fontSize: 38 }} /> : <MenuSharpIcon style={{ color: 'white', fontSize: 38 }} />}
                </IconButton>
            </div>
        </div>
    )
}

export default AppBar