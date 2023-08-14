import React from 'react'
import { Zoom, Fab as MuiFab, useTheme } from '@mui/material'

const Fab = ({ fab, index, handleClick }) => {
  const theme = useTheme()

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  }

  return (
    <Zoom
      key={fab.color}
      in={0 === index}
      timeout={transitionDuration}
      style={{
        transitionDelay: `${0 === index ? transitionDuration.exit : 0}ms`,
      }}
      unmountOnExit
      onClick={handleClick}
    >
      <MuiFab
        sx={fab.sx}
        aria-label={fab.label}
        style={{ backgroundColor: fab.color }}
      >
        {fab.icon}
      </MuiFab>
    </Zoom>
  )
}

export default Fab
