'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '../components/Footer'
import { ArrowDown } from 'lucide-react'

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
    category: "KIDSWEAR",
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
    "Jackets", "T-shirts", "Shirts", "Jeans", "Trousers", "Leatherwear", "Sweaters", "Nightwear", "Shorts", "Pants"
  ],
  'WOMENS\' WEAR': [
    "Blouses", "Dresses", "Underwear", "Skirts", "Beachwear", "Eveningwear", "Nightwear", "Leatherwear", "Sweaters", "T-shirts"
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
    "Sneakers", "Sandals", "Shoes", "Heels", "Boots"
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
              Explore a wide variety of products suitable for any occasion, from casual
              daytime looks to evening elegance.
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
                    CRAFTING YOUR DESIGN 
                  </h2>
                  <div className="space-y-8">
                    <p className="text-xl text-[#3C3A36]/90 leading-relaxed">
                      We take pride in creating personalized experiences that reflect the individual essence of each client.
                    </p>
                    <p className="text-lg text-[#3C3A36]/80 leading-relaxed">
                      Our commitment to excellence and attention to detail ensures that each styling project 
                      not only meets but exceeds expectations, creating lasting confidence through personalized designs.
                    </p>
                    <motion.div
                      whileHover={{ y: -2 }}
                      whileTap={{ y: 0 }}
                      className="pt-2"
                    >
                      <p className="text-lg text-[#3C3A36]/80 mb-8">
                        Bring your vision to life with efficiency and precision with our expert team. Book a consultation today!.
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


function CategoryDiagram() {
  const categories = [
    {
      name: 'Textiles',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
      ),
      subcategories: [
        { name: 'Apparel', icon: 'M3 16V8a5 5 0 0110 0v8m-10 0h10' },
        { name: 'Accessories', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' },
        { name: 'Home Textiles', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
      ],
    },
    {
      name: 'Home Goods',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      ),
      subcategories: [
        { name: 'Furniture', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
        { name: 'Decor', icon: 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z' },
        { name: 'Appliances', icon: 'M6 13.5V7.75a4.25 4.25 0 118.5 0v5.75M6 13.5h12' },
      ],
    },
    {
      name: 'Footwear',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.5L21 14H3L4.5 5.5m15 0v2a3 3 0 01-3 3h-1.5a3 3 0 01-3-3M19.5 5.5l-3-1M4.5 5.5l3-1m12 0L18 3H6L4.5 5.5M19.5 5.5L18 7M4.5 5.5L6 7m0 7h12" />
        </svg>
      ),
      subcategories: [
        { name: 'Casual', icon: 'M22 7H2v12h20V7zM2 14h20M6 10v.01M18 10v.01' },
        { name: 'Athletic', icon: 'M22 7H2v12h20V7zM2 14h20M6 10v.01M18 10v.01' },
        { name: 'Formal', icon: 'M22 7H2v12h20V7zM2 14h20M6 10v.01M18 10v.01' },
      ],
    },
  ]

  return (
    <div className="w-full p-8" style={{ backgroundColor: "#3c3a36", color: "#f5f0e6" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-28">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              <div className="rounded-full p-6 bg-[#f5f0e6] flex flex-col items-center justify-center" 
                style={{ color: "#3c3a36", width: "180px", height: "180px" }}>
                {category.icon}
                <div className="text-center mt-2 font-bold text-lg lg:text-xl">
                  {category.name}
                </div>
              </div>
              <ArrowDown className="w-10 h-10" />
              <div className="grid grid-cols-3 gap-10 lg:gap-x-8 w-full">
                {category.subcategories.map((subcat, subIndex) => (
                  <div key={subIndex} className="flex flex-col items-center">
                    <div className="rounded-full p-0 border-2 border-[#f5f0e6] flex items-center justify-center" 
                      style={{ width: "90px", height: "90px" }}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                        strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d={subcat.icon} />
                      </svg>
                    </div>
                    <span className="text-center text-s mt-1">{subcat.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
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
          className="lg:h-[100vh] min-h-[400px] flex items-center justify-center bg-[#3c3a36] mb-0"
        >
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-[0.2em] mb-8 text-[#E5DFD3] mt-[17vh] lg:mt-[18vh] ">
              OUR PRODUCT RANGE
            </h1>
            <p className="text-lg md:text-xl text-[#E5DFD3]/80 max-w-3xl mx-auto leading-relaxed">
              Febella Design is dedicated to providing elegant womenswear, sophisticated menswear, vibrant kidswear, accessories,
              footwear, home textiles, and hard goods. 
            </p>
            <p className="text-lg md:text-xl text-[#E5DFD3]/80 max-w-3xl mx-auto leading-relaxed mt-6 mb-6">
              Each service is tailored to meet your unique needs and preferences.
            </p>
            <CategoryDiagram/>
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