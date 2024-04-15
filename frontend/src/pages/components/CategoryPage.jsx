import CategoryForm from './yash/CategoryForm'
import { Button } from '@mui/material'

import CategoryCreate from './vansh/CategoryCreate';
import * as React from 'react';

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useAuth } from '../../context/auth';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const CategoryPage = () => {
  const { api } = useAuth();
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  const token = JSON.parse(localStorage.getItem("auth")).token;
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(`${api}/category/getcategory`, {
          headers: {
            Authorization: token,
          },
        });
        console.log(res.data.categories);
        setCategories(res.data.categories); // Assuming res.data contains the categories array
      } catch (err) {
        console.error("Failed to fetch categories:", err);
        setError("Failed to load categories");
      }
    };

    fetchCategories();
  }, [api, token,open]); // Depend on api and token for re-fetching when these values change



  return (
    <>
      <div className='category_page'>
      <div className='category_page_left'>
        <CategoryForm 
         categories={categories} setCategories={setCategories} error={error} setError={setError}
       />
      </div>
      <div className='category_page_right'>
      <CategoryCreate open={open} setOpen={setOpen}/>

      </div>
      </div>
      
    </>
  )
}

export default CategoryPage