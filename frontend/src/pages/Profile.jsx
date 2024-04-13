import React, { useEffect, useState } from "react";
import "../css/profile.css";
import ProfileDetail from "./components/ProfileDetail";
import axios from "axios";
import { useAuth } from "../context/auth";
import Body from "./Layout/Body";
const Profile = () => {
const {api} = useAuth();
  const [user, setuser] = useState([]);
  const getUser = async () => {
    try {
      let ls = localStorage.getItem("auth");
      ls = JSON.parse(ls);
      const res = await axios.get(`${api}/user/myprofile`,{  
        headers: {
        Authorization: ls.token,
      }})
      setuser(res.data.user);
    } catch (e) {
      console.log("Error while fetching all user data");
    }
  };
  useEffect(() => {
    getUser();
  }, []);

 
  return (
    <>
          <Body obj={<ProfileDetail/>}/>   
    </>
  );
};

export default Profile;
