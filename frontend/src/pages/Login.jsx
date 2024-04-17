import React, { useState} from "react";
import "../css/login.css";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../context/auth.js";

import img from "./Layout/Untitled-1 copy.png"
import { TextField } from '@mui/material'
const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { auth, setAuth,api } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${api}/user/login`,
        {
          email,
          password,
        },
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
           ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        toast.success("Login in successfully");
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate("/home")
        // navigate(location.state || "/chat");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };



  return (
    <div style={{height:"100vh",width:"100vw",display:"flex",justifyContent:"center",alignItems:"center",background: "#ADA996",
    background: "-webkit-linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996)",
    background: "linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996)",}}>
    <div style={{padding:"4px 120px",boxShadow:"47px 12px 2px gray",backgroundColor:"rgb(229 229 229)",borderRadius:"40px"}}><img style={{zIndex:"1"}} src={img} alt="" />
    <div style={{zIndex:"99",position:"absolute",top:"50px",right:"250px"}}>
    <form onSubmit={handleSubmit} style={{width:"400px"}}>
    <h1 style={{textAlign:"center",padding:"40px"}}>Login Yourself</h1>
    
    <TextField
          id="outlined-multiline-flexible"
          label="Email"
          value={email}
          name="email"
          required
          onChange={(e) => {
                  setemail(e.target.value);
                }}
          multiline
       style={{ width:"100%",borderColor:"red",marginBottom:"40px"}} 
        />
  
    <TextField
          id="outlined-multiline-flexible"
          label="Password"
          required
          value={password}
                name="password"
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
          multiline
       style={{ width:"100%",borderColor:"red",marginBottom:"40px"}} 
        />
        <button type="submit" style={{width:"100%",padding:"17px",backgroundColor:"black",color:"white",fontSize:"15px",borderRadius:"7px"}}>
            SUBMIT
        </button>
        <p style={{marginTop:"30px", textAlign:"right",marginRight:"7px"}}>Don't have an account yet? <NavLink to="/register">Sign up</NavLink></p>

    </form>
    </div>
    </div>
    </div>
  )
}

export default Login