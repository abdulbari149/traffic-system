import React, { useState } from 'react';

import { Grid } from '@mui/material'
import Sidebar from '../containers/Sidebar'
import WardenApprovals from '../containers/WardenApprovals';
import WardenProfile from '../containers/WardenProfile';
import Violation from './Violation';

const Dashboard = () => {

    const [nav, setNav] = useState(0)

    return (
        <Grid container spacing={0}>
            <Grid item xs={1.5}>
                <Sidebar nav={nav} setNav={setNav} />
            </Grid>
            {nav === 0 ? (<>
                <Grid item xs={7.5}>
                    <WardenApprovals />
                </Grid>
                <Grid item xs={3}>
                    <WardenProfile />
                </Grid>
            </>) : (
                <Grid item xs={10.5}>
                    <Violation />
                </Grid>
            )}
        </Grid>
    )
}

export default Dashboard