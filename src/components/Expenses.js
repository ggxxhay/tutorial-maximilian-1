import Card from "./Card";
import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";

export default function Expenses(props) {
    const expentseItems = props.data.map((item) => {
        return <ExpenseItem key={item.id} date={item.date} title={item.title} amount={item.amount} />;
    })

    return (
        <Card className="expenses">
            {expentseItems}
        </Card>
    )
}