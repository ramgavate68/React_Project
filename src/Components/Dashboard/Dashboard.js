import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Container,
  Grid,
} from "@mui/material";

function Dashboard() {
  const navigate = useNavigate()
  const [userName, setUserName] = useState("");
  const [testStaus, setTestStaus] = useState("pending");

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }
    const setStatus = localStorage?.getItem('testStatus')
    if (setStatus) {
      setTestStaus=setStatus;
      
    }
  }, []);
  const handleStartTest = (sectionId) => {
    navigate(`/test/${sectionId}`);
  };


  const handleContinueTest = (sectionId) => {};

  const getStatusColor = () => {
    switch (testStaus) {
      case "completed":
        return "green";
      case "in progress":
        return "yellow";
      case "pending":
        return "black";
      default:
        return "black";
    }
  };

  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        Welcome <span style={{color:"orange"}}>{userName} ...! </span> 
      </Typography >
      <Typography variant="h4" gutterBottom>
        Please Choose the section To Atempt Your test 
      </Typography>
      <hr/>

      <Grid container spacing={6}>
        {/* Aptitude */}
        <Grid item xs={12} sm={6} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Aptitude
              </Typography>

              <CardContent
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography style={{ color: getStatusColor() }}>
                  {testStaus}
                </Typography>
                {testStaus === "pending" && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleStartTest("aptitude")}
                  >
                    Start
                  </Button>
                )}
                {testStaus === "in progress" && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleContinueTest("maths")}
                  >
                    Continue
                  </Button>
                )}
              </CardContent>
            </CardContent>
          </Card>
        </Grid>

        {/* Logical Programming */}
        <Grid item xs={12} sm={6} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                 Programming
              </Typography>

              <CardContent
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography style={{ color: getStatusColor() }}>
                  {testStaus}
                </Typography>
                {testStaus === "pending" && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleStartTest("programming")}
                  >
                    Start
                  </Button>
                )}
                {testStaus === "in progress" && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleContinueTest("maths")}
                  >
                    Continue
                  </Button>
                )}
              </CardContent>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                English
              </Typography>

              <CardContent
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography style={{ color: getStatusColor() }}>
                  {testStaus}
                </Typography>
                {testStaus === "pending" && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleStartTest("english")}
                  >
                    Start
                  </Button>
                )}
                {testStaus === "in progress" && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleContinueTest("maths")}
                  >
                    Continue
                  </Button>
                )}
              </CardContent>
            </CardContent>
          </Card>
        </Grid>

        {/*Maths*/}
        <Grid item xs={12} sm={6} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Maths
              </Typography>

              <CardContent
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography style={{ color: getStatusColor() }}>
                  {testStaus}
                </Typography>
                {testStaus === "pending" && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleStartTest("maths")}
                  >
                    Start
                  </Button>
                )}
                {testStaus === "in progress" && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleContinueTest("maths")}
                  >
                    Continue
                  </Button>
                )}
              </CardContent>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;
