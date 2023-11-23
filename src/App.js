import React from 'react';
import ExpenseItem from './components/ExpenseItem';
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
      <ExpenseItem name={expenses[0].name} price={expenses[0].price} date={expenses[0].date} />
      <ExpenseItem name={expenses[1].name} price={expenses[1].price} date={expenses[1].date} />
      <ExpenseItem name={expenses[2].name} price={expenses[2].price} date={expenses[2].date} />
    </>
  );
};

export default App;
