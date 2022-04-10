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
import { setLogin } from "src/app/auth/slice";
import { Text, View } from "native-base";

const Routes = () => {
  const [checkToken, { isLoading }] = useCheckTokenMutation();
  const dispatch = useDispatch();

  const jwtAuthToken = async () => {
    const token = await getAuthToken("login");
    if (!token) {
      dispatch(setLogin(false));
    } else {
      console.log("else running", { token });
      try {
        const { data, error } = await checkToken({ token });
        if (data) {
          console.log({ data });
          dispatch(setLogin(data.data.loggedIn));
        }
        if (error) {
          console.log(error);
          throw new Error(error);
        }
      } catch (error) {
        dispatch(setLogin(false));
      }
    }
  };

  useEffect(() => {
    jwtAuthToken();
  }, []);

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
    headerBackImageSource: require("src/cdn/BackArrow.png"),
  };

  if (isLoading && !isLoggedIn) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return true ? (
    <AuthNavigation />
  ) : (
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

      <AppStack.Screen name={RECORD_DETAIL_SCREEN} component={RecordDetails} />
    </AppStack.Navigator>
  );
};

export default Routes;
