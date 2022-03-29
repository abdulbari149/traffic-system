import React from 'react';

import styles from '../styles/Dashboard.module.css';

import { Box, TableContainer, Table, Paper, TableCell, TableRow, TableHead, Button, TableBody } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

import AddIcon from '@mui/icons-material/Add';

import { Link } from 'react-router-dom'

const Violation = () => {
    return (<Box className={styles.Box}>
        <div className={styles.firstContainer}>
            <h1 className={styles.heading}>Violations</h1>
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
                        <TableCell className={styles.tableHeading}>Type</TableCell>
                        <TableCell className={styles.tableHeading}>Price</TableCell>
                        <TableCell className={styles.tableHeading}>
                            <Button className={styles.violationButton}>
                                <AddIcon className={styles.addIcon} size={20} /> Add new Violation
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    className={styles.tableEntry}
                >
                    <TableCell className={styles.text}>Driving at night without proper lights</TableCell>
                    <TableCell className={styles.text}>Moving</TableCell>
                    <TableCell className={styles.text}>Rs. 2000</TableCell>
                    <TableCell>
                        <Button className={styles.blueButton}>
                            Edit price
                        </Button>
                    </TableCell>
                </TableRow>
            </Table>
        </TableContainer>

    </Box>)
}

export default Violation