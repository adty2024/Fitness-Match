import React from 'react';
import {Box, Stack} from '@mui/material';
import Logo from '../assets/images/footer_logo.jpg';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#f0f3f5" mb="5px">
      <Stack gap="40px" alignItems="center" px="40px" pt="10px">
        <img src={Logo} alt="logo" width="180px" height="100px" />
      </Stack>

    </Box>
  )
}

export default Footer