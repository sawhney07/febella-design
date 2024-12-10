'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const navigation = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT US', href: '/about' },
  { name: 'PRODUCTS', href: '/products' },
  { name: 'CONTACT', href: '/contact' },
]

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 mt-auto transition-all duration-300 ${
          hasScrolled ? 'bg-[#F5F0E6] shadow-md' : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-6 mt-auto py-6 text-[#3C3A36]">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-4">
              <Image
                src="/images/logo.jpg"
                alt="Febella Design Logo"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <span className="text-l font-semibold tracking-[0.2em]">FEBELLA DESIGN</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="tracking-[0.2em] text-sm font-medium hover:opacity-70 transition-opacity duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <button
              onClick={toggleMenu}
              className="p-2 md:hidden"
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
            className="md:hidden bg-[#F5F0E6] fixed top-[96px] left-0 right-0 z-40 shadow-md mt-auto"
          >
            <nav className="container mx-auto px-6 py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-3 tracking-[0.2em] text-sm font-medium text-[#3C3A36] hover:opacity-70 transition-opacity duration-300"
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