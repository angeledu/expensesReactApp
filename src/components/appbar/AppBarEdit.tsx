import React from 'react'
import { Appbar } from 'react-native-paper'

const AppBarEdit = ({onPress}) => {
  const _handleDelete = () => console.log('deleting');

  const _handleEdit = () => console.log('editing');

  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={onPress} />
      <Appbar.Content title="expense title" />
      <Appbar.Action  icon="delete" onPress={_handleDelete} />
      <Appbar.Action icon="pencil" onPress={_handleEdit} />
    </Appbar.Header>
  );
}

export default AppBarEdit