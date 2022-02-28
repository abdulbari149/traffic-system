import React from "react";
import {
  LoginIntroScreen,
  LoginScreen,
  VerificationScreen,
  SignUpScreen,
} from "../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ArrowBackIcon } from "native-base";
import ForgotPasswordEmailVerify from "../screens/Auth/ForgotPasswordEmailVerify";
import CreateNewPassword from "../screens/Auth/CreateNewPassword";
import PasswordChangedConfirmation from "../screens/Auth/PasswordChangedConfirmation";

const AuthNavigation = () => {
  const AuthStack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login Intro"
        options={{
          headerTransparent: true,
          headerShown: false
        }}
        component={LoginIntroScreen}
      />

      <AuthStack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={({ navigation }) => ({
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitle: () => <></>,
          headerBackTitleVisible: false,
          headerTransparent: true,
          headerLeft: () => <ArrowBackIcon color="#0038FF" onPress={() => navigation.goBack()} />
        })}
      />
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={({ navigation }) => ({
          headerTransparent: true,
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitle: () => <></>,
          headerLeft: () => <ArrowBackIcon color="white" onPress={() => navigation.goBack()} />
        })}
      />
      <AuthStack.Screen
        name="Verification Screen"
        component={VerificationScreen}
        options={({ navigation }) => ({
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitle: () => <></>,
          headerBackTitleVisible: false,
          headerLeft: () => <ArrowBackIcon color="#0038FF" onPress={() => navigation.goBack()} />
        })}
      />
      <AuthStack.Screen
        name="Forgot Password Email Verify"
        component={ForgotPasswordEmailVerify}
        options={({ navigation }) => ({
          headerTransparent: true,
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitle: () => <></>,
          headerLeft: () => <ArrowBackIcon color="white" onPress={() => navigation.goBack()} />
        })}
      />
      <AuthStack.Screen
        name="Create New Password"
        component={CreateNewPassword}
        options={({ navigation }) => ({
          headerTransparent: true,
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitle: () => <></>,
          headerLeft: () => <ArrowBackIcon color="white" onPress={() => navigation.goBack()} />
        })}
      />
      <AuthStack.Screen
        name="Password Confirmation"
        component={PasswordChangedConfirmation}
        options={({ navigation }) => ({
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitle: () => <></>,
          headerBackTitleVisible: false,
          headerTransparent: true,
          headerLeft: () => <ArrowBackIcon color="#0038FF" onPress={() => navigation.goBack()} />
        })}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
