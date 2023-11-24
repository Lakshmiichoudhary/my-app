import ExpenseItem from "./ExpenseItem";
const ExpenseList = props => {
    if(props.items.length === 0){
        return <h2 className="esp_list">Found No Expenses</h2>
    } 
    return <ul className="expense_list">
        {props.items.map((expense) => (
            <ExpenseItem
                key={expense.id}
                name={expense.title}
                price={expense.price}
                date={expense.date}
            /> 
        ))}    
    </ul>     
}
export default ExpenseList
