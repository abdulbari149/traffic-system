import React from 'react'

import styles from '../styles/Dashboard.module.css'
import WardenImage from '../images/warden-image.png'

import {
  TableCell,
  TableRow,
  Button,
  useMediaQuery,
  Typography,
  IconButton,
} from '@mui/material'

import json2mq from 'json2mq'

import { Link } from 'react-router-dom'

import DeleteSharpIcon from '@mui/icons-material/DeleteSharp'
import UndoSharpIcon from '@mui/icons-material/UndoSharp'

const DeclinedWardenTableEntry = ({ handleIdChange }) => {
  const matches = useMediaQuery(
    json2mq({
      minWidth: 797,
    }),
  )

  return (
    <TableRow onClick={() => handleIdChange(3)} className={styles.tableRow}>
      <TableCell className={styles.nameAndImage}>
        {!matches && <img src={WardenImage} alt="warden" />}
        <div style={{ paddingLeft: 15 }}>
          <Typography
            variant={matches ? 'h6' : 'subtitle1'}
            className={styles.text}
            style={{ fontWeight: matches ? 400 : 700 }}
          >
            Abdul Bari
          </Typography>
          {!matches && (
            <Typography
              variant={matches ? 'h6' : 'subtitle1'}
              className={styles.text}
            >
              abdulbari11@gmail.com
            </Typography>
          )}
        </div>
      </TableCell>
      {matches ? (
        <>
          <TableCell className={styles.text}>
            <Typography className={styles.text}>
              {' '}
              abdulbari11@gmail.com
            </Typography>
          </TableCell>
          <TableCell align="right">
            <Button
              className={styles.blueButton}
              startIcon={<UndoSharpIcon style={{ color: 'white' }} />}
            >
              Undo
            </Button>
          </TableCell>
          <TableCell align="right">
            <IconButton>
              <DeleteSharpIcon style={{ color: 'white' }} />
            </IconButton>
          </TableCell>
        </>
      ) : (
        <TableCell align="right">
          <Button className={styles.underlinedButton}>
            <Link to="/profile/decline">View Details</Link>
          </Button>
        </TableCell>
      )}
    </TableRow>
  )
}

export default DeclinedWardenTableEntry
