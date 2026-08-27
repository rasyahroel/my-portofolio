import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ramanda Syahputra | IT Developer',
  description: 'Portfolio website of Ramanda Syahputra - IT Developer specializing in Core Banking and Fullstack Development',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}