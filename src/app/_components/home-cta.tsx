'use client'

import React from 'react'

// components
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import { StyledButton } from '@/components/core'

// configs
import { AppConfig } from '@/configs'

// navigation
import Link from 'next/link'

const HomeCTA = () => {
  return (
    <Box
      id='home-cta'
      component='section'
      sx={{
        width: '100%',
        py: {
          xs: 6,
          md: 8,
          lg: 12,
        },
        backgroundColor: 'background.paper',
      }}
    >
      <Container>
        <Box
          sx={{
            position: 'relative',
            borderRadius: 8,
            color: '#fbfbfb',
            overflow: 'hidden',
          }}
        >
          {/* Background image via next/image for optimization */}
          <Image
            src='/images/bg3.jpg'
            alt=''
            fill
            sizes='(max-width: 768px) 100vw, 1200px'
            quality={75}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            aria-hidden='true'
          />
          <Box
            sx={{
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              textAlign: 'center',
              py: { xs: 6, md: 8 },
              px: { xs: 2, md: 0 },
              mx: 'auto',
              width: {
                xs: '100%',
                md: 720,
              },
            }}
          >
            <Typography
              component='h4'
              variant='h6'
              sx={{ mb: 2, lineHeight: 1.4 }}
            >
              素晴らしいものを作りませんか？
            </Typography>
            <Typography variant='h2' sx={{ mb: 5, lineHeight: 1.6 }}>
              {AppConfig.appName}と一緒にビジネスの旅をより良いものに
            </Typography>
            <Link href='/contact'>
              <StyledButton variant='contained' color='light' size='large'>
                私たちと一緒に働く
              </StyledButton>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeCTA
