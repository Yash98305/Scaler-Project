import React, { useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import PaidRoundedIcon from "@mui/icons-material/PaidRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ArchiveRoundedIcon from "@mui/icons-material/ArchiveRounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import InventoryRoundedIcon from "@mui/icons-material/InventoryRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import { useAnimationFrame } from 'framer-motion';
import { useAuth } from '../../context/auth';

const VerticalNav = ({handleLogout}) => {
  const location= useLocation();
    const {so} = useAuth()
    const lpath = location.pathname
    useEffect(()=>{
    },[location])
   return (
    <><ul onClick={()=>so?.(false)}>
    <NavLink to="/home" >
      <li style={{backgroundColor:`${lpath=="/home" ? '#ccc' : ''}` }}>
        <HomeRoundedIcon color="secondary" />
        <span style={{ paddingLeft: "10px" }}>Overview</span>
      </li>
    </NavLink>
    <NavLink to="/category">
    <li style={{backgroundColor:`${lpath=="/category" ? '#ccc' : ''}` }}>
      <InventoryRoundedIcon color="secondary" />
      <span style={{ paddingLeft: "10px"}}>Categories</span>
      
    </li>
      </NavLink>
      <NavLink to="/expenses">

    <li style={{backgroundColor:`${lpath=="/expenses" ? '#ccc' : ''}` }}>
      <ArchiveRoundedIcon color="secondary" />
      <span>Expenses</span>
    </li>
    </NavLink>
    <NavLink to="/income">

    <li style={{backgroundColor:`${lpath=="/income" ? '#ccc' : ''}` }}>
      <AccountBalanceWalletRoundedIcon color="secondary" />
      <span>Income</span>
    </li>
    </NavLink>
    <NavLink to="/budget">

    <li style={{backgroundColor:`${lpath=="/budget" ? '#ccc' : ''}` }}>
      <PaidRoundedIcon color="secondary" />
      <span>Budget</span>
    </li>
    </NavLink>
    {/* <NavLink to="/statistic">

    <li>
      <InsightsRoundedIcon color="secondary" />
      <span>Statistics</span>
    </li>
    </NavLink> */}
    <NavLink to="/account">

    <li style={{backgroundColor:`${lpath=="/account" ? '#ccc' : ''}` }}>
      <InsightsRoundedIcon color="secondary" />
      <span>Account</span>
    </li>
    </NavLink>
  </ul>
  <ul>
  <NavLink to="/profile">
    <li style={{width:"150px", backgroundColor:`${lpath=="/profile" ? '#ccc' : ''}` }}>
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
  </ul></>
  )
}

export default VerticalNav