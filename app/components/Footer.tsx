import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Twitter } from 'lucide-react'

const navigation = [
  { name: 'HOME', href: '/' },
  { name: 'PORTFOLIO', href: '/portfolio' },
  { name: 'PRODUCTS', href: '/products' },
  { name: 'CONTACT', href: '/contact' },
]

export function Footer() {
  return (
    <footer className="bg-[#3C3A36] text-[#F5F0E6] py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/images/logo.jpg"
              alt="Febella Design Logo"
              width={60}
              height={60}
              className="w-16 h-16 mb-4"
            />
            <p className="text-sm text-[#F5F0E6]/70">
              Elevating personal style through bespoke fashion consulting and styling services.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold tracking-[0.2em] mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm hover:text-[#F5F0E6]/70 transition-colors duration-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold tracking-[0.2em] mb-4">CONTACT</h3>
            <p className="text-sm mb-2">123 Fashion Avenue, Style District</p>
            <p className="text-sm mb-2">New York, NY 10001</p>
            <p className="text-sm mb-2">Phone: (555) 123-4567</p>
            <p className="text-sm">Email: info@febelladesign.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold tracking-[0.2em] mb-4">FOLLOW US</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-[#F5F0E6] hover:text-[#F5F0E6]/70 transition-colors duration-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-[#F5F0E6] hover:text-[#F5F0E6]/70 transition-colors duration-300">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-[#F5F0E6] hover:text-[#F5F0E6]/70 transition-colors duration-300">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#F5F0E6]/20 text-center">
          <p className="text-sm text-[#F5F0E6]/70">
            © 2024 FEBELLA DESIGN. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  )
} 