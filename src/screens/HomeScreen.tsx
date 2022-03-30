/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import { Text, View} from 'react-native';
import {Avatar, Surface } from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button} from '../components/formControls/Button';
import {AuthContext} from '../context/AuthContext';
import {stylesHome} from '../theme/homeTheme';
import {mockData} from '../utils/mockData';

export const HomeScreen = () => {
  const {logOut, user} = useContext(AuthContext);
  const data = mockData;

  return (
    <View style={stylesHome.container}>
      <Text style={stylesHome.title}>Welcome</Text>
      {
        user?.photoURL
        ? <Avatar.Image size={150} source={{ uri: user?.photoURL }} /> 
        : <Avatar.Icon style={stylesHome.avatar} size={150} icon="account-circle-outline"
      />
      }
      
      <Text style={stylesHome.text}>Your</Text>
      <Text style={stylesHome.subtitle}>BALANCE</Text>
      {data.map(d => {
        return (
          <Surface style={stylesHome.surface} key={d.id}>
            <Text style={stylesHome.balance}>{d.title}</Text>
            <Text style={{color: `${d.color}`, fontSize: 20}}>$ {d.value}</Text>
          </Surface>
        );
      })}

      <Button style={stylesHome.btn} mode="contained" onPress={logOut}>
        Log Out
      </Button>

    </View>
  );
};

