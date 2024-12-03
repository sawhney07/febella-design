'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Footer } from './components/Footer'

const newsItems = [
  { 
    title: 'One-Stop Shop', 
    description: 'We offer services at every stage of the production process, from design to delivery. Our expertise spans textiles, footwear, and home goods, with experience in managing multi-channel business requirements.' 
  },
  { 
    title: 'Sustainability and Responsibility',  
    description: 'We prioritize respect for the environment across all levels of our business. With a strong quality management and compliance framework, we ensure ethical and sustainable practices.' 
  },
  { 
    title: 'International Reach', 
    description: 'Our network includes over 100 audited factories in India, capable of handling both large and small MOQs. This ensures flexibility and reliability for businesses of all sizes.' 
  },
  { 
    title: 'Digital Solutions', 
    description: 'Our virtual product platform streamlines operations, reducing costs and waste. This approach ensures efficiency while maintaining high-quality outcomes.' 
  },
]

// const products = [
//   { name: 'PERSONAL STYLING', image: '/images/1.png' },
//   { name: 'WARDROBE CURATION', image: '/images/2.png' },
//   { name: 'IMAGE CONSULTING', image: '/images/3.png' },
//   { name: 'FASHION WORKSHOPS', image: '/images/4.png' },
// ]

const steps = [
  { 
    number: '01', 
    title: 'CONSULTATION', 
    description: 'We begin by understanding your unique requirements and project goals. This stage ensures clear communication to align our services with your expectations.' 
  },
  { 
    number: '02', 
    title: 'DEVELOPMENT', 
    description: 'Our team designs and develops prototypes tailored to your specifications. This phase is crucial for refining concepts and finalizing production-ready designs.' 
  },
  { 
    number: '03', 
    title: 'ORDER PLACEMENT', 
    description: 'Once the designs are approved, we streamline the process of placing orders with our trusted factories. We ensure clarity and precision in every detail for smooth production.' 
  },
  { 
    number: '04', 
    title: 'MANUFACTURING', 
    description: 'Production is carried out at our audited factories, adhering to high-quality standards. We manage timelines and ensure efficient handling of materials.' 
  },
  { 
    number: '05', 
    title: 'QA & QC', 
    description: 'Quality assurance and control are integral to our process, ensuring products meet rigorous standards. Every item undergoes thorough inspections before moving to the next stage.' 
  },
  { 
    number: '06', 
    title: 'SHIPPING', 
    description: 'Finished goods are packaged and shipped securely to their destination. We prioritize timely delivery and ensure all logistics are handled efficiently.' 
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
      <WhatWeDoSection />
      <ProcessSection />
      <VisionSection />
      <WhyPartnerWithUsSection />
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
      className="min-h-[90vh] flex items-center justify-center bg-[#E5DFD3] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[#3C3A36] rotate-45 transform origin-top-left"></div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-[150%] h-[150%] border-[50px] border-[#3C3A36] rounded-full" />
      </motion.div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-[0.2em] mb-8 text-[#3C3A36] mt-16"
        >
          WHERE CREATIVITY MEETS FUNCTIONALITY
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-[#3C3A36]/80 max-w-3xl mx-auto leading-relaxed"
        >

            Bespoke fashion consulting and personal styling services tailored to your unique aesthetic, 
            Febella Design is your trusted partner in crafting innovative and sustainable design solutions for the modern world.

        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12"
        >
          <Link
            href="/contact"
            className="inline-block bg-[#3C3A36] text-[#F5F0E6] px-12 py-5 rounded-lg text-lg font-medium tracking-[0.2em] hover:bg-[#3C3A36]/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            START YOUR JOURNEY
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}

function WhatWeDoSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="py-20"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-semibold tracking-[0.2em] text-center mb-12">WHAT WE DO</h2>
          <Image
                src="/images/what_we_do.png"
                alt="Febella Design Story"
                width={1000}
                height={1000}
                className="object-cover rounded-lg mx-auto my-auto"
              />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))} */}
        </div>
      </div>
    </motion.section>
  )
}

// function ProductCard({ name, image }: { name: string; image: string }) {
//   return (
//     <motion.div
//       whileHover={{ y: -5 }}
//       transition={{ duration: 0.2 }}
//       className="group bg-[#E5DFD3] rounded-lg overflow-hidden shadow-md"
//     >
//       <div className="relative aspect-[3/4] mb-4">
//         <Image
//           src={image}
//           alt={name}
//           fill
//           className="object-cover"
//         />
//       </div>
//       <h3 className="text-lg tracking-[0.2em] text-center p-4 font-medium">{name}</h3>
//     </motion.div>
//   )
// }

function ProcessSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="py-32 bg-[#E5DFD3]"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-semibold tracking-[0.2em] text-center mb-12 -mt-10 text-[#3C3A36]">FROM IDEAS TO REALITY</h2>
        <Image
                src="/images/process.png"
                alt="Febella Design Story"
                width={1200}
                height={1000}
                className="object-cover rounded-lg mx-auto my-auto mb-20"
          />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 gap-x-16 gap-y-16">
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
      className="py-32 text-center bg-[#3f444e] text-[#F5F0E6]"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold tracking-[0.2em] mb-8">OUR PRODUCT GROUPS</h2>
                <Image
                src="/images/test.png"
                alt="Febella Design Story"
                width={1000}
                height={800}
                className="object-cover rounded-lg mx-auto my-auto mb-20"
          />
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-xl text-[#F5F0E6]/90 leading-relaxed">
            At Febella Design, we envision a world where every individual feels confident and empowered through their personal style. 
            Our mission is to transform the way people approach fashion, making it an authentic expression of their unique identity.
          </p>
          <p className="text-lg text-[#F5F0E6]/80 leading-relaxed">
            We believe that style is more than just clothing &ndash; it&apos;s a powerful form of self-expression and confidence. 
            Through our expert guidance and personalized approach, we help our clients discover and embrace their authentic style.
          </p>
        </div>
      </div>
    </motion.section>
  )
}

function WhyPartnerWithUsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="py-20"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold tracking-[0.2em] text-center mb-12 text-[#3C3A36]">WHY PARTNER WITH US?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="bg-[#E5DFD3] rounded-lg overflow-hidden shadow-md p-6"
            >
              <h3 className="text-xl tracking-[0.1em] mb-2 font-medium text-[#3C3A36]">{item.title}</h3>
              <p className="text-[#3C3A36]/80">{item.description}</p>
            </motion.div>
          ))}
        </div>
        <Image
                src="/images/eco-friendly.png"
                alt="Febella Design Story"
                width={1200}
                height={1000}
                className="object-cover rounded-lg mx-auto mt-20"
              />
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