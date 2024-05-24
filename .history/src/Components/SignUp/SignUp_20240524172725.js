import React, { useState } from "react";
import Loader from "react-js-loader";

import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Alert,
  GlobalStyles,
  Dialog,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
//import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    mobile: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [mycolor, setColor] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    if (
      formData.email &&
      formData.mobile &&
      formData.userName &&
      formData.password
    ) {
      changeColor();
      e.preventDefault();
      setLoading(true);
      setSuccess(true);
      setTimeout(() => {
        navigate("/login");
        setLoading(false);
      }, 2000);
    } else {
      setError("Please enter all Deatails");
    }

    /* try {
     const response = await axios.post('http://localhost:4200/api/signup', formData);
      if (response.status === 200) {
        
      }
    } catch (error) {
      console.error('Error signing up:', error);
      setError('Sign up failed: ' + (error.response?.data?.message || error.message));
    } finally {
      setLoading(false);
    }*/
  };
  const changeColor = () => {
    const colors = [
      "#FF5733",
      "#33FF57",
      "#3357FF",
      "#FF33A1",
      "#FF8F33",
      "#FFC300",
      "#DAF7A6",
      "#C70039",
      "#900C3F",
      "#581845",
    ];
    let index = 0;
    const intervalId = setInterval(() => {
      setColor(colors[index]);
      index = (index + 1) % colors.length;
    }, 500);

    setTimeout(() => {
      clearInterval(intervalId);
    }, 3000);
  };

  return (
    <>
      <GlobalStyles
        styles={{
          body: {
            margin: 0,
            padding: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(45deg, #EB41F8, #252884)",
          },
          html: {
            width: "100%",
            height: "100%",
          },
        }}
      />
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          padding: 2,
          borderRadius: 20,
          boxShadow: 20,
          marginTop: "20vh",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "40vh",
        }}
      >
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          {error && <Alert severity="error">{error}</Alert>}
          {success && (
            <Alert severity="success">
              Successfully signed up! Redirecting to login...
            </Alert>
          )}
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="userName"
              label="User Name"
              name="userName"
              variant="standard"
              value={formData.userName}
              onChange={handleChange}
              size="50px"
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
              sx={{ mt: 3, mb: 2, background: "#083B6E", borderRadius: "10px" }}
              disabled={loading}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
      <Dialog
        open={loading}
        PaperProps={{
          sx: {
            backgroundColor: "transparent",
            boxShadow: "none",
            overflow: "hidden",
          },
        }}
        BackdropProps={{
          sx: {
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            width:""
          }}
        >
          <Loader
            type="spinner-circle"
            bgColor={mycolor}
            color={mycolor}
            size={200}
          />
        </Box>
      </Dialog>
    </>
  );
};

export default SignUp;
