import './globals.css'
import type { Metadata } from 'next'
import Navigation from './navigation/page'

export const metadata: Metadata = {
  title: 'Febella Design',
  description: 'Bespoke fashion consulting and personal styling services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#F5F0E6]">
        <Navigation />
        <div className="pt-24">
          {children}
        </div>
      </body>
    </html>
  )
}