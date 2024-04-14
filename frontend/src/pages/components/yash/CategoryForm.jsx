import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from "axios";
import {useAuth} from "../../../context/auth.js"
import { useEffect } from 'react';
import { useState } from 'react';


const CategoryForm = () => {
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
    }, [api, token]); // Depend on api and token for re-fetching when these values change

    return (
        <>
            <h1 style={{ textAlign: "center", marginTop: "20px" }}>Category Form</h1>
            <div className='category_form'>
                <Paper sx={{ width: '80%', margin: 'auto' }}>
                    <TableContainer sx={{ maxHeight: 440, minHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">No.</TableCell>
                                    <TableCell align="center">Category</TableCell>
                                    <TableCell align="center">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
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
    );
}

export default CategoryForm;