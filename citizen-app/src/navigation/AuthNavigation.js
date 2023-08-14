import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import {
  Login,
  SignUp,
  CreateNewPassword,
  ForgotPassword,
  VerificationCode,
} from "app/auth/screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import * as routes from "../routes";
import { GoBackIcon } from "components";

const AuthNavigation = () => {
  const AuthStack = createNativeStackNavigator();

  return (
    <AuthStack.Navigator
      screenOptions={({ navigation }) => ({
        headerShadowVisible: false,
        headerBackVisible: false,
        headerTitle: () => <></>,
        headerTransparent: true,
      })}
    >
      <AuthStack.Screen
        name={routes.LOGIN_SCREEN}
        component={Login}
        options={{  
          headerShown: false,
        }}
      />

      <AuthStack.Screen options={{ headerLeft: () => <GoBackIcon theme="dark" /> }} name={routes.SIGNUP_SCREEN} component={SignUp} />

      <AuthStack.Screen
        name={routes.FORGOT_PASSWORD}
        component={ForgotPassword}
        options={{ headerLeft: () => <GoBackIcon theme="dark" /> }}
      />

      <AuthStack.Screen
        name={routes.CREATE_NEW_PASSWORD}
        component={CreateNewPassword}
        options={{ headerLeft: () => <GoBackIcon theme="light" /> }}
      />

      <AuthStack.Screen
        name={routes.VERIFICATION_SCREEN}
        component={VerificationCode}
        options={{ headerLeft: () => <GoBackIcon theme="dark" /> }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation