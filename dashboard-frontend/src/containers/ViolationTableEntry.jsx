import React from 'react'
import styles from '../styles/Dashboard.module.css';

import { TableRow, TableCell, Button } from '@mui/material'
const ViolationTableEntry = ({ matches, editViolation }) => {

    return (<>
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            className={styles.tableRow}
        >
            <TableCell  className={styles.text}>Driving at night without proper lights</TableCell>
            <TableCell sx={{ width: 40, maring: 0, padding: 0 }} className={styles.text} align="center">Moving</TableCell>
            <TableCell className={styles.text} align="center">2000 Rs</TableCell>
            <TableCell align="center">
                <Button className={matches ? styles.blueButton : styles.underlinedButton} onClick={() => editViolation()}>
                    {matches ? 'Edit price' : 'Edit'}
                </Button>
            </TableCell>
        </TableRow>
    </>)
}

export default ViolationTableEntry