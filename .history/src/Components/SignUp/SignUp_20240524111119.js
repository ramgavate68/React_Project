import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    mobile: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // try {
    //   const response = await axios.post('http://localhost:4200/api/signup', formData);
    //   if (response.status === 200) {
    //     setSuccess(true);
       
    //   }
    // } catch (error) {
    //   console.error('Error signing up:', error);
    //   setError('Sign up failed: ' + (error.response?.data?.message || error.message));
    // } finally {
    //   setLoading(false);
    // }
    setSuccess(true)
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background:"#63616D"
        }}
      >
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        {success && (
          <Alert severity="success">Successfully signed up! Redirecting to login...</Alert>
        )}
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1  }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="userName"
            label="User Name"
            name="userName"
            variant="standard"
            autoFocus
            value={formData.userName}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            variant="standard"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="mobile"
            label="Mobile Number"
            name="mobile"
            variant="standard"
            value={formData.mobile}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="password"
            variant="standard"
            value={formData.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 5 }}
            disabled={loading}
          >
            SignUp
          </Button>
          {loading && (
                  <Typography
                    variant="h3"
                    color={'#00c853'}
                    gutterBottom
                  >
                    signing in .....!
                  </Typography>
                )}
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
