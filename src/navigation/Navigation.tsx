/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { Tabs } from './Tabs';
import { SignUpScreen } from '../screens/SignUpScreen';


const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: 'white',
            }
        }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={ SignUpScreen } />
      <Stack.Screen name="HomeScreen" component={Tabs} />
    </Stack.Navigator>
  );
}