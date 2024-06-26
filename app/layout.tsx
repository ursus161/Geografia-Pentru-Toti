import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GeoSmart',
  description: 'Prezentarea cursului de geografie pentru copii de varstele cuprinse intre 6-12 ani.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='all' lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
