import {
  Input as MuiInput,
  InputAdornment,
  Typography,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { useField } from "formik";
import React from "react";
import { useTogglePasswordVisibility } from "../hooks/useTogglePasswordVisibility";
import styles from "../styles/Auth.module.css";
import VisibilityOffSharpIcon from "@mui/icons-material/VisibilityOffSharp";
import RemoveRedEyeSharpIcon from "@mui/icons-material/RemoveRedEyeSharp";

import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  underline: {
    "&&&:before": {
      borderBottom: "none",
    },
    "&&:after": {
      borderBottom: "none",
    },
  },
});

const PasswrodEyeAdornment = ({ rightIcon, handlePasswordVisibility }) => (
  <InputAdornment position="start">
    {rightIcon === "eye-off" ? (
      <VisibilityOffSharpIcon
        onClick={handlePasswordVisibility}
        style={{ color: "#949494" }}
      />
    ) : (
      <RemoveRedEyeSharpIcon
        onClick={handlePasswordVisibility}
        style={{ color: "#949494" }}
      />
    )}
  </InputAdornment>
);

const CustomInput = ({ isReadOnly = false, label, modal, ...props }) => {
  const classes = useStyles();
  const [{ name, value }, meta] = useField(props);
  const { passwordVisibility, passwordAdornmentProps } =
    useTogglePasswordVisibility();
  const { placeholder, type } = props;
  console.log({ meta, props });
  return (
    <FormControl fullWidth={true} sx={{ width: "100%" }}>
      <Typography variant="h5" className={styles.label}>
        {label}
      </Typography>
      <MuiInput
        placeholder={placeholder}
        className={modal ? styles.modalInput : styles.input}
        value={value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        name={name}
        type={type}
        
      />
      {!!meta.error && meta.touched ? (
        <FormHelperText sx={{ color: "#c32012", fontSize: "12px" }}>
          {meta?.error}
        </FormHelperText>
      ) : null}
    </FormControl>
  );
};

export default React.memo(CustomInput);
