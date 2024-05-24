import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import QuestionService from "../../service/question.service";
import {
  Card,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Typography,
  Container,
  Grid,
  Box,
  Button,
  Modal,
} from "@mui/material";
import { red, green } from "@mui/material/colors";
import CountdownTimer from "../Timer/countdownTimer";

function Test() {
  const { sectionId } = useParams();
  const navigate = useNavigate();
  const [question, setQuestion] = useState(null);
  const [questionNo, setQuestionNo] = useState(1);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [open, setOpen] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [multiOptions, setMultiOptions] = useState([]);
  const [circlesColor, setCirclesColor] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const questionService = new QuestionService();
    const totalQuestionsCount =
      questionService.sections[sectionId].questions.length;
    setTotalQuestions(totalQuestionsCount);
    setCirclesColor(Array(totalQuestionsCount).fill(red[500])); // Initialize circle colors once

    fetchQuestion(questionNo);
  }, [sectionId]);

  const fetchQuestion = (questionNumber) => {
    const questionService = new QuestionService();
    const fetchedQuestion = questionService.getQuestions(
      sectionId,
      questionNumber
    );
    setQuestion(fetchedQuestion);
  };

  const handlePreviousClick = () => {
    if (questionNo > 1) {
      setQuestionNo(questionNo - 1);
      fetchQuestion(questionNo - 1);
      setSelectedOption(null);
    }
  };

  const chekMulOptions = () => {
    const ansAr = multiOptions;
    const actAnsArr = question.correctAnswer;
    if (ansAr.length === actAnsArr.length) {
      for (const ans of ansAr) {
        if (actAnsArr.includes(ans)) {
          return true;
        } else {
          return false;
        }
      }
    }
  };
  const handleSaveAndNextClick = () => {
    if (selectedOption !== null) {
      if (
        !question.isMultiChoice &&
        selectedOption === question.correctAnswer
      ) {
        setTotalScore((prevScore) => prevScore + 2);
      } else if (question.isMultiChoice && chekMulOptions) {
        setTotalScore((prevScore) => prevScore + 2);
      }

      setCirclesColor((prevColors) => {
        const newColors = [...prevColors];
        newColors[questionNo - 1] = green[500];
        return newColors;
      });

      if (questionNo < totalQuestions) {
        setQuestionNo(questionNo + 1);
        fetchQuestion(questionNo + 1);
        setSelectedOption(null);
      }
    } else {
      setQuestionNo(questionNo + 1);
      fetchQuestion(questionNo + 1);
      setSelectedOption(null);
    }
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleOptionCheck = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    handleOpen();

    setTimeout(() => {
      handleClose();
      navigate("/dashboard");
    }, 5000);
  };

  const renderCircles = () => {
    return circlesColor.map((color, index) => (
      <Box
        key={index}
        sx={{
          fontSize: "50px",
          width: 110,
          height: 110,
          borderRadius: "50%",
          backgroundColor: color,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px",
          color: "white",
        }}
      >
        {index + 1}
      </Box>
    ));
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: 300,
    bgcolor: "aqua",
    border: "5px ridge #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Container
      maxWidth="90wh"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h3">
        <span>Test Section: {sectionId}</span>
      </Typography>

      <CountdownTimer />

      <Box width="100%" my={2}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {question && (
              <Card
                style={{
                  padding: "20px",
                  width: "95vw",
                  backgroundColor: "#9ac8CD",
                }}
              >
                <Typography variant="h4" gutterBottom>
                  Question: {question.number}
                </Typography>
                <Typography variant="h4" gutterBottom>
                  {question.question}
                </Typography>
              </Card>
            )}
          </Grid>
          <Grid item xs={8}>
            {question && (
              <Card
                style={{
                  padding: "20px",
                  height: "70vh",
                  width: "63vw",
                  overflow: "auto",
                  backgroundColor: "#E0FBE2",
                }}
              >
                {question.isMultiChoice ? (
                  <FormControl component="fieldset">
                    <FormGroup>
                      {question.options.map((option, index) => (
                        <FormControlLabel
                          key={index}
                          control={
                            <Checkbox
                              id={`option${index}`}
                              name={`question${question.number}`}
                              value={option}
                              onChange={handleOptionChange}
                            />
                          }
                          label={
                            <Typography
                              variant="h1"
                              style={{ fontSize: "100px" }}
                            >
                              {option}
                            </Typography>
                          }
                        />
                      ))}
                    </FormGroup>
                  </FormControl>
                ) : (
                  <FormControl component="fieldset">
                    <RadioGroup
                      value={selectedOption}
                      onChange={handleOptionCheck}
                    >
                      {question.options.map((option, index) => (
                        <FormControlLabel
                          key={index}
                          value={option}
                          control={
                            <Radio
                              id={`option${index}`}
                              name={`question${question.number}`}
                            />
                          }
                          label={option}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                )}
              </Card>
            )}
          </Grid>
          <Grid item xs={4}>
            <Card
              style={{
                height: "73vh",
                width: "30.5vw",
                overflow: "auto",
                backgroundColor: "#E0FBE2",
              }}
            >
              <Box display="flex" flexWrap="wrap" justifyContent="center">
                {renderCircles()}
              </Box>
            </Card>
          </Grid>
        </Grid>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-title"
              variant="h4"
              component="h2"
              color={"Menu"}
            >
              Total Score:
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2, color: "black" }}>
              {totalScore}
            </Typography>
          </Box>
        </Modal>
      </Box>
      <footer style={{ marginTop: "5px" }}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item>
            <Card
              style={{
                padding: "10px",
                height: "5vh",
                width: "90vw",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                disabled={questionNo <= 1}
                onClick={handlePreviousClick}
                style={{
                  marginRight: "250px",
                  marginLeft: "300px",
                  height: "60px",
                  width: "180px",
                }}
              >
                Previous
              </Button>

              <Button
                variant="contained"
                color="primary"
                disabled={questionNo >= totalQuestions}
                onClick={handleSaveAndNextClick}
                style={{
                  marginRight: "250px",
                  marginLeft: "300px",
                  height: "60px",
                  width: "180px",
                }}
              >
                Save & Next
              </Button>

              <Button
                variant="contained"
                color="secondary"
                onClick={handleSubmit}
                style={{
                  marginRight: "250px",
                  marginLeft: "300px",
                  height: "60px",
                  width: "180px",
                }}
              >
                Submit
              </Button>
            </Card>
          </Grid>
        </Grid>
      </footer>
    </Container>
  );
}

export default Test;
