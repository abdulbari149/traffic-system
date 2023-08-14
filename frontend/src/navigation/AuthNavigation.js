import React from "react";
import {
  AuthHome,
  Login,
  SignUp,
  Verification,
  IdentityProof,
  ForgotPassword,
  CreatePassword,
  PasswordChanged,
  UploadProfilePic,
  ProfilePic
} from "@app/";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  AUTH_HOME_SCREEN,
  FORGOT_PASSWORD_SCREEN,
  IDENTITY_PROOF_SCREEN,
  LOGIN_SCREEN,
  SIGNUP_SCREEN,
  VERIFICATION_SCREEN,
  CREATE_PASSWORD_SCREEN,
  PASSWORD_CHANGED_SCREEN,
  UPLOAD_PROFILE_PIC_SCREEN,
  SHOW_PROFILE_PIC_SCREEN,
} from "../routes";

const AuthNavigation = () => {
  const AuthStack = createNativeStackNavigator();

  const headerOptions = {
    headerTitle: () => <></>,
    headerShadowVisible: false,
    headerBackImageSource: require("../cdn/BackArrow.png"),
  };

  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name={AUTH_HOME_SCREEN}
        options={{
          headerTransparent: true,
          headerShown: false,
        }}
        component={AuthHome}
      />

      <AuthStack.Screen
        name={SIGNUP_SCREEN}
        component={SignUp}
        options={headerOptions}
      />
      <AuthStack.Screen
        name={FORGOT_PASSWORD_SCREEN}
        component={ForgotPassword}
        options={{ ...headerOptions, headerTransparent: true }}
      />
      <AuthStack.Screen
        name={CREATE_PASSWORD_SCREEN}
        component={CreatePassword}
        options={{ ...headerOptions, headerTransparent: true }}
      />
      <AuthStack.Screen
        name={PASSWORD_CHANGED_SCREEN}
        component={PasswordChanged}
        options={{ ...headerOptions, headerTransparent: true }}
      />
      <AuthStack.Screen
        name={LOGIN_SCREEN}
        component={Login}
        options={{
          headerTransparent: true,
          ...headerOptions,
        }}
      />
      <AuthStack.Screen
        name={VERIFICATION_SCREEN}
        component={Verification}
        options={{
          headerTitle: () => <></>,
          headerShadowVisible: false,
          headerBackImageSource: require("../cdn/BackArrow.png"),
        }}
      />
      <AuthStack.Screen
        name={IDENTITY_PROOF_SCREEN}
        component={IdentityProof}
        options={{
          headerTitle: () => <></>,
          headerShadowVisible: false,
          headerBackImageSource: require("../cdn/BackArrow.png"),
        }}
      />
      <AuthStack.Screen
        name={UPLOAD_PROFILE_PIC_SCREEN}
        component={UploadProfilePic}
        options={{
          headerTitle: () => <></>,
          headerShadowVisible: false,
          headerBackImageSource: require("../cdn/BackArrow.png"),
        }}
      />
      <AuthStack.Screen
        name={SHOW_PROFILE_PIC_SCREEN}
        component={ProfilePic}
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
