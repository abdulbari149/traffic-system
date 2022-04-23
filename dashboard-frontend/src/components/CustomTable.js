import React from 'react'
import {
  TableContainer,
  Table,
  Paper,
  TableHead,
  TableBody,
  TableCell,
  tableCellClasses,
  TableRow,
} from '@mui/material'
import styles from '../styles/Dashboard.module.css'

import { Loading, TableFooter } from '.'
const CustomTable = ({
  headerRow,
  renderTableHeader,
  renderTableBody,
  renderTableFooter = () => <></>,
  data,
  perPage = 0,
  loading,
}) => {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(perPage)
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const tableSx = {
    [`& .${tableCellClasses.root}`]: {
      border: 'none',
      padding: 1,
      paddingBottom: 3.5,
      verticalAlign: 'middle',
    },
    maxWidth: 1350,
  }

  if (loading) {
    return <Loading />
  }

  return (
    <TableContainer
      component={Paper}
      style={{
        backgroundColor: '#131313',
        paddingRight: '20px',
        paddingLeft: '20px',
      }}
    >
      <Table sx={tableSx}>
        <TableHead className={styles.tableHead}>
          {renderTableHeader(headerRow)}
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? data?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : data
          )?.map(renderTableBody)}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        {renderTableFooter({
          page,
          rowsPerPage,
          handleChangePage,
          handleChangeRowsPerPage,
          rows: data
        })}
      </Table>
    </TableContainer>
  )
}

export default CustomTable
