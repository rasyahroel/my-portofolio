import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'

// After you deploy (Vercel/Netlify), replace this with your real domain.
// It's required for the Open Graph image URL to be absolute, which is what
// WhatsApp/LinkedIn/etc need to render a link preview correctly.
const SITE_URL = 'https://ramanda-syahputra.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Ramanda Syahputra | IT Developer & Fullstack Developer',
  description:
    'Fullstack Developer with 2+ years of experience in core banking integration, internal enterprise applications, and modern web development using Laravel, FilamentPHP, React.js, and Next.js. Based in Jakarta, Indonesia.',
  keywords: [
    'Ramanda Syahputra',
    'Fullstack Developer',
    'IT Developer',
    'Laravel Developer',
    'FilamentPHP',
    'Core Banking',
    'Next.js Developer',
    'React Developer',
    'Jakarta',
    'Indonesia',
  ],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Ramanda Syahputra | IT Developer & Fullstack Developer',
    description:
      'Fullstack Developer with 2+ years of experience in core banking integration, internal enterprise applications, and modern web development using Laravel, FilamentPHP, React.js, and Next.js.',
    url: SITE_URL,
    siteName: 'Ramanda Syahputra Portfolio',
    // No "images" here on purpose — app/opengraph-image.tsx generates the
    // preview picture automatically from content/portfolio.ts and Next.js
    // wires it in for us. Nothing to keep in sync manually.
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ramanda Syahputra | IT Developer & Fullstack Developer',
    description:
      'Fullstack Developer with 2+ years of experience in core banking integration and modern web development using Laravel, FilamentPHP, React.js, and Next.js.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}