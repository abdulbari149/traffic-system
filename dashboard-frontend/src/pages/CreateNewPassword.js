import React from "react";
import styles from "../styles/Auth.module.css";
import { Box, Paper, Typography } from "@mui/material";
import { Form } from "../components";

const CreateNewPassword = () => {
  const formData = {
    names: ["Password", "Confirm_password"],
    placeholders: ["Enter your password", "Retype your password"],
    types: ["password", "password"]
  };

  return (
    <Box className={styles.loginBox}>
      <Paper
        elevation={3}
        className={styles.formCard}
        style={{ paddingBlock: 350 }}
      >
        <Typography variant="h5" className={styles.heading}>
          Create New Password
        </Typography>
        <Typography variant="h6" className={styles.subtitle}>
          Your new password must be different from previous password.
        </Typography>
        <Form
          data={formData}
          handleSubmit={(values) => {
            console.log(values);
          }}
          btn={{
            navigate: "/dashboard",
            title: "Save"
          }}
        />
      </Paper>
    </Box>
  );
};

export default CreateNewPassword;
