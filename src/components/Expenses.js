import React, { useState } from "react";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {
    const [filterYear, setFilterYear] = useState('2021');

    const onFilterChange = value => {
        setFilterYear(value);
    }

    const filteredData = props.data.filter(item => item.date.getFullYear().toString() === filterYear);

    return (
        <React.Fragment>
            <Card className="expenses">
                <ExpensesFilter value={filterYear} onChange={onFilterChange} />
                <ExpensesChart expenses={filteredData} />
                <ExpensesList data={filteredData} />
            </Card>
        </React.Fragment>
    )
}