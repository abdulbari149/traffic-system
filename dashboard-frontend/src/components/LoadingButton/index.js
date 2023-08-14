import React from 'react'
import { Button, CircularProgress } from '@mui/material'
import styles from './style.module.css'

function LoadingButton({ onClick, loading, children, ...props }) {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      className={styles.loadingButton}
      {...props}
    >
      {loading ? (
        <CircularProgress size={25} thickness={4.5} sx={{ color: 'white' }} />
      ) : (
        <p className={styles.loadingButtonText}>{children}</p>
      )}
    </Button>
  )
}

export default LoadingButton
