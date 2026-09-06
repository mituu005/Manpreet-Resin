import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Manpreet Anand — Resin and Mixed Media Artist',
  description:
    'Bespoke botanical resin keepsakes, 37" Evil Eye wall art, preserved flower frames, and personalized luxury hampers by Resin and Mixed Media Artist Manpreet Anand (@artista_prreeti).',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#5E1D28',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth bg-[#FAF6F4]">
      <body className="antialiased bg-[#FAF6F4] text-[#261014]">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
