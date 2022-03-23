/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';

import styles from '../styles/WardenApprovals.module.css';

import { Box } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import TableEntry from './TableEntry';

const WardenApprovals = () => {
    return (<Box className={styles.WardenApprovalsBox}>
        <div className={styles.firstContainer}>
            <h1 className={styles.heading}>Warden's Account Approval</h1>
            <button className={styles.logoutButton}>
                <LogoutIcon className={styles.logoutIcon} />
                <p className={styles.logoutButtonText}>Logout</p>
            </button>
        </div>
        <div className={styles.tableHead}>
            <h1 className={styles.tableHeading}>Name</h1>
            <h1 className={styles.tableHeading}>Email</h1>
            <h1></h1>
            <h1></h1>
        </div>
        <TableEntry />
    </Box>)
}

export default WardenApprovals