import React from 'react';
import {Stack, Typography} from '@mui/material';
import AccessibilityIcon from '@mui/icons-material/Accessibility';

const BodyPart = ({item, setBodyPart, bodyPart}) => {
  return (
    <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className='bodyPart-card'
    sx = {{
      borderTop: bodyPart === item ? '4px solid #2424bf' : '', 
      backgroundColor: '#fff',
      borderBottomLeftRadius: '20px',
      width: '270px',
      height: '280px',
      cursor: 'pointer',
      gap: '47px'
    }}
    onClick = {() => {
      setBodyPart(item);
      window.scrollTo({top: 1800, left: 100, behavior: 'smooth'})
    }}
      
    >
      <AccessibilityIcon 
      style = {{width: '50px', height: '50px'}}
      />
      
      <Typography
      fontSize="24px"
      fontWeight="bold"
      color="#2424bf"
      textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  )
}

export default BodyPart