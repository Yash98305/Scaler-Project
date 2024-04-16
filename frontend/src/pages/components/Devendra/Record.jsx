import React from 'react'
import '../../../css/record.css'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
// import AccountBalanceRoundedIcon from '@material-ui/icons/AccountBalanceRounded';
// import CreditCardIcon from '@material-ui/icons/CreditCard';
function Record({icon,name,amount}) {
  return (

      <div className='d1'>
      {icon}
        <h3>{name}</h3>
        <h1><CurrencyRupeeIcon/> {amount}</h1>
      </div>

  )
}

export default Record