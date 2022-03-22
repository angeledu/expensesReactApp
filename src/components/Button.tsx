import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button as RNButton } from 'react-native-paper';
import { theme } from '../theme/theme';


export type CustomButtonProps = {
  mode?: 'text' | 'outlined' | 'contained';
} & React.ComponentProps<typeof RNButton>;


export const Button: React.FC<CustomButtonProps> = ({ mode, ...props }) => {

  return (
    <RNButton
      style={[
        styles.button,
        mode === 'outlined' && { backgroundColor: theme.colors.surface }
      ]}
      labelStyle={styles.text}
      mode={mode}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
    button: {
      width: '100%',
      marginVertical: 10,
      paddingVertical: 2,
    },
    text: {
      fontWeight: 'bold',
      fontSize: 15,
      lineHeight: 26,
    },
  })
