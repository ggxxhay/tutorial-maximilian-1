import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css";

export default function ExpensesList(props) {
    if (props.data.length == 0) {
        return <p className="expenses-list__fallback">No expenses found.</p>;
    }

    return (
        props.data.map(item =>
            <ExpenseItem key={item.id} date={item.date} title={item.title} amount={item.amount} />
        )
    )
}