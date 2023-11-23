import React from 'react';
import ExpenseForm from './ExpenseForm';
import './ExpenseForm.css'

const NewExpense = (props) => {
  const saveExpHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExp(expenseData); 
  };

  return (
    <div className="new-expenses">
      <ExpenseForm onSaveExp={saveExpHandler} />
    </div>
  );
};

export default NewExpense;

