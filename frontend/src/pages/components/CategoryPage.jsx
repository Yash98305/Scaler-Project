import React from 'react'
import CategoryForm from './yash/CategoryForm'
import { Button } from '@mui/material'

const CategoryPage = () => {
  return (
    <>
      <div className='category_page'>
      <div className='category_page_left'>
        <CategoryForm/>
      </div>
      <div className='category_page_right'></div>
      </div>
      
    </>
  )
}

export default CategoryPage