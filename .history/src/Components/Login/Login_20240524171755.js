import React, { useState } from "react";
import Loader from "react-js-loader";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  GlobalStyles,
  Alert,
  Dialog,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [mycolor, setColor] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

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

  const handleLogin = async (e) => {
    e.preventDefault();

    if (userName && password) {
      localStorage.setItem("userName", userName);
      setLoading(true);
      changeColor();
      setSuccess(true);
      setTimeout(() => {
        navigate("/dashboard");
        setLoading(false);
      }, 3000);
    } else {
      setError("Please enter both username and password");
    }
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
            background: "#EBF5F0",
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
          borderRadius: 10,
          boxShadow: 20,
          marginTop: "20vh",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "30vh",
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
          <Typography component="h1" variant="h5" color={"black"}>
            Log In
          </Typography>
          {error && <Alert severity="error">{error}</Alert>}
          {success && (
            <Alert severity="success">
              Successfully signed up! Redirecting to dashboard...
            </Alert>
          )}
          <Box
            component="form"
            onSubmit={handleLogin}
            noValidate
            sx={{ mt: 1 }}
          >
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
              disabled={loading}
              variant="contained"
              sx={{ mt: 3, mb: 2, background: "#083B6E", borderRadius: "10px" }}
            >
              Log In
            </Button>
          </Box>
        </Box>
      </Container>

      <Dialog open={loading}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
          }}
        >
          <Loader type="spinner-circle" bgColor={mycolor} color={mycolor} size={100} />
        </Box>
      </Dialog>
    </>
  );
};

export default Login;
