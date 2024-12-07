'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Footer } from '../components/Footer'
import Link from 'next/link'


const values = [
  {
    title: 'AUTHENTICITY',
    description: 'We believe in celebrating individual preferences and helping each client express their true self.'
  },
  {
    title: 'EXCELLENCE',
    description: 'Our commitment to quality and attention to detail ensures exceptional service delivery.'
  },
  {
    title: 'INNOVATION',
    description: 'We stay ahead of trends while creating timeless, sustainable garment solutions.'
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
      className="h-[40vh] min-h-[335px] lg:min-h-[375px] flex items-center justify-center bg-[#E5DFD3]"
    >
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-[0.2em] mb-8 text-[#3C3A36] mt-[90px] lg:mt-[100px] ">
          OUR STORY
        </h1>
        <p className="text-lg md:text-xl text-[#3C3A36]/80 max-w-3xl mx-auto leading-relaxed">
          Discover the passion and expertise behind Febella Design&apos;s commitment to cater to fashion needs for every occasion.
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
      className="py-2 lg:py-10 mb-14"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect h-[350px] lg:h-[500px] lg:w-[500px]">
              <Image
                src="/images/logo.jpg"
                alt="Febella Design Story"
                fill
                className="object-cover rounded-lg mt-10 lg:ml-[-100px]"
              />
            </div>
            <div className="space-y-6 mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold tracking-[0.2em] mb-8 text-[#3C3A36] mt-6 lg:mt-0">
                WHO WE ARE
              </h1>
              {/* <h2 className="text-2xl font-semibold tracking-[0.2em] text-[#3C3A36]">
                CRAFTING CONFIDENCE THROUGH STYLE
              </h2> */}
              <p className="text-[#3C3A36]/80 leading-relaxed">
                Founded by visionary CEO Mr. Amit Sawhney, Febella Design bridges the gap between high quality
                garment production and the global demand for exceptional products. We are
                commited to working with fashion companies worldwide, offering low margins and flexible
                minimum order quantities (MOQs) to meet the diverse needs of our clients.
              </p>
              <p className="text-[#3C3A36]/80 leading-relaxed">
                Febella Design offers a wide variety of products suitable for any occasion, from casual
                daytime looks to evening elegance. Our collections include beachwear, evening wear, leather
                items, sweaters, and more. Our menswear and womenswear feature timeless styles with a
                modern twist, while our accessories range from scarves and jewelry to bags, belts, and
                footwear. 
              </p>
              <p className="text-[#3C3A36]/80 leading-relaxed">
                In addition to fashion, we provide a full range of home textiles, including bedding,
                carpets, cushions, bath mats, towels, and more. Our hard goods selection is another
                highlight, making Febella Design a true one-stop shop for all your needs.
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
  <>
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
                src="/images/management.png"
                alt="Febella Design Story"
                fill
                className="object-cover rounded-lg -mt-1"
              />
            </div>
            <div className="space-y-3">
              {/* <h2 className="text-2xl font-semibold tracking-[0.2em] text-[#3C3A36]">
                CRAFTING CONFIDENCE THROUGH STYLE
              </h2> */}
              {/* <h3 className="text-2xl md:text-3xl font-bold tracking-[0.2em] text-[#3C3A36]">
               AMIT SAWHNEY
              </h3> */}

              <h3 className="text-xl md:text-xl font-bold tracking-[0.2em] text-[#3C3A36]">
               FOUNDER & CEO
              </h3>

              <p className="text-[#3C3A36]/80 leading-relaxed">
                Amit Sawhney has 30+ years experience in understanding the customer
                requirements. His vision is to bridge the gap between high quality
                garment production and the global demand for exceptional products.
              </p>
              <p className="text-[#3C3A36]/80 leading-relaxed">
                  Febella Design has started their journey in the fashion industry to
                  fulfil the needs of customer in every aspect from design to store.
              </p>
              <p className="text-[#3C3A36]/80 leading-relaxed">
                Our efficient process begins with understanding your unique
                requirements, developing prototypes tailored to your specifications, and streamlining the
                order process with our trusted factories. We maintain rigorous quality control with
                continuous inspections to ensure every product is crafted to perfection.
              </p>
            </div>
            
          </div>
        </div>
        
      </div>
      
    </motion.section>
    <div>
      <section className="bg-[#3C3A36] py-32 text-[#F5F0E6]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="relative aspect-2/3 bg-[#F5F0E6] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/portfolio7.png"
                  alt="Fashion Styling Process"
                  width={600}
                  height={1300}
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-semibold tracking-[0.2em]">OUR APPROACH</h2>
                <p className="text-lg text-[#F5F0E6]/80 leading-relaxed">
                  We believe that style is a powerful form of self-expression. Our portfolio showcases how we help clients discover and enhance their unique personal style through careful curation and expert guidance.
                </p>
                <p className="text-lg text-[#F5F0E6]/80 leading-relaxed">
                  Each project is a collaborative journey, where we combine our expertise with your individual preferences to create looks that not only look exceptional but feel authentically you.
                </p>
                <p className="text-lg text-[#F5F0E6]/80 leading-relaxed">
                  We are dedicated to delivering high-quality, fashionable products that meet 
                  our clients&apos; needs, all while maintaining competitive pricing and eco-friendly practices.
                </p>

                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  <Link
                    href="/contact"
                    className="inline-block bg-[#F5F0E6] text-[#3C3A36] px-8 py-4 rounded-lg text-lg font-medium tracking-[0.2em] hover:bg-[#F5F0E6]/90 transition-colors duration-300 shadow-md"
                  >
                    START YOUR JOURNEY
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
    </div>
  </>
    
    
  )
} 
