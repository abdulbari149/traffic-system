import React, { useState } from 'react';

import styles from '../styles/Dashboard.module.css';

import { Box, TableContainer, Table, Paper, TableCell, TableRow, TableHead, Button, TableBody, tableCellClasses, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

import AddIcon from '@mui/icons-material/Add';

import { Link } from 'react-router-dom'

import Modal from '../containers/Modal'
import ViolationTableEntry from '../containers/ViolationTableEntry';

import AddSharpIcon from '@mui/icons-material/AddSharp'

import Fab from '../containers/Fab'

const Violation = ({ matches }) => {

    const [open, isOpen] = useState(false);
    const [formData, setFormData] = useState({});
    const [title, setTitle] = useState('');

    const editViolation = () => {
        setTitle('Edit Violation')
        setFormData({
            names: [
                'Price'
            ],
            placeholders: [
                '2000 Rs'
            ],
            types: ['text']
        })
        isOpen(true)
    }

    const createViolation = () => {
        setTitle('Add New Violation')
        setFormData({
            names: [
                'Violation',
                'Price'
            ],
            placeholders: [
                'Enter your new violation here',
                'Enter your price here'
            ],
            types: ['Text', 'number']
        })
        isOpen(true)
    }

    const fabs = [
        {
            color: '#0729A2',
            sx: {
                position: 'absolute',
                bottom: 16,
                right: 16,
            },
            icon: <AddSharpIcon style={{ color: 'white', fontSize: 44 }} />,
            label: 'Add',
        }
    ];


    return (<Box className={styles.Box}>
        <div className={styles.firstContainer}>
            <Typography variant={matches ? 'h4' : 'h5'} className={styles.heading}>Violation</Typography>
            {matches && <Button className={styles.logoutButton} startIcon={<LogoutIcon className={styles.logoutIcon} />}>
                <Link to="/" className={styles.logoutButtonText}>Logout</Link>
            </Button>}
        </div>
        <TableContainer component={Paper} style={{ backgroundColor: '#131313' }}>
            <Table sx={{
                [`& .${tableCellClasses.root}`]: {
                    border: "none",
                    marginRight: matches ? 'auto' : 0.4,
                    marginLeft: matches ? 'auto' : 0.4,
                    paddingLeft: matches ? 'auto' : 0.4,
                    paddingRight: matches ? 'auto' : 0.4,
                    width: '25%'
                },
                maxWidth: 1350
            }}>
                <TableHead className={styles.tableHead}>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell className={styles.tableHeading}>Name</TableCell>
                        <TableCell className={styles.tableHeading} align="center">Type</TableCell>
                        <TableCell className={styles.tableHeading} align="center">Price</TableCell>
                        {matches ? <TableCell className={styles.tableHeading} align="center">
                            <Button className={styles.violationButton} onClick={() => createViolation()}>
                                <AddIcon className={styles.addIcon} size={20} /> Add new Violation
                            </Button>
                        </TableCell> : <TableCell />}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <ViolationTableEntry matches={matches} editViolation={editViolation} />
                    <ViolationTableEntry matches={matches} editViolation={editViolation} />
                    <ViolationTableEntry matches={matches} editViolation={editViolation} />
                    <ViolationTableEntry matches={matches} editViolation={editViolation} />
                    <ViolationTableEntry matches={matches} editViolation={editViolation} />
                    <ViolationTableEntry matches={matches} editViolation={editViolation} />
                    <ViolationTableEntry matches={matches} editViolation={editViolation} />
                    <ViolationTableEntry matches={matches} editViolation={editViolation} />
                    <ViolationTableEntry matches={matches} editViolation={editViolation} />
                    <ViolationTableEntry matches={matches} editViolation={editViolation} />
                    <ViolationTableEntry matches={matches} editViolation={editViolation} />
                </TableBody>
            </Table>
        </TableContainer>
        <Modal
            open={open}
            handleClose={() => {
                isOpen(false)
                setFormData({})
            }}
            title={title}
            formData={formData}
        />
        {!matches && fabs.map((fab, index) => (
            <Fab fab={fab} index={index} handleClick={() => createViolation()} />
        ))}
    </Box>)
}

export default Violation