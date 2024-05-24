import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, GlobalStyles } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (userName && password) {
      // Store only the userName in local storage
      localStorage.setItem('userName', userName);

      // Navigate to the dashboard
      navigate('/dashboard');
    } else {
      setError('Please enter both username and password');
    }
  };

  return (
    <></>
    <GlobalStyles
    styles={{
      body: {
        margin: 0,
        padding: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(45deg, #EB41F8, #252884)',
      },
      html: {
        width: '100%',
        height: '100%',
      },
    }}
  />
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background:"#2A79AF"
        }}
      >
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="userName"
            label="Username"
            name="userName"
            variant="standard"
            autoComplete="username"
            autoFocus
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            variant="standard"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
