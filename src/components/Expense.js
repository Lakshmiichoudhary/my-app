import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpensesList"; 
import ExpensesChart from "./ExpensesChart";

const Expense = (props) => {
    const [filterYear, setFilterYear] = useState("2020");

    const filterHandler = (selectedYear) => {
        setFilterYear(selectedYear);
    };

    const filterExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filterYear;
    });
    
    return (
        <>
            <div className="expenses"></div>
            <ExpenseFilter selected={filterYear} onChangeFilter={filterHandler} />
            <ExpensesChart expense = {filterExpenses}/>
            <ExpenseList items = {filterExpenses}/>
        </>
    );
};

export default Expense;
