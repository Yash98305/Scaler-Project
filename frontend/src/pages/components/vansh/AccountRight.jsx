import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { useAuth } from "../../../context/auth";

const AccountRight = () => {
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState("");
  const [name, setName] = React.useState("");
  const token = JSON.parse(localStorage.getItem("auth")).token;
  const { api } = useAuth();



  const handleSub =async ()=>{
    try {
        const res = await axios.get(`${api}/account/create`, {
          headers: {
            Authorization: token,
          }
        });
        console.log(res);
      } catch (e) {
        console.error(e);
      }
  }
  React.useEffect(() => {}, [name]);
  const Submit = async (event) => {
    event.preventDefault();
    const data = {
      type,
      name,
    };
    try {
      const res = await axios.post(`${api}/account/create`, {
        headers: {
          Authorization: token,
        },
      });
     console.log(res);
    } catch (e) {
      console.error(e);
    }

  };

  return (
    <React.Fragment>
      <Button
        sx={{ float: "right", margin: "30px 40px", display: "flex" }}
        variant="contained"
        color="success"
        onClick={handleSub}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "15px",
          }}
        >
          <AddCircleOutlineOutlinedIcon
            sx={{ fontSize: "23px", marginRight: "4px" }}
          />
          Add Account
        </div>
      </Button>
    </React.Fragment>
  );
};

export default AccountRight;
