// components
import Box from '@mui/material/Box'

// icons
import HomeOutlinedIcon from '@/assets/icons/fluent--home-32-regular.svg'
import ContactOutlinedIcon from '@/assets/icons/fluent--contact-card-group-28-regular.svg'
import InfoOutlinedIcon from '@/assets/icons/jam--info.svg'
import PaperOutlinedIcon from '@/assets/icons/quill--paper.svg'
import ShieldOutlinedIcon from '@/assets/icons/hugeicons--shield-01.svg'

export const companyMenus: IMenu[] = [
  {
    label: 'ホーム',
    path: '/',
    icon: (
      <Box component={HomeOutlinedIcon} sx={{ width: 18, height: 'auto' }} />
    ),
  },
  {
    label: 'お問い合わせ',
    path: '/contact',
    icon: (
      <Box component={ContactOutlinedIcon} sx={{ width: 18, height: 'auto' }} />
    ),
  },
  {
    label: '会社概要',
    path: '/about',
    icon: (
      <Box component={InfoOutlinedIcon} sx={{ width: 18, height: 'auto' }} />
    ),
  },
]

export const supportLinks: IMenu[] = [
  {
    label: '利用規約',
    path: '/terms-of-services',
    icon: (
      <Box component={PaperOutlinedIcon} sx={{ width: 18, height: 'auto' }} />
    ),
  },
  {
    label: 'プライバシーポリシー',
    path: '/privacy-policy',
    icon: (
      <Box component={ShieldOutlinedIcon} sx={{ width: 18, height: 'auto' }} />
    ),
  },
]
