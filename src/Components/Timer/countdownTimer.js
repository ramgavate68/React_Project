import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      const intervalId = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(intervalId);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }, 1500); 

    return () => {
      clearTimeout(startTimer);
    };
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div style={{marginLeft:"1700px",marginBottom:"1000px",position:"absolute",fontSize:"30px"}}>
      <h1>Time left: {formatTime(timeLeft)}</h1>
    </div>
  );
};

export default CountdownTimer;
