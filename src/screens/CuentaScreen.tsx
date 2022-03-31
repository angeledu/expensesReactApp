/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {Avatar} from 'react-native-paper';
import {Button} from '../components/formControls/Button';
import {AuthContext} from '../context/AuthContext';
import {stylesHome} from '../theme/homeTheme';

export const CuentaScreen = () => {
  const {logOut, user} = useContext(AuthContext);

  return (
    <View style={stylesHome.container}>
      <Text style={stylesHome.title}>Your Account</Text>
      <Avatar.Icon
        style={stylesHome.avatar}
        size={200}
        icon="account-circle-outline"
      />
      <Text style={stylesHome.subtitle}>{user?.displayName}</Text>
      <Text
        style={{
          fontWeight: 'bold',
          color: 'rgba(5,71,129,255)',
        }}>
        {user?.email}
      </Text>
      <Text style={{fontWeight: 'bold', color: 'rgba(5,71,129,255)'}}>
        {user?.phoneNumber ? `${user?.phoneNumber}` : ''}
      </Text>

      <Button style={stylesHome.btn} mode="contained" onPress={logOut}>
        Log Out
      </Button>
    </View>
  );
};
