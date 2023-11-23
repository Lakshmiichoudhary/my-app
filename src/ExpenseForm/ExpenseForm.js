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

    const submitHandler = (event) => {
        event.preventDefault()
        const ExpData = {
            Title : enteredTitle,
            amount: enterAmount,
            date: new Date(enteredDate)
        }
        console.log(ExpData)
    };
    return(
        <form onSubmit = {submitHandler}>
        <div className="new_exp">
            <div className="n_e">
                <label>Expense Title</label>
                <input type="text"  onChange = {AddNewItem} />
            </div>
            <div className="e_Am">
                <label>Expense Amount</label>
                <input type="number" onChange={AmountChange} />
            </div>
            <div className="date">
                <label>Date</label>
                <input type="date" onChange={DateChange}/>
            </div>
        </div>
        <div className="action">
            <button type = "submit"> submit</button>
        </div>
        </form>
    )
}

export default ExpenseForm