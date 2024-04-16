import React from 'react'
import '../../../css/record.css'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
// import AccountBalanceRoundedIcon from '@material-ui/icons/AccountBalanceRounded';
// import CreditCardIcon from '@material-ui/icons/CreditCard';
function Record({icon,name,amount}) {
  return (

      <div className='d1'>
        <div className='dark-blue-iconbg'>{icon}</div>
        <h3>{name}</h3>
        <h2><CurrencyRupeeIcon/> {amount}</h2>
      </div>

  )
}

export default Record