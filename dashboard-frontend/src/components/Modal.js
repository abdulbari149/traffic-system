import React from "react";

import { Box, Typography, Modal as MuiModal } from "@mui/material";
import styles from "../styles/Modal.module.css";

const Modal = ({ open, handleClose, title, children }) => {
  return (
    <MuiModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={styles.modal}>
        <Typography
          variant="h4"
          whiteSpace="nowrap"
          className={styles.modalTitle}
        >
          {title}
        </Typography>
        {children}
      </Box>
    </MuiModal>
  );
};

export default Modal;
