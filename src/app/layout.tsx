import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from './sooner'
import { Suspense } from "react"

import {
  Inter as FontInter,
  Geist_Mono as FontGeistMono,
  Source_Serif_4 as FontSourceSerif,
} from 'next/font/google'

const inter = FontInter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800', '900'], variable: '--font-inter' })
const geistMono = FontGeistMono({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-geist-mono' })
const serif = FontSourceSerif({ subsets: ['latin'], weight: ['400', '600', '700', '800'], variable: '--font-serif' })

export const metadata: Metadata = {
  title: 'Evolveris — Better Customer Experiences',
  description: 'Evolveris helps businesses scale customer experience and operations through exceptional people, intelligent technology and real-time expertise.',
  generator: 'Evolveris',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable} ${serif.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  )
}
