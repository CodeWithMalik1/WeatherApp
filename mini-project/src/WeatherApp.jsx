import React, { useState } from 'react';
import SearchBox from './SearchBox';
import Info from './Info';
import { Box, Typography } from '@mui/material';

const WeatherApp = () => {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Hyderabad",
    temp: 23,
    tempMin: 24,
    tempMax: 25,
    humidity: 54,
    feelsLike: 24,
    weather: "cool"
  });

  let updateInfo = (newInform) => {
    setWeatherInfo(newInform);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        padding: 3,
        background: 'linear-gradient(135deg, #dbeafe 0%, #f0fdfa 100%)',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* App Title */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          background: 'linear-gradient(90deg, #1d4ed8, #38bdf8)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textAlign: 'center',
          letterSpacing: 1,
          marginBottom: 2,
        }}
      >
        Weather App
      </Typography>

      {/* Search Box */}
      <Box
        sx={{
          width: '100%',
          maxWidth: 500,
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: 2,
          borderRadius: 3,
          boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
        }}
      >
        <SearchBox updateInfo={updateInfo} />
      </Box>

      {/* Weather Info Card */}
      <Info info={weatherInfo} />
    </Box>
  );
};

export default WeatherApp;
