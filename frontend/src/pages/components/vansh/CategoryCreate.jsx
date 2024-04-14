import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import { useAuth } from '../../../context/auth';

const CategoryCreate = () => {

    const [open, setOpen] = React.useState(false);
    const [type, setType] = React.useState('');
    const [name, setName] = React.useState('');
    const token = JSON.parse(localStorage.getItem("auth")).token;
const{api} = useAuth();
  const handleChange = (event) => {
    setType(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  React.useEffect(()=>{

  },[name])
  const Submit = async (event) => {
    event.preventDefault();
const data = {
type,name
}
try{
const res = await axios.post(`${api}/category/create`,data,{
headers: {
Authorization:token
}
})
setName("");
setType("");
}
catch(e){
console.error(e);
}

    handleClose();
  }

    return (
        <React.Fragment>
          <Button variant="outlined" onClick={handleClickOpen}>
            Add Category
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
              component: 'form',
              onSubmit: Submit
            }}
          >
            <DialogTitle>Add Category</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                required
                margin="dense"
                id="category"
                name="category"
                label="Category Name"
                type="text"
                fullWidth
                value={name}
                variant="standard"
                onChange={(e)=>setName(e.target.value)}
              />
            </DialogContent>

            <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="Type"
          onChange={handleChange}
        >
          <MenuItem value={"income"}>Income</MenuItem>
          <MenuItem value={"expense"}>Expense</MenuItem>
        </Select>
      </FormControl>
    </Box>

            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit">Submit</Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>
      );
}

export default CategoryCreate