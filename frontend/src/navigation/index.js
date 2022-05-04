import React, { useEffect, useState } from "react";
import { ChallanForm, ExtendedChallan, Voilation, RecordDetails } from "../app";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigation from "./AuthNavigation";
import AppTabNavigation from "./TabNavigation";
import {
  CHALLAN_FORM_SCREEN,
  CHALLAN_HOME_SCREEN,
  EXTENDED_CHALLAN_SCREEN,
  RECORD_DETAIL_SCREEN,
  VOILATION_SCREEN,
} from "../routes";
import { useDispatch, useSelector } from "react-redux";
import { useCheckTokenMutation } from "src/api";
import { getAuthToken } from "src/utils/async-storage";
import { setLogin, setToken, setWardenAuth } from "src/app/auth/slice";
import { Text, View } from "native-base";
import { ActivityIndicator, LayoutAnimation } from "react-native";
import { Loader } from "../components"
const Routes = () => {
  const [checkToken, { data, error, isLoading, isSuccess, isError }] =
    useCheckTokenMutation();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
  const [jwtToken, setJWTToken] = useState("");
  const jwtAuthToken = async () => {
    setLoading(true)
    const token = await getAuthToken("login");
    if (!token) {
      dispatch(setLogin(false));
      return;
    }
    try {
      setJWTToken(token);
      await checkToken({ token });
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  useEffect(() => {
    jwtAuthToken();
  }, []);

  useEffect(() => {
    if (isSuccess) {

      dispatch(setLogin(data.data.loggedIn));
      dispatch(setToken({ data: jwtToken }));
      dispatch(
        setWardenAuth({
          data: {
            id: data.data.id,
            emai: data.data.email,
            name: data.data.name,
            service_id: data.data.service_id,
            traffic_sector: data.data.traffic_sector,
            designation: data.data.designation,
          },
        })
      );
      setTimeout(() => setLoading(false), 500)
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      dispatch(setLogin(false));
      setTimeout(() => setLoading(false), 500)
    }
  }, [isError]);

  const { isLoggedIn } = useSelector((state) => state.auth);

  const AppStack = createNativeStackNavigator();
  const config = {
    animation: "timing",
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

  const headerOptions = {
    headerTitle: () => <></>,
    headerShadowVisible: false,
    headerBackImageSource: require("../cdn/BackArrow.png"),
  };



  return loading ? (
    <Loader />
  ) : isLoggedIn ? (
    <AppStack.Navigator
      screenOptions={{
        transitionSpec: {
          open: config,
          close: config,
        },
      }}
    >
      <AppStack.Screen
        name={"tab"}
        component={AppTabNavigation}
        options={{ headerShown: false }}
      />
      <AppStack.Group
        screenOptions={{
          ...headerOptions,
        }}
      >
        <AppStack.Screen name={CHALLAN_FORM_SCREEN} component={ChallanForm} />
        <AppStack.Screen name={VOILATION_SCREEN} component={Voilation} />
        <AppStack.Screen
          name={EXTENDED_CHALLAN_SCREEN}
          component={ExtendedChallan}
        />
      </AppStack.Group>

      <AppStack.Screen
        name={RECORD_DETAIL_SCREEN}
        component={RecordDetails}
        options={{
          ...headerOptions,
          headerTransparent: true,
        }}
      />
    </AppStack.Navigator>
  ) : (<AuthNavigation />);
};

export default Routes;
