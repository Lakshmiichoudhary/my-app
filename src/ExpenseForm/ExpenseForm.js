import './ExpenseForm.css';
const ExpenseForm = () => {
    const AddNewItem = (event) => {
        console.log(event.target.value);
    }
    return(
        <>
        <div className="new_exp">
            <div className="n_e">
                <label>Expense Title</label>
                <input type="text" onChange = {AddNewItem} />
            </div>
            <div className="e_Am">
                <label>Expense Amount</label>
                <input type="number" />
            </div>
            <div className="date">
                <label>Date</label>
                <input type="date" />
            </div>
        </div>
        <div className="action">
            <button type = "submit"> submit</button>
        </div>
        </>
    )
}

export default ExpenseForm