import React from 'react'
import { NavLink } from 'react-router-dom'

import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import PaidRoundedIcon from "@mui/icons-material/PaidRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ArchiveRoundedIcon from "@mui/icons-material/ArchiveRounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import InventoryRoundedIcon from "@mui/icons-material/InventoryRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";

const VerticalNav = ({handleLogout}) => {
    
  return (
    <><ul>
    <NavLink to="/home" >
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

    {/* <li>
      <InsightsRoundedIcon color="secondary" />
      <span>Statistics</span>
    </li> */}
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
  </ul></>
  )
}

export default VerticalNav