import React, { useState } from "react";
import {
  ChallanFormScreen,
  VoilationScreenTabs,
  FullChallanFormScreen,
  RecordDetailsScreen,
} from "../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthNavigation from "./AuthNavigation";
import AppTabNavigation from "./TabNavigation";



const Routes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
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
        name="Home"
        component={AppTabNavigation}
        options={{ headerShown: false }}
      />
      <AppStack.Group
        screenOptions={{
          ...headerOptions,
        }}
      >
        <AppStack.Screen name="Challan Form" component={ChallanFormScreen} />
        <AppStack.Screen name="Voilation" component={VoilationScreenTabs} />
        <AppStack.Screen
          name="Full Challan Form"
          component={FullChallanFormScreen}
        />
      </AppStack.Group>


      <AppStack.Screen name="Record Details" component={RecordDetailsScreen} />
    </AppStack.Navigator>
  );
};

export default Routes;
