import { useState } from "react";

import ExpenseNew from "./components/ExpenseNew";
import Expenses from "./components/Expenses"

const expensesData = [
  {
    id: '1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: '2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2020, 2, 12)
  },
  {
    id: '3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: '4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2022, 5, 12),
  },
  {
    id: '5',
    title: 'New Desk asd (Wooden)',
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(expensesData);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [{ id: Math.max(prevExpenses.map(ex => ex.id)), ...expense }, ...prevExpenses];
    })
  }

  return (
    <div>
      <ExpenseNew onAddExpense={addExpenseHandler} />
      <Expenses data={expenses} />
    </div>
  );
}

export default App;
