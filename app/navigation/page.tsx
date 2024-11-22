'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const navigation = [
  { name: 'HOME', href: '/' },
  { name: 'PORTFOLIO', href: '/portfolio' },
  { name: 'PRODUCTS', href: '/products' },
  { name: 'CONTACT', href: '/contact' },
]

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-[#3C3A36] border-b border-[#F5F0E6]/20 shadow-sm z-50">
        <nav className="container mx-auto px-6 py-6 text-[#F5F0E6]">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-4">
              <Image
                src="/images/logo.jpg"
                alt="Febella Design Logo"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <span className="text-xl font-semibold tracking-[0.2em] !text-[#F5F0E6]">FEBELLA DESIGN</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="tracking-[0.2em] text-sm font-medium !text-[#F5F0E6] hover:!text-[#F5F0E6]/70 transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <button
              onClick={toggleMenu}
              className="p-2 md:hidden !text-[#F5F0E6]"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#3C3A36] border-b border-[#F5F0E6]/20 fixed top-[96px] left-0 right-0 z-40 shadow-md"
          >
            <nav className="container mx-auto px-6 py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-3 tracking-[0.2em] text-sm font-medium !text-[#F5F0E6] hover:!text-[#F5F0E6]/70 transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}