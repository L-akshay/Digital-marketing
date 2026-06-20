'use client'

import React, { JSX, useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import { SectionTitle, StyledButton } from '@/components/core'
import EmailIcon from '@/assets/icons/eva--email-outline.svg'
import PhoneIcon from '@/assets/icons/eva--phone-outline.svg'
import LocationIcon from '@/assets/icons/tdesign--location.svg'

const ContactPage = (): JSX.Element => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <Box sx={{ pt: { xs: 14, md: 16 }, pb: { xs: 10, md: 16 }, backgroundColor: 'background.default', minHeight: '100vh' }}>
      <Container maxWidth='lg'>
        {/* Header */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <SectionTitle>お問い合わせ</SectionTitle>
          <Typography variant='h1' sx={{ fontSize: { xs: 28, md: 42 }, fontWeight: 800, mb: 2 }}>
            お気軽にご連絡ください
          </Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: { xs: 15, md: 18 }, maxWidth: 560, mx: 'auto' }}>
            プロジェクトのご相談、サービスに関するご質問など、どんなことでもお待ちしております。
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              component='form'
              onSubmit={handleSubmit}
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: 4,
                backgroundColor: 'background.paper',
                boxShadow: 2,
              }}
            >
              {sent ? (
                <Box sx={{ textAlign: 'center', py: 6 }}>
                  <Typography variant='h4' sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                    送信完了しました！
                  </Typography>
                  <Typography sx={{ color: 'text.secondary' }}>
                    お問い合わせいただきありがとうございます。24時間以内にご返信いたします。
                  </Typography>
                </Box>
              ) : (
                <>
                  <Typography variant='h5' sx={{ fontWeight: 700, mb: 3 }}>
                    メッセージを送る
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <TextField
                        fullWidth
                        label='お名前'
                        name='name'
                        value={form.name}
                        onChange={handleChange}
                        required
                        variant='outlined'
                      />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <TextField
                        fullWidth
                        label='メールアドレス'
                        name='email'
                        type='email'
                        value={form.email}
                        onChange={handleChange}
                        required
                        variant='outlined'
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label='件名'
                        name='subject'
                        value={form.subject}
                        onChange={handleChange}
                        required
                        variant='outlined'
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label='メッセージ'
                        name='message'
                        value={form.message}
                        onChange={handleChange}
                        required
                        multiline
                        rows={5}
                        variant='outlined'
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <StyledButton variant='contained' color='primary' size='large' type='submit'>
                        送信する
                      </StyledButton>
                    </Grid>
                  </Grid>
                </>
              )}
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ pl: { md: 2 } }}>
              <Typography variant='h5' sx={{ fontWeight: 700, mb: 3 }}>
                連絡先情報
              </Typography>

              {[
                {
                  icon: EmailIcon,
                  title: 'メール',
                  value: 'hello@example.com',
                  sub: '24時間以内にご返信',
                  href: 'mailto:hello@example.com',
                },
                {
                  icon: PhoneIcon,
                  title: '電話',
                  value: '+62 8881212121212',
                  sub: '月〜金 / 午前9時〜午後5時',
                  href: 'tel:+628881212121212',
                },
                {
                  icon: LocationIcon,
                  title: '所在地',
                  value: '123 Business St., Suite 456',
                  sub: 'City, State, ZIP, Country',
                  href: '#',
                },
              ].map((item) => (
                <Box
                  key={item.title}
                  component='a'
                  href={item.href}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    mb: 4,
                    textDecoration: 'none',
                    color: 'text.primary',
                    '&:hover': { color: 'primary.main' },
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      backgroundColor: 'primary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 2,
                      flexShrink: 0,
                    }}
                  >
                    <Box component={item.icon} sx={{ width: 22, height: 22, color: '#fff' }} />
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: 15 }}>{item.title}</Typography>
                    <Typography sx={{ fontWeight: 500 }}>{item.value}</Typography>
                    <Typography variant='subtitle1' sx={{ color: 'text.secondary' }}>{item.sub}</Typography>
                  </Box>
                </Box>
              ))}

              {/* Map placeholder */}
              <Box
                sx={{
                  mt: 2,
                  borderRadius: 4,
                  overflow: 'hidden',
                  height: 200,
                  backgroundColor: 'action.hover',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography sx={{ color: 'text.disabled' }}>地図プレースホルダー</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ContactPage
