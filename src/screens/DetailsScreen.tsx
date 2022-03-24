import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import ExpenseCard from '../components/cards/ExpenseCard';
import {RootStackParams} from '../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'DetailsScreen'> {}

const DetailsScreen = ({route, navigation}: Props) => {
  const data = route.params;
  return (
    <View>
      <ExpenseCard details={data} onPress={() => navigation.pop()} />
    </View>
  );
};

export default DetailsScreen;
