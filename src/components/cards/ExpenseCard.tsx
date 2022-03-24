import React from 'react';
import {Avatar, Card, Text, Title} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppBarEdit from '../appbar/AppBarEdit';

const ExpenseCard = ({details, onPress}) => {
  const {
    expense_title,
    expense_category,
    expense_value,
    expense_owner,
    expense_frequency,
    date,
    icon,
    time,
  } = details;
  return (
    <SafeAreaView>
      <AppBarEdit title={details} onPress={onPress} />
      <Card>
        <Card.Content>
          <Title>{expense_title}</Title>
          <Text>Category: {expense_category}</Text>
          <Text>Owner: {expense_owner}</Text>
          <Text>Frequency: {expense_frequency}</Text>
          <Text>When: {date} {time}</Text>
          <Text>Value: {expense_value}</Text>
          <Avatar.Icon size={24} icon={icon} />
        </Card.Content>
      </Card>
    </SafeAreaView>
  );
};

export default ExpenseCard;
