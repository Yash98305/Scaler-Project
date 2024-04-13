import React from "react";
import { NavLink } from "react-router-dom";
import "../css/home.css";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../context/auth";
const Home = () => {
  const {auth,setAuth} = useAuth();
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
    <>
      <div className="home_con">
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
                  <NavLink to="/payment">Payment</NavLink>
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
            <div className="page"><div>jsjj</div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
