import * as React from "react";
import {
  Alert,
  Modal,
  Button,
  Stack,
  AlertTitle,
  Typography
} from "@mui/material";
export default function ActionAlerts({
  open,
  onClose,
  action,
  title,
  message,
  severity = "success"
}) {
  return (
    <Modal open={open} onClose={onClose}>
      <Stack sx={{ width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }} spacing={2}>
        <Alert sx={{  width: "30%" }} severity={severity} onClose={onClose}>
          <AlertTitle>{title}</AlertTitle>
          <Typography>{message}</Typography>
        </Alert>
      </Stack>
    </Modal>
  );
}
