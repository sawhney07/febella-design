import './globals.css'
import type { Metadata } from 'next'
import Navigation from './navigation/page'

export const metadata: Metadata = {
  title: 'Febella Design',
  description: 'Fashion consulting and personal styling services',
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'Febella Design',
    description: 'Fashion consulting and personal styling services',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
    siteName: 'Febella Design',
    images: [
      {
        url: '/favicon.ico', // Specify the path to your image or favicon for social media previews
        width: 800,
        height: 800,
        alt: 'Febella Design',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Febella Design</title>
      </head>
      <body className="bg-[#F5F0E6]">
        <Navigation />
        {children}
      </body>
    </html>
  )
}