import * as React from "react";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { useAuth } from "../../../context/auth.js";
import { useEffect } from "react";
import { useState } from "react";
import { Hidden } from "@mui/material";
import "../../../css/home.css";
const CategoryForm = ({setError,error,setCategories,categories}) => {

  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>Your Category</h2>
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
                {categories.length > 0 ? (
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
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default CategoryForm;
