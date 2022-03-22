import React, {FC, useEffect, useState} from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Modal, Portal, Provider} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getExpenses} from '../../services/services';
import Cards from '../cards/Cards';
import ExpenseCard from '../cards/ExpenseCard';

const ActivitiesList: FC = props => {
  const [visible, setVisible] = React.useState(false);
  const [expenses, setExpenses] = useState([]);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  useEffect(() => {
    getExpenses({setExpenses});
  }, []);

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
        data={expenses}
        keyExtractor={item => item.key}
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
