/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import { View } from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getExpenses, getMoreExpenses } from '../../services/services';
import Cards from '../cards/Cards';

type Nav = {
  navigate: (value: string, param: any) => void;
};

const ActivitiesList = props => {
  const [expenses, setExpenses] = useState<any>([]);

  const [startAfter, setStartAfter] = useState(Object);

  const [postPerPage] = useState(20);

  const [lastPost, setLastPost] = useState(false);

  const navigation = useNavigation<Nav>();

  useEffect(() => {
    getDataExpenses();
  }, []);


 async function getDataExpenses() {
   const allExpenses = await getExpenses(postPerPage);
   setExpenses([...expenses, ...allExpenses.expenses]);
   setStartAfter(allExpenses.lastItem);
 }

 async function getMoreDataExpenses() {
   if (!lastPost){
      const allExpenses = await getMoreExpenses(startAfter, postPerPage);
      setExpenses([...expenses, ...allExpenses.expenses]);
      setStartAfter(allExpenses.lastItem);
      allExpenses.expenses.length === 0 ? setLastPost(true) :  setLastPost(false);
   }
  
}

const loader = () => {
  return (
    !lastPost ?
    <View>
      <ActivityIndicator color='red' size={50} />
    </View> : null
  );
};

  
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
        onEndReached={getMoreDataExpenses}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loader}
      />
    </SafeAreaView>
  );
};

export default ActivitiesList;
