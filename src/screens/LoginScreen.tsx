/* eslint-disable prettier/prettier */
import React, { useContext, useEffect } from 'react';
import { View, TouchableOpacity, Image, Keyboard, Platform, KeyboardAvoidingView, Alert } from 'react-native';
import { Text } from 'react-native-paper';

import { Button } from '../components/formControls/Button';
import { TextInput } from '../components/formControls/TextInput';

import { stylesLogin } from '../theme/loginTheme';

import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { AuthContext } from '../context/AuthContext';
import { useForm } from '../hooks/useForm';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

export const LoginScreen = ({ navigation }: Props) => {


  const { signIn, signInGoogle, errorMessage, removeError } = useContext(AuthContext);

  const { email, password, onChange } = useForm({
     email: '',
     password: '',
  });

const onLoginPressed = () => {
  Keyboard.dismiss();
  signIn({ email, password });
}


useEffect(() => {
  GoogleSignin.configure({
    scopes: ['email'],
    webClientId:
      '286331386798-t1alm3okuie524fq2dkvoh4hckeftn9a.apps.googleusercontent.com',
    offlineAccess: true,
  });
}, []);

  useEffect(() => {

     if (errorMessage.length === 0) return;

     Alert.alert('Login incorrecto', errorMessage,[{
           text: 'Ok',
           onPress: removeError
         }]
     );

  }, [ errorMessage ])
  


  return (

    <>
        <KeyboardAvoidingView
            style={{ flex: 1, backgroundColor: '#5856D6' }}
            behavior={ ( Platform.OS === 'ios') ? 'padding': 'height' }
          >
            <View style={ stylesLogin.container }>

                  <Image 
                    source={require('../assets/gastos.png')}
                    style={stylesLogin.logo}
                  />
                  <TextInput
                  label="Email"
                  returnKeyType="next"
                  value={ email }
                  onChangeText={ (value) => onChange(value, 'email') }
                  autoCapitalize="none"
                  textContentType="emailAddress"
                  keyboardType="email-address"
                />

                <TextInput
                  label="Password"
                  returnKeyType="done"
                  value={password}
                  onChangeText={ (value) => onChange(value, 'password') }
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
                  <Text>Don???t have an account? </Text>
                  <TouchableOpacity onPress={() => navigation.replace('SignUpScreen')}>
                    <Text style={ stylesLogin.link }>Sign up</Text>
                  </TouchableOpacity>
                </View>
            </View>

        </KeyboardAvoidingView>
    </>
  )
}

