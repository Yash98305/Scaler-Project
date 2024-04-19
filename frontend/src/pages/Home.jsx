import React, { useEffect, useState } from "react";
import Body from "./Layout/Body.jsx";
import HomePage from "./components/HomePage.jsx"
import Animate from "../Animate.jsx";
import { useAuth } from "../context/auth.js";
import ErrorPage from "./ErrorPage.jsx";
const Home = () => {
const {auth} = useAuth();
useEffect(()=>{

},[auth])
  
  return (
    <><Animate app={<Body obj={<HomePage/>}/>}/>

      
    </>
    
  );
};

export default Home;
