import React from "react";
import { ChallanHome, Records, WardenProfile } from "../app";

import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  CHALLAN_HOME_SCREEN,
  RECORDS_SCREEN,
  WARDEN_PROFILE_SCREEN,
} from "../routes";

const AppTabNavigation = () => {
  const Tabs = createMaterialBottomTabNavigator();
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => {
        let tabLabel = route.name.split("_");
        tabLabel = tabLabel
          .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
          .join(" ");
        return {
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            size = 20;
            if (route.name === CHALLAN_HOME_SCREEN) {
              iconName = "form";
            } else if (route.name === WARDEN_PROFILE_SCREEN) {
              iconName = "user";
            } else if (route.name === RECORDS_SCREEN) {
              iconName = focused ? "ios-list" : "ios-list-outline";
              return <Ionicons name={iconName} size={size} color={color} />;
            }
            return <AntDesign name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
          tabBarLabel: tabLabel,
        };
      }}
    >
      <Tabs.Screen name={CHALLAN_HOME_SCREEN} component={ChallanHome} />
      <Tabs.Screen name={RECORDS_SCREEN} component={Records} />
      <Tabs.Screen name={WARDEN_PROFILE_SCREEN} component={WardenProfile} />
    </Tabs.Navigator>
  );
};

export default AppTabNavigation;
