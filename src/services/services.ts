import firestore from '@react-native-firebase/firestore';

// Get data from Firestore
export async function getExpenses({ setExpenses }) {
    const subscriber = firestore()
      .collection('expenseList')
      .onSnapshot(querySnapshot => {
        const expenses: any = [];

        querySnapshot.forEach(documentSnapshot => {
          expenses.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setExpenses(expenses);
      });

    return () => subscriber();
  }

// Add an expense

// Edit an expense

// Delete an expense
