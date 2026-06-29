import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Marcianno ABC | Boxing Gym in Welling, Bexley',
    template: '%s | Marcianno ABC',
  },
  description:
    'Marcianno Bexley & District ABC — Building Strength. Building Community. Boxing classes for all ages in Welling, Bexley & Kent.',
  keywords: ['boxing', 'gym', 'Welling', 'Bexley', 'Kent', 'boxing club', 'ABC'],
  metadataBase: new URL('https://marcianno-abc.com'),
  openGraph: {
    siteName: 'Marcianno ABC',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Marcianno ABC — Boxing Gym, Welling',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
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
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
