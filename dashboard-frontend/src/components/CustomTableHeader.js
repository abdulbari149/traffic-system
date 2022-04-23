import { TableCell, TableRow } from '@mui/material'
import React from 'react'
import styles from '../styles/Dashboard.module.css'

function CustomTableHeader({
	items,
	renderButton = () => <></>,
	buttonPosition = 'start'
}) {
	// let sizes = item?.screenSizes.reduce((obj, size) => ({ ...obj, [size]: "table-cell" }), {})

	// key={key}
	// className={styles.tableHeading}
	// align={key !== 0 ? 'center' : 'left'}
	// sx={{ display: {...sizes, ...(!("xs" in item.screenSizes) && { xs: "none" })} }}
	return (
		<TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
			{buttonPosition === 'start' && renderButton()}
			{items.map((item, key) => <TableCell>{item?.name}</TableCell>}
			{buttonPosition === 'end' && renderButton()}
		</TableRow>
	)
}
export default CustomTableHeader
