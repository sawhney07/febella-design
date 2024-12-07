import './globals.css'
import type { Metadata } from 'next'
import Navigation from './navigation/page'

export const metadata: Metadata = {
  title: 'Febella Design',
  description: 'Fashion consulting and personal styling services',
  openGraph: {
    title: 'Febella Design',
    description: 'Fashion consulting and personal styling services',
    url: 'https://febelladesign.com',
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