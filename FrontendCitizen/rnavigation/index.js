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
                    headerLeft: () => <View style={{ padding: 5, backgroundColor: 'black', marginTop: 8 }}>
                        <Icon name="ios-chevron-back-outline" size={24} color="white" onPress={() => navigation.goBack()} />
                    </View>
                })}
            />
            <ScreensStack.Screen
                name="Forgot Password"
                component={ForgotPassword}
                options={({ navigation }) => ({
                    headerLeft: () => <View style={{ padding: 5, backgroundColor: 'white', marginTop: 8 }}>
                        <Icon name="ios-chevron-back-outline" size={24} color="black" onPress={() => navigation.goBack()} />
                    </View>
                })}
            />
            <ScreensStack.Screen
                name="Create New Password"
                component={CreateNewPassword}
                options={({ navigation }) => ({
                    headerLeft: () => <View style={{ padding: 5, backgroundColor: 'black', marginTop: 8 }}>
                        <Icon name="ios-chevron-back-outline" size={24} color="white" onPress={() => navigation.goBack()} />
                    </View>
                })}
            />
        </ScreensStack.Navigator>
    </NavigationContainer>);
}

export default Stack;