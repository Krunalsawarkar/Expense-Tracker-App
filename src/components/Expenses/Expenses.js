import React, { useState } from 'react'
import Card from '../UI/Card'
import '../Expenses/Expenses.css'
import ExpenseFilter from '../Expenses/ExpenseFilter'
import ExpenseList from '../Expenses/ExpenseList'
import ExpenseChart from '../Expenses/ExpenseChart'

export default function Expenses(props) {

    const [filteredYear,setFilteredYear] = useState('2023');

    const filterChangeHandler = (selectedYear) =>{
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter((expense => {
        return expense.date.getFullYear().toString()===filteredYear;
    }))

    return (
        <Card  className ='expenses' >
            <ExpenseFilter selected = {filteredYear} onChangeFilter = {filterChangeHandler}></ExpenseFilter>
            <ExpenseChart expenses ={filteredExpenses} />
            <ExpenseList items={filteredExpenses} />
        </Card>   
    )
}
