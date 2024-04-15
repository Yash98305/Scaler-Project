import React from 'react'
import '../../../css/record.css'
import AccountBalanceRoundedIcon from '@material-ui/icons/AccountBalanceRounded';
import CreditCardIcon from '@material-ui/icons/CreditCard';
function Record() {
  return (
    <div className='d'>
      <div className='d1'>
        <AccountBalanceRoundedIcon style={{fontSize:"43px"}} />
        <h3>Income</h3>
        <h1>+ Rs 0</h1>
      </div>
      <div className='d2'>
        <CreditCardIcon style={{fontSize:"43px"}} />
        <h3>Expense</h3>
        <h1>- Rs 0</h1>
      </div>

    </div>
  )
}

export default Record