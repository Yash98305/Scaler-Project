import React, { useEffect } from "react";
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
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import PaidRoundedIcon from "@mui/icons-material/PaidRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import ArchiveRoundedIcon from "@mui/icons-material/ArchiveRounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import InventoryRoundedIcon from "@mui/icons-material/InventoryRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import Search from "./Search";
const Body = ({ obj }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
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
  };
  const userId = JSON.parse(localStorage.getItem("auth")).user._id;

  return (
    <>
      {" "}
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
            <div className="vertical_nav">
              <ul>
                <NavLink to="/home">
                  <li>
                    <HomeRoundedIcon color="secondary" />
                    <span style={{ paddingLeft: "10px" }}>Overview</span>
                  </li>
                </NavLink>
                <NavLink to="/category">
                <li>
                  <InventoryRoundedIcon color="secondary" />
                  <span style={{ paddingLeft: "10px"}}>Categories</span>
                  
                </li>
                  </NavLink>
                  <NavLink to="/expenses">

                <li>
                  <ArchiveRoundedIcon color="secondary" />
                  <span>Expenses</span>
                </li>
                </NavLink>
                <NavLink to="/income">

                <li>
                  <AccountBalanceWalletRoundedIcon color="secondary" />
                  <span>Income</span>
                </li>
                </NavLink>
                <NavLink to="/budget">

                <li>
                  <PaidRoundedIcon color="secondary" />
                  <span>Budget</span>
                </li>
                </NavLink>
                <NavLink to="/statistic">

                <li>
                  <InsightsRoundedIcon color="secondary" />
                  <span>Statistics</span>
                </li>
                </NavLink>
                <NavLink to="/account">

                <li>
                  <InsightsRoundedIcon color="secondary" />
                  <span>Account</span>
                </li>
                </NavLink>
              </ul>
              <ul>
              <NavLink to="/profile">
                <li style={{width:"150px"}}>
                  <AccountBoxRoundedIcon color="secondary" />
                  <span>Profile</span>
                  
                </li>
                </NavLink>
                  <NavLink to="/login" onClick={handleLogout}>
                <li>
                  <LogoutRoundedIcon color="secondary" />
                  <span>Log Out</span> 
                </li>
                  </NavLink>
              </ul>
            </div>
            <div className="page">
              <div>{objectreturn(obj)}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
