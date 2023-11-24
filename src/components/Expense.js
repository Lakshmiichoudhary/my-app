import { useState } from "react"
import ExpenseItem from "./ExpenseItem";

const Expense = (props) => {
    const [filterYear,SetFilteryear] = useState("2020")

    const filterHandler = selectedYear => {
        SetFilteryear(selectedYear)
    };
    
    return (
        <>
        <card className = "expenses"/>
        <ExpenseFilter  selected = {filterYear} onChangeFilttter = {filterHandler}/>
        {props.items.map(expense => <ExpenseItem
         name = {expense.title}
         price = {expense.price}
         date = {expense.date}
         />)}
        </>
    )
}
export default Expense;