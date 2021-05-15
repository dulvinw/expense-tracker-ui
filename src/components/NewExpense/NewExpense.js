import './NewExpense.css';

import ExpenseForm from "./ExpenseForm";
import GotoForm from "./GotoForm";

import {useState} from "react";

const NewExpense = (props) => {
    const [viewForm, setViewForm] = useState(false)

    const saveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setViewForm(false);
    }

    const openForm = event => {
        setViewForm(true);
    }

    const closeForm = event => {
        setViewForm(false);
    }

    return <div className='new-expense'>
        {viewForm ? <ExpenseForm onSaveExpenseData={saveExpenseData} onCancel={closeForm}/> :
                    <GotoForm setViewForm={openForm} />
        }
    </div>
}

export default NewExpense;