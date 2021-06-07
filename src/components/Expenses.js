import React, { useState } from "react";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";

export default function Expenses(props) {
    const [filterYear, setFilterYear] = useState('2021');

    const expentseItems = props.data.map((item) => {
        return <ExpenseItem key={item.id} date={item.date} title={item.title} amount={item.amount} />;
    })

    const onFilterChange = value => {
        console.log(value);
        setFilterYear(value);
    }

    return (
        <React.Fragment>
            <Card className="expenses">
                <ExpensesFilter value={filterYear} onChange={onFilterChange} />
                {expentseItems}
            </Card>
        </React.Fragment>
    )
}