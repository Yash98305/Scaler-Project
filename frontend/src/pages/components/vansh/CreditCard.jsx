import React from 'react'
import Card from 'react-credit-card-payment'

const CreditCard = ({balance}) => {
  console.log(balance);
  return (
    <>
    <Card 
      bankName={balance}
      cardHolder='Vansh Verma'
      cardNumber='1234567898765432'
      issuer='mastercard'
      theme='dark'
    />
    </>
  )
}

export default CreditCard