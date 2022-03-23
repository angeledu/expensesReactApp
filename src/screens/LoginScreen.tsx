/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native-paper';

import { Button } from '../components/formControls/Button';
import { TextInput } from '../components/formControls/TextInput';

import { stylesLogin } from '../theme/loginTheme';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';


export const LoginScreen = () => {

  const navigator = useNavigation<any>();

  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState([]);

const onLoginPressed = () => {
  navigator.navigate('HomeScreen');
}

const signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    setloggedIn(true)
  } catch (error) {
    // if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //   // user cancelled the login flow
    // } else if (error.code === statusCodes.IN_PROGRESS) {
    //   // operation (e.g. sign in) is in progress already
    // } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    //   // play services not available or outdated
    // } else {
    //   // some other error happened
    // }
    console.log(error)
  }
};


useEffect(() => {
  GoogleSignin.configure({
    scopes: ['email'],
    webClientId:
      '286331386798-ruldph17b93ibc8n78cr0fikgojn9sb7.apps.googleusercontent.com',
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
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
                style={{width: 192, height: 48}}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={signIn}
              />
          <View style={ stylesLogin.row }>
            <Text>Don’t have an account? </Text>
            <TouchableOpacity onPress={() => navigator.replace('RegisterScreen')}>
              <Text style={ stylesLogin.link }>Sign up</Text>
            </TouchableOpacity>
          </View>
      </View>
            
  )
}

