import { useState } from 'react'
import ExpenseFilter from "../filterExpenses/ExpensesFilter"
import Card from "../ui/Card";
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css'
const Expenses = (props) => {
    const [filterDate, setFilterDate] = useState('2021')
    const onSelectedDateValue = (date) => {
        setFilterDate(date)
    }
    const filteredExpenses = props.items.filter(item => {
        return item.date.getFullYear().toString() === filterDate
    })

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filterDate} onSelectedDate={onSelectedDateValue} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    )
}

export default Expenses;