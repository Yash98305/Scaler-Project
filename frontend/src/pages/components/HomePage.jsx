import React, { useEffect } from "react";
import CreditCard from "./vansh/CreditCard";
import Record from "./Devendra/Record";
import { PieChart } from "@mui/x-charts/PieChart";
import { useAuth } from "../../context/auth";
import axios from "axios";
import { useState } from "react";
import CurrencyRupeeRoundedIcon from '@mui/icons-material/CurrencyRupeeRounded';
import LineChart from "./vansh/LineChart";
import img from "../../css/income.png"
import img2 from "../../css/expenses.png"
import MovingIcon from '@mui/icons-material/Moving';



const HomePage = () => {
  const { api, auth } = useAuth();
  const [income, setIncome] = useState();
  const [expense, setExpense] = useState();
  const [currentTransaction, setCurrentTransaction] = useState();
  const token = JSON.parse(localStorage.getItem("auth")).token;
  const getIncome = async () => {
    try {
      const res = await axios.get(`${api}/income/gettotalincome`, {
        headers: {
          Authorization: token,
        },
      });
      setIncome(res.data.totalIncome);
    } catch (e) {
      console.log(e);
    }
  };
  const getcurrentTransaction = async () => {
    try {
      const res = await axios.get(`${api}/user/currenttransaction`, {
        headers: {
          Authorization: token,
        },
      });
      console.log(res.data.data);
      setCurrentTransaction(res.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const getExpense = async () => {
    try {
      const res = await axios.get(`${api}/expense/gettotalexpense`, {
        headers: {
          Authorization: token,
        },
      });
      setExpense(res.data.totalExpense);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getExpense();
    getIncome();
    getcurrentTransaction();
  }, [auth]);

  console.log(expense, income);

  return (
    <div style={{ width: "100%", height: "100%", display: "flex" }}>
      <div className="leftCont" style={{ width: "60%", padding: "5px" }}>
        <div
          className="upper-leftCont"
          style={{ display: "flex", justifyContent: "space-around" }}
        > 
          <div
            style={{
              width: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px 0px",
            }}
          > 
            <CreditCard />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              padding: "10px 0px",
            }}
          >
            <Record amount={1200} icon={<img style={{height:"30px", margin:"6px", marginLeft:"10px",}} src={img}/> 
            } name={"Income"} style={{ marginRight: "6" }} />
            <Record amount={1200} icon={<img style={{height:"30px", margin:"6px", marginLeft:"10px", }} src={img2}/>
            } name={"Expense"}/>
          </div>
        </div>

        <h3 style={{ margin: "5px 0px 10px 5px" }}>Recent Transaction</h3>
        <div
          className="down-leftCont"
          style={{
            border: "2px solid red",
            padding: "0px 10px",
            height: "50vh",
          }}
        >
          <table>
            <tbody
              style={{
                height: "47vh",
                width: "750px",
              }}
            >
              {currentTransaction?.length > 0 ? (
                currentTransaction.map((income, index) => (
                  <tr key={income.id} style={{

                    border: "2px solid red",
                  }}>
                    <td
                      style={{
                        width: "10%",
                      }}
                      align="center"
                    >
                      {index + 1}
                    </td>
                    <td
                      style={{
                        width: "50%",
                        paddingLeft: "20px",
                      }}
                    >
                      <div className="incomename">
                        <div>{income.title}</div>
                        <div>{income.accountId.name}</div>
                        <div> {income.categoryId.name}</div>
                      </div>
                    </td>
                    <td
                      style={{
                        width: "20%",
                      }}
                      align="center"
                    >
                      {JSON.stringify(income.income_date)?.substring(1, 11) ||
                        JSON.stringify(income.expense_date)?.substring(1, 11)}
                    </td>
                    <td

                      align="center"
                    >
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <CurrencyRupeeRoundedIcon sx={{ fontSize: 17 }} /> {income.amount}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} align="center">
                    {"No categories found"}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div
        className="rightCont"
        style={{ width: "35%", backgroundColor: "#EEEDEB", height: "93%", margin: "15px", borderRadius: "50px", marginLeft: "30px", marginTop: "22px" }}
      >
        {/* <LineChart/> */}
      </div>
    </div>
  );
};

export default HomePage;
