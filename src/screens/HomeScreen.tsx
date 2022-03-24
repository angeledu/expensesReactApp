/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../components/formControls/Button';
import { AuthContext } from '../context/AuthContext';

export const HomeScreen = () => {

  const { user, token, logOut } = useContext( AuthContext );

  return (
    <View style={ styles.container }>
            <Text style={ styles.title }>Home Screen</Text>

        <Button mode="contained" onPress={ logOut }>
            Log Out
          </Button>

            <Text>
                { JSON.stringify( user, null, 5 ) }
            </Text>
            <Text>
                { token }
            </Text>

        </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  title: {
      fontSize: 20,
      marginBottom: 20
  }
});