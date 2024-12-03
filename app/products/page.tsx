'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '../components/Footer'


interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description?: string;
  image: string;
  client?: string;
}


const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "SUMMER COLLECTION",
    category: "APPAREL",
    description: "A vibrant summer collection featuring lightweight fabrics and bold colors, perfect for the modern woman.",
    image: "/images/portfolio1.png",
  },
  {
    id: 2,
    title: "CORPORATE WARDROBE",
    category: "ACCESSORIES",
    description: "Executive wardrobe curation focusing on professional attire that commands presence and respect.",
    image: "/images/portfolio2.png",
  },
  {
    id: 3,
    title: "WEDDING STYLING",
    category: "HOME TEXTILES",
    description: "Complete wedding party styling, including bride, bridesmaids, and mother of the bride outfits.",
    image: "/images/portfolio3.png",
  },
  {
    id: 4,
    title: "HARD GOODS",
    category: "Fashion Styling",
    description: "Curated collection of seasonal trends and timeless pieces for versatile wardrobe options.",
    image: "/images/portfolio4.png",
  },
  {
    id: 5,
    title: "SCARVES",
    category: "ACCESSORIES",
    image: "/images/portfolio4.png",
  },
  {
    id: 6,
    title: "JEWELRY",
    category: "ACCESSORIES",
    image: "/images/portfolio4.png",
  },
  {
    id: 7,
    title: "BAGS",
    category: "ACCESSORIES",
    image: "/images/portfolio4.png",
  },
  {
    id: 8,
    title: "BELTS",
    category: "ACCESSORIES",
    image: "/images/portfolio4.png",
  },
  {
    id: 9,
    title: "FOOTWEAR",
    category: "SHOES",
    image: "/images/portfolio4.png",
  },

];

const categories = [...Array.from(new Set(portfolioItems.map(item => item.category)))];

function PortfolioModal({ item, onClose }: { item: PortfolioItem; onClose: () => void }) {
  return (
    <motion.div
      layoutId={`portfolio-${item.id}`}
      className="bg-[#F5F0E6] rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative aspect-video">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-[#F5F0E6] rounded-full shadow-lg"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
      <div className="p-8">
        <span className="text-sm font-medium text-[#3C3A36]/60 tracking-[0.2em]">
          {item.category}
        </span>
        <h2 className="text-2xl font-semibold tracking-[0.2em] mt-2 mb-4">
          {item.title}
        </h2>
        <p className="text-[#3C3A36]/80 mb-6 leading-relaxed">
          {item.description}
        </p>
        <div className="grid grid-cols-2 gap-4 text-sm">
          {item.client && (
            <div>
              <span className="font-medium tracking-[0.2em]">CLIENT</span>
              <p className="text-[#3C3A36]/80 mt-1">{item.client}</p>
            </div>
          )}
          <div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}


function PortfolioCard({ item, onClick }: { item: PortfolioItem; onClick: () => void }) {
  return (
    <motion.div
      layoutId={`portfolio-${item.id}`}
      whileHover={{ y: -5 }}
      onClick={onClick}
      className="cursor-pointer bg-[#E5DFD3] rounded-lg overflow-hidden shadow-lg"
    >
      <div className="relative aspect-square">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <span className="text-sm font-medium text-[#3C3A36]/60 tracking-[0.2em]">
          {item.category}
        </span>
        <h3 className="text-xl font-semibold tracking-[0.2em] mt-2">
          {item.title}
        </h3>
      </div>
    </motion.div>
  )
}


function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F0E6] text-[#3C3A36]">
      <main className="flex-grow">
        <div className="py-0">
          <div className="container mx-auto px-6">
            <p className="text-lg md:text-xl text-[#3C3A36]/80 max-w-3xl mx-auto text-center mb-10 -mt-24">
              Explore our collection of styling projects and fashion transformations.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium tracking-[0.2em] transition-colors duration-300 ${
                    selectedCategory === category
                      ? 'bg-[#3C3A36] text-[#F5F0E6]'
                      : 'bg-[#E5DFD3] text-[#3C3A36] hover:bg-[#3C3A36]/10'
                  }`}
                >
                  {category.toUpperCase()}
                </motion.button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-24">
              {filteredItems.map((item) => (
                <PortfolioCard
                  key={item.id}
                  item={item}
                  onClick={() => setSelectedItem(item)}
                />
              ))}
            </div>
          </div>
        </div>



        {/* Final Vision Section - now #E5DFD3 */}
        <section className="bg-[#E5DFD3] py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-semibold tracking-[0.2em] mb-8 text-[#3C3A36]">
                CRAFTING YOUR STYLE STORY
              </h2>
              <div className="space-y-8">
                <p className="text-xl text-[#3C3A36]/90 leading-relaxed">
                  Every portfolio piece represents a unique journey of style transformation. 
                  We take pride in creating personalized experiences that reflect the individual essence of each client.
                </p>
                <p className="text-lg text-[#3C3A36]/80 leading-relaxed">
                  Our commitment to excellence and attention to detail ensures that each styling project 
                  not only meets but exceeds expectations, creating lasting confidence through personal style.
                </p>
                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  className="pt-4"
                >      <p className="text-lg text-[#3C3A36]/80 mb-8">
        Book a consultation today and begin your style journey with our expert team.
      </p>
                  <Link
                    href="/contact"
                    className="inline-block bg-[#3C3A36] text-[#F5F0E6] px-8 py-4 rounded-lg text-lg font-medium tracking-[0.2em] hover:bg-[#3C3A36]/90 transition-colors duration-300 shadow-md"
                  >
                    START YOUR JOURNEY
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedItem(null)}
            >
              <PortfolioModal
                item={selectedItem}
                onClose={() => setSelectedItem(null)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

    </div>
  )
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
              {/* {products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))} */}
            </div>
          </div>
        </div>
      </main>
      <Portfolio/>
      <Footer />
    </div>
  )
}


// import { Check } from 'lucide-react' // Clock, Check

// interface Product {
//   name: string;
//   description: string;
//   image: string;
//   price: string;
//   duration: string;
//   features: string[];
// }

// const products: Product[] = [
//   {
//     name: 'PERSONAL STYLING',
//     description: 'Elevate your personal style with one-on-one guidance from our expert stylists.',
//     image: '/images/1.png',
//     price: '$299',
//     duration: '2 hours',
//     features: [
//       'Personal style assessment',
//       'Color analysis',
//       'Body type consultation',
//       'Outfit planning session',
//       'Style guide takeaway'
//     ]
//   },
//   {
//     name: 'WARDROBE CURATION',
//     description: 'Transform your closet into a well-organized, versatile collection that reflects your style.',
//     image: '/images/2.png',
//     price: '$399',
//     duration: '3 hours',
//     features: [
//       'Closet audit and organization',
//       'Wardrobe essentials list',
//       'Outfit combination guide',
//       'Shopping recommendations',
//       'Seasonal wardrobe planning'
//     ]
//   },
//   {
//     name: 'IMAGE CONSULTING',
//     description: 'Develop a powerful professional image that aligns with your career goals.',
//     image: '/images/3.png',
//     price: '$499',
//     duration: '4 hours',
//     features: [
//       'Professional image analysis',
//       'Brand identity development',
//       'Professional wardrobe planning',
//       'Grooming and presentation tips',
//       'Digital presence consultation'
//     ]
//   },
//   {
//     name: 'FASHION WORKSHOPS',
//     description: 'Join our interactive group sessions to enhance your fashion knowledge and styling skills.',
//     image: '/images/4.png',
//     price: '$199',
//     duration: '2.5 hours',
//     features: [
//       'Style fundamentals training',
//       'Trend analysis and adaptation',
//       'Accessorizing masterclass',
//       'Sustainable fashion tips',
//       'Group styling exercises'
//     ]
//   },
// ]

// function ProductFeature({ feature }: { feature: string }) {
//   return (
//     <div className="flex items-start gap-2">
//       <Check className="w-5 h-5 text-[#3C3A36] mt-0.5" />
//       <span className="text-sm text-[#3C3A36]/80">{feature}</span>
//     </div>
//   );
// }

// function ProductCard({ product }: { product: Product }) {
//   return (
//     <motion.div
//       whileHover={{ y: -5 }}
//       transition={{ duration: 0.2 }}
//       className="bg-[#E5DFD3] rounded-lg overflow-hidden shadow-lg"
//     >
//       <div className="relative aspect-[4/3]">
//         <Image
//           src={product.image}
//           alt={product.name}
//           fill
//           className="object-cover"
//         />
//       </div>
//       <div className="p-6">
//         <h3 className="text-xl font-semibold tracking-[0.2em] mb-2">{product.name}</h3>
//         <p className="text-[#3C3A36]/80 mb-4 leading-relaxed">{product.description}</p>
        
//         <div className="flex items-center gap-4 mb-4 text-[#3C3A36]/80">
//           <div className="flex items-center gap-1">
//             <Clock className="w-4 h-4" />
//             <span className="text-sm">{product.duration}</span>
//           </div>
//           <div className="text-xl font-semibold text-[#3C3A36]">
//             {product.price}
//           </div>
//         </div>

//         <div className="space-y-2">
//           {product.features.map((feature, index) => (
//             <ProductFeature key={index} feature={feature} />
//           ))}
//         </div>

//         
//       </div>
//     </motion.div>
//   )
// }

// function BookNowButton() {
//   return (
//     <motion.div
//       whileHover={{ y: -2 }}
//       whileTap={{ y: 0 }}
//       className="mt-6"
//     >
//       <Link
//         href="/contact"
//         className="block text-center bg-[#3C3A36] text-[#F5F0E6] px-6 py-3 rounded-lg text-sm font-medium tracking-[0.2em] hover:bg-[#3C3A36]/90 transition-colors duration-300"
//       >
//         BOOK NOW
//       </Link>
//     </motion.div>
//   );
// }