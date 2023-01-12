import { useTheme } from '@emotion/react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'

const Home = () => {
  const theme = useTheme();
  console.log(theme.palette, "classes")
  return (
    <Box>
      <Typography variant="h1" color={theme.palette.grey[500]}>grey color</Typography>
      <Typography variant="h2" color={theme.palette.primary[500]}>primary color</Typography>
      <Typography variant="h3" color={theme.palette.secondary[500]}>secondary color</Typography>
      <Box component={'div'}>
        <a href="//#region ">Hello</a>
      </Box>
      <Box component={'div'}>
        <button>i am button</button>
      </Box>
    </Box>
  )
}

export default Home