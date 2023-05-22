import React from 'react'
import '../Expenses/ExpenseList.css'
import ExpenseItems from '../Expenses/ExpenseItems'


export default function ExpenseList(props) {

    if(props.items.length === 0){
        return <h2 className='expenses-list__fallback'>No Expenses Found</h2>
    }
  return (
    <ul className='expenses-list'>
        {props.items.map((expense)=>(
            <ExpenseItems
                key = {expense.id}
                title = {expense.title}
                amount = {expense.amount}
                date = {expense.date}
            />))};
    </ul>
  )
}
