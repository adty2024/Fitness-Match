import React from 'react';
import {Link} from 'react-router-dom';
import {Stack} from '@mui/material';
import { FitnessCenter } from '@mui/icons-material';

const Navbar = () => {
  return (
    <Stack 
      direction="row"
      borderBottom="4px-solid-black"
      justifyContent="space-around"
      sx={{gap: {
            sm: '122px', xs:'40px'
          },  
           mt: {
            sm: '32px', xs: '20px'
          },
           justifyContent: 'none'
          }
      }
      px='20px'
    >
      <Link to="/">
        <FitnessCenter sx={{
          width: '48px',
          height: '48px',
          margin: '0 20px',
          color: "black"
        }} />
      </Link>

      <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
      >
          <Link to="/" style={{
            textDecoration: 'none',
            color: '#3A1212',
            borderBottom: '3px solid #2424bf'
          }}>Home
          </Link>
          
          
      </Stack>

    </Stack>
  )
}

export default Navbar