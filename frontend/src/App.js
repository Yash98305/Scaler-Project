import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home" 
import Login from "./pages/Login" 
import Register from "./pages/Register" 
// import Header from "./pages/Header";
import Forgot from "./pages/Forgot";
import Profile from "./pages/Profile";
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
      </Routes>
   
    
    </>
  );
};

export default App;
