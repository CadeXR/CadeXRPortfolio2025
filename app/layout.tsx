import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CADEXR - XR/VR Developer Portfolio',
  description: 'Cade Gilbert - XR/VR Developer, Game Designer, and AI Researcher. Creating immersive experiences and next-generation VR technology.',
  keywords: 'XR, VR, AR, Virtual Reality, Augmented Reality, Game Development, AI, MIT, Portfolio',
  authors: [{ name: 'Cade Gilbert' }],
  creator: 'Cade Gilbert',
  openGraph: {
    title: 'CADEXR - XR/VR Developer Portfolio',
    description: 'Cade Gilbert - XR/VR Developer, Game Designer, and AI Researcher',
    url: 'https://cadexr.com',
    siteName: 'CADEXR Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CADEXR Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CADEXR - XR/VR Developer Portfolio',
    description: 'Cade Gilbert - XR/VR Developer, Game Designer, and AI Researcher',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  )
} 