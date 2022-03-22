import React from 'react';
import {Card, Paragraph, Text, Title} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import { mockData } from '../../mockData'
import AppBarEdit from '../appbar/AppBarEdit';

const ExpenseCard = ({onPress}) => {
  return (
    <SafeAreaView>
      <AppBarEdit onPress={onPress} />
      <Card>
        <Card.Content>
          <Title>Expense title</Title>
          <Text>Category: expense category</Text>
          <Text>Owner: expense owner</Text>
          <Text>Frequency: expense category</Text>
          <Text>When: date and time</Text>
          <Text>Value: expense value</Text>
        </Card.Content>
      </Card>
    </SafeAreaView>
  )
};

export default ExpenseCard;
