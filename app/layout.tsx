import './globals.css'
import type { Metadata } from 'next'
import Navigation from './navigation/page'
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: {
    default: 'Febella Design',
    template: '%s | Febella Design', // Allows individual pages to customize the title
  },
  description: 'Fashion consulting and personal styling services',
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'Febella Design',
    description: 'Fashion consulting and personal styling services',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
    siteName: 'Febella Design',
    images: [
      {
        url: '../public/images/site_preview.jpeg', // Specify the path to your image or favicon for social media previews
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
      <head/>
      <body className="bg-[#F5F0E6]">
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  )
}