import PageHeaderWithBack from '@/components/common/page-header'
import { creationsConfig } from '@/config/site'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: creationsConfig.title
}

export default function CreationLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <div className='w-full'>
      <PageHeaderWithBack title='My Contributions to the world' />
      {children}
    </div>
  )
}

