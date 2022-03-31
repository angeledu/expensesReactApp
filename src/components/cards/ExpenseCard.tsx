import React from 'react';
import {View} from 'react-native';
import {Avatar, Card, Text, Title} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {detailTheme} from '../../theme/detailTheme';
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
      <Card style={detailTheme.container}>
        <Card.Content style={detailTheme.content}>
          <Avatar.Icon style={detailTheme.logo} size={150} icon={icon} />
          <Title style={detailTheme.titleStyle}>{expense_title}</Title>
          <Text style={detailTheme.text}>Category: {expense_category}</Text>
          <Text style={detailTheme.text}>Owner: {expense_owner}</Text>
          <Text style={detailTheme.text}>Frequency: {expense_frequency}</Text>
          <Text style={detailTheme.text}>
            When: {date} {time}
          </Text>
          <Text style={detailTheme.text}> Value: {expense_value}</Text>
        </Card.Content>
      </Card>
    </SafeAreaView>
  );
};

export default ExpenseCard;
