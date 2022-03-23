import React from 'react';

import { Grid } from '@mui/material'
import Sidebar from '../containers/Sidebar'
import WardenApprovals from '../containers/WardenApprovals';
import WardenProfile from '../containers/WardenProfile';

const Dashboard = () => {
    return (
        <Grid container spacing={0}>
            <Grid item xs={1.5}>
                <Sidebar />
            </Grid>
            <Grid item xs={7.5}>
                <WardenApprovals />
            </Grid>
            <Grid item xs={3}>
                <WardenProfile />
            </Grid>
        </Grid>
    )
}

export default Dashboard