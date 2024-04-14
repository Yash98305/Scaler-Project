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

const CategoryPage = () => {
  return (
    <>
      <div className='category_page'>
      <div className='category_page_left'>
        <CategoryForm/>
      </div>
      <div className='category_page_right'>
      <CategoryCreate/>

      </div>
      </div>
      
    </>
  )
}

export default CategoryPage