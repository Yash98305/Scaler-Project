import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { useAuth } from '../../../context/auth';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Search from '../../Layout/Search';

const IncomePageLeft = () => {
    const { api } = useAuth();
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState('');
    const token = JSON.parse(localStorage.getItem("auth")).token;

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await axios.get(`${api}/category/getcategory`, {
                    headers: {
                        Authorization: token,
                    }
                });
                console.log(res.data.categories);
                setCategories(res.data.categories); // Assuming res.data contains the categories array
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
                                    <TableCell align="center">Category</TableCell>
                                    <TableCell align="center">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody sx={{overflow:"hidden"}}>
                                {categories.length > 0 ? categories.map((category, index) => (
                                    <TableRow key={category.id}>
                                        <TableCell align="center">{index + 1}</TableCell>
                                        <TableCell align="center">{category.name}</TableCell>
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