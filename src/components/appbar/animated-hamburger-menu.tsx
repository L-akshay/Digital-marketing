'use client'

import React, { Fragment, useCallback, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import { usePathname, useRouter } from 'next/navigation'
import { useApp } from '@/hooks'
import { PREFERRED_MODE_KEY } from '@/constants'
import { companyMenus } from '@/constants/menus'
import Logo from '@/assets/logo.svg'

const saveCookies = (mode: string) => {
  window.localStorage.setItem(PREFERRED_MODE_KEY, mode)
}

const AnimatedHamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const theme = useTheme()
  const pathName = usePathname()
  const router = useRouter()
  const { isDark, setIsDark } = useApp()

  const toggleMenu = () => setIsOpen((prev) => !prev)
  const closeMenu = () => setIsOpen(false)

  const handleNav = useCallback(
    (path: string) => {
      closeMenu()
      router.push(path)
    },
    [router]
  )

  const toggleDarkMode = useCallback(() => {
    saveCookies(isDark ? 'light' : 'dark')
    setIsDark(!isDark)
  }, [isDark, setIsDark])

  return (
    <Fragment>
      {/* Hamburger button */}
      <IconButton
        onClick={toggleMenu}
        sx={{ p: 0, width: 42, height: 42 }}
        aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
      >
        <svg width='32' height='32' viewBox='0 0 32 32'>
          <motion.line
            x1='6' y1='10' x2='26' y2='10'
            stroke={theme.palette.primary.main}
            strokeWidth='2' strokeLinecap='round'
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          />
          <motion.line
            x1='6' y1='16' x2='26' y2='16'
            stroke={theme.palette.primary.main}
            strokeWidth='2' strokeLinecap='round'
            animate={{ opacity: isOpen ? 0 : 1, x: isOpen ? 10 : 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          />
          <motion.line
            x1='6' y1='22' x2='26' y2='22'
            stroke={theme.palette.primary.main}
            strokeWidth='2' strokeLinecap='round'
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          />
        </svg>
      </IconButton>

      {/* Mobile Drawer */}
      <Drawer
        anchor='top'
        open={isOpen}
        onClose={closeMenu}
        PaperProps={{
          sx: {
            borderRadius: '0 0 20px 20px',
            pt: 2,
            pb: 3,
            px: 2,
            backgroundColor: 'background.paper',
            boxShadow: 6,
          },
        }}
      >
        {/* Drawer header */}
        <Stack direction='row' alignItems='center' justifyContent='space-between' sx={{ px: 1, mb: 1 }}>
          <Box
            component={Logo}
            sx={{ height: 36, width: 'auto', cursor: 'pointer' }}
            onClick={() => handleNav('/')}
          />
          <IconButton onClick={closeMenu} aria-label='閉じる'>
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
              <path d='M18 6L6 18M6 6l12 12' stroke={theme.palette.text.primary} strokeWidth='2' strokeLinecap='round' />
            </svg>
          </IconButton>
        </Stack>

        <Divider sx={{ mb: 1 }} />

        {/* Nav links */}
        <List disablePadding>
          <AnimatePresence>
            {companyMenus.map((item, index) => {
              const isActive = pathName === item.path
              return (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06, duration: 0.22 }}
                >
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => handleNav(item.path)}
                      sx={{
                        borderRadius: 3,
                        mb: 0.5,
                        backgroundColor: isActive ? 'primary.main' : 'transparent',
                        '&:hover': { backgroundColor: isActive ? 'primary.dark' : 'action.hover' },
                      }}
                    >
                      <Box sx={{ mr: 1.5, color: isActive ? '#fff' : 'primary.main', display: 'flex' }}>
                        {item.icon}
                      </Box>
                      <ListItemText
                        primary={
                          <Typography
                            sx={{
                              fontWeight: 600,
                              fontSize: 15,
                              color: isActive ? '#fff' : 'text.primary',
                            }}
                          >
                            {item.label}
                          </Typography>
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </List>

        <Divider sx={{ my: 1.5 }} />

        {/* Dark mode toggle */}
        <ListItemButton
          onClick={toggleDarkMode}
          sx={{ borderRadius: 3, px: 2 }}
        >
          <Box sx={{ mr: 1.5, display: 'flex', color: 'primary.main' }}>
            {isDark ? (
              <svg xmlns='http://www.w3.org/2000/svg' width={20} height={20} fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'
                  d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z' />
              </svg>
            ) : (
              <svg xmlns='http://www.w3.org/2000/svg' width={20} height={20} viewBox='0 0 20 20' fill='currentColor'>
                <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
              </svg>
            )}
          </Box>
          <ListItemText
            primary={
              <Typography sx={{ fontWeight: 600, fontSize: 15, color: 'text.primary' }}>
                {isDark ? 'ライトモード' : 'ダークモード'}
              </Typography>
            }
          />
        </ListItemButton>
      </Drawer>
    </Fragment>
  )
}

export default AnimatedHamburgerMenu
