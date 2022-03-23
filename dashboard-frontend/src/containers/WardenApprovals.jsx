/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';

import styles from '../styles/WardenApprovals.module.css';

import { Box, TableContainer, Table, Paper, TableCell, TableRow, TableHead } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import TableEntry from './TableEntry';

import { Link } from 'react-router-dom'

const WardenApprovals = () => {
    return (<Box className={styles.WardenApprovalsBox}>
        <div className={styles.firstContainer}>
            <h1 className={styles.heading}>Warden's Account Approval</h1>
            <button className={styles.logoutButton}>
                <LogoutIcon className={styles.logoutIcon} />
                <p className={styles.logoutButtonText}>
                    <Link to="/" className={styles.logoutButtonText}>Logout</Link>
                </p>
            </button>
        </div>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead className={styles.tableHead}>
                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell className={styles.tableHeading}>Name</TableCell>
                        <TableCell className={styles.tableHeading}>Email</TableCell>
                        <TableCell />
                    </TableRow>
                </TableHead>
                <TableEntry />
                <TableEntry />
                <TableEntry />
                <TableEntry />
                <TableEntry />
                <TableEntry />
                <TableEntry />
                <TableEntry />
                <TableEntry />
                <TableEntry />
                <TableEntry />
                <TableEntry />
                <TableEntry />
                <TableEntry />
                <TableEntry />
                <TableEntry />
            </Table>
        </TableContainer>

    </Box>)
}

export default WardenApprovals