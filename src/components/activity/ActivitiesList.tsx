import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getExpenses} from '../../services/services';
import Cards from '../cards/Cards';

type Nav = {
  navigate: (value: string, param: any) => void;
};

const ActivitiesList = props => {
  const [expenses, setExpenses] = useState([]);

  const navigation = useNavigation<Nav>();

  useEffect(() => {
    getExpenses({setExpenses});
  }, []);

  function renderItem({item}) {
    return (
      <Cards
        onPress={() => navigation.navigate('DetailsScreen', item)}
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
    </SafeAreaView>
  );
};

export default ActivitiesList;
