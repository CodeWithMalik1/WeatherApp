import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
const SearchBox = () => {
    let [city,setCity]=useState("")
    let handleChange=(evt)=>{
        setCity(evt.target.value);

    }
    let handleSubmit=(evt)=>{
        evt.preventDefault();
        console.log(city);
        setCity("")
    }
  return (
    <div>
      <form action="" onClick={handleSubmit}>
         <TextField id="city" label="cityName" variant="standard" required  value={city} onChange={handleChange}/>
        <Button variant="contained" type="submit" >Search</Button>
      </form>
    </div>
  )
}

export default SearchBox
