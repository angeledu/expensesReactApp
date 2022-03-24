/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../screens/LoginScreen';
import {Tabs} from './Tabs';
import DetailsScreen from '../screens/DetailsScreen';
import { SignUpScreen } from '../screens/SignUpScreen';
import { AuthContext } from '../context/AuthContext';

export type RootStackParams = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  HomeScreen: undefined;
  DetailsScreen: any;
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {

  const { status } = useContext( AuthContext );

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
        {
          (status !== 'authenticated')
          ? (
            <>
               <Stack.Screen name="LoginScreen" component={ LoginScreen } />
               <Stack.Screen name="SignUpScreen" component={ SignUpScreen } />
            </>
          )
          : (
            <>
              <Stack.Screen name="HomeScreen" component={ Tabs } />
              <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
            </>
          )
        }
    
    </Stack.Navigator>
  );
};
