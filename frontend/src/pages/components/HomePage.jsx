import React from 'react'
import CreditCard from './vansh/CreditCard'
import Record from './Devendra/Record'

const HomePage = () => {
  return (

    <div style={{ width: "100%", height: "100%", display: "flex", }}>

      <div className="leftCont" style={{ border: "2px solid red", width: "60%", margin: "10px", borderRadius: "30px", padding: "10px" }}>

        <div className="upper-leftCont" style={{ display: "flex", justifyContent: "space-around" }}>

          <div style={{ border: "2px solid red", width: "50%" }}>
            Dashboard
            <CreditCard />
          </div>

          <div style={{ border: "2px solid red", width: "50%" }}>
            Upcoming Payments
          </div>

        </div>

        <div className="down-leftCont" style={{ border: "2px solid red", borderRadius: "30px", marginTop: "40px" }}>
          Recent Transaction
        </div>
      </div>
      <div className="rightCont" style={{ border: "2px solid red", width: "40%", margin: "10px", borderRadius: "30px" }}>

      </div>
    <div style={{width:"100%",height:"100%"}}>

    </div>
   </div>
  )
}

export default HomePage