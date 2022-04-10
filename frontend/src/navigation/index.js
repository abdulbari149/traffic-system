import React, { useState } from "react";
import {
  ChallanForm,
  ExtendedChallan,
  Voilation,
  RecordDetails,
} from "../app";
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


const Routes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  return !isLoggedIn ? (
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
        <AppStack.Screen name={CHALLAN_FORM_SCREEN} component={ChallanForm}  />
        <AppStack.Screen name={VOILATION_SCREEN} component={Voilation}  />
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
