/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native-paper';

import { Button } from '../components/formControls/Button';
import { TextInput } from '../components/formControls/TextInput';

import { stylesLogin } from '../theme/loginTheme';

import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { AuthContext } from '../context/AuthContext';

export const LoginScreen = () => {

  const navigator = useNavigation<any>();

  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const { signIn, signInGoogle} = useContext(AuthContext);

const onLoginPressed = () => {
  navigator.navigate('HomeScreen');
}




useEffect(() => {
  GoogleSignin.configure({
    scopes: ['email'],
    webClientId:
      '286331386798-t1alm3okuie524fq2dkvoh4hckeftn9a.apps.googleusercontent.com',
    offlineAccess: true,
  });
}, []);


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


          <GoogleSigninButton
                style={{width: 192, height: 55}}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={signInGoogle}
              />
          <View style={ stylesLogin.row }>
            <Text>Don’t have an account? </Text>
            <TouchableOpacity onPress={() => navigator.replace('SignUpScreen')}>
              <Text style={ stylesLogin.link }>Sign up</Text>
            </TouchableOpacity>
          </View>
      </View>
            
  )
}

