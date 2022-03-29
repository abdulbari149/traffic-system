import { Input as TextField, InputAdornment, Typography } from '@mui/material';
import { useField } from 'formik'
import React from 'react'
import { useTogglePasswordVisibility } from '../hooks/useTogglePasswordVisibility'
import styles from '../styles/Auth.module.css';
import VisibilityOffSharpIcon from '@mui/icons-material/VisibilityOffSharp';
import RemoveRedEyeSharpIcon from '@mui/icons-material/RemoveRedEyeSharp';

import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
    underline: {
        "&&&:before": {
            borderBottom: "none"
        },
        "&&:after": {
            borderBottom: "none"
        }
    }
});

const Input = ({ isReadOnly, label, ...props }) => {

    const classes = useStyles()
    const [{ name, value }, meta] = useField(props)
    const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility()
    const { placeholder, type } = props;

    return (<React.Fragment>
        <Typography variant="h5" className={styles.label} > {label}</Typography>
        <TextField
            placeholder={placeholder}
            className={styles.input}
            value={value}
            onChange={props.onChange}
            onBlur={props.onBlur}
            endAdornment={
                type === 'password' ? <InputAdornment position="start">
                    {rightIcon === 'eye-off' ? <VisibilityOffSharpIcon onClick={handlePasswordVisibility} style={{ color: '#949494' }} /> : <RemoveRedEyeSharpIcon onClick={handlePasswordVisibility} style={{ color: '#949494' }} />}
                </InputAdornment> : null
            }
            name={name}
            inputProps={classes.underline}
            type={type !== "password" ? type : passwordVisibility ? "text" : "password"}
        />
        {
            !!meta.error ? (
                <p className={styles.error}>
                    {meta?.error}
                </p>
            ) : null
        }
    </React.Fragment>)
}

export default Input