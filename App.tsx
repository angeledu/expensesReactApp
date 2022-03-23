/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { theme } from './src/theme/theme';


const App = () => {



  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  )
};



export default App;
