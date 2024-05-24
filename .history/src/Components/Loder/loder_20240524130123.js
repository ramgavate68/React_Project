import React from 'react';
import { Backdrop, Box, CircularProgress } from '@mui/material';
import { keyframes } from '@mui/system';

const dotPulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 #6FB3F6;
  }
  50% {
    box-shadow: 0 0 20px 10px #9D4EF8;
  }
  100% {
    box-shadow: 0 0 0 0 #6FB3F6;
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
          width: 500,
          height: 500,
          position: 'relative',
        }}
      >
        {[...Array(8)].map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 10,
              height: 10,
              backgroundColor: '#9D4EF8',
              borderRadius: '50%',
              position: 'absolute',
              animation: `${dotPulse} 1.5s linear infinite`,
              animationDelay: `${index * 0.1}s`,
              top: '50%',
              left: '50%',
              transform: `rotate(${index * 45}deg) translate(35px)`,
            }}
          />
        ))}
      </Box>
    </Backdrop>
  );
};

export default Loader;
