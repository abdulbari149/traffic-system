import React from 'react'
import {
  Input as MuiInput,
  InputAdornment,
  Typography,
  FormControl,
  FormHelperText,
} from '@mui/material'
import { useField } from 'formik'
import styles from '../styles/Auth.module.css'
import { VisibilityOffSharp, RemoveRedEyeSharp } from '@mui/icons-material'
import { useTogglePasswordVisibility } from '../hooks/useTogglePasswordVisibility'

const PasswrodEyeAdornment = ({ rightIcon, handlePasswordVisibility }) => (
  <InputAdornment style={{ cursor: 'pointer' }} position="start">
    {rightIcon === 'eye-off' ? (
      <VisibilityOffSharp
        onClick={handlePasswordVisibility}
        style={{ color: '#949494' }}
      />
    ) : (
      <RemoveRedEyeSharp
        onClick={handlePasswordVisibility}
        style={{ color: '#949494' }}
      />
    )}
  </InputAdornment>
)

const CustomInput = ({
  rows = 1,
  multiLine = false,
  label,
  modal,
  ...props
}) => {
  const [{ name, value }, meta] = useField(props)
  const { placeholder, type } = props

  const {
    rightIcon,
    handlePasswordVisibility,
    passwordVisibility,
  } = useTogglePasswordVisibility()
  console.log({ rightIcon, passwordVisibility })
  return (
    <FormControl fullWidth={true} sx={{ width: '100%' }}>
      <Typography variant="h5" className={styles.label}>
        {label}
      </Typography>
      <MuiInput
        rows={rows}
        multiline={multiLine}
        placeholder={placeholder}
        className={modal ? styles.modalInput : styles.input}
        value={value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        name={name}
        type={passwordVisibility ? 'text' : type}
        autoComplete="off"
        endAdornment={
          type === 'password' && (
            <PasswrodEyeAdornment
              rightIcon={rightIcon}
              handlePasswordVisibility={handlePasswordVisibility}
            />
          )
        }
      />
      {!!meta.error && meta.touched ? (
        <FormHelperText sx={{ color: '#c32012', fontSize: '12px' }}>
          {meta?.error}
        </FormHelperText>
      ) : null}
    </FormControl>
  )
}

export default React.memo(CustomInput)
