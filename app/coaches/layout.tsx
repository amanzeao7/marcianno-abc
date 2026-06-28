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
  openGraph: {
    siteName: 'Marcianno ABC',
    locale: 'en_GB',
    type: 'website',
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
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
