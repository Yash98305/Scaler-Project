import {
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
  } from "@mui/material";
  import React from "react";
  import { useAuth } from "../../../context/auth";
  import { useState } from "react";
  import { useEffect } from "react";
  import axios from "axios";
  import Search from "../../Layout/Search";
  
  const BudgetPageLeft = ({open,setOpen}) => {
    const { auth,api } = useAuth();
    const [income, SetIncome] = useState([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const res = await axios.get(`${api}/income/get`, {
            headers: {
              Authorization: auth?.token,
            },
          });
          console.log(res);
          console.log(res.data.income);
          SetIncome(res.data.income); // Assuming res.data contains the categories array
        } catch (err) {
          console.error("Failed to fetch categories:", err);
          setError("Failed to load categories");
        }
      };
  
      fetchCategories();
    }, [api, auth,open]);
    return (
      <>
        <h2 style={{ textAlign: "center", marginTop: "20px" }}>Your Incomes</h2>
        <div className="category_form">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "90%",
            }}
          >
            <div>
              <table>
                <thead>
                  <tr>
                    <th
                      style={{
                        width: "10%",
                      }}
                      align="center"
                    >
                      No.
                    </th>
                    <th
                      style={{
                        width: "38%",
                      }}
                      align="center"
                    >
                      Name
                    </th>
                    <th
                      style={{
                        width: "20%",
                      }}
                      align="center"
                    >
                      Date
                    </th>
  
                    <th
                      style={{
                        width: "20%",
                      }}
                      align="center"
                    >
                      Amount
                    </th>
  
                    <th align="center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {income?.length > 0 ? (
                    income?.map((income, index) => (
                      <tr key={income._id}>
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
                            width: "38%",
                            paddingLeft:"20px"
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
                          {JSON.stringify(income.income_date).substring(1, 11)}
                        </td>
                        <td
                          style={{
                            width: "20%",
                          }}
                          align="center"
                        >
                          {income.amount}
                        </td>
                        <td align="center">Edit/Delete</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={3} align="center">
                        {error || "No categories found"}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default BudgetPageLeft;
  