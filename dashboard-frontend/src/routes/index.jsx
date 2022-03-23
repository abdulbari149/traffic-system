import React from 'react';
import {
    Routes as Switch,
    Route,
} from 'react-router-dom'
import Dashboard from '../components/Dashboard';
import Login from '../components/Login';

const Routes = () => {
    return (<Switch>
        <Route element={<Dashboard />} path="dashboard" />
        <Route element={<Login />} index exact />
    </Switch>)
}

export default Routes