import React from 'react'
import CreditCard from './vansh/CreditCard'
import Record from './Devendra/Record'

const HomePage = () => {
  return (

    <div style={{ width: "100%", height: "100%", display: "flex", }}>

      <div className="leftCont" style={{ border: "2px solid red", width: "60%",  padding: "5px" }}>

        <div className="upper-leftCont" style={{ display: "flex", justifyContent: "space-around"}}>

          <div style={{ border: "2px solid red", width: "50%", display:"flex",alignItems:"center", justifyContent:"center" , padding:'10px 0px'}}>
            <CreditCard />
          </div>

          <div style={{ border: "2px solid red", width: "50%", display:"flex",justifyContent:"space-around" , padding:'10px 0px'}}>
            <Record />
          </div>

        </div>

        <div className="down-leftCont" style={{ border: "2px solid red", borderRadius: "30px", marginTop: "40px", }}>
          Recent Transaction
          <table style={{width:"100%",tableLayout:"fixed"}}>
              <thead>
                <tr>
                  <th
                    style={{
                      width: "15%",
                    }}
                    align="center"
                  >
                    No.
                  </th>
                  <th
                    style={{
                      width: "60%",
                    }}
                    align="center"
                  >
                    Category
                  </th>
                  <th align="center">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* {categories.length > 0 ? (
                  categories.map((category, index) => (
                    <tr key={category.id}>
                      <td
                        style={{
                          width: "15%",
                        }}
                        align="center"
                      >
                        {index + 1}
                      </td>
                      <td
                        style={{
                          width: "60%",
                        }}
                        align="center"
                      >
                        {category.name}
                      </td>
                      <td style={{}} align="center">
                        Edit/Delete
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} align="center">
                      {error || "No categories found"}
                    </td>
                  </tr>
                )} */}
              </tbody>
            </table>
        </div>
      </div>
      <div className="rightCont" style={{ border: "2px solid red", width: "40%", margin: "10px", borderRadius: "30px" }}>

      </div>
    </div>
  )
}

export default HomePage