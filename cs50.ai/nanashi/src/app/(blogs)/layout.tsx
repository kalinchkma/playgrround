import React from 'react'

export default function BlogLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <div>
    blog layout
        {children}
    </div>
  )
}
