import { Box } from '@mui/material'
import React, { useState } from 'react';

import AdminImage from '../images/admin-image.png'
import styles from '../styles/Sidebar.module.css';
import SidebarButton from './SidebarButton';

import PersonIcon from '@mui/icons-material/Person';
import LinkOffIcon from '@mui/icons-material/LinkOff';

const Sidebar = () => {

    const [nav, setNav] = useState(0)

    const buttons = [
        {
            title: 'Approval',
            icon: <PersonIcon color='white' className={styles.buttonIcon} />
        },
        {
            title: 'Violation',
            icon: <LinkOffIcon color='white' className={styles.buttonIcon} />
        }]

    return (<Box className={styles.sidebar}>
        <img src={AdminImage} className={styles.image} alt="admin" />
        <h1 className={styles.heading}>Admin</h1>
        {buttons.map((button, idx) => (
            <SidebarButton
                title={button.title}
                icon={button.icon}
                nav={nav}
                setNav={setNav}
            />
        ))}

    </Box>)
}

export default Sidebar