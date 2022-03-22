/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native-paper';

import { Button } from '../components/Button'
import { TextInput } from '../components/TextInput'

import { stylesLogin } from '../theme/loginTheme';
import { theme } from '../theme/theme';


export const LoginScreen = () => {

  const navigator = useNavigation<any>();

  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

const onLoginPressed = () => {
  navigator.navigate('HomeScreen');
  }


  return (
      <View style={ stylesLogin.container }>

            <Image 
              source={require('../assets/gastos.png')}
              style={stylesLogin.logo}
            />
            <TextInput
            label="Email"
            returnKeyType="next"
            value={ email.value }
            onChangeText={(text) => setEmail({ value: text, error: '' })}
            error={!!email.error}
            errorText={email.error}
            autoCapitalize="none"
            textContentType="emailAddress"
            keyboardType="email-address"
          />

          <TextInput
            label="Password"
            returnKeyType="done"
            value={password.value}
            onChangeText={(text) => setPassword({ value: text, error: '' })}
            error={!!password.error}
            errorText={password.error}
            secureTextEntry
          />


          <Button mode="contained" onPress={onLoginPressed}>
            Login
          </Button>
          <View style={ stylesLogin.row }>
            <Text>Don’t have an account? </Text>
            <TouchableOpacity onPress={() => navigator.replace('RegisterScreen')}>
              <Text style={ stylesLogin.link }>Sign up</Text>
            </TouchableOpacity>
          </View>
      </View>
            
  )
}

