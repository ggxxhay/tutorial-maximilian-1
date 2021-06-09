import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './ExpenseNew.css';

const ExpenseNew = (props) => {
  const [formVisible, setFormVisible] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setFormVisible(false);
  };

  const cancelExpenseDataHandler = () => {
    setFormVisible(false);
  }

  const onAddNewExpenseClick = () => {
    setFormVisible(true);
  }

  return (
    <div className='new-expense'>
      {formVisible ?
        < ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelExpenseDataHandler} />
        :
        <button onClick={onAddNewExpenseClick}>Add new expense</button>
      }
    </div>
  );
};

export default ExpenseNew;