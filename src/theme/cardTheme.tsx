import {StyleSheet} from 'react-native';

export const stylesCard = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#f9fafd',
    border: '1px solid black',
    borderRadius: 10,
    elevation: 5,
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    margin: 5,

    // Shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  logo: {
    backgroundColor: '#4682B4',
  },
});
