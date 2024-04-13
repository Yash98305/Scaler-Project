import React, { useEffect } from 'react'
import { NavLink,useLocation,useNavigate } from "react-router-dom";
import "../../css/home.css";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../../context/auth";
import Profile from '../Profile';
import Home from '../Home';
import Expenses from "../Expenses"
import Category from "../Category"
import Income from "../Income"
import Budget from "../Budget"
import Statistic from "../Statistic"
const Body = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const {auth,setAuth} = useAuth();
    const e=props.e
    console.log(e);
    const path =()=>{
        if(props.e==='/profile')
              return <Profile/>;
        //  if(e==='/home')
        //       return <Home />;
        //       if(e==='/category')
        //       return <Category />;
        //       if(e==='/expenses')
        //       return <Expenses />;
        //       if(e==='/income')
        //       return <Income />;
        //       if(e==='/budget')
        //       return <Budget />;
        //       if(e==='/statistic')
        //       return <Statistic />;
          }
    
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    <>  <div className="home_con">
    <div>
      <div className="horizontal_nav">
        <div>logo</div>
        <div>search</div>
        <div className="horizontal_nav_1">
          <div>ni</div>
          <img src="" alt="error" />
        </div>
      </div>
      <div className="home_content">
        <div className="vertical_nav">
          <ul>
            <li>
              <NavLink to="/home">Overview</NavLink>
            </li>
            <li>
              <NavLink to="/category">Categories</NavLink>
            </li>
            <li>
              <NavLink to="/expenses">Expenses</NavLink>
            </li>
            <li>
              <NavLink to="/income">Income</NavLink>
            </li>
            <li>
              <NavLink to="/budget">Budget</NavLink>
            </li>
            <li>
              <NavLink to="/statistic">Statistics</NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to="/profile">Account</NavLink>
            </li>
            <li>
              <NavLink to='/login' onClick={handleLogout}>Log Out</NavLink>
            </li>
          </ul>
        </div>
        <div className="page">{
         e ==="/profile"?<Profile/>:null
        }</div>
      </div>
    </div>
  </div>
  </>
  )
}

export default Body