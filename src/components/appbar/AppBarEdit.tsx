import React from 'react';
import {Appbar, Text} from 'react-native-paper';
import {stylesAppBar} from '../../theme/appBarTheme';

const AppBarEdit = ({title, onPress}) => {
  const _handleDelete = () => console.log('deleting');

  const _handleEdit = () => console.log('editing');

  return (
    <Appbar.Header style={stylesAppBar.container}>
      <Appbar.BackAction color="#4682B4" onPress={onPress} />
      <Appbar.Content
        title={<Text style={stylesAppBar.title}>{title.expense_title}</Text>}
      />
      <Appbar.Action color="#4682B4" icon="pencil" onPress={_handleEdit} />
      <Appbar.Action color="#4682B4" icon="delete" onPress={_handleDelete} />
    </Appbar.Header>
  );
};

export default AppBarEdit;
