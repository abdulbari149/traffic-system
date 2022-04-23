import React from 'react'
import dashboardStyles from '../../styles/Dashboard.module.css'
import styles from './style.module.css'
import { useDispatch } from 'react-redux'
import { TableRow, TableCell, Button } from '@mui/material'
import { openVoilationModal, setVoilationId } from '../../reducers/voilation'
import _ from 'lodash'

const ViolationTableEntry = ({ matches, voilation }) => {
  const dispatch = useDispatch()
  const editVoilation = () => {
    let payload = {
      modalTitle: 'Edit Violation',
      modalName: "edit-voilation"
    }
    dispatch(openVoilationModal(payload))
    dispatch(setVoilationId({ id: voilation._id }))
  }

  return (
    <TableRow
      sx={{
        '&:last-child td, &:last-child th': { border: 0 },
      }}
      className={`${dashboardStyles.tableRow} ${styles.line}`}
    >
      <TableCell className={dashboardStyles.text}>
        {voilation?.voilation}
      </TableCell>
      <TableCell
        sx={{ width: 40, maring: 0, padding: 0 }}
        className={dashboardStyles.text}
        align="center"
      >
        {_.capitalize(voilation.v_type)}
      </TableCell>
      <TableCell className={dashboardStyles.text} align="center">
        {voilation.price} Rs
      </TableCell>
      <TableCell align="center">
        <Button
          className={
            matches
              ? dashboardStyles.blueButton
              : dashboardStyles.underlinedButton
          }
          onClick={editVoilation}
        >
          {matches ? 'Edit price' : 'Edit'}
        </Button>
      </TableCell>
    </TableRow>
  )
}

export default ViolationTableEntry
