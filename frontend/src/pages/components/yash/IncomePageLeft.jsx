import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { useAuth } from '../../../context/auth';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Search from '../../Layout/Search';

const IncomePageLeft = () => {
    const { api } = useAuth();
    const [income, SetIncome] = useState([]);
    const [error, setError] = useState('');
    const token = JSON.parse(localStorage.getItem("auth")).token;

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await axios.get(`${api}/income/get`, {
                    headers: {
                        Authorization: token,
                    }
                });
                console.log(res.data.income);
                SetIncome(res.data.income); // Assuming res.data contains the categories array
            } catch (err) {
                console.error('Failed to fetch categories:', err);
                setError('Failed to load categories');
            }
        };

        fetchCategories();
    }, [api, token]);
  return (
    <>
     <h2 style={{ textAlign: "center", marginTop: "20px" }}>Income Recordes</h2>
            <div className='category_form'>
                <Paper sx={{ width: '80%', margin: 'auto' }}>
                    <TableContainer sx={{ maxHeight: 440, minHeight: 440 }}>
                        <Table aria-label="sticky table">
                        <TableHead sx={{position:"sticky"}}>
                                <TableRow>
                                    <TableCell align="center" colSpan={1}>
                                        <Button>PDF</Button>
                                    </TableCell>
                                    <TableCell align="center" colSpan={1}>
                                        <Button>Excel</Button>
                                    </TableCell>
                                    <TableCell align="center" colSpan={10}>
                                    <Search/>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableHead sx={{position:"sticky"}}>
                                <TableRow>
                                    <TableCell align="center">No.</TableCell>
                                    <TableCell align="center">Name</TableCell>
                                    <TableCell align="center">Date</TableCell>
                                    <TableCell align="center">Amount</TableCell>
                                    <TableCell align="center">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody sx={{overflow:"hidden"}}>
                                {income.length > 0 ? income.map((income, index) => (
                                    <TableRow key={income.id}>
                                        <TableCell align="center">{index + 1}</TableCell>
                                        <TableCell align="center">{income.title}</TableCell>
                                        <TableCell align="center">{income.income_date}</TableCell>
                                        <TableCell align="center">{income.amount}</TableCell>
                                        <TableCell align="center">{income.income}</TableCell>
                                        <TableCell align="center">Edit/Delete</TableCell>
                                    </TableRow>
                                )) : (
                                    <TableRow>
                                        <TableCell colSpan={3} align="center">
                                            {error || "No categories found"}
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </div>
    </>
  )
}

export default IncomePageLeft