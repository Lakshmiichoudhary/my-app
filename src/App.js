import React from 'react';

import Expense from './components/Expense';
import NewExpense from './ExpenseForm/NewExpense';

const App = () => {
  const expenses = [
    { name: "Food", price: 50, date: new Date(2023, 5, 3) },
    { name: "Petrol", price: 100, date: new Date(2023, 2, 20) },
    { name: "Movie", price: 300, date: new Date(2013, 7, 11) }
  ];

  const addExpHandler = (expenseData) => {
    console.log('In App.js');
    console.log(expenseData);
  };

  return (
    <>
      <h1>Expense Tracker</h1>
      <NewExpense onAddExp={addExpHandler} />
      <Expense items = {expenses}/>
    </>  
  );
};

export default App;
