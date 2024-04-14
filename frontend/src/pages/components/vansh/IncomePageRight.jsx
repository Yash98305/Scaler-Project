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
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const IncomePageRight = () => {

    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState('');
    const [amount, setAmount] = React.useState('');
    const [account, setAccount] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [value, setValue] = React.useState(null);  
  const token = JSON.parse(localStorage.getItem("auth")).token;
    const { api } = useAuth();


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const Submit = async (event) => {
        event.preventDefault();
        const data = {
            title, accountId:account, amount, categoryId:category,income_date:value
        }
        console.log(data)
        try {
            const res = await axios.post(`${api}/income/create`, data, {
                headers: {
                    Authorization: token
                }
            })
            // setName("");
            // setType("");
        }
        catch (e) {
            console.error(e);
        }

        handleClose();
    }

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                Income Details
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: Submit
                }}
            >
                <DialogTitle>Record Income</DialogTitle>
                <DialogContent>

                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="title"
                        name="tile"
                        label="Title"
                        type="text"
                        fullWidth
                        value={title}
                        variant="standard"
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="amount"
                        name="amount"
                        label="Amount"
                        type="number"
                        fullWidth
                        value={amount}
                        variant="standard"
                        onChange={(e) => setAmount(e.target.value)}
                    />

                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={account}
                                label="Account"
                                onChange={(e) => setAccount(e.target.value)}
                            >
                                <MenuItem value={"661bb44f44b6accca15fda39"}>Others</MenuItem>
                                <MenuItem value={"661bb44f44b6accca15fda3d"}>Credit Card</MenuItem>
                                <MenuItem value={"661bb44f44b6accca15fda3c"}>Cash</MenuItem>
                                <MenuItem value={"661bb44f44b6accca15fda3b"}>My Bank</MenuItem>
                                <MenuItem value={"661bb44f44b6accca15fda3a"}>PayPal</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>


                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={category}
                                label="Category"
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <MenuItem value={"income"}>Others</MenuItem>
                                <MenuItem value={"expense"}>Credit Card</MenuItem>
                                <MenuItem value={"expense"}>Cash</MenuItem>
                                <MenuItem value={"expense"}>My Bank</MenuItem>
                                <MenuItem value={"expense"}>PayPal</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker value={value} onChange={(newValue) => setValue(newValue)} />
      </DemoContainer>
    </LocalizationProvider>
                   

                </DialogContent>



                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Submit</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default IncomePageRight