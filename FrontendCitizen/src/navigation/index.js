import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { View } from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons';

import SignUpScreen from '../app/auth/screens/SignUpScreen';
import LoginScreen from '../app/auth/screens/LoginScreen';
import ForgotPassword from '../app/auth/screens/ForgotPassword';
import CreateNewPassword from '../app/auth/screens/CreateNewPassword';
import VerificationCodeScreen from '../app/auth/screens/VerificationCodeScreen';

import ChallanHome from '../app/challan/screens/ChallanHome';
import ChallanDetails from '../app/challan/screens/ChallanDetails';
import PaymentMethod from '../app/challan/screens/PaymentMethod';

import * as routes from '../routes';

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
                name={routes.LOGIN_SCREEN}
                component={LoginScreen}
                options={{
                    headerShown: false
                }}
            />

            <ScreensStack.Screen
                name={routes.SIGNUP_SCREEN}
                component={SignUpScreen}
                options={({ navigation }) => ({
                    headerLeft: () => <View style={{ padding: 5, backgroundColor: 'black', marginTop: 8 }}>
                        <Icon name="ios-chevron-back-outline" size={24} color="white" onPress={() => navigation.goBack()} />
                    </View>
                })}
            />

            <ScreensStack.Screen
                name={routes.FORGOT_PASSWORD}
                component={ForgotPassword}
                options={({ navigation }) => ({
                    headerLeft: () => <View style={{ padding: 5, backgroundColor: 'white', marginTop: 8 }}>
                        <Icon name="ios-chevron-back-outline" size={24} color="black" onPress={() => navigation.goBack()} />
                    </View>
                })}
            />

            <ScreensStack.Screen
                name={routes.CREATE_NEW_PASSWORD}
                component={CreateNewPassword}
                options={({ navigation }) => ({
                    headerLeft: () => <View style={{ padding: 5, backgroundColor: 'black', marginTop: 8 }}>
                        <Icon name="ios-chevron-back-outline" size={24} color="white" onPress={() => navigation.goBack()} />
                    </View>
                })}
            />

            <ScreensStack.Screen
                name={routes.VERIFICATION_SCREEN}
                component={VerificationCodeScreen}
                options={({ navigation }) => ({
                    headerLeft: () => <View style={{ padding: 5, backgroundColor: 'white', marginTop: 8 }}>
                        <Icon name="ios-chevron-back-outline" size={24} color="black" onPress={() => navigation.goBack()} />
                    </View>
                })}
            />

            <ScreensStack.Screen
                name={routes.CHALLAN_HOME}
                component={ChallanHome}
                options={{
                    headerShown: false
                }}
            />

            <ScreensStack.Screen
                name={routes.PAYMENT_METHOD}
                component={PaymentMethod}
                options={({ navigation }) => ({
                    headerLeft: () => <View style={{ padding: 5, backgroundColor: 'white', marginTop: 8 }}>
                        <Icon name="ios-chevron-back-outline" size={24} color="black" onPress={() => navigation.goBack()} />
                    </View>
                })}
            />

            <ScreensStack.Screen
                name={routes.CHALLAN_DETAILS}
                component={ChallanDetails}
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