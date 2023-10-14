import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { useToast } from '@chakra-ui/react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { adminreg, adminregfailure, adminregsuccess } from '../../../Redux/Admin/AdminAuthentication/AdminRegistration/Action';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        YakshAcademy
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const initdata={
  "name":"",
  "email":"",
  "password":"",


  "Id":""
}
const defaultTheme = createTheme();

export default function AdminSignUp() {
  const [adminsignupdata,setAdminsignupdata]=React.useState(initdata)
  const {name,email,password,Id}=adminsignupdata
  const data=useSelector((state)=>state.adminregreducer)

  const {adminregisLoading}=data
  const dispatch=useDispatch()
  const toast=useToast()
const navigate=useNavigate()

  // handling registration post request
  const handleSubmit = (event) => {
    event.preventDefault();
console.log(adminsignupdata)
dispatch(adminreg(adminsignupdata)).then((res)=>{
    
    dispatch(adminregsuccess())
    toast({description:res.data.msg,status:"success","position":"top",duration:3000})
    navigate("/adminlogin")
}).catch((err)=>{
    dispatch(adminregfailure())
    toast({description:err.response.data.msg,"status":"error",position:"top",duration:3000})
})
  };


const hanndlechange=(e)=>{
  const {name,value}=e.target
setAdminsignupdata((pre)=>({...pre,[name]:value}))
}
  return (


<ThemeProvider theme={defaultTheme}>
  <CssBaseline />
  <Box
    sx={{
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
      <LockOutlinedIcon />
    </Avatar>
    <Typography component="h1" variant="h5">
      Sign up
    </Typography>
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            autoComplete="given-name"
            name="name"
            required
            value={adminsignupdata.name}
            fullWidth
            id="firstName"
            label="name"
            autoFocus
            onChange={hanndlechange}
            sx={{ width: '80%', '@media (min-width: 600px)': { width: '30%' } }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            autoComplete="given-name"
            name="Id"
            required
            value={adminsignupdata.Id}
            fullWidth
            id="UniqueId"
            label="UniqueId"
            autoFocus
            onChange={hanndlechange}
            sx={{ width: '80%', '@media (min-width: 600px)': { width: '30%' } }}
          />
        </Grid>
        {/* <Grid item xs={12}>
          <FormControl fullWidth sx={{ mt: 2, width: '80%', '@media (min-width: 600px)': { width: '30%' } }}>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={adminsignupdata.type}
              name="type"
              label="Type"
              onChange={hanndlechange}
            >
              <MenuItem value={"instructer"}>Instructor</MenuItem>
              <MenuItem value={"student"}>Student</MenuItem>
            </Select>
          </FormControl>
        </Grid> */}
        {/* <Grid item xs={12}>
          <FormControl fullWidth sx={{ mt: 2, width: '80%', '@media (min-width: 600px)': { width: '30%' } }}>
            <InputLabel id="demo-simple-select-label">Field</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={adminsignupdata.field}
              name="field"
              label="Field"
              onChange={hanndlechange}
            >
              <MenuItem value={"frontend"}>Frontend</MenuItem>
              <MenuItem value={"backend"}>Backend</MenuItem>
              <MenuItem value={"fullstack"}>Fullstack</MenuItem>
             
            </Select>
          </FormControl>
        </Grid> */}
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={adminsignupdata.email}
            autoComplete="email"
            onChange={hanndlechange}
            sx={{ width: '80%', '@media (min-width: 600px)': { width: '30%' } }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required={true}
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={adminsignupdata.password}
            autoComplete="new-password"
            onChange={hanndlechange}
            sx={{ width: '80%', '@media (min-width: 600px)': { width: '30%' } }}
          />
        </Grid>
      </Grid>
      {adminregisLoading?
     
      <Button
    
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, width: '80%', '@media (min-width: 600px)': { width: '30%' } }}
      >
        <div className="spinner-grow text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    <div className="spinner-grow text-secondary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    <div className="spinner-grow text-success" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>

   
    <div className="spinner-grow text-dark" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
      </Button>
    
    
    
    
    :<Button
    disabled={name&&email&&password&&Id?false:true}
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2, width: '80%', '@media (min-width: 600px)': { width: '30%' } }}
    >
      Sign Up
    </Button>
    
    
    }
      
      <Grid container justifyContent="center" alignItems="center" sx={{ mt: 3 }}>
            <Grid item>
              <Link to="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
    </Box>
  </Box>
  <Copyright sx={{ mt: 5 }} />
</ThemeProvider>
  
  
  );
}