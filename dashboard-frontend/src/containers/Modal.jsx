import React from 'react';

import { Box, Typography, Modal as MUIModal } from '@mui/material'

import styles from '../styles/Modal.module.css'
import ModalForm from './ModalForm';

const Modal = ({ open, handleClose, title, formData }) => {
    return (
        <MUIModal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={styles.modal}>
                <Typography variant="h4" whiteSpace='nowrap' className={styles.modalTitle}>
                    {title}
                </Typography>
                <ModalForm
                    data={formData}
                    btn={{
                        title: title === 'Add New Violation' ? title : 'Change',
                        amount: 2,
                        onClickOfCancel: handleClose
                    }}
                />
            </Box>
        </MUIModal >
    )
}

export default Modal