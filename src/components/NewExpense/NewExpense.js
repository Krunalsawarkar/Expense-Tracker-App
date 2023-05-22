
import './NewExpense.css'
import React, { useState } from 'react'
import ExpenseForm from '../NewExpense/ExpenseForm'

export default function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  const startHandler = () => {
    setIsEditing(true);
  }

  const stopHandler = () => {
    setIsEditing(false);
  }


  const saveExpenseHandler = (enteredExpenseData) => {


    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onChangeExpenseHandler(expenseData);
    setIsEditing(false);
  }



  return (
    <div className='new-expense' >
      {!isEditing && (<button onClick={startHandler}> Add New Expense </button>)}
      {isEditing && 
      (<ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancel ={stopHandler} />)
      }
       
    </div >
  )
}
