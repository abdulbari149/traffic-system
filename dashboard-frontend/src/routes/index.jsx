import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
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
import { setToken, setUser } from "../reducers/auth";
import WardenApproval from "../pages/WardenApproval";
import Voilation from "../pages/Voilation";
import WardenDecline from "../pages/WardenDecline";
import Register from "../pages/Register";

const AppRoutes = () => {
  const navigation = useNavigate();
  const location = useLocation()
  const dispatch = useDispatch();
  const [
    verifyAuth,
    { data, error, isLoading, isFetching, isError, isSuccess }
  ] = useVerifyAuthMutation();
  const [accessToken, setAccessToken] = useState(() => localStorage.getItem("token"))
  async function initalizeUser() {
    console.log({ accessToken })
    if (!accessToken) {
      console.log("Token doesn't exists");
      navigation("/login", { replace: true });
      return;
    }
    await verifyAuth(accessToken);
  }

  useEffect(
    () => {
      
      if (isSuccess) {
        dispatch(setUser({ data: data?.data }))
        dispatch(setToken({ data: accessToken }))
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
    console.log("Verifying user")
    initalizeUser();
  }, []);

  return (
    <Routes>
      <Route element={<Dashboard />} path="/dashboard">
        <Route element={<Navigate to="/dashboard/warden-approval" />} index />
        <Route element={<WardenApproval />} path="warden-approval">
          <Route element={<WardenProfile />} path="profile" />
        </Route>
        <Route element={<Voilation />} path="voilation" />
        <Route element={<WardenDecline />} path="warden-decline">
          <Route element={<WardenProfile />} path="profile" />
        </Route>
        <Route element={<Register />} path="admin-register" />
      </Route>
      <Route element={<Login />} path="login" exact />
      <Route element={<WardenProfile />} path="warden-profile" />
      <Route  index exact element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};

export default AppRoutes;
