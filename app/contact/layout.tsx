import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact & Find Us | Marcianno ABC',
  description:
    'Get in touch with Marcianno Bexley & District ABC. Find us at 2 Upper Wickham Lane, Welling, DA16 3HE. Call 07872 557398.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
