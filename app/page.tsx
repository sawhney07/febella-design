'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Footer } from './components/Footer'

const whyPartnerWithUsItems = [
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
      <ProductRangeSection />
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
      className="min-h-[100vh] flex items-center justify-center bg-[#E5DFD3] relative overflow-hidden"
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
          className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-[0.2em] mb-8 text-[#3C3A36] mt-[0px] lg:mt-16"
        >
          WHERE CREATIVITY MEETS FUNCTIONALITY
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-[#3C3A36]/80 max-w-3xl mx-auto leading-relaxed"
        >
          Founded in 2024, Febella Design is dedicated to providing elegant womenswear, sophisticated menswear, 
          vibrant kidswear, accessories, footwear, home textiles, and hard goods.

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
    const categories2 = [
      { name: 'Design' },
      { name: 'Order Management' },
      { name: 'Product Development' },
      { name: 'Negotiations' },
      { name: 'Sourcing' },
      { name: 'Compliance' },
      { name: 'Quality Assurance' },
      { name: 'Logistics' },
    ];
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="py-20"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-semibold tracking-[0.2em] text-center mb-12">WHAT WE DO</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {categories2.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="bg-[#E5DFD3] rounded-lg shadow-md md:px-4 md:py-18 lg:px-4 py-14 lg:py-20 text-center items-center justify-center"
            >
              <h2 className="text-[16px] lg:text-2xl tracking-[0.1em] font-normal text-[#4f4c46]">{item.name}</h2>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
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
        <h2 className="text-3xl lg:text-4xl font-semibold tracking-[0.2em] text-center mb-12 -mt-10 text-[#3C3A36]">FROM IDEAS TO REALITY</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 gap-x-12 gap-y-8">
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

function ProductRangeSection() {
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
              At Febella Design, we combine creativity with functionality to offer innovative and
              sustainable design solutions. Our services include comprehensive design, sourcing, and
              expert support in merchandising, fabrics, technology, and quality assurance. 
          </p>
          <p className="text-lg text-[#F5F0E6]/90 leading-relaxed">
              We are dedicated to delivering high-quality, fashionable products that meet our 
              clients&apos; needs, all while maintaining competitive pricing and eco-friendly practices.
            
          </p>
          <p className="text-lg text-[#F5F0E6]/80 leading-relaxed">
              With its diverse range, Febella Design caters to individuals and families alike, offering stylish, 
              comfortable, and sustainable fashion for every occasion.
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyPartnerWithUsItems.map((item, index) => (
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
        <h1 className="text-2xl lg:text-3xl font-medium tracking-[0.2em] text-center mt-16 -mb-4 text-[#3C3A36]">
          WE DELIVER LASTING BENEFITS TO BOTH BUSINESSES AND THE ENVIRONMENT THROUGH SUSTAINABLE SUPPLY CHAIN PRACTICES.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-10 mt-16 lg:mt-16">
          <Image
            src="/images/eco1.png"
            alt="Febella Design Story"
            width={600}
            height={400}
            className="object-cover mx-auto my-auto" // Adjusted margin-top to bring the image up
          />
        
          <Image
            src="/images/eco2.png"
            alt="Febella Design Story"
            width={600}
            height={400}
            className="object-cover mx-auto my-auto" // Adjusted margin-top
          />

          <Image
            src="/images/eco3.png"
            alt="Febella Design Story"
            width={600}
            height={400}
            className="object-cover mx-auto my-auto" // Adjusted margin-top
          />
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
          <h2 className="text-3xl font-semibold tracking-[0.2em] mb-8 -mt-12">
            BRING YOUR VISION TO LIFE TODAY!
          </h2>
          <div className="space-y-8">
            <p className="text-xl text-[#F5F0E6]/90 leading-relaxed">
              Let us help you discover and express 
              your unique aesthetic through expert guidance and personalized solutions.
            </p>
            <p className="text-lg text-[#F5F0E6]/80 leading-relaxed">
              Our mission is to create stylish, high-quality pieces that are kind to the environment. We
              manufacture products with the utmost care, ensuring they meet both customer satisfaction
              and sustainability standards.
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
                  href="/products"
                  className="inline-block bg-transparent border-2 border-[#F5F0E6] text-[#F5F0E6] px-8 py-4 rounded-lg text-lg font-medium tracking-[0.2em] hover:bg-[#F5F0E6] hover:text-[#3C3A36] transition-colors duration-300 shadow-md"
                >
                  VIEW PRODUCTS
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