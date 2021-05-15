import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

import './Expenses.css'
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('');

    const handleFilterUpdate = (filteredYear) => {
        setFilteredYear(filteredYear);
    }

    const filteredExpenses = props.expenseItems.filter(expenseItem => {
        return expenseItem.date.getFullYear() === parseInt(filteredYear);
    })

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onUpdateFilter={handleFilterUpdate}/>
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;