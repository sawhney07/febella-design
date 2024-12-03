'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '../components/Footer'
import { Clock, Check } from 'lucide-react'

interface Product {
  name: string;
  description: string;
  image: string;
  price: string;
  duration: string;
  features: string[];
}

const products: Product[] = [
  {
    name: 'PERSONAL STYLING',
    description: 'Elevate your personal style with one-on-one guidance from our expert stylists.',
    image: '/images/1.png',
    price: '$299',
    duration: '2 hours',
    features: [
      'Personal style assessment',
      'Color analysis',
      'Body type consultation',
      'Outfit planning session',
      'Style guide takeaway'
    ]
  },
  {
    name: 'WARDROBE CURATION',
    description: 'Transform your closet into a well-organized, versatile collection that reflects your style.',
    image: '/images/2.png',
    price: '$399',
    duration: '3 hours',
    features: [
      'Closet audit and organization',
      'Wardrobe essentials list',
      'Outfit combination guide',
      'Shopping recommendations',
      'Seasonal wardrobe planning'
    ]
  },
  {
    name: 'IMAGE CONSULTING',
    description: 'Develop a powerful professional image that aligns with your career goals.',
    image: '/images/3.png',
    price: '$499',
    duration: '4 hours',
    features: [
      'Professional image analysis',
      'Brand identity development',
      'Professional wardrobe planning',
      'Grooming and presentation tips',
      'Digital presence consultation'
    ]
  },
  {
    name: 'FASHION WORKSHOPS',
    description: 'Join our interactive group sessions to enhance your fashion knowledge and styling skills.',
    image: '/images/4.png',
    price: '$199',
    duration: '2.5 hours',
    features: [
      'Style fundamentals training',
      'Trend analysis and adaptation',
      'Accessorizing masterclass',
      'Sustainable fashion tips',
      'Group styling exercises'
    ]
  },
]

function ProductFeature({ feature }: { feature: string }) {
  return (
    <div className="flex items-start gap-2">
      <Check className="w-5 h-5 text-[#3C3A36] mt-0.5" />
      <span className="text-sm text-[#3C3A36]/80">{feature}</span>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-[#E5DFD3] rounded-lg overflow-hidden shadow-lg"
    >
      <div className="relative aspect-[4/3]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold tracking-[0.2em] mb-2">{product.name}</h3>
        <p className="text-[#3C3A36]/80 mb-4 leading-relaxed">{product.description}</p>
        
        <div className="flex items-center gap-4 mb-4 text-[#3C3A36]/80">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{product.duration}</span>
          </div>
          <div className="text-xl font-semibold text-[#3C3A36]">
            {product.price}
          </div>
        </div>

        <div className="space-y-2">
          {product.features.map((feature, index) => (
            <ProductFeature key={index} feature={feature} />
          ))}
        </div>

        <BookNowButton />
      </div>
    </motion.div>
  )
}

function BookNowButton() {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      className="mt-6"
    >
      <Link
        href="/contact"
        className="block text-center bg-[#3C3A36] text-[#F5F0E6] px-6 py-3 rounded-lg text-sm font-medium tracking-[0.2em] hover:bg-[#3C3A36]/90 transition-colors duration-300"
      >
        BOOK NOW
      </Link>
    </motion.div>
  );
}

export default function Products() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F0E6] text-[#E5DFD3]">
      <main className="flex-grow">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="h-[50vh] min-h-[400px] flex items-center justify-center bg-[#3c3a36] -mb-16" 
        >
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-[0.2em] mb-8 text-[#E5DFD3]">
              OUR PRODUCT RANGE
            </h1>
            <p className="text-lg md:text-xl text-[#E5DFD3]/80 max-w-3xl mx-auto leading-relaxed">
              Transform your style with our professional fashion services. Each service is tailored to meet your unique needs and preferences.
            </p> 
          </div>
     </motion.div>
             <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="h-[50vh] min-h-[400px] flex items-center justify-center bg-[#3c3a36]" 
        >
            <Image
            src={'/images/products2.png'}
            alt={"productlist"}
            width={1000}
            height={1000}
            className="object-cover rounded-lg mb-20 mx-auto mt-2"
          /> 
        </motion.div>
 
        <div className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
            <CTASection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

function CTASection() {
  return (
    <div className="mt-20 text-center bg-[#E5DFD3] p-10 rounded-lg max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold tracking-[0.2em] mb-4">
        READY TO TRANSFORM YOUR STYLE?
      </h2>
      <p className="text-lg text-[#3C3A36]/80 mb-8">
        Book a consultation today and begin your style journey with our expert team.
      </p>
      <motion.div
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
      >
        <Link
          href="/contact"
          className="inline-block bg-[#3C3A36] text-[#F5F0E6] px-8 py-4 rounded-lg text-lg font-medium tracking-[0.2em] hover:bg-[#3C3A36]/90 transition-colors duration-300 shadow-md"
        >
          BOOK A CONSULTATION
        </Link>
      </motion.div>
    </div>
  );
}