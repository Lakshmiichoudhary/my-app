import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter"; 

const Expense = (props) => {
    const [filterYear, setFilterYear] = useState("2020");

    const filterHandler = (selectedYear) => {
        setFilterYear(selectedYear);
    };

    const filterExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filterYear;
    });
    
    let expensesContent = <p>No expense found</p>;

    if(filterExpenses.length > 0){
        expensesContent = filterExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                name={expense.title}
                price={expense.price}
                date={expense.date}
            /> 
        ))   
    }
    return (
        <>
            <div className="expenses"></div>
            <ExpenseFilter selected={filterYear} onChangeFilter={filterHandler} />
            {expensesContent}
        </>
    );
};

export default Expense;
