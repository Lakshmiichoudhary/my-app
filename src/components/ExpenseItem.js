import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props){
    const [price,setPrice] = useState(props.price);

    const changeExpense = () => {
        setPrice("100");
        console.log(price)

    }
    
    return (
        <div className = "expense-item">
            <ExpenseDate date ={props.date}/>
            <h2>{props.name}</h2>
            <div className = "expense-price">RS {price}</div>
            <button onClick ={changeExpense }>change Expense</button>
        </div>

    );  
}
export default ExpenseItem