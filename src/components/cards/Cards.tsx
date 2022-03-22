import React, {FC} from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler'
import {Avatar, Card, Divider} from 'react-native-paper';
import {CardsProps} from '../../types/types';

const Cards: FC<CardsProps> = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Card.Title
        title={props.title}
        subtitle={`Your expense were: ${props.subtitle}`}
        left={props => <Avatar.Icon {...props} icon="cash-check" />}
      />
      <Divider />
    </TouchableOpacity>
  );
};

export default Cards;
