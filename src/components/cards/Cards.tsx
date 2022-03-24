import React, {FC} from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler'
import {Avatar, Card} from 'react-native-paper';
import { stylesCard } from '../../theme/cardTheme'
import {CardsProps} from '../../types/types';

const Cards: FC<CardsProps> = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Card.Title
        style= {stylesCard.container}
        title={props.title}
        subtitle={`Your expense were: ${props.subtitle}`}
        left={() => <Avatar.Icon style= {stylesCard.logo} size={48} icon={props.icon} />}
      />
    </TouchableOpacity>
  );
};

export default Cards;
