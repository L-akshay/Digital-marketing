'use client'

import React from 'react'

// hooks
import { useTheme, useMediaQuery } from '@mui/material'

// components
import Box from '@mui/material/Box'
import HomeHeroContent from './home-hero/home-hero-content'
import HomeHeroDecoration from './home-hero/home-hero-decoration'

const HomeHero = () => {
  const { palette, breakpoints } = useTheme()
  const isMobile = useMediaQuery(breakpoints.down('md'))

  return (
    <Box
      id='home-hero'
      sx={{
        width: '100%',
        position: 'relative',
        backgroundColor: palette.mode === 'dark' ? '#1b2b3c' : '#e8f3ff',
        minHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      {!isMobile && <HomeHeroDecoration />}
      <HomeHeroContent />
    </Box>
  )
}

export default HomeHero
