import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useState} from 'react';
import { yellow } from '@mui/material/colors';
import '../App.css';

const theme = createTheme();

export default function SignUp() {
  const [Name, setName] = useState('');
  const [colorn, setColorn] = useState('white');
  const [errorn, setErrorn] = useState('');
  const [email, setEmail] = useState('');
  const [colore, setColore] = useState('white');
  const [errore, setErrore] = useState('');
  const [password, setPassword] = useState('');
  const [colorp, setColorp] = useState('white');
  const [errorp, setErrorp] = useState('');

const validateName=(event)=>{
    event.preventDefault();
    const Name=event.target.value;
    if(Name.length==0){
        setErrorn("UserName cannot be empty")
        setColorn("red")
      }else{
        setName(Name)
        setColorn("white")
        setErrorn("")
    }
    if(Name){
        console.log("Name: " ,Name)
    }
}
const validatePassword=(event)=>{
  event.preventDefault();
  const pw=event.target.value;
  let strength = 0;
  if (pw.match(/(?=.*[a-z])/)) {
        strength++;
      }
      
      if (pw.match(/(?=.*[A-Z])/)) {
        strength++;
    }
    
    if (pw.match(/(?=.*[0-9])/)) {
      strength++;
    }
    
    if (pw.match(/(?=.*[!@#\$%\^&\*])/)) {
      strength++;
    }
    if(strength==0){
      setColorp("blue")
      setErrorp("Enter the password")
    }
    else if(strength==1){
      setColorp("red")
      setErrorp("Password is Weak")
    }else if(strength==2){
      setColorp("orange")
      setErrorp("Password is Good")
    }
    else if(strength==3){
      setColorp("lightgreen")
      setErrorp("Password is Strong")
    }
    else if(strength==4){
      setColorp("white")
      setErrorp("Password is Very Strong")
    }
    return strength
  }
  
  const validateMail=(event)=>{
      event.preventDefault();
      const mail=event.target.value;
      var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if(mail.match(validRegex)){
        setColore("white")
        setErrore("Valid Mail");
      }else{
        setColore("red")
        setErrore("Invalid Mail");

      }
  }
  const handleSubmit = (event) => {
    alert("Success!!")
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{backgroundColor : "pink"}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 25,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            
          }}
        >
          <Box component="form"   sx={{ mt: 3}} >
            <Grid container spacing={2}>
              <Grid item xs={12}> 
                <TextField
                  type="text"
                  autoComplete="given-name"
                  name="UserName"
                   onChange={validateName}
                  required
                  fullWidth
                  id="Name"
                  label="User Name"
                  autoFocus
                  sx={{backgroundColor : colorn}}
                /><br/>
                  {errorn}
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  sx={{backgroundColor :colore}}
                  onChange={validateMail}
                /><br/>
                {errore}
                
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  sx={{backgroundColor :colorp}}
                  onChange={validatePassword}
                /><br/>
                {errorp}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Confirm
            </Button>
            <Grid container justifyContent="flex-end">
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}