import React from "react";
import { LoginIntroScreen, LoginScreen, VerificationScreen } from "../screens";

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
        component={VerificationScreenn}
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
