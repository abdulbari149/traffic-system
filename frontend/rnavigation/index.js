import React from 'react';

<<<<<<< Updated upstream
import { createNativeStackNavigator } from '@react-navigation/native-stack';
=======
import AuthNavigation from "./AuthNavigation";
import AppTabNavigation from "./TabNavigation";
import { ArrowBackIcon } from "native-base";
>>>>>>> Stashed changes

import LogInScreen from '../screens/Auth/LogInScreen';
import LoginIntroScreen from '../screens/Auth/LoginIntroScreen';
import ChallanFormHome from '../screens/ChallanForm/Home';
import WardenProfile from '../screens/Profile/WardenProfile';


<<<<<<< Updated upstream
import Icon from 'react-native-vector-icons/MaterialIcons';
import RecordDetails from '../screens/Record/RecordDetails';

const Stack = () => {
=======
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
    headerLeft: () => <ArrowBackIcon color="white" />
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
>>>>>>> Stashed changes

    const Stack = createNativeStackNavigator();

    const config = {
        animation: 'timing',
        config: {
            stiffness: 1000,
            damping: 500,
            mass: 3,
            overshootClamping: true,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 0.01,
        },
    };

    return (
        <Stack.Navigator screenOptions={{
            transitionSpec: {
                open: config,
                close: config
            }
        }}>
            <Stack.Screen name='Login Intro' options={{
                headerTransparent: true,
                headerShown: false
            }} component={LoginIntroScreen} />
            <Stack.Screen name='Login' component={LogInScreen} options={({ navigation }) => ({
                headerTransparent: true,
                headerTitle: () => <></>,
                headerTintColor: 'white'
            })} />
            <Stack.Screen name='Record Details' component={RecordDetails} options={({ navigation }) => ({
                headerTransparent: true,
                headerTitle: () => <></>,
                headerTintColor: 'white'
            })} />
            <Stack.Screen name='Challan Form Home' component={ChallanFormHome} />
            <Stack.Screen name='Warden Profile' component={WardenProfile} options={{
                headerTransparent: true,
                headerTintColor: 'white',
                headerTitle: () => <></>,
                headerRight: () => <Icon name='logout' size={24} color='white' />
            }} />
        </Stack.Navigator>
    );
}

export default Stack;
