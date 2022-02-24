import React from "react";
import {
  LoginIntroScreen,
  LoginScreen,
  VerificationScreen,
  SignUpScreen,
} from "../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const AuthNavigation = () => {
  const AuthStack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login Intro"
        options={{
          headerTransparent: true,
          headerShown: false,
        }}
        component={LoginIntroScreen}
      />

      <AuthStack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          headerTitle: () => <></>,
          headerShadowVisible: false,
          headerBackImageSource: require("../cdn/BackArrow.png"),
        }}
      />
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerTransparent: true,
          headerTitle: () => <></>,
          headerShadowVisible: false,
          headerBackImageSource: require("../cdn/BackArrow.png"),
        }}
      />
      <AuthStack.Screen
        name="Verification Screen"
        component={VerificationScreen}
        options={{
          headerTitle: () => <></>,
          headerShadowVisible: false,
          headerBackImageSource: require("../cdn/BackArrow.png"),
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
