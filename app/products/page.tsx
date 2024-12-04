'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '../components/Footer'



interface PortfolioItem {
  id: number;
  title?: string;
  category: string;
  description?: string;
  image: string;
  client?: string;
}


// const portfolioItems2: PortfolioItem[] = [
//   {
//     id: 1,
//     title: "JACKETS",
//     category: "APPAREL",
//     description: "A vibrant summer collection featuring lightweight fabrics and bold colors, perfect for the modern woman.",
//     image: "/images/portfolio1.png",
//   },
//   {
//     id: 2,
//     title: "BLOUSES",
//     category: "APPAREL",
//     description: "Executive wardrobe curation focusing on professional attire that commands presence and respect.",
//     image: "/images/portfolio2.png",
//   },
//   {
//     id: 3,
//     title: "BEDDING",
//     category: "HOME TEXTILES",
//     description: "Complete wedding party styling, including bride, bridesmaids, and mother of the bride outfits.",
//     image: "/images/portfolio3.png",
//   },
//   {
//     id: 4,
//     title: "DECORATIVES",
//     category: "HARD GOODS",
//     description: "Curated collection of seasonal trends and timeless pieces for versatile wardrobe options.",
//     image: "/images/portfolio4.png",
//   },
//   {
//     id: 5,
//     title: "SCARVES",
//     category: "ACCESSORIES",
//     image: "/images/portfolio4.png",
//   },
//   {
//     id: 6,
//     title: "JEWELRY",
//     category: "ACCESSORIES",
//     image: "/images/portfolio4.png",
//   },
//   {
//     id: 7,
//     title: "BAGS",
//     category: "ACCESSORIES",
//     image: "/images/portfolio4.png",
//   },
//   {
//     id: 8,
//     title: "BELTS",
//     category: "ACCESSORIES",
//     image: "/images/portfolio4.png",
//   },
//   {
//     id: 9,
//     title: "SHOES",
//     category: "FOOTWEAR",
//     image: "/images/portfolio4.png",
//   },
//   {
//     id: 10,
//     title: "CARPETS",
//     category: "HOME TEXTILES",
//     image: "/images/portfolio4.png",
//   },
//     {
//     id: 11,
//     title: "CUSHIONS",
//     category: "HOME TEXTILES",
//     image: "/images/portfolio4.png",
//   },
//     {
//     id: 12,
//     title: "BATH MATS",
//     category: "HOME TEXTILES",
//     image: "/images/portfolio4.png",
//   },
//     {
//     id: 13,
//     title: "TOWELS",
//     category: "HOME TEXTILES",
//     image: "/images/portfolio4.png",
//   },
//     {
//     id: 14,
//     title: "CURTAINS",
//     category: "HOME TEXTILES",
//     image: "/images/portfolio4.png",
//   },
//     {
//     id: 15,
//     title: "FURNITURE",
//     category: "HARD GOODS",
//     image: "/images/portfolio4.png",
//   },
//       {
//     id: 16,
//     title: "LIGHTINGS",
//     category: "HARD GOODS",
//     image: "/images/portfolio4.png",
//   },
//       {
//     id: 17,
//     title: "GARDEN DECOR",
//     category: "HARD GOODS",
//     image: "/images/portfolio4.png",
//   },
//       {
//     id: 18,
//     title: "OUTDOOR FURNITURE",
//     category: "HARD GOODS",
//     image: "/images/portfolio4.png",
//   },
//     {
//     id: 19,
//     title: "T-SHIRTS/ SHIRTS",
//     category: "APPAREL",
//     image: "/images/portfolio1.png",
//   },
//       {
//     id: 20,
//     title: "DRESSES",
//     category: "APPAREL",
//     image: "/images/portfolio1.png",
//   },
//         {
//     id: 21,
//     title: "UNDERWEAR",
//     category: "APPAREL",
//     image: "/images/portfolio1.png",
//   },
//         {
//     id: 22,
//     title: "SKIRTS",
//     category: "APPAREL",
//     image: "/images/portfolio1.png",
//   },
//         {
//     id: 23,
//     title: "BEACHWEAR",
//     category: "APPAREL",
//     image: "/images/portfolio1.png",
//   },
//         {
//     id: 24,
//     title: "SHORTS",
//     category: "APPAREL",
//     image: "/images/portfolio1.png",
//   },
//         {
//     id: 25,
//     title: "EVENING WEAR",
//     category: "APPAREL",
//     image: "/images/portfolio1.png",
//   },
//         {
//     id: 26,
//     title: "PANTS / TROUSERS",
//     category: "APPAREL",
//     image: "/images/portfolio1.png",
//   },
//         {
//     id: 27,
//     title: "JEANS",
//     category: "APPAREL",
//     image: "/images/portfolio1.png",
//   },
//         {
//     id: 28,
//     title: "NIGHTWEAR",
//     category: "APPAREL",
//     image: "/images/portfolio1.png",
//   },
//         {
//     id: 29,
//     title: "LEATHER WEAR",
//     category: "APPAREL",
//     image: "/images/portfolio1.png",
//   },
//         {
//     id: 30,
//     title: "SWEATERS",
//     category: "APPAREL",
//     image: "/images/portfolio1.png",
//   },
//    {
//     id: 31,
//     category: "MENSWEAR",
//     image: "/images/menswear1.png",
//   },

// ];
const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    category: "MENSWEAR",
    image: "/images/menswear1.png",
  },
  {
    id: 2,
    category: "WOMENS' WEAR",
    image: "/images/womenswear1.png",
  },
  {
    id: 3,
    category: "HANDLOOMS",
    image: "/images/handlooms1.png",
  },
  {
    id: 4,
    category: "KIDSSWEAR",
    image: "/images/kidswear1.png",
  },
  {
    id: 5,
    category: "ACCESSORIES",
    image: "/images/accessories1.png",
  },
  {
    id: 6,
    category: "FOOTWEAR",
    image: "/images/footwear1.png",
  },
  {
    id: 7,
    category: "HOME GOODS",
    image: "/images/homegoods1.png",
  },
]

const categories = [...Array.from(new Set(portfolioItems.map(item => item.category)))];

const categoryDetails = {
  MENSWEAR: [
    "Jackets", "T-shirts", "Shirts", "Jeans", "Trousers", "Leather-wear", "Sweaters", "Nightwear", "Shorts", "Pants"
  ],
  "WOMEN'S WEAR": [
    "Blouses", "Dresses", "Underwear", "Skirts", "Beachwear", "Evening-wear", "Nightwear", "Leather-wear", "Sweaters", "T-shirts"
  ],
  HANDLOOMS: [
    "Jackets", "Dresses", "Blouses"
  ],
  KIDSWEAR: [
    "T-shirts", "Dresses", "Shorts", "Pants"
  ],
  ACCESSORIES: [
    "Scarves", "Jewelry", "Bags", "Belts"
  ],
  FOOTWEAR: [
    "Sneakers", "Sandals", "Flip Flops", "Shoes", "Heels", "Boots"
  ],
  'HOME GOODS': [
    "Bedding", "Carpets", "Cushions", "Bath Mats", "Kitchen", "Towels", "Furniture", "Garden", "Lighting", "Outdoors"
  ]
}

function PortfolioCard({ item }: { item: PortfolioItem }) {
  const itemsList = categoryDetails[item.category as keyof typeof categoryDetails];

  return (
    <div className="mb-12 flex flex-col lg:flex-row lg:items-center lg:justify-between">
      {/* Image Section */}
      <div className="w-full lg:w-2/3 mt-12 lg:mt-0 lg:pr-6">
        <Image
          src={item.image}
          alt={item.category}
          width={1200}
          height={800}
          className="object-contain w-full max-h-[400px] md:max-h-[600px] lg:max-h-[700px] rounded-lg lg:mt-12"
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/3 px-4 sm:px-6 lg:px-0 text-center lg:text-center mt-6 lg:mt-12">
        <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-[#3C3A36]">{item.category}</h3>
        <ul className="space-y-4 text-[#3C3A36]">
          {itemsList.map((item, index) => (
            <li key={index} className="text-[#3C3A36] text-l lg:text-lg">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState(portfolioItems[0].category);

  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F0E6] text-[#3C3A36]">
      <main className="flex-grow">
        <div className="py-0">
          <div className="container mx-auto px-6">
            <p className="text-lg md:text-xl text-[#3C3A36]/80 max-w-3xl mx-auto text-center mb-10 -mt-[100px]">
              Explore our collection of styling projects and fashion transformations.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs font-medium tracking-[0.2em] transition-colors duration-300 ${
                    selectedCategory === category
                      ? 'bg-[#3C3A36] text-[#F5F0E6]'
                      : 'bg-[#E5DFD3] text-[#3C3A36] hover:bg-[#3C3A36]/10'
                  }`}
                >
                  {category.toUpperCase()}
                </motion.button>
              ))}
            </div>
            <div className="max-w-7xl my-auto mb-16 mx-auto -mt-12 items-center justify-center">
              {filteredItems.map((item) => (
                <PortfolioCard
                  key={item.id}
                  item={item}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Final Vision Section */}
        <section className="bg-[#E5DFD3] py-16 md:py-32">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                <Image
                  src="/images/crafting.png"
                  alt="Crafting Your Style"
                  width={800}
                  height={600}
                  className="object-contain w-3/4 max-h-[400px] md:max-h-[600px] lg:max-h-[700px] rounded-lg mx-auto lg:ml-48"
                />
              </div>
              <div className="w-full lg:w-1/2 lg:pl-12 mx-auto">
                <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
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
                    >
                      <p className="text-lg text-[#3C3A36]/80 mb-8">
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
            </div>
          </div>
        </section>
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
          className="h-[100vh] min-h-[400px] flex items-center justify-center bg-[#3c3a36] mb-0"
        >
          <div className="container mx-auto px-6 text-center ">
            <h1 className="text-4xl md:text-5xl font-bold tracking-[0.2em] mb-8 text-[#E5DFD3] mt-[140px] lg:mt-[25vh] ">
              OUR PRODUCT RANGE
            </h1>
            <p className="text-lg md:text-xl text-[#E5DFD3]/80 max-w-3xl mx-auto leading-relaxed">
              Transform your style with our professional fashion services. Each service is tailored to meet your unique needs and preferences.
            </p>
            <Image
            src={'/images/products2.png'}
            alt={"productlist"}
            width={1200}
            height={1000}
            className="object-cover rounded-lg mb-20 mx-auto lg:mt-[12vh]"
            />
            </div>
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
      <Portfolio />
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