import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';

const SearchBox = ({ updateInfo }) => {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "9bb1fb4186d57d8a9296bebfdaa0edae";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse = await response.json();

      if (jsonResponse.cod !== 200) {
        throw new Error(jsonResponse.message);
      }

      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description
      };

      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      let newInform = await getWeatherInfo();
      updateInfo(newInform);
      setCity("");
      setError(false);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        gap: 2,
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: 3,
        borderRadius: '20px',
        background: 'rgba(255, 255, 255, 0.25)',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      }}
    >
      <TextField
        id="city"
        label="🌍 Enter City"
        variant="outlined"
        value={city}
        required
        onChange={handleChange}
        sx={{
          backgroundColor: 'rgba(255,255,255,0.9)',
          borderRadius: '12px',
          width: { xs: '100%', sm: '280px' },
          transition: 'all 0.3s ease',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'transparent',
              borderRadius: '12px',
              background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #42a5f5, #1976d2) border-box',
              border: '2px solid transparent',
            },
            '&:hover fieldset': {
              borderColor: 'transparent',
              boxShadow: '0 0 12px rgba(25,118,210,0.3)',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'transparent',
              boxShadow: '0 0 15px rgba(25,118,210,0.5)',
            },
          },
        }}
      />

      <Button
        variant="contained"
        type="submit"
        sx={{
          padding: '12px 28px',
          fontWeight: 700,
          fontSize: '15px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #1976d2, #42a5f5)',
          boxShadow: '0px 6px 20px rgba(25,118,210,0.4)',
          textTransform: 'none',
          letterSpacing: '0.7px',
          transition: 'all 0.25s ease-in-out',
          '&:hover': {
            background: 'linear-gradient(135deg, #1565c0, #1e88e5)',
            transform: 'translateY(-3px) scale(1.05)',
            boxShadow: '0px 10px 25px rgba(25,118,210,0.6)',
          },
          '&:active': {
            transform: 'scale(0.97)',
          },
        }}
      >
        🔍 Search
      </Button>

      {error && (
        <Typography
          variant="body2"
          sx={{
            color: 'white',
            background: 'rgba(255,0,0,0.7)',
            padding: '6px 14px',
            borderRadius: '20px',
            fontWeight: 500,
            textAlign: 'center',
            width: '100%',
            animation: 'shake 0.3s ease-in-out',
            '@keyframes shake': {
              '0%': { transform: 'translateX(0)' },
              '25%': { transform: 'translateX(-4px)' },
              '50%': { transform: 'translateX(4px)' },
              '75%': { transform: 'translateX(-4px)' },
              '100%': { transform: 'translateX(0)' },
            },
          }}
        >
          ❌ No such place exists
        </Typography>
      )}
    </Box>
  );
};

export default SearchBox;
