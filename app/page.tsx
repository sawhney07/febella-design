'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Footer } from './components/Footer'

const newsItems = [
  { 
    title: 'Summer Collection Launch', 
    date: 'June 15, 2024', 
    description: 'Introducing our latest summer styles for the fashion-forward individual.' 
  },
  { 
    title: 'Sustainable Fashion Workshop', 
    date: 'July 1, 2024', 
    description: 'Join us for an interactive session on incorporating sustainable practices into your wardrobe.' 
  },
  { 
    title: 'Collaboration with Local Artisans', 
    date: 'July 10, 2024', 
    description: 'Febella Design partners with local artisans to create unique, handcrafted accessories.' 
  },
]

const products = [
  { name: 'PERSONAL STYLING', image: '/images/1.png' },
  { name: 'WARDROBE CURATION', image: '/images/2.png' },
  { name: 'IMAGE CONSULTING', image: '/images/3.png' },
  { name: 'FASHION WORKSHOPS', image: '/images/4.png' },
]

const steps = [
  { 
    number: '01', 
    title: 'CONSULTATION', 
    description: 'In-depth discussion to understand your style goals and preferences. We explore your lifestyle, aspirations, and current wardrobe challenges.' 
  },
  { 
    number: '02', 
    title: 'ANALYSIS', 
    description: 'Comprehensive assessment of your current wardrobe and lifestyle needs. We evaluate colors, fits, and identify key pieces for your style evolution.' 
  },
  { 
    number: '03', 
    title: 'CURATION', 
    description: 'Carefully selected pieces to enhance your personal style. We source unique items that align with your aesthetic and practical requirements.' 
  },
  { 
    number: '04', 
    title: 'STYLING', 
    description: 'Expert guidance on how to wear and combine your new pieces. We create versatile looks and provide styling tips for various occasions.' 
  },
]

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F0E6] text-[#3C3A36]">
      <main className="flex-grow">
        <HomePage />
      </main>
      <Footer />
    </div>
  )
}

function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <ProcessSection />
      <VisionSection />
      <LatestNewsSection />
      <FinalCTASection />
    </>
  )
}

function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-20 md:py-32 text-center bg-[#E5DFD3] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[#3C3A36] rotate-45 transform origin-top-left"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.2em] mb-8 text-[#3C3A36]">
          ELEVATE YOUR STYLE
        </h1>
        <p className="text-lg md:text-xl text-[#3C3A36]/80 max-w-2xl mx-auto leading-relaxed">
          Bespoke fashion consulting and personal styling services tailored to your unique aesthetic.
        </p>
      </div>
    </motion.section>
  )
}

function ProductsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="py-20"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold tracking-[0.2em] text-center mb-12">OUR PRODUCTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function ProductCard({ name, image }: { name: string; image: string }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="group bg-[#E5DFD3] rounded-lg overflow-hidden shadow-md"
    >
      <div className="relative aspect-[3/4] mb-4">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-lg tracking-[0.2em] text-center p-4 font-medium">{name}</h3>
    </motion.div>
  )
}

function ProcessSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="py-32 bg-[#E5DFD3]"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold tracking-[0.2em] text-center mb-16 text-[#3C3A36]">OUR PROCESS</h2>
        <p className="text-center text-lg text-[#3C3A36]/80 max-w-3xl mx-auto mb-16">
          Our comprehensive styling process is designed to transform your wardrobe and elevate your personal style. 
          Each step is carefully crafted to ensure we understand and achieve your fashion goals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="text-center bg-white p-8 rounded-lg shadow-md flex flex-col h-full"
            >
              <div className="text-4xl font-bold mb-6 text-[#3C3A36]">{step.number}</div>
              <h3 className="text-lg tracking-[0.2em] mb-4 font-medium text-[#3C3A36]">{step.title}</h3>
              <p className="text-[#3C3A36]/70 flex-grow">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function VisionSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="py-32 text-center bg-[#3C3A36] text-[#F5F0E6]"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold tracking-[0.2em] mb-8">OUR VISION</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-xl text-[#F5F0E6]/90 leading-relaxed">
            At Febella Design, we envision a world where every individual feels confident and empowered through their personal style. 
            Our mission is to transform the way people approach fashion, making it an authentic expression of their unique identity.
          </p>
          <p className="text-lg text-[#F5F0E6]/80 leading-relaxed">
            We believe that style is more than just clothing &ndash; it&apos;s a powerful form of self-expression and confidence. 
            Through our expert guidance and personalized approach, we help our clients discover and embrace their authentic style.
          </p>
          <p className="text-lg text-[#F5F0E6]/80 leading-relaxed">
            Our commitment extends beyond fashion trends to creating lasting, sustainable wardrobes that reflect both personal taste and lifestyle needs. 
            We strive to make high-end fashion accessible and practical for everyday life.
          </p>
        </div>
      </div>
    </motion.section>
  )
}

function LatestNewsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="py-20"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold tracking-[0.2em] text-center mb-12 text-[#3C3A36]">LATEST NEWS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="bg-[#E5DFD3] rounded-lg overflow-hidden shadow-md p-6"
            >
              <h3 className="text-xl tracking-[0.1em] mb-2 font-medium text-[#3C3A36]">{item.title}</h3>
              <p className="text-sm text-[#3C3A36]/70 mb-4">{item.date}</p>
              <p className="text-[#3C3A36]/80">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function FinalCTASection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.0 }}
      className="py-32 bg-[#3C3A36] text-[#F5F0E6]"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-[0.2em] mb-8">
            BEGIN YOUR STYLE JOURNEY
          </h2>
          <div className="space-y-8">
            <p className="text-xl text-[#F5F0E6]/90 leading-relaxed">
              Your personal style evolution starts here. Let us help you discover and express 
              your unique aesthetic through expert guidance and personalized solutions.
            </p>
            <p className="text-lg text-[#F5F0E6]/80 leading-relaxed">
              Join our growing community of confident individuals who have transformed their 
              style and elevated their presence with Febella Design.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <Link
                  href="/portfolio"
                  className="inline-block bg-transparent border-2 border-[#F5F0E6] text-[#F5F0E6] px-8 py-4 rounded-lg text-lg font-medium tracking-[0.2em] hover:bg-[#F5F0E6] hover:text-[#3C3A36] transition-colors duration-300 shadow-md"
                >
                  VIEW PORTFOLIO
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <Link
                  href="/contact"
                  className="inline-block bg-[#F5F0E6] text-[#3C3A36] px-8 py-4 rounded-lg text-lg font-medium tracking-[0.2em] hover:bg-[#F5F0E6]/90 transition-colors duration-300 shadow-md"
                >
                  BOOK NOW
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}