import './ExpenseForm.css';
import React, {useState} from 'react';
const ExpenseForm = () => {
    const [enteredTitle,setEnteredTitle] = useState("");
    const [enterAmount,setEnteredAmount] = useState("");
    const [enteredDate,setEnteredDate] = useState("");

    const AddNewItem = (event) => {
        setEnteredTitle(event.target.value)
    };

    const AmountChange = (event) => {
        setEnteredAmount(event.target.value)
    };

    const DateChange = (event) => {
        setEnteredDate(event.target.value)
    };
    return(
        <>
        <div className="new_exp">
            <div className="n_e">
                <label>Expense Title</label>
                <input type="text" value={enteredTitle} onChange = {AddNewItem} />
            </div>
            <div className="e_Am">
                <label>Expense Amount</label>
                <input type="number" value={enterAmount} onChange={AmountChange} />
            </div>
            <div className="date">
                <label>Date</label>
                <input type="date" value={enteredDate} onChange={DateChange}/>
            </div>
        </div>
        <div className="action">
            <button type = "submit"> submit</button>
        </div>
        </>
    )
}

export default ExpenseForm