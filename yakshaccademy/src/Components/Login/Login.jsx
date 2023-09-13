import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useDispatch, useSelector } from 'react-redux';

import { useToast } from '@chakra-ui/react';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { loginfailure, loginsuccess, userlogin } from '../../Redux/Authentication/Login/Action';

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

  "email":"",
  "password":"",

}
const defaultTheme = createTheme();

export default function Login() {
  const [regdata,setRegdata]=React.useState(initdata)
  const {password,email}=regdata
  const data=useSelector((state)=>state.loginreducer)
  const {isLoading,type,token,username,useremail}=data
  const dispatch=useDispatch()
  const toast=useToast()
const navigate=useNavigate()
const location=useLocation()

  // handling login post request
  const handleSubmit = (event) => {
    event.preventDefault();
  
dispatch(userlogin(regdata)).then((res)=>{
  toast({description:res.data.msg,status:"success",position:"top",duration:3000})
  dispatch(loginsuccess(res.data))

  navigate(`/${res.data.type}`)
}).catch((err)=>{
  
  if(err.message=="Network Error"){
    toast({description:"Please check your internet connection",status:"error",position:"top",duration:3000})

    dispatch(loginfailure())
  }
   else{ toast({description:err.response.data.msg,status:"error",position:"top",duration:3000})
dispatch(loginfailure())}
  })
  };


const hanndlechange=(e)=>{
  const {name,value}=e.target
setRegdata((pre)=>({...pre,[name]:value}))
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
      Sign In
    </Typography>
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
          <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={regdata.email}
            autoComplete="email"
            onChange={hanndlechange}
            sx={{ width: '80%', '@media (min-width: 600px)': { width: '80%' } }}
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
            value={regdata.password}
            autoComplete="new-password"
            onChange={hanndlechange}
            sx={{ width: '80%', '@media (min-width: 600px)': { width: '80%' } }}
          />
        </Grid>
      </Grid>
      {typeof data!==undefined&&isLoading?
     
      <Button
    
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, width: '80%', '@media (min-width: 600px)': { width: '80%' } }}
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
    disabled={email&&password?false:true}
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2, width: '80%', '@media (min-width: 600px)': { width: '80%' } }}
    >
      Sign IN
    </Button>
    
    
    }
      
      <Grid container justifyContent="center" alignItems="center" sx={{ mt: 3 }}>
            <Grid item>
              <Link to="/signup" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
    </Box>
  </Box>
  <Copyright sx={{ mt: 5 }} />
</ThemeProvider>
  
  
  );
}