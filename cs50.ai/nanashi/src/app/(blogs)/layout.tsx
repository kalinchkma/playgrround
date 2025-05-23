
import { blogsConfig } from '@/config/site'
import { Metadata } from 'next'
import React from 'react'


export const metadata: Metadata = {
  title: blogsConfig.title
}

export default function BlogLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <div className='w-full'>
     
        {children}
    </div>
  )
}
