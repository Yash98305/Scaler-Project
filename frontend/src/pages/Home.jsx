import React, { useEffect, useState } from "react";
import Body from "./Layout/Body.jsx";
import HomePage from "./components/HomePage.jsx"
import Animate from "../Animate.jsx";
import { useAuth } from "../context/auth.js";
const Home = () => {
const {o} = useAuth();

  
  return (
    <>{o?<Animate app={<Body obj={<HomePage/>}/>}/>
:<Body obj={<HomePage/>}/>
    }
      
    </>
    
  );
};

export default Home;
