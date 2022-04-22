import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./AppNavigation";
import AuthNavigation from "./AuthNavigation";
import { useDispatch, useSelector } from "react-redux";
import { getAuthToken } from "utils/async-storage";
import { setAccessToken, setLogin, setUser } from "app/auth/slice";
import { Loader } from "components";
import { useVerifyAuthMutation } from "api";

const Stack = () => {
  const [loading, setLoading] = useState(true);
  const [myToken, setMyToken] = useState("");
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [verifyAuth, { data, error, isSuccess, isError }] =
    useVerifyAuthMutation();

  const jwtUserAuthentication = async () => {
    const token = await getAuthToken("access");
    if (!token) {
      dispatch(setLogin(false));
      setLoading(false);
    }
    console.log({ myToken });
    setMyToken(token);
    setLoading(true);
    await verifyAuth(token);
  };

  useEffect(() => {
    jwtUserAuthentication();
  }, []);

  useEffect(() => {
    if (isSuccess) {
      console.log({ myToken });
      dispatch(setUser({ data: { ...data.data, loggedIn: undefined } }));
      dispatch(setAccessToken({ data: myToken }));
      dispatch(setLogin(data?.data?.loggedIn));
      setTimeout(() => setLoading(false), 1000);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      console.log({ error });
      setTimeout(() => setLoading(false), 1000);
    }
  }, [isError]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <NavigationContainer>
          {!isLoggedIn ? <AuthNavigation /> : <AppNavigation />}
        </NavigationContainer>
      )}
    </>
  );
};

export default Stack;
