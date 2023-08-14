import { TableCell, TableRow } from '@mui/material'
import React, { useCallback } from 'react'
import styles from '../styles/Dashboard.module.css'

function CustomTableHeader({
  items,
  buttonPosition,
  renderButton = () => null,
}) {
  const displayScreens = useCallback((sizeProps) => {
    if (!sizeProps) {
      return 'table-cell'
    }
    let allScreenSizes = ['xl', 'lg', 'md', 'sm', 'xs']
    let sizes = sizeProps.reduce(
      (obj, s) => ({ ...obj, [s]: 'table-cell' }),
      {},
    )
    let hideSizes = allScreenSizes.filter((s) => !sizeProps.includes(s))
    hideSizes = hideSizes.reduce((obj, hs) => ({ ...obj, [hs]: 'none' }), {})
    const display = {
      ...sizes,
      ...hideSizes,
    }
    return display
  }, [])

  const headerRow = items?.map((i, key) => {
    const display = displayScreens(i?.screenSizes)

    return (
      <TableCell
        key={key}
        className={styles.tableHeading}
        align={i.align ?? "left"}
        sx={{ display }}
      >
        {i.name}
      </TableCell>
    )
  })

  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      {buttonPosition === 'start' && renderButton()}
      {headerRow}
      {buttonPosition === 'end' && renderButton()}
    </TableRow>
  )
}
export default CustomTableHeader
