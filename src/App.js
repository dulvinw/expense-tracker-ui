import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

const DUMMY_EXPENSES = [
    {
        id: 1,
        title: 'Car Insurance',
        amount: +200.47,
        date: new Date(2020, 10, 12)
    },
    {
        id: 2,
        title: 'Car Insurance',
        amount: +200.47,
        date: new Date(2020, 10, 12)
    }
];

function App() {

    const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

    const addExpense = savedExpense => {
        setExpenses((previousState) => [savedExpense, ...previousState]);
    }

    return (
        <div>
            <h2>Let's get started!</h2>
            <NewExpense onAddExpense={addExpense} />
            <Expenses expenseItems={expenses} />
        </div>
    );
}

export default App;
