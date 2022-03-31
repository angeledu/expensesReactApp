/* eslint-disable prettier/prettier */
import firestore from '@react-native-firebase/firestore';

// Get data from Firestore
export const getExpenses = async (postPerPage) => {
  const expenses: any = [];

  const querySnapshot = await firestore()
  .collection('expenseList')
  .limit(postPerPage)
  .get();

  const lastItem = querySnapshot.docs[querySnapshot.docs.length-1];

  querySnapshot.forEach(expen => {
    expenses.push({
      ...expen.data(),
      key: expen.id,
    });
  });
  return {expenses, lastItem};
}


export const getMoreExpenses = async (starAfter, postPerPage) => {
  const expenses: any = [];

  const querySnapshot = await firestore()
  .collection('expenseList')
  .startAfter(starAfter)
  .limit(postPerPage)
  .get();

  const lastItem = querySnapshot.docs[querySnapshot.docs.length-1];

  querySnapshot.forEach(expen => {
    expenses.push({
      ...expen.data(),
      key: expen.id,
    });
  });
  return {expenses, lastItem};
}



// Add an expense

// Edit an expense

// Delete an expense
