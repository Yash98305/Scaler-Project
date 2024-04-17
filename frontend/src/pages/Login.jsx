import React from 'react'
import img from "./Layout/Untitled-1 copy.png"
import { TextField } from '@mui/material'
import { NavLink } from 'react-router-dom'

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div style={{height:"100vh",width:"100vw",display:"flex",justifyContent:"center",alignItems:"center",background: "#ADA996",
    background: "-webkit-linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996)",
    background: "linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996)",}}>
    <div style={{padding:"4px 120px",boxShadow: "0 0 20px 5px rgba(128, 128, 128, 0.2)",backgroundColor:"rgb(229 229 229)",borderRadius:"40px"}}><img style={{zIndex:"1"}} src={img} alt="" />
    <div style={{zIndex:"99",position:"absolute",top:"50px",right:"250px"}}>
    <form action="" style={{width:"400px"}}>
    <h1 style={{textAlign:"center",padding:"40px"}}>Login Yourself</h1>
    
    <TextField
          id="outlined-multiline-flexible"
          label="Email"
          multiline
       style={{ width:"100%",borderColor:"red",marginBottom:"40px"}} 
        />
  
  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput style={{ width:"100%",borderColor:"red",marginBottom:"40px"}} 
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
       
        <button style={{width:"100%",padding:"17px",backgroundColor:"black",color:"white",fontSize:"15px",borderRadius:"7px"}}>
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