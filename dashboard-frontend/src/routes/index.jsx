import React from 'react';
import {
    Routes as Switch,
    Route,
} from 'react-router-dom'
import Dashboard from '../components/Dashboard';
import Login from '../components/Login';
import ForgotPassword from '../components/ForgotPassword';
import CreateNewPassword from '../components/CreateNewPassword';
import Verification from '../components/Verification';
import WardenProfile from '../containers/WardenProfile';

const Routes = () => {



    return (<Switch>
        <Route element={<Dashboard />} path="dashboard" />
        <Route element={<Login />} index exact />
        <Route element={<ForgotPassword />} path="forgot-ps" />
        <Route element={<CreateNewPassword />} path="create-new-ps" />
        <Route element={<Verification />} path="verification" />
        <Route element={<WardenProfile />} path="profile" />
        <Route element={<Verification />} path="verification" />
    </Switch>)
}

export default Routes