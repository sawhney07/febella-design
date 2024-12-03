'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Footer } from '../components/Footer'

const teamMembers = [
  {
    name: 'Amit Sawhney',
    role: 'Founder & CEO',
    image: '/images/portfolio1.png',
    description: 'With over 15 years of experience in fashion and styling, Sarah leads our creative vision and personalized styling approach.'
  },
  // {
  //   name: 'Michael Chen',
  //   role: 'Senior Style Consultant',
  //   image: '/images/portfolio2.png',
  //   description: 'Specializing in wardrobe curation and personal branding, Michael brings expertise in contemporary fashion trends.'
  // },
  // {
  //   name: 'Emma Rodriguez',
  //   role: 'Image Consultant',
  //   image: '/images/portfolio3.png',
  //   description: "Emma's background in professional image consulting helps clients develop their unique style identity."
  // }
]

const values = [
  {
    title: 'AUTHENTICITY',
    description: 'We believe in celebrating individual style and helping each client express their true self.'
  },
  {
    title: 'EXCELLENCE',
    description: 'Our commitment to quality and attention to detail ensures exceptional service delivery.'
  },
  {
    title: 'INNOVATION',
    description: 'We stay ahead of trends while creating timeless, sustainable style solutions.'
  },
  {
    title: 'EMPOWERMENT',
    description: 'We empower our clients to feel confident and authentic through their personal style.'
  }
]

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F0E6]">
      <main className="flex-grow">
        <HeroSection />
        <StorySection />
        <ValuesSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  )
}

function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="h-[50vh] min-h-[400px] flex items-center justify-center bg-[#E5DFD3]"
    >
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-[0.2em] mb-8 text-[#3C3A36]">
          OUR STORY
        </h1>
        <p className="text-lg md:text-xl text-[#3C3A36]/80 max-w-3xl mx-auto leading-relaxed">
          Discover the passion and expertise behind Febella Design&apos;s commitment to transforming personal style.
        </p>
      </div>
    </motion.section>
  )
}

function StorySection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="py-20"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <Image
                src="/images/logo.jpg"
                alt="Febella Design Story"
                fill
                className="object-cover rounded-lg mt-10"
              />
            </div>
            <div className="space-y-6">
              <h1 className="text-2xl md:text-4xl font-bold tracking-[0.2em] mb-8 text-[#3C3A36]">
                WHO WE ARE
              </h1>
              {/* <h2 className="text-2xl font-semibold tracking-[0.2em] text-[#3C3A36]">
                CRAFTING CONFIDENCE THROUGH STYLE
              </h2> */}
              <p className="text-[#3C3A36]/80 leading-relaxed">
                Founded in 2024, Febella Design emerged from a vision to transform how individuals approach personal style. 
                We believe that true style is an expression of individuality, and our mission is to help each client 
                discover and embrace their unique aesthetic.
              </p>
              <p className="text-[#3C3A36]/80 leading-relaxed">
                Our end-to-end solutions include design and sourcing services, supported by a 
                highly skilled team with extensive expertise in design, merchandising, fabric 
                technology, and quality assurance.
              </p>
              <p className="text-[#3C3A36]/80 leading-relaxed">
                Our solid relationships with manufacturers and quality suppliers
                ensures that we maintain high production standards keeping in-mind
                the competitive product prices.           
                We have a strong ability to work with any of the worlds
                fashion companies with low margins and flexible MOQs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

function ValuesSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="py-20 bg-[#3C3A36] text-[#F5F0E6]"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold tracking-[0.2em] text-center mb-16">
          OUR VALUES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="text-center p-6"
            >
              <h3 className="text-xl tracking-[0.2em] mb-4 font-medium">
                {value.title}
              </h3>
              <p className="text-[#F5F0E6]/80">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function TeamSection() {
 return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="py-20 bg"
    >
      <div className="container mx-auto px-6">
                      <h1 className="text-2xl md:text-5xl font-bold tracking-[0.2em] mb-16 text-[#3C3A36] mx-auto text-center">
                MANAGEMENT
              </h1>
        <div className="max-w-4xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <Image
                src="/images/portfolio4.png"
                alt="Febella Design Story"
                fill
                className="object-cover rounded-lg -mt-1"
              />
            </div>
            <div className="space-y-3">
              {/* <h2 className="text-2xl font-semibold tracking-[0.2em] text-[#3C3A36]">
                CRAFTING CONFIDENCE THROUGH STYLE
              </h2> */}
              <h3 className="text-2xl md:text-3xl font-bold tracking-[0.2em] text-[#3C3A36]">
               AMIT SAWHNEY
              </h3>

              <h3 className="text-xl md:text-xl font-sans tracking-[0.2em] text-[#3C3A36]">
               FOUNDER & CEO
              </h3>

              <p className="text-[#3C3A36]/80 leading-relaxed">
                Amit has 30+ years experience in understanding the customer
                requirements. His vision is to bridge the gap between high quality
                garment production and the global demand for exceptional products.
              </p>
              <p className="text-[#3C3A36]/80 leading-relaxed">
                  Febella Design has started their journey in the fashion industry to
                  fulfil the needs of customer in every aspect from design to store.
              </p>
              <p className="text-[#3C3A36]/80 leading-relaxed">
                Our team is dedicated to providing personalized services, offering
                expert guidance on everything from fabric sourcing to production
                management. We pride ourselves on our ability to navigate the
                complexities of the garment industry, helping you bring your vision to
                life with efficiency and precision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
} 