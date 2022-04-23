import React from 'react'
import styles from './style.module.css'
import { Link } from 'react-router-dom'
import { Button, Typography } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'

function Header({ title }) {
  return (
    <div className={styles.container}>
      <Typography variant={'h4'} className={styles.heading}>
        {title}
      </Typography>

      <Button
        className={styles.logoutButton}
        sx={{ display: { lg: 'flex', xs: 'none' } }}
        startIcon={<LogoutIcon className={styles.logoutIcon} />}
      >
        <Link to="/" className={styles.logoutButtonText}>
          Logout
        </Link>
      </Button>
    </div>
  )
}

export default Header
