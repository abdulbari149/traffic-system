/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';

import styles from '../styles/Dashboard.module.css';

import { Box, TableContainer, Table, Paper, TableCell, TableRow, TableHead, Typography, Button, tableCellClasses, TableBody } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

import { Link } from 'react-router-dom'
import DeclinedWardenTableEntry from './DeclinedWardenTableEntry';

const DeclinedWardens = ({ matches, handleIdChange }) => {

    return (<Box className={styles.Box}>
        <div className={styles.firstContainer}>
            <Typography variant={matches ? 'h4' : 'h5'} className={styles.heading}>Warden's Account Declined</Typography>
            {matches && <Button className={styles.logoutButton} startIcon={<LogoutIcon className={styles.logoutIcon} />}>
                <Typography className={styles.logoutButtonText}>
                    <Link to="/" className={styles.logoutButtonText}>Logout</Link>
                </Typography>
            </Button>}
        </div>
        <TableContainer component={Paper} style={{ backgroundColor: '#131313' }}>
            <Table sx={{
                [`& .${tableCellClasses.root}`]: {
                    borderBottom: "none",
                    marginRight: matches ? 'auto' : 0.4,
                    marginLeft: matches ? 'auto' : 0.4,
                    paddingLeft: matches ? 'auto' : 0.4,
                    paddingRight: matches ? 'auto' : 0.4,
                    maxWidth: 650
                },
            }} aria-label="simple table">
                <TableHead className={styles.tableHead}>
                    <TableRow style={{ border: 'none' }}>
                        <TableCell className={styles.tableHeading} align="left" style={{ fontSize: 22 }}>Name</TableCell>
                        {matches && <TableCell className={styles.tableHeading} style={{ fontSize: 22 }}>Email</TableCell>}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <DeclinedWardenTableEntry handleIdChange={handleIdChange} />
                </TableBody>
            </Table>
        </TableContainer>

    </Box >)
}

export default DeclinedWardens