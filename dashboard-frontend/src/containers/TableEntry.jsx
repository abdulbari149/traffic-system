import React from 'react';

import styles from '../styles/WardenApprovals.module.css';
import WardenImage from '../images/warden-image.png'

import { TableHead, TableCell, TableRow } from '@mui/material'

const TableEntry = () => {
    return (
        <TableHead className={styles.tableEntry}>
            <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell className={styles.nameAndImage}>
                    <img src={WardenImage} alt="warden" />
                    <h4 className={styles.text} style={{ paddingLeft: 15 }}>Abdul Bari</h4>
                </TableCell>
                <TableCell className={styles.text}>
                    <h4 className={styles.text}>abdulbari11@gmail.com</h4>
                </TableCell>
                <TableCell align="right">
                    <button className={styles.approveButton}>
                        Approve
                    </button>
                </TableCell>
            </TableRow>
        </TableHead>
    )
}

export default TableEntry