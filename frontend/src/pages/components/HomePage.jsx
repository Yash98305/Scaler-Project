import React, { useEffect } from "react";
import CreditCard from "./vansh/CreditCard";
import Record from "./Devendra/Record";
import { useAuth } from "../../context/auth";
import axios from "axios";
import { useState } from "react";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import LineChart from "./vansh/LineChart";
import img from "../../css/income.png";
import img2 from "../../css/expenses.png";
import MovingIcon from "@mui/icons-material/Moving";

import { PieChart } from "@mui/x-charts/PieChart";
import increaseicon from "../../icons/increase.png";
import decreaseicon from "../../icons/decrease.png";
import { motion, reverseEasing } from "framer-motion";

const HomePage = () => {
  const { api, auth } = useAuth();
  const [income, setIncome] = useState();
  const [expense, setExpense] = useState();
  const [balance, setBalance] = useState();
  const [data, setData] = useState();
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
  const getAccountData = async () => {
    try {
      const res = await axios.get(`${api}/account/get`, {
        headers: {
          Authorization: token,
        },
      });
      const getTotalBalance = () => {
        return res.data.account.reduce(
          (acc, account) => acc + Number(account.balance),
          0
        );
      };
      console.log(getTotalBalance());
      setBalance(getTotalBalance());
      setData(res.data.account);
    } catch (err) {
      console.error("Failed to fetch categories:", err);
      // setError("Failed to load categories");
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
    getAccountData();
    getcurrentTransaction();
  }, [auth]);

  console.log(currentTransaction);
  const name = JSON.parse(localStorage.getItem("auth")).user.name;
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
            <CreditCard balance={balance} name={name} />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              padding: "10px 0px",
            }}
          >
            <Record
              amount={income}
              icon={
                <img
                  style={{ height: "30px", margin: "6px", marginLeft: "10px" }}
                  src={img}
                />
              }
              name={"Income"}
              style={{ marginRight: "6" }}
            />
            <Record
              amount={expense}
              icon={
                <img
                  style={{ height: "30px", margin: "6px", marginLeft: "10px" }}
                  src={img2}
                />
              }
              name={"Expense"}
            />
          </div>
        </div>

        <h3 style={{ margin: "5px 0px 10px 5px" }}>Recent Transaction</h3>
        <div
          className="down-leftCont"
          style={{
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
                  <tr key={income.id} style={{}}>
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
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div className="incomename">
                          <div>{income.title}</div>
                          <div>{income.accountId.name}</div>
                          <div> {income.categoryId.name}</div>
                        </div>
                        <div>
                          {income.income_date ? (
                            <motion.img
                              initial={{ y: 20, opacity: 0.01 }}
                              animate={{ y: -1, opacity: 1 }}
                              transition={{ ease: "backOut", duration: 2 }}
                              end = {{ y: 20, opacity: 0.01 }}
                              style={{ width: "40px", height: "40px" }}
                              src={increaseicon}
                              alt="icon"
                            />
                          ) : (
                            <motion.img
                              initial={{ y: -20, opacity: 0.01 }}
                              animate={{ y: 1, opacity: 1 }}
                              transition={{ ease: "easeOut", duration: 2 }}
                              style={{ width: "40px", height: "40px" }}
                              src={decreaseicon}
                              alt="icon"
                            />
                          )}
                        </div>
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
                    <td align="center">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <CurrencyRupeeRoundedIcon sx={{ fontSize: 17 }} />{" "}
                        {income.amount}
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
        style={{
          width: "35%",
          backgroundColor: "#EEEDEB",
          height: "93%",
          margin: "15px",
          marginLeft: "30px",
          marginTop: "22px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PieChart
          series={[
            {
              data: [
                {
                  label: "Expense",
                  value: Math.floor((Number(expense) / Number(income)) * 100),
                },
                {
                  label: "Saving",
                  value:
                    100 - Math.floor((Number(expense) / Number(income)) * 100),
                },
              ],
              innerRadius: 80,
              outerRadius: 100,
              paddingAngle: 5,
              cornerRadius: 5,
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
