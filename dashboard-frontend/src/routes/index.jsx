import React, { useEffect } from "react";
import { Routes as Switch, Route, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Dashboard,
  Login,
  ForgotPassword,
  CreateNewPassword,
  Verification
} from "../pages";

import WardenProfile from "../pages/WardenProfile";
import { useVerifyAuthMutation } from "../api";
import { setUser } from "../reducers/auth";
import WardenApproval from "../pages/WardenApproval";
import Voilation from "../pages/Voilation";
import WardenDecline from "../pages/WardenDecline";
const Routes = () => {
  const navigation = useNavigate();
  const location = useLocation()
  const dispatch = useDispatch();
  const [
    verifyAuth,
    { data, error, isLoading, isFetching, isError, isSuccess }
  ] = useVerifyAuthMutation();

  async function initalizeUser() {
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("Token doesn't exists");
      navigation("/login", { replace: true });
      return;
    }
    await verifyAuth(token);
  }

  useEffect(
    () => {
      if (isSuccess) {
        navigation(location.pathname, { replace: true });
      }
    },
    [isSuccess]
  );

  useEffect(
    () => {
      if (isError) {
        navigation("/login", { replace: true });
      }
    },
    [isError]
  );

  useEffect(() => {
    initalizeUser();
  }, []);

  return (
    <Switch>
      <Route element={<Dashboard />} path="/dashboard">
        <Route element={<WardenApproval />} index />
        <Route element={<WardenApproval />} path="warden-approval">
          <Route element={<WardenProfile />} path="profile" />
        </Route>
        <Route element={<Voilation />} path="voilation" />
        <Route element={<WardenDecline />} path="warden-decline">
          <Route element={<WardenProfile />} path="profile" />
        </Route>
        <Route element={<WardenApproval />} path="admin-register" />
      </Route>
      <Route element={<Login />} path="login" exact />
      <Route element={<WardenProfile />} path="warden-profile" />
    </Switch>
  );
};

export default Routes;
