import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Modal, Portal, Provider, Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {mockData} from '../../mockData';
import Cards from '../cards/Cards';
import ExpenseCard from '../cards/ExpenseCard';

const ActivitiesList: FC = props => {
  const [visible, setVisible] = React.useState(false);
  const dataURL: any = mockData;

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  function renderItem({item}) {
    return (
      <Cards
        onPress={showModal}
        title={item.expense_title}
        subtitle={item.expense_value}
        icon={item.icon}
      />
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        data={dataURL}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
      <Provider>
        <Portal>
          <Modal visible={visible} onDismiss={hideModal}>
            <View>
              <ExpenseCard onPress={hideModal} />
            </View>
          </Modal>
        </Portal>
      </Provider>
    </SafeAreaView>
  );
};

export default ActivitiesList;
