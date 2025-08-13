import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
const SearchBox = () => {
    let [city,setCity]=useState("");
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="9bb1fb4186d57d8a9296bebfdaa0edae";
    let getWeatherInfo =async()=>{
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`)
        let jsonResponse=await response.json();
        // console.log(jsonResponse);
         let result={
        temp : jsonResponse.main.temp,
        tempMin : jsonResponse.main.temp_min,
        tempMax : jsonResponse.main_temp,
        humidity : jsonResponse.main.humidity,
        feelsLike : jsonResponse.main.feels_like,
        weather : jsonResponse.weather[0].description

    }
    console.log(result)
   

    }
    let handleChange=(evt)=>{
        setCity(evt.target.value);

    }
    let handleSubmit=(evt)=>{
        evt.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo();
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
         <TextField id="city" label="cityName" variant="standard" required  value={city} onChange={handleChange}/>
        <Button variant="contained" type="submit" >Search</Button>
      </form>
    </div>
  )
}

export default SearchBox
