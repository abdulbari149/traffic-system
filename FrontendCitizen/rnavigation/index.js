import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import React from 'react';
import SignUpScreen from '../screens/SignUpScreen';
import { View } from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons';
import ForgotPassword from '../screens/ForgotPassword';
import CreateNewPassword from '../screens/CreateNewPassword';

const ScreensStack = createNativeStackNavigator();

const Stack = () => {

    const BackButton = (buttonColor, iconColor, navigation) => (
        <View style={{ padding: 5, backgroundColor: buttonColor, marginTop: 8 }}>
            <Icon name="ios-chevron-back-outline" size={24} color={iconColor} onPress={() => navigation.goBack()} />
        </View>
    )

    return (<NavigationContainer>
        <ScreensStack.Navigator screenOptions={{
            headerShadowVisible: false,
            headerBackVisible: false,
            headerTitle: () => <></>,
            headerTransparent: true,
        }}>
            <ScreensStack.Screen
                name="Login Screen"
                component={LoginScreen}
                options={{
                    headerShown: false
                }}
            />
            <ScreensStack.Screen
                name="Signup Screen"
                component={SignUpScreen}
                options={({ navigation }) => ({
                    headerLeft: () => <BackButton buttonColor='black' iconColor='white' navigation={navigation} />
                })}
            />
            <ScreensStack.Screen
                name="Forgot Password"
                component={ForgotPassword}
                options={({ navigation }) => ({
                    headerLeft: () => <BackButton buttonColor='white' iconColor='black' navigation={navigation} />
                })}
            />
            <ScreensStack.Screen
                name="Create New Password"
                component={CreateNewPassword}
                options={({ navigation }) => ({
                    headerLeft: () => <BackButton buttonColor='black' iconColor='white' navigation={navigation} />
                })}
            />
        </ScreensStack.Navigator>
    </NavigationContainer>);
}

export default Stack;