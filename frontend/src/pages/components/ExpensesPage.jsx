import React from 'react'
import ExpensePageLeft from './yash/ExpensePageLeft';
import ExpensePageRight from './vansh/ExpensePageRight';

const ExpensesPage = () => {
  return (
  <>
     <div className='category_page'>
      <div className='category_page_left'>
        <ExpensePageLeft/>
      </div>
      <div className='category_page_right'>
        <ExpensePageRight/>
      </div>
      </div>
  </>
  )
}

export default ExpensesPage