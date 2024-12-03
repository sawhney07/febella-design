'use client'

// import { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import Image from 'next/image'
// import { Footer } from '../components/Footer'
// import { Star, Quote } from 'lucide-react'
// import Link from 'next/link'

// // interface PortfolioItem {
// //   id: number;
// //   title: string;
// //   category: string;
// //   description: string;
// //   image: string;
// //   client?: string;
// //   date: string;
// // }

// interface Testimonial {
//   name: string;
//   role: string;
//   content: string;
//   rating: number;
// }

// // const portfolioItems: PortfolioItem[] = [
// //   {
// //     id: 1,
// //     title: "SUMMER COLLECTION",
// //     category: "APPAREL",
// //     description: "A vibrant summer collection featuring lightweight fabrics and bold colors, perfect for the modern woman.",
// //     image: "/images/portfolio1.png",
// //     client: "Fashion Magazine Editorial",
// //     date: "June 2023"
// //   },
// //   {
// //     id: 2,
// //     title: "CORPORATE WARDROBE",
// //     category: "ACCESSORIES",
// //     description: "Executive wardrobe curation focusing on professional attire that commands presence and respect.",
// //     image: "/images/portfolio2.png",
// //     client: "Corporate Leadership Team",
// //     date: "August 2023"
// //   },
// //   {
// //     id: 3,
// //     title: "WEDDING STYLING",
// //     category: "HOME TEXTILES",
// //     description: "Complete wedding party styling, including bride, bridesmaids, and mother of the bride outfits.",
// //     image: "/images/portfolio3.png",
// //     client: "Private Client",
// //     date: "September 2023"
// //   },
// //   {
// //     id: 4,
// //     title: "HARD GOODS",
// //     category: "Fashion Styling",
// //     description: "Curated collection of seasonal trends and timeless pieces for versatile wardrobe options.",
// //     image: "/images/portfolio4.png",
// //     client: "Lifestyle Brand",
// //     date: "October 2023"
// //   },

// // ];

// const testimonials: Testimonial[] = [
//   {
//     name: "Sarah Johnson",
//     role: "Corporate Executive",
//     content: "The personal styling session transformed not just my wardrobe, but my confidence. The attention to detail and personalized approach was exactly what I needed.",
//     rating: 5
//   },
//   {
//     name: "Emily Chen",
//     role: "Bride-to-be",
//     content: "Their wedding styling service made my special day even more magical. They understood my vision perfectly and brought it to life beautifully.",
//     rating: 5
//   },
//   {
//     name: "Michael Roberts",
//     role: "Business Professional",
//     content: "The image consulting service helped me refine my professional appearance. The results have been remarkable for my career.",
//     rating: 5
//   }
// ];

// const categories = ["All", ...Array.from(new Set(portfolioItems.map(item => item.category)))];

// function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
//   return (
//     <motion.div
//       whileHover={{ y: -5 }}
//       className="bg-[#E5DFD3] p-8 rounded-lg shadow-lg relative"
//     >
//       <Quote className="w-8 h-8 text-[#3C3A36]/20 absolute top-6 right-6" />
//       <div className="flex mb-4">
//         {[...Array(testimonial.rating)].map((_, i) => (
//           <Star key={i} className="w-5 h-5 text-[#3C3A36] fill-current" />
//         ))}
//       </div>
//       <p className="text-[#3C3A36]/80 mb-6 leading-relaxed">
//         &ldquo;{testimonial.content}&rdquo;
//       </p>
//       <div>
//         <p className="font-semibold tracking-[0.2em]">{testimonial.name}</p>
//         <p className="text-sm text-[#3C3A36]/60 mt-1">{testimonial.role}</p>
//       </div>
//     </motion.div>
//   )
// }

// function PortfolioCard({ item, onClick }: { item: PortfolioItem; onClick: () => void }) {
//   return (
//     <motion.div
//       layoutId={`portfolio-${item.id}`}
//       whileHover={{ y: -5 }}
//       onClick={onClick}
//       className="cursor-pointer bg-[#E5DFD3] rounded-lg overflow-hidden shadow-lg"
//     >
//       <div className="relative aspect-square">
//         <Image
//           src={item.image}
//           alt={item.title}
//           fill
//           className="object-cover"
//         />
//       </div>
//       <div className="p-6">
//         <span className="text-sm font-medium text-[#3C3A36]/60 tracking-[0.2em]">
//           {item.category}
//         </span>
//         <h3 className="text-xl font-semibold tracking-[0.2em] mt-2">
//           {item.title}
//         </h3>
//       </div>
//     </motion.div>
//   )
// }

// function PortfolioModal({ item, onClose }: { item: PortfolioItem; onClose: () => void }) {
//   return (
//     <motion.div
//       layoutId={`portfolio-${item.id}`}
//       className="bg-[#F5F0E6] rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
//       onClick={(e) => e.stopPropagation()}
//     >
//       <div className="relative aspect-video">
//         <Image
//           src={item.image}
//           alt={item.title}
//           fill
//           className="object-cover"
//         />
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 p-2 bg-[#F5F0E6] rounded-full shadow-lg"
//           aria-label="Close modal"
//         >
//           <X className="w-6 h-6" />
//         </button>
//       </div>
//       <div className="p-8">
//         <span className="text-sm font-medium text-[#3C3A36]/60 tracking-[0.2em]">
//           {item.category}
//         </span>
//         <h2 className="text-2xl font-semibold tracking-[0.2em] mt-2 mb-4">
//           {item.title}
//         </h2>
//         <p className="text-[#3C3A36]/80 mb-6 leading-relaxed">
//           {item.description}
//         </p>
//         <div className="grid grid-cols-2 gap-4 text-sm">
//           {item.client && (
//             <div>
//               <span className="font-medium tracking-[0.2em]">CLIENT</span>
//               <p className="text-[#3C3A36]/80 mt-1">{item.client}</p>
//             </div>
//           )}
//           <div>
//             <span className="font-medium tracking-[0.2em]">DATE</span>
//             <p className="text-[#3C3A36]/80 mt-1">{item.date}</p>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   )
// }

export default function Portfolio() {
  // const [selectedCategory, setSelectedCategory] = useState("All");
  // const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  // const filteredItems = selectedCategory === "All" 
  //   ? portfolioItems 
  //   : portfolioItems.filter(item => item.category === selectedCategory);

  // return (
  //   <div className="min-h-screen flex flex-col bg-[#F5F0E6] text-[#3C3A36]">
  //     <main className="flex-grow">
  //       <motion.div
  //         initial={{ opacity: 0 }}
  //         animate={{ opacity: 1 }}
  //         transition={{ duration: 0.6 }}
  //         className="h-[50vh] min-h-[400px] flex items-center justify-center bg-[#E5DFD3]"
  //       >
  //         <div className="container mx-auto px-6 text-center">
  //           <h1 className="text-4xl md:text-5xl font-bold tracking-[0.2em] mb-8 text-[#3C3A36]">
  //             PORTFOLIO
  //           </h1>
  //           <p className="text-lg md:text-xl text-[#3C3A36]/80 max-w-3xl mx-auto leading-relaxed">
  //             Explore our collection of styling projects and fashion transformations.
  //           </p>
  //         </div>
  //       </motion.div>

  //       <div className="py-20">
  //         <div className="container mx-auto px-6">
  //           <div className="flex flex-wrap justify-center gap-4 mb-12">
  //             {categories.map((category) => (
  //               <motion.button
  //                 key={category}
  //                 whileHover={{ y: -2 }}
  //                 whileTap={{ y: 0 }}
  //                 onClick={() => setSelectedCategory(category)}
  //                 className={`px-6 py-2 rounded-full text-sm font-medium tracking-[0.2em] transition-colors duration-300 ${
  //                   selectedCategory === category
  //                     ? 'bg-[#3C3A36] text-[#F5F0E6]'
  //                     : 'bg-[#E5DFD3] text-[#3C3A36] hover:bg-[#3C3A36]/10'
  //                 }`}
  //               >
  //                 {category.toUpperCase()}
  //               </motion.button>
  //             ))}
  //           </div>
  //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
  //             {filteredItems.map((item) => (
  //               <PortfolioCard
  //                 key={item.id}
  //                 item={item}
  //                 onClick={() => setSelectedItem(item)}
  //               />
  //             ))}
  //           </div>
  //         </div>
  //       </div>

  //       {/* About Section - now #3C3A36 */}
  //       <section className="bg-[#3C3A36] py-32 text-[#F5F0E6]">
  //         <div className="container mx-auto px-6">
  //           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
  //             <div className="relative aspect-[3/4] bg-[#F5F0E6] rounded-lg overflow-hidden shadow-lg">
  //               <Image
  //                 src="/images/portfolio7.png"
  //                 alt="Fashion Styling Process"
  //                 fill
  //                 className="object-cover"
  //               />
  //             </div>
  //             <div className="space-y-6">
  //               <h2 className="text-3xl font-semibold tracking-[0.2em]">OUR APPROACH</h2>
  //               <p className="text-lg text-[#F5F0E6]/80 leading-relaxed">
  //                 We believe that style is a powerful form of self-expression. Our portfolio showcases how we help clients discover and enhance their unique personal style through careful curation and expert guidance.
  //               </p>
  //               <p className="text-lg text-[#F5F0E6]/80 leading-relaxed">
  //                 Each project is a collaborative journey, where we combine our expertise with your individual preferences to create looks that not only look exceptional but feel authentically you.
  //               </p>
  //               <motion.div
  //                 whileHover={{ y: -2 }}
  //                 whileTap={{ y: 0 }}
  //               >
  //                 <Link
  //                   href="/contact"
  //                   className="inline-block bg-[#F5F0E6] text-[#3C3A36] px-8 py-4 rounded-lg text-lg font-medium tracking-[0.2em] hover:bg-[#F5F0E6]/90 transition-colors duration-300 shadow-md"
  //                 >
  //                   START YOUR JOURNEY
  //                 </Link>
  //               </motion.div>
  //             </div>
  //           </div>
  //         </div>
  //       </section>

  //       {/* Testimonials Section - now F5F0E6 */}
  //       <section className="bg-[#F5F0E6] py-32">
  //         <div className="container mx-auto px-6">
  //           <div className="text-center mb-16">
  //             <h2 className="text-3xl font-semibold tracking-[0.2em] mb-4">CLIENT TESTIMONIALS</h2>
  //             <p className="text-lg text-[#3C3A36]/80 max-w-2xl mx-auto">
  //               Hear from our clients about their transformative styling experiences.
  //             </p>
  //           </div>

  //           {/* Testimonials Grid */}
  //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
  //             {testimonials.map((testimonial, index) => (
  //               <TestimonialCard key={index} testimonial={testimonial} />
  //             ))}
  //           </div>
  //         </div>
  //       </section>

  //       {/* Final Vision Section - now #E5DFD3 */}
  //       <section className="bg-[#E5DFD3] py-32">
  //         <div className="container mx-auto px-6">
  //           <div className="max-w-4xl mx-auto text-center">
  //             <h2 className="text-3xl font-semibold tracking-[0.2em] mb-8 text-[#3C3A36]">
  //               CRAFTING YOUR STYLE STORY
  //             </h2>
  //             <div className="space-y-8">
  //               <p className="text-xl text-[#3C3A36]/90 leading-relaxed">
  //                 Every portfolio piece represents a unique journey of style transformation. 
  //                 We take pride in creating personalized experiences that reflect the individual essence of each client.
  //               </p>
  //               <p className="text-lg text-[#3C3A36]/80 leading-relaxed">
  //                 Our commitment to excellence and attention to detail ensures that each styling project 
  //                 not only meets but exceeds expectations, creating lasting confidence through personal style.
  //               </p>
  //               <motion.div
  //                 whileHover={{ y: -2 }}
  //                 whileTap={{ y: 0 }}
  //                 className="pt-4"
  //               >
  //                 <Link
  //                   href="/contact"
  //                   className="inline-block bg-[#3C3A36] text-[#F5F0E6] px-8 py-4 rounded-lg text-lg font-medium tracking-[0.2em] hover:bg-[#3C3A36]/90 transition-colors duration-300 shadow-md"
  //                 >
  //                   START YOUR JOURNEY
  //                 </Link>
  //               </motion.div>
  //             </div>
  //           </div>
  //         </div>
  //       </section>

  //       {/* Modal */}
  //       {/* <AnimatePresence>
  //         {selectedItem && (
  //           <motion.div
  //             initial={{ opacity: 0 }}
  //             animate={{ opacity: 1 }}
  //             exit={{ opacity: 0 }}
  //             className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
  //             onClick={() => setSelectedItem(null)}
  //           >
  //             <PortfolioModal
  //               item={selectedItem}
  //               onClose={() => setSelectedItem(null)}
  //             />
  //           </motion.div>
  //         )}
  //       </AnimatePresence> */}
  //     </main>

  //     <Footer />
  //   </div>
  // )
  return <></>
}