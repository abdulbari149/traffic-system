import React from "react"
import { ChallanFormHomeScreen, RecordListScreen, WardenProfileScreen } from "../screens"

import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const AppTabNavigation = () => {
  const Tabs = createMaterialBottomTabNavigator();
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          size = 20;
          if (route.name === "Form") {
            iconName = "form";
          } else if (route.name === "Profile") {
            iconName = "user";
          } else if (route.name === "Record") {
            iconName = focused ? "ios-list" : "ios-list-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          }
          return <AntDesign name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tabs.Screen name="Form" component={ChallanFormHomeScreen} />
      <Tabs.Screen name="Record" component={RecordListScreen} />
      <Tabs.Screen name="Profile" component={WardenProfileScreen} />
    </Tabs.Navigator>
  );
};

export default AppTabNavigation