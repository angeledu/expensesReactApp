/* eslint-disable prettier/prettier */
import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { Keyboard, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import { Button } from '../components/formControls/Button';
import { TextInput } from '../components/formControls/TextInput';
import { AuthContext } from '../context/AuthContext';
import { useForm } from '../hooks/useForm';

interface Props extends StackScreenProps<any,any>{}

export const SignUpScreen = ( { navigation }: Props ) => {

 const { signUp } = useContext(AuthContext);



 const { nombre, email, password, confirmPassword, onChange } = useForm({
    nombre: '',
    email: '',
    password: '',
    confirmPassword: '',
 });

 const onRegister = () => {
    console.log({email, password});
    Keyboard.dismiss();
    signUp({
       nombre,
        email,
        password
    });
}

  return (

    <View style={styles.container}>
        <Text style={styles.text}>Create an account</Text>

        <TextInput
            label="Nombre"
            onChangeText={ (value) => onChange(value, 'nombre') }
            value = { nombre }
            placeholder="Nombre"
            autoCapitalize="words"
            autoCorrect={ false }
        />

        <TextInput
            label="Email"
            onChangeText={ (value) => onChange(value, 'email') }
            value = { email }
            placeholder="Email"
            autoCapitalize="none"
            textContentType="emailAddress"
            keyboardType="email-address"
        />


        <TextInput
            label="Password"
            returnKeyType="done"
            onChangeText={ (value) => onChange(value, 'password') }
            value = { password }
            placeholder="Password"
            secureTextEntry={true}
        />

        <TextInput
            label="confirmPassword"
            onChangeText={ (value) => onChange(value, 'confirmPassword') }
            returnKeyType="done"
            value={confirmPassword}
            placeholder="Password"
            secureTextEntry={true}
        />



        <Button
            mode="contained"
            onPress={ onRegister }
            style={{ marginTop: 24 }}
        >
        Sign Up
      </Button>


   
    <TouchableOpacity
      style={styles.navButton}
      onPress={() => navigation.navigate('LoginScreen')}>
      <Text style={styles.navButtonText}>Have an account? Sign In</Text>
    </TouchableOpacity>
  </View>
    
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f9fafd',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    text: {
      fontSize: 28,
      marginBottom: 10,
      color: '#051d5f',
    },
    navButton: {
      marginTop: 15,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
      fontFamily: 'Lato-Regular',
    },
    textPrivate: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginVertical: 35,
      justifyContent: 'center',
    },
    color_textPrivate: {
      fontSize: 13,
      fontWeight: '400',
      fontFamily: 'Lato-Regular',
      color: 'grey',
    },
  });
  