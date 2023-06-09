import React, {useState} from 'react';
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
import {useDispatch} from "react-redux";
import {accountModel} from "../../store/models";

const url = "authorization/login";

const Login = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [employeeIdError, setEmployeeIdError] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [page, setPage] = useState(0);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    setEmployeeIdError(employeeId === '');
    setLoginError(login === '');
    setPasswordError(password === '');

    if (employeeId && login && password) {
      accountModel.EmployeeId = employeeId;
      accountModel.Login = login;
      accountModel.Password = password;

      fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(accountModel)
      })
        .then(r => r.text())
        .then(data => {
          console.log(data);
        });

      setEmployeeId('');
      setLogin('');
      setPassword('');
    }
  }
  return (
    <div>
      <Container component="main" maxWidth="xs">
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
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              label={'Enter login'}
              onChange={e => setLogin(e.target.value)}
              required
              variant={'outlined'}
              type={'text'}
              fullWidth
              margin={'dense'}
              value={login}
              error={loginError}
            />
            <TextField
              label={'Enter password'}
              onChange={e => setPassword(e.target.value)}
              variant={'outlined'}
              type={'password'}
              fullWidth
              margin={'dense'}
              value={password}
              error={passwordError}
            />
            <TextField
              label={'Enter employee id'}
              onChange={e => setEmployeeId(e.target.value)}
              required
              variant={'outlined'}
              type={'text'}
              fullWidth
              margin={'dense'}
              value={employeeId}
              error={employeeIdError}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default Login;
