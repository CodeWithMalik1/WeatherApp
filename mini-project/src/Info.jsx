import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import WaterDropIcon from '@mui/icons-material/WaterDrop';


const Info = ({info}) => {
    
    let Cold_Url="https://images.unsplash.com/photo-1610641819103-4706ed9b1ff3?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let Hot_url="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let Rainy_Url="https://images.unsplash.com/photo-1558409057-bbe679023136?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  return (
    <div>
      
   <Card
  sx={{
    maxWidth: 345,
    margin: '24px auto',
    borderRadius: '20px',
    boxShadow: '0 6px 20px rgba(30, 30, 60, 0.18)',
    background: 'linear-gradient(135deg, #e0eafe 0%, #f9fafc 100%)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    '&:hover': {
      transform: 'translateY(-6px) scale(1.03)',
      boxShadow: '0 12px 32px rgba(30, 30, 60, 0.26)',
    },
  }}
>
  <CardMedia
    sx={{
      height: 200,
      borderTopLeftRadius: '20px',
      borderTopRightRadius: '20px',
      filter: 'brightness(0.93)',
      objectFit: 'cover',
    }}
    image={info.humidity > 80 ? Rainy_Url : info.temp > 15 ? Hot_url : Cold_Url}
    title="Weather image"
  />
  <CardContent
    sx={{
      textAlign: 'center',
      background: 'linear-gradient(90deg, #ffffff80 60%, #bcdcf8 100%)',
      py: 3,
    }}
  >
    <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 600, letterSpacing: '1px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
      {info.city}
      {info.humidity > 80 ? <WaterDropIcon sx={{ color: '#2196f3', fontSize: 32 }} /> : info.temp > 15 ? <SunnyIcon sx={{ color: '#ffb300', fontSize: 32 }} /> : <AcUnitIcon sx={{ color: '#64b5f6', fontSize: 32 }} />}
    </Typography>
    <Typography variant="body2" sx={{ color: 'text.secondary', px: 1, fontSize: '1rem', textAlign: 'left' }} component="span">
      <div style={{ marginBottom: 8 }}>Temperature : <b>{info.temp}&deg;C</b></div>
      <div style={{ marginBottom: 8 }}>Max Temp : <span style={{ color: '#d32f2f' }}>{info.tempMax}&deg;C</span></div>
      <div style={{ marginBottom: 8 }}>Min Temp : <span style={{ color: '#1976d2' }}>{info.tempMin}&deg;C</span></div>
      <div style={{ marginBottom: 8 }}>Humidity : <span style={{ color: '#2196f3', fontWeight: 'bold' }}>{info.humidity}%</span></div>
      <div style={{ marginBottom: 8 }}>Feels Like : <b>{info.feelsLike}&deg;C</b></div>
      <div>Weather can be described as <b><i style={{ color: '#1976d2', fontWeight: 500 }}>{info.weather}</i></b> and feels like <b><i style={{ color: '#ffa000', fontWeight: 500 }}>{info.feelsLike}</i></b></div>
    </Typography>
  </CardContent>
  <CardActions
    sx={{
      px: 3,
      pb: 2,
      display: 'flex',
      justifyContent: 'space-between',
      background: '#e8f4fd',
    }}
  >
    <Button
      size="small"
      sx={{
        color: '#1976d2',
        fontWeight: 600,
        borderRadius: '18px',
        background: 'linear-gradient(90deg, #2196f3 25%, #21cbf3 75%)',
        boxShadow: '0 1px 3px #1976d230',
        '&:hover': {
          background: 'linear-gradient(90deg, #1976d2 25%, #64b5f6 75%)',
        },
      }}
    >Share</Button>
    <Button
      size="small"
      sx={{
        color: '#ffa000',
        fontWeight: 600,
        borderRadius: '18px',
        background: 'linear-gradient(90deg, #ffb300 25%, #ffe082 75%)',
        boxShadow: '0 1px 3px #ffa00030',
        '&:hover': {
          background: 'linear-gradient(90deg, #ffa000 25%, #ffd54f 75%)',
        },
      }}
    >Learn More</Button>
  </CardActions>
</Card>

    </div>
  )
}

export default Info
