import Chart from "./chart/chart";

const ExpensesChart = props => {
    const ChartDatePoint = [
        { label: 'jan', value:0},
        { label: 'feb', value:0},
        { label: 'mar', value:0},
        { label: 'arp', value:0},
        { label: 'may', value:0},
        { label: 'jun', value:0},
        { label: 'jul', value:0},
        { label: 'Aug', value:0},
        { label: 'set', value:0},
        { label: 'oct', value:0},
        { label: 'nov', value:0},
        { label: 'dec', value:0},
    ]
    for(const expense in props.expense){
        const expenseMonth = expense.date.getMonth();
        ChartDatePoint[expenseMonth].value += expense.amount;
    }
    return <Chart dataPoints={ChartDatePoint}/>
};

export default ExpensesChart