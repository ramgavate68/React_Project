import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";

import logo from '../../Images/logo192 .png';  


function LandingPage() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "F2F2F2",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 16,
          left: 16,
          
        }}
      >
          <img
          src={logo}
          alt="TMS Test App Logo"
          style={{ borderRadius: "50%", maxHeight: "100px" }}
        />
        <h1 style={{ color: 'blue' }}>Techmindsystem Test Platform</h1>

      </Box>
      <Container component="main" maxWidth="sm">
        <Card
          sx={{
            width: "100%",
            padding: 3,
            boxShadow: 3,
            backgroundColor: "F2F2F2",
          }}
        >
          <CardContent>
            <Typography
              variant="h2"
              component="div"
              gutterBottom
              sx={{ color: "black" }}
            >
              Welcome to TMS Test Platform!
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ color: "black" }}>
              Join our platform and take exciting programming, aptitude, and
              math tests! Register now and enhance your skills with our
              comprehensive tests.
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mt: 2,
                background:"trancepernt"
              }}
            >
                  <Button
                variant="contained"
                color="secondary"
                onClick={handleSignupClick}
                sx={{mb:5,mt:4}}
              >
                Sign Up
              </Button>
              <br></br>
              <h4 style={{ textDecoration: 'underline', color: 'blue', fontWeight: 'bold' }}>If Already Have Account</h4>

              <Button
                variant="contained"
                color="primary"
                onClick={handleLoginClick}
                sx={{ mb: 4 }}
              >
                Log In
              </Button>
            
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default LandingPage;
