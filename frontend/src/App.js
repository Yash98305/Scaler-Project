import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home" 
import Login from "./pages/Login" 
import Register from "./pages/Register" 
// import Header from "./pages/Header";
import Forgot from "./pages/Forgot";
import Profile from "./pages/Profile";
import Category from "./pages/Category.jsx";
import Expenses from "./pages/Expenses.jsx";
import Income from "./pages/Income.jsx";
import Budget from "./pages/Budget.jsx";
import Statistic from "./pages/Statistic.jsx";
const App = () => {
  return (
    <>

   {/* <Header/> */}
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/forgot" element={<Forgot/>}/>
        <Route path="/category" element={<Category/>}/>
        <Route path="/expenses" element={<Expenses/>}/>
        <Route path="/income" element={<Income/>}/>
        <Route path="/budget" element={<Budget/>}/>
        <Route path="/statistic" element={<Statistic/>}/>
      </Routes>
   
    
    </>
  );
};

export default App;
