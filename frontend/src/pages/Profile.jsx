import React, { useEffect, useState } from "react";
import ProfileDetail from "./components/ProfileDetail";
import axios from "axios";
import { useAuth } from "../context/auth";
import Body from "./Layout/Body";
import { useNavigate } from "react-router-dom";
const Profile = () => {
const {auth,api} = useAuth();
const navigate = useNavigate();
  const [user, setuser] = useState([]);
  const getUser = async () => {
    try {
      const res = await axios.get(`${api}/user/myprofile`,{  
        headers: {
        Authorization: auth?.token,
      }})
      setuser(res.data.user);
    } catch (e) {
      console.log("Error while fetching all user data");
    }
  };

  useEffect(() => {
    if (!auth?.token) {
      navigate('/login');
    }
    getUser();
  }, [navigate, auth,api]);
 
  return (
    <>
          <Body obj={<ProfileDetail/>}/>   
    </>
  );
};

export default Profile;
