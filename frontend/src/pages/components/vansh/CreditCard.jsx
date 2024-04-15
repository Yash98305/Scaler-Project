import React from 'react'
import Card from 'react-credit-card-payment'

const CreditCard = () => {
  return (
    <div>
    <Card 
      bankName='Axis Bank'
      cardHolder='Vansh Verma'
      cardNumber='1234567898765432'
      issuer='mastercard'
      theme='dark'
    />
    </div>
  )
}

export default CreditCard