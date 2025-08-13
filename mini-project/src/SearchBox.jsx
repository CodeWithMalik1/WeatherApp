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
        padding: 2,
      }}
    >
      <TextField
        id="city"
        label="Enter City"
        variant="outlined"
        value={city}
        required
        onChange={handleChange}
        sx={{
          backgroundColor: 'white',
          borderRadius: '8px',
          width: { xs: '100%', sm: '250px' },
          boxShadow: '0px 4px 10px rgba(0,0,0,0.08)',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'transparent',
            },
            '&:hover fieldset': {
              borderColor: '#1976d2',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#1565c0',
              borderWidth: 2,
            },
          },
        }}
      />

      <Button
        variant="contained"
        type="submit"
        sx={{
          padding: '10px 20px',
          fontWeight: 600,
          letterSpacing: '0.5px',
          borderRadius: '8px',
          boxShadow: '0px 4px 14px rgba(25,118,210,0.3)',
          background: 'linear-gradient(135deg, #1976d2, #42a5f5)',
          '&:hover': {
            background: 'linear-gradient(135deg, #1565c0, #1e88e5)',
            transform: 'scale(1.03)',
            boxShadow: '0px 6px 18px rgba(25,118,210,0.4)',
          },
          transition: 'all 0.2s ease-in-out',
        }}
      >
        Search
      </Button>

      {error && (
        <Typography
          variant="body2"
          sx={{
            color: 'red',
            fontWeight: 500,
            textAlign: 'center',
            width: '100%',
            animation: 'fadeIn 0.3s ease-in',
          }}
        >
          ❌ No such place exists
        </Typography>
      )}
    </Box>
  );
};

export default SearchBox;
