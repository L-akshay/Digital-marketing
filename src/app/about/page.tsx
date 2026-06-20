'use client'

import React, { JSX } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import { SectionTitle } from '@/components/core'

const values = [
  { title: '革新', description: '常に新しい技術とアイデアを取り入れ、最先端のソリューションを提供します。' },
  { title: '誠実さ', description: '透明性を大切にし、クライアントとの信頼関係を最優先に考えます。' },
  { title: '品質', description: 'すべてのプロジェクトにおいて、最高水準の品質を追求します。' },
  { title: 'チームワーク', description: 'クライアントと緊密に連携し、共に成功を目指します。' },
]

const team = [
  { name: '田中 太郎', role: 'CEO・共同創業者', image: '/images/about-1.jpg' },
  { name: '山田 花子', role: 'クリエイティブディレクター', image: '/images/about-2.jpg' },
]

const AboutPage = (): JSX.Element => {
  return (
    <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh' }}>
      {/* Hero */}
      <Box
        sx={{
          pt: { xs: 16, md: 20 },
          pb: { xs: 8, md: 12 },
          backgroundColor: 'background.paper',
          textAlign: 'center',
        }}
      >
        <Container maxWidth='md'>
          <SectionTitle>会社概要</SectionTitle>
          <Typography variant='h1' sx={{ fontSize: { xs: 30, md: 48 }, fontWeight: 800, mb: 3 }}>
            私たちについて
          </Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: { xs: 15, md: 18 }, lineHeight: 1.8 }}>
            2016年の創業以来、私たちはデジタルマーケティング・Web開発・ブランディングを通じて、
            世界中のビジネスの成長を支援してきました。
          </Typography>
        </Container>
      </Box>

      {/* Story */}
      <Box sx={{ py: { xs: 8, md: 14 }, backgroundColor: 'background.default' }}>
        <Container>
          <Grid container spacing={8} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <SectionTitle>私たちのストーリー</SectionTitle>
              <Typography variant='h2' sx={{ fontSize: { xs: 24, md: 36 }, fontWeight: 800, mb: 3 }}>
                アイデアを美しい形に変える会社
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: 16, lineHeight: 1.9, mb: 3 }}>
                私たちは、戦略とクリエイティブな発想の力を信じるデジタル＆マーケティングエージェンシーです。
                複雑な課題にシンプルな解決策を見つけることを楽しみながら、クライアントのビジネスを次のレベルへと引き上げます。
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: 16, lineHeight: 1.9 }}>
                創業以来、125社以上のクライアントと500以上のプロジェクトを完遂してきました。
                大企業から中小企業まで、業種を問わず幅広いデジタルソリューションを提供しています。
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ position: 'relative', borderRadius: 4, overflow: 'hidden', height: 380 }}>
                <Image src='/images/about-1.jpg' fill alt='私たちのストーリー' style={{ objectFit: 'cover' }} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'primary.main' }}>
        <Container>
          <Grid container spacing={4} sx={{ textAlign: 'center' }}>
            {[
              { value: '5+', label: 'サービス提供年数' },
              { value: '125+', label: '満足いただいたお客様' },
              { value: '500+', label: 'プロジェクト完了数' },
              { value: '10+', label: '専門スタッフ' },
            ].map((stat) => (
              <Grid key={stat.label} size={{ xs: 6, md: 3 }}>
                <Typography variant='h2' sx={{ fontWeight: 800, color: '#fff', fontSize: { xs: 36, md: 48 } }}>
                  {stat.value}
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.8)', mt: 1 }}>{stat.label}</Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Values */}
      <Box sx={{ py: { xs: 8, md: 14 }, backgroundColor: 'background.paper' }}>
        <Container>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <SectionTitle>私たちの価値観</SectionTitle>
            <Typography variant='h2' sx={{ fontSize: { xs: 24, md: 36 }, fontWeight: 800 }}>
              大切にしていること
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {values.map((v) => (
              <Grid key={v.title} size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    backgroundColor: 'background.default',
                    height: '100%',
                    transition: 'transform 0.2s',
                    '&:hover': { transform: 'translateY(-4px)', boxShadow: 3 },
                  }}
                >
                  <Typography variant='h5' sx={{ fontWeight: 700, mb: 1.5, color: 'primary.main' }}>
                    {v.title}
                  </Typography>
                  <Divider sx={{ mb: 2, width: 40, borderColor: 'primary.main', borderWidth: 2 }} />
                  <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>{v.description}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Team */}
      <Box sx={{ py: { xs: 8, md: 14 }, backgroundColor: 'background.default' }}>
        <Container>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <SectionTitle>チーム</SectionTitle>
            <Typography variant='h2' sx={{ fontSize: { xs: 24, md: 36 }, fontWeight: 800 }}>
              私たちのチーム
            </Typography>
          </Box>
          <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
            {team.map((member) => (
              <Grid key={member.name} size={{ xs: 12, sm: 6, md: 4 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      position: 'relative',
                      width: 180,
                      height: 180,
                      borderRadius: '50%',
                      overflow: 'hidden',
                      mx: 'auto',
                      mb: 2,
                      boxShadow: 3,
                    }}
                  >
                    <Image src={member.image} fill alt={member.name} style={{ objectFit: 'cover' }} />
                  </Box>
                  <Typography variant='h6' sx={{ fontWeight: 700 }}>{member.name}</Typography>
                  <Typography sx={{ color: 'primary.main', fontWeight: 500 }}>{member.role}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default AboutPage
