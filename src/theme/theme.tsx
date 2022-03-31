import { DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: '#000000',
    primary: '#560CCE',
    secondary: '#414757',
    error: '#f13a59',
  },
}

export const darkTheme = {
  dark: true,
  colors: {
      primary: '#75CEDB',
      background: 'black',
      card: 'black',
      text: 'white',
      border: 'grey',
      notification: 'grey',
  }
}