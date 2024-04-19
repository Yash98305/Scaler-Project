import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "../../css/home.css";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../../context/auth";
import Profile from "../Profile";
import Home from "../Home";
import Expenses from "../Expenses";
import Category from "../Category";
import Income from "../Income";
import Budget from "../Budget";
import Statistic from "../Statistic";
import Avatar from "@mui/material/Avatar";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import Search from "./Search";
import { useAnimate } from "framer-motion";
import {motion} from "framer-motion"
import VerticalNav from "./VerticalNav";
import Animate from "../../Animate";
import AnimateBody from "../../AnimateBody";
const Body = ({ obj }) => {
  const { auth, setAuth,mot,setmot,so } = useAuth();
  console.log(auth);
  const objectreturn = (obj) => {
    return obj;
  };
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
    so(true);
  };
  const userId = JSON.parse(localStorage.getItem("auth")).user._id;

  return (
    <>
      <div className="home_con">
        <div>
          <div className="horizontal_nav">
            <div style={{ fontWeight: "bolder", fontSize: "30px" }}>
              CashSavvy
            </div>
            <div>
              <Search />
            </div>
            <div className="horizontal_nav_1">
              <div style={{ paddingRight: "20px" }}>
                <NotificationsActiveRoundedIcon color="secondary" />
              </div>
              <Avatar
                style={{ border: "2px solid black", zIndex: "11 !important" }}
                sx={{ width: 50, height: 50 }}
                src={`http://localhost:8000/api/v1/user/photo/${userId}`}
                alt="error"
              />
            </div>
          </div>
          <div className="home_content">
         {mot?<motion.div className="vertical_nav"  initial={{ x: -40, opacity: 0.01,scale:0.95 }}
                              animate={{ x: 0, opacity: 1,scale:1}} onClick={()=>setmot(false)}
                              transition={{ ease: "backInOut", duration: 1.8}}>
              <VerticalNav setmot={setmot} handleLogout={handleLogout}/>
            </motion.div>: <motion.div className="vertical_nav"
            initial={{ x: 0,opacity:1 }}>
            
              <VerticalNav handleLogout={handleLogout}/>
            </motion.div>}
            
           
            <div className="page" style={{zIndex:999}}>
            <div>
            <AnimateBody app={objectreturn(obj)}/>
            </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
