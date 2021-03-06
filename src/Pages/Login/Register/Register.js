import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import login from '../../../images/login.png'
import { Button, TextField, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
const Register = () => {
   
    const [loginData, setLoginData]= useState({})
    const {registerUser}=useAuth();
    const handleOnchange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field]=value;
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        if(loginData.password !== loginData.password2){
            alert('your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password)
        e.preventDefault();
    }
    return (
        <Grid container spacing={2}>
        <Grid item sx={{mt:8}} xs={12} md={6}>
        <Typography variant="body1" gutterBottom>
        Login
      </Typography>
            <form onSubmit={handleLoginSubmit}>
            <TextField  sx={{ width: '75%',m:1 }}id="standard-basic" label="Your Email"
            name ="email" 
            type = "email"
            onChange={handleOnchange}
            variant="standard" />
            <TextField  sx={{ width: '75%',m:1 }}id="standard-basic" label="Your Password" 
            type = "password"
            name = "password"
            onChange={handleOnchange}
            variant="standard" />
            <TextField  sx={{ width: '75%',m:1 }}id="standard-basic" label="Retype your password" 
            type = "password"
            name = "password2"
            onChange={handleOnchange}
            variant="standard" />
             <Button sx={{ width: '75%',m:1 }} variant="contained" type="submit">Login</Button>
            </form>
            <NavLink style={{textDecoration : 'none'}} to="/login">
            <Button variant="text" type="submit">Already Register ? Please Login</Button>
            </NavLink>
           
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{width: '100%'}} src={login} alt="" />
        </Grid>
      
      </Grid>
    );
};

export default Register;