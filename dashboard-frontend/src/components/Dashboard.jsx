import React, { useState, useCallback } from 'react';

import { Grid, useMediaQuery, CircularProgress } from '@mui/material'
import Sidebar from '../containers/Sidebar'
import WardenApprovals from '../containers/WardenApprovals';
import WardenProfile from '../containers/WardenProfile';
import Violation from './Violation';

import DeclinedWardens from '../containers/DeclinedWardens'
import { useParams } from "react-router-dom"
import json2mq from 'json2mq'
import AppBar from './AppBar';
import SuperAdminSignUp from './SuperAdminSignUp';

const Dashboard = () => {

    const [nav, setNav] = useState(0);
    const [id, setId] = useState(0);
    const [menuOpened, isMenuOpened] = useState(0);

    const matches = useMediaQuery(
        json2mq({
            minWidth: 1200
        }),
    );

    const handleIdChange = useCallback((newId) => {
        setId(newId);
    }, []);

    return ( // 1.5 + 7.5 + 
        <Grid container spacing={0} style={{ backgroundColor: '#0f0f0f' }}>
            {!matches && <AppBar menuOpened={menuOpened} isMenuOpened={isMenuOpened} />}
            {matches && <Grid item xs={1.5}>
                <Sidebar nav={nav} setNav={setNav} />
            </Grid>}
            {menuOpened ? (
                <Grid item xs={12}>
                    <Sidebar nav={nav} setNav={setNav} mobile={true} isMenuOpened={isMenuOpened} menuOpened={menuOpened} />
                </Grid>
            ) : nav === 0 ? (<>
                <Grid item md={matches && id ? 7.5 : matches && !id ? 10.5 : 12} lg={matches && id ? 7.5 : !matches ? 12 : 10.5} sm={matches && !id ? 10.5 : matches && id ? 7.5 : 12} xs={12}>
                    <WardenApprovals matches={matches} handleIdChange={handleIdChange} />
                </Grid>
                {matches && id ? <Grid item xs={3}>
                    <WardenProfile id={id} handleIdChange={handleIdChange} matches={matches} />
                </Grid> : null}
            </>) : nav === 1 ? (
                <Grid item md={matches ? 10.5 : 12} lg={matches ? 10.5 : 12} sm={matches ? 10.5 : 12} xs={12}>
                    <Violation matches={matches} />
                </Grid>
            ) : nav === 2 ? (<>
                <Grid item md={matches && id ? 7.5 : matches && !id ? 10.5 : 12} lg={matches && id ? 7.5 : !matches ? 12 : 10.5} sm={matches && !id ? 10.5 : matches && id ? 7.5 : 12} xs={12}>
                    <DeclinedWardens matches={matches} handleIdChange={handleIdChange} />
                </Grid>
                {matches && id ? <Grid item xs={3}>
                    <WardenProfile id={id} handleIdChange={handleIdChange} matches={matches} />
                </Grid> : null}
            </>) : nav === 3 ? (
                <Grid item md={matches ? 10.5 : 12} lg={matches ? 10.5 : 12} sm={matches ? 10.5 : 12} xs={12}>
                    <SuperAdminSignUp />
                </Grid>
            ) : null}
        </Grid>
    )
}

export default Dashboard