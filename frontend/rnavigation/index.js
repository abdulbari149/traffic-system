import React, { useState } from "react";
import {
	ChallanFormHomeScreen,
	ChallanFormScreen,
	LoginIntroScreen,
	VerificationScreen,
	WardenProfileScreen,
	RecordListScreen,
	VoilationScreenTabs,
	FullChallanFormScreen,
} from "../screens";
import LoginScreen from "../screens/Auth/LoginScreen"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

const TabScreens = () => {
	const Tabs = createMaterialBottomTabNavigator();
	return (
		<Tabs.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;
					size = "20px";
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

const Routes = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const AppStack = createNativeStackNavigator();
	const AuthStack = createNativeStackNavigator();
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
					...headerOptions,
				}}
			/>
			<AuthStack.Screen
				name="Verification Screen"
				component={VerificationScreen}
				options={{
					...headerOptions,
				}}
			/>
		</AuthStack.Navigator>
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
				component={TabScreens}
				options={{ headerShown: false }}
			/>
			<AppStack.Group
				screenOptions={{
					...headerOptions
				}}
			>
				<AppStack.Screen name="Challan Form" component={ChallanFormScreen} />
				<AppStack.Screen name="Voilation" component={VoilationScreenTabs} />
				<AppStack.Screen
					name="Full Challan Form"
					component={FullChallanFormScreen}
				/>
			</AppStack.Group>
		</AppStack.Navigator>
	);
};

export default Routes;
