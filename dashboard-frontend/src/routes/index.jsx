import React, { useEffect } from "react";
import { Routes as Switch, Route, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Dashboard,
  Login,
  ForgotPassword,
  CreateNewPassword,
  Verification
} from "../pages";

import WardenProfile from "../components/WardenProfile";
import { useVerifyAuthMutation } from "../api";
import { setUser } from "../reducers/auth";
const Routes = () => {
  const navigation = useNavigate();
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

    console.log("Auth Runs");
    await verifyAuth(token);
  }

  useEffect(
    () => {
      if (isSuccess) {
        console.log("Response Data ==>", { data: data.data });
      }
    },
    [isSuccess]
  );

  useEffect(
    () => {
      if (isError) {
        console.log("Response Error ==>", { error: error });
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
      <Route element={<Dashboard />} index exact />
      <Route element={<Login />} path="login" exact />
      <Route element={<WardenProfile />} path="profile/:state/:id" />
    </Switch>
  );
};

export default Routes;
