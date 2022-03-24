/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
// import { theme } from './src/theme/theme';
// import { Provider } from 'react-native-paper';
import { AuthProvider } from './src/context/AuthContext';


const AppState = ({ children }: any ) => {
  return (
    <AuthProvider>
       { children }
    </AuthProvider>
  )
}


const App = () => {

  return (
      <NavigationContainer>
        <AppState>
           <Navigation />
        </AppState>
      </NavigationContainer>
  )
};



export default App;
