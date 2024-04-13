import { useState, useEffect, useContext, createContext, useRef } from "react";
import { io } from 'socket.io-client';
import axios from "axios";

const AuthContext = createContext(null);
const api = "http://localhost:8000/api/v1"
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });
  const [person, setPerson] = useState({});
  const [activeUsers, setActiveUsers] = useState([]);
  const [newMessageFlag, setNewMessageFlag] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const socket = useRef();


  //default axios
  axios.defaults.headers.common["Authorization"] = auth?.token;

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        ...auth,
        user: parseData.user,
        token: parseData.token,
      });
    }

    //eslint-disable-next-line
  }, []);

  
  useEffect(() => {
    socket.current = io("ws://localhost:9000");
  }, []);

  return (
    <AuthContext.Provider
      value={{
        api,
        auth,
        setAuth,
        person,
        setPerson,
        socket,
        activeUsers,
        setActiveUsers,
        newMessageFlag,
        setNewMessageFlag,showEmojiPicker,setShowEmojiPicker
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
