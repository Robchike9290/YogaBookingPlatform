'use client'

import { Inter } from 'next/font/google'
import '../styles/globals.css'
import TitleBar from '@/app/_components/TitleBar'
import NavBar from '@/app/_components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Yoga Booking Platform</title>
      </head>
      <body className={inter.className}>
        <TitleBar />
        <br />
        <NavBar />
        <br />
        <main>{children}</main>
      </body>
    </html>
  )
}

