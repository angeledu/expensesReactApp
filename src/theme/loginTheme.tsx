import { StyleSheet } from 'react-native';
import { theme } from './theme';

export const stylesLogin = StyleSheet.create({
    container :{
      flex: 1,
      backgroundColor: '#f9fafd',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    logo:{
      height: 200,
      width: 200,
      resizeMode: 'cover',
    },
    row: {
      flexDirection: 'row',
      marginTop: 4,
    },
    forgot: {
      fontSize: 13,
      color: theme.colors.secondary,
    },
    link: {
      fontWeight: 'bold',
      color: theme.colors.primary,
    },
});