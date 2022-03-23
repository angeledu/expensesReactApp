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
import auth from '@react-native-firebase/auth';

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
    // setloggedIn(true);
      const { idToken } = await GoogleSignin.signIn();

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      
      await  auth().signInWithCredential(googleCredential);

      navigator.navigate('HomeScreen');
      
  } catch (error) {
    console.log(error)
  }
};


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

