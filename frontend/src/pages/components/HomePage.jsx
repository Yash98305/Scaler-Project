import React, { useEffect } from "react";
import CreditCard from "./vansh/CreditCard";
import Record from "./Devendra/Record";
import { PieChart } from "@mui/x-charts/PieChart";
import { useAuth } from "../../context/auth";
import axios from "axios";
import { useState } from "react";
import CurrencyRupeeRoundedIcon from '@mui/icons-material/CurrencyRupeeRounded';
const HomePage = () => {
  const { api, auth } = useAuth();
  const [income, setIncome] = useState();
  const [expense, setExpense] = useState();
  const [savingp, setSavingp] = useState();
  const [expensep, setExpensep] = useState();
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
            <Record />
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
                  <tr key={income.id}  style={{
             
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
                    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                      <CurrencyRupeeRoundedIcon sx={{fontSize:17}}/> {income.amount}
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
        style={{ border: "2px solid red", width: "40%" }}
      >
        <PieChart
          series={[
            {
              data: [
                {
                  value: Math.floor((expense / income) * 100),
                  label: "Expense",
                },
                {
                  value: Math.floor(((income - expense) / income) * 100),
                  label: "Savings",
                },
              ],
              innerRadius: 78,
              outerRadius: 98,
              paddingAngle: 1,
              cornerRadius: 51,
              startAngle: 0,
              endAngle: 360,
              cx: 150,
              cy: 150,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default HomePage;
