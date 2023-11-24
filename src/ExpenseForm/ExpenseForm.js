import React, { useState } from 'react';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const addNewItem = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChange = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChange = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };

    props.onSaveExp(expenseData); 
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new_exp">
        <div className="n_e">
          <label>Expense Title</label>
          <input type="text" value={enteredTitle} onChange={addNewItem} />
        </div>
        <div className="e_Am">
          <label>Expense Amount</label>
          <input type="number" value={enteredAmount} onChange={amountChange} />
        </div>
        <div className="date">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={dateChange} />
        </div>
      </div>
      <div className="action">
        <button type="submit">Submit</button>
        <button type="click">Cancle</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
