/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, KeyboardAvoidingView, Platform, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, TextInput, Text } from 'react-native-paper';
import { loginStyles } from '../theme/loginTheme';
import { useForm } from '../hooks/useForm';

export const LoginScreen = () => {

  const navigator = useNavigation<any>();

  const { email, password, onChange } = useForm({
    email: '',
    password: '' 
 });


  return (
    <>
        
        <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={ (Platform.OS === 'ios') ? 'padding': 'height' }
            >


                <View style={ loginStyles.formContainer }>                
                    {/* Keyboard avoid view */}
                    {/* <WhiteLogo /> */}

                    <Text style={ loginStyles.title }>Login</Text>

                    <Text style={ loginStyles.label }>Email:</Text>
                    <TextInput 
                        placeholder="Ingrese su email:"
                        placeholderTextColor="rgba(255,255,255,0.4)"
                        keyboardType="email-address"
                        underlineColorAndroid="white"
                        style={[ 
                            loginStyles.inputField,
                            ( Platform.OS === 'ios' ) && loginStyles.inputFieldIOS
                        ]}
                        selectionColor="white"

                        onChangeText={ (value) => onChange(value, 'email') }
                        value={ email }


                        autoCapitalize="none"
                        autoCorrect={ false }
                    />


                    <Text style={ loginStyles.label }>Contraseña:</Text>
                    <TextInput 
                        placeholder="******"
                        placeholderTextColor="rgba(255,255,255,0.4)"
                        underlineColorAndroid="white"
                        secureTextEntry
                        style={[ 
                            loginStyles.inputField,
                            ( Platform.OS === 'ios' ) && loginStyles.inputFieldIOS
                        ]}
                        selectionColor="white"

                        onChangeText={ (value) => onChange(value, 'password') }
                        value={ password }

                        autoCapitalize="none"
                        autoCorrect={ false }
                    />


                    {/* Boton login */}
                    <View style={ loginStyles.buttonContainer }>
                        <Button icon="camera" mode="contained" onPress={ () => navigator.navigate('HomeScreen') }>
                           Ingresar
                        </Button>
                    </View>

                    {/* Crear una nueva cuenta */}
                    <View style={ loginStyles.newUserContainer  }>
                        <Button icon="camera" mode="contained" onPress={ () => navigator.navigate('HomeScreen') }>
                            Press me
                        </Button>
                    </View>
                </View>
                
            </KeyboardAvoidingView>
    </>
  )
}
