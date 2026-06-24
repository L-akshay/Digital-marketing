'use client'

import dynamic from 'next/dynamic'

const AppBar = dynamic(() => import('./app-bar'), {
  loading: () => (
    <div style={{ height: 64, width: '100%', display: 'block' }} />
  ),
  ssr: false,
})

export default AppBar
