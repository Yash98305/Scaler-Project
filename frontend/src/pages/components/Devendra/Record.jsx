import React from 'react'
import '../../../css/record.css'
// import AccountBalanceRoundedIcon from '@material-ui/icons/AccountBalanceRounded';
// import CreditCardIcon from '@material-ui/icons/CreditCard';
function Record() {
  return (
    <div className='d'>
      <div className='d1'>
      <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><g><rect height="7" width="3" x="4" y="10"/><rect height="7" width="3" x="10.5" y="10"/><rect height="3" width="20" x="2" y="19"/><rect height="7" width="3" x="17" y="10"/><polygon points="12,1 2,6 2,8 22,8 22,6"/></g></g></svg>
        <h3>Income</h3>
        <h1>+ Rs 0</h1>
      </div>
      <div className='d2'>
        {/* <CreditCardIcon style={{fontSize:"43px"}} /> */}
        <h3>Expense</h3>
        <h1>+ Rs 0</h1>
      </div>

    </div>
  )
}

export default Record