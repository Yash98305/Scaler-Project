import React, { useEffect, useState } from 'react'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { useAuth } from '../../../context/auth';
import axios from 'axios';

const ExportData = () => {
    const { api, auth } = useAuth();

    const [currentTransaction, setCurrentTransaction] = useState();

    const token = JSON.parse(localStorage.getItem("auth")).token;
  
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
      useEffect(() => {
        getcurrentTransaction();
      }, [auth]);
      const filteredData = currentTransaction?.map(o => ({
        Title: o.title,
        Amount: o.amount,
        Expense_date: JSON.stringify(o.expense_date)?.substring(1,11),
        Income_date: JSON.stringify(o.income_date)?.substring(1,11),
        Category_name:o.categoryId.name,
        Category_type:o.categoryId.type,
        Bank_name:o.accountId.name,
        Bank_type:o.accountId.type,
        Bank_balance:o.accountId.balance,
    }));
    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(filteredData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
        saveAs(blob, "exportedData.xlsx");
    };
   
  return (
    <div className="App">
    <button onClick={exportToExcel}>Export as Excel</button>
</div>  )
}

export default ExportData