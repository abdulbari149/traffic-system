import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '../screens/WardenAuth/SignUpScreen';
import LogInScreen from '../screens/WardenAuth/LogInScreen';

const Stack = () => {

    const Stack = createNativeStackNavigator();

    const config = {
        animation: 'spring',
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
        <Stack.Navigator>
            <Stack.Screen name=" " component={SignUpScreen} options={{
                headerStyle: {
                    backgroundColor: '#367DFD'
                },
                transitionSpec: {
                    open: config,
                    close: config,
                }
            }} />
            <Stack.Screen name="  " component={LogInScreen} />
        </Stack.Navigator>
    )
}

export default Stack
