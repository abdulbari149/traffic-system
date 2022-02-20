import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LogInScreen from '../screens/Auth/LogInScreen';
import LoginIntroScreen from '../screens/Auth/LoginIntroScreen';
import ChallanFormHome from '../screens/ChallanForm/Home';
import WardenProfile from '../screens/Profile/WardenProfile';


import Icon from 'react-native-vector-icons/MaterialIcons';
import RecordDetails from '../screens/Record/RecordDetails';

const Stack = () => {

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
