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
  title: 'Evolveris | BPO & Customer Experience Outsourcing',
  description: 'Evolveris is a  BPO delivering customer support, debt recovery, and sales outsourcing from Pakistan and Accra hubs. 95% SLA, 20+ trained specialists, live reporting.',
  generator: 'Evolveris',
  keywords: [
    'BPO outsourcing ',
    'customer experience outsourcing',
    'debt recovery services',
    'call centre outsourcing',
    'customer support outsourcing',
    'sales outsourcing',
    'BPO Pakistan',
    'BPO Accra',
    'business process outsourcing',
    'Evolveris',
  ],
  authors: [{ name: 'Evolveris' }],
  metadataBase: new URL('https://www.evolveris.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Evolveris | BPO & Customer Experience Outsourcing',
    description: 'Scale customer support, debt recovery, and outbound sales with Evolveris. Two delivery hubs covering UK and EU business hours. 95% average service level.',
    url: 'https://www.evolveris.com',
    siteName: 'Evolveris',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evolveris | BPO & Customer Experience Outsourcing',
    description: 'Scale your customer operations with Evolveris. Two delivery hubs, 95% SLA, specialists in support, debt recovery and sales.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Evolveris',
  url: 'https://www.evolveris.com',
  description: 'BPO and customer experience outsourcing — customer support, debt recovery, and outbound sales for UK and EU businesses.',
  foundingLocation: {
    '@type': 'Place',
    name: 'United Kingdom',
  },
  areaServed: ['GB', 'EU'],
  serviceType: [
    'Customer Support Outsourcing',
    'Debt Recovery',
    'Outbound Sales',
    'Business Process Outsourcing',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: 'English',
    hoursAvailable: 'Mo-Fr 09:00-18:00',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${geistMono.variable} ${serif.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  )
}
