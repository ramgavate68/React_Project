import React from 'react';
import { Backdrop, Box } from '@mui/material';
import { keyframes } from '@mui/system';

const dotPulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
`;

const Loader = ({ open }) => {
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 120,
          height: 120,
          position: 'relative',
        }}
      >
        {/* Main Circle */}
        <Box
          sx={{
            width: "400px",
            height: "400px",
            backgroundColor: '#9D4EF8',
            borderRadius: '50%',
            position: 'absolute',
          }}
        />

        {/* Rotating Dots */}
        {[...Array(8)].map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 10,
              height: 10,
              backgroundColor: '#6FB3F6',
              borderRadius: '50%',
              position: 'absolute',
              animation: `${dotPulse} 1.5s linear infinite`,
              animationDelay: `${index * 0.1}s`,
              top: '50%',
              left: '50%',
              transform: `rotate(${index * 45}deg) translate(50px)`,
            }}
          />
        ))}
      </Box>
    </Backdrop>
  );
};

export default Loader;
