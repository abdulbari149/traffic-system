import React from 'react';

import styles from '../styles/Dashboard.module.css';
import WardenImage from '../images/warden-image.png'

import { TableCell, TableRow, Button } from '@mui/material'

const TableEntry = () => {
    return (
        <TableRow>
            <TableCell className={styles.nameAndImage}>
                <img src={WardenImage} alt="warden" />
                <h4 className={styles.text} style={{ paddingLeft: 15 }}>Abdul Bari</h4>
            </TableCell>
            <TableCell className={styles.text}>
                <h4 className={styles.text}>abdulbari11@gmail.com</h4>
            </TableCell>
            <TableCell align="right">
                <Button className={styles.blueButton}>
                    Approve
                </Button>
            </TableCell>
        </TableRow>
    )
}

export default TableEntry