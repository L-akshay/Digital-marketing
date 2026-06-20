'use client'

import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'
import MuiLink from '@mui/material/Link'
import RouterLink from 'next/link'
import { FooterSectionTitle } from '@/components/footer'
import { supportLinks } from '@/constants/menus'

interface LinkItemProps {
  label: string
  path: string
}

const LinkItem: FC<LinkItemProps> = ({ label, path }) => {
  return (
    <MuiLink
      component={RouterLink}
      href={path}
      sx={{
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        mb: 0.5,
        color: 'text.primary',
        '&:hover': {
          color: 'primary.main',
        },
      }}
    >
      <Typography
        component='p'
        sx={{
          display: 'inline-block',
          color: 'inherit',
          fontWeight: '500',
        }}
      >
        {label}
      </Typography>
    </MuiLink>
  )
}

const FooterSupportLinks: FC = () => {
  return (
    <Box>
      <FooterSectionTitle title='サポート' />
      {supportLinks.map((item, index) => (
        <LinkItem
          key={item.label + String(index)}
          label={item.label}
          path={item.path}
        />
      ))}
    </Box>
  )
}

export default FooterSupportLinks
