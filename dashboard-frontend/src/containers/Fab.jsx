import React from 'react'
import { Zoom, Fab as MUIFab, useTheme } from '@mui/material'

const Fab = ({ fab, index, handleClick }) => {

    const theme = useTheme()

    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    };

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
            <MUIFab sx={fab.sx} aria-label={fab.label} style={{ backgroundColor: fab.color }}>
                {fab.icon}
            </MUIFab>
        </Zoom>
    )
}

export default Fab