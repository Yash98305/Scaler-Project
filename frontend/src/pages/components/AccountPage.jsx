import React from 'react'
import AccountLeft from './yash/AccountLeft'
import AccountRight from './vansh/AccountRight'

const AccountPage = () => {
  return (<>
    <div className='category_page'>
    <div className='category_page_left'>
      <AccountLeft/>
    </div>
    <div className='category_page_right'>
    <AccountRight/>

    </div>
    </div>
    </>
  )
}

export default AccountPage