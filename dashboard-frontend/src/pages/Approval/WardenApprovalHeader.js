import { TableCell, TableRow } from '@mui/material'
import React from 'react'
import styles from '../../styles/Dashboard.module.css'

function WardenApprovalHeader({ items }) {
  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      {items.map((item) => (
        <TableCell
          className={styles.tableHeading}
          align=
          style={{ fontSize: 22 }}
        >
          Name
        </TableCell>
      ))}

      <TableCell className={styles.tableHeading} style={{ fontSize: 22 }}>
        Email
      </TableCell>
    </TableRow>
  )
}

export default WardenApprovalHeader
