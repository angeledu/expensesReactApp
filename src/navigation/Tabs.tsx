/* eslint-disable prettier/prettier */
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import { ListaScreen } from '../screens/ListaScreen';
import { CuentaScreen } from '../screens/CuentaScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const Tab = createMaterialBottomTabNavigator();

export const Tabs = () => {
    return (
      <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#004d40"
      inactiveColor="#ffffff"
      barStyle={{ backgroundColor: 'black' }}
      >
        <Tab.Screen 
            name="Home"
            component={ HomeScreen }
            options={{
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name='home' color={color} size={26} />
                ),
              }}
        />
        <Tab.Screen 
            name="Actividad"
            component={ ListaScreen }
            options={{
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name='text-account' color={color} size={26} />
                ),
              }}
        />
        <Tab.Screen
            name="Cuenta"
            component={ CuentaScreen }
            options={{
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name='account' color={color} size={26} />
                ),
              }}
        />

      </Tab.Navigator>
    );
  }