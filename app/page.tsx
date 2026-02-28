"use client"

import type React from "react"
import dynamic from "next/dynamic"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronRight, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { SearchBar } from "@/components/search-bar"
import Preloader from "@/components/preloader"
import CursorTracker from "@/components/cursor-tracker"

export default function PortfolioPage() {
  const router = useRouter()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  } as const;




  return (
    <main className="w-full bg-white text-gray-900 min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <Preloader />
      <CursorTracker />

      {/* Hero Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center relative z-10 w-full max-w-3xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center">
          <p className="text-xl text-gray-500 mb-4 font-medium tracking-tight">Hey, I'm yash-bawari 👋</p>
          <h1 className="text-7xl md:text-9xl font-black mb-12 tracking-tighter">My Portfolio!</h1>

          {/* Memoji Card with Hover Effect */}
          <motion.div
            variants={itemVariants}
            className="mb-12 flex justify-center"
            whileHover={{ scale: 1.05, rotate: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="w-64 h-64 flex items-center justify-center rounded-full overflow-hidden">
              <img src="/images/memoji.png" alt="Yash coding" className="w-full h-full object-contain" />
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="/Yash_Bawari_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-10 py-4 rounded-full text-base font-bold hover:bg-black transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-xl"
            >
              👀 View Resume
            </a>
            <a
              href="/Yash_Bawari_Resume.pdf"
              download="Yash_Bawari_Resume"
              className="bg-white text-gray-900 border-2 border-gray-100 px-10 py-4 rounded-full text-base font-bold hover:border-gray-200 hover:bg-gray-50 transition-all hover:scale-105 active:scale-95 shadow-sm"
            >
              📄 Download
            </a>
          </motion.div>

          {/* Navigation Pills */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { icon: "😊", label: "Me", path: "/me" },
              { icon: "📁", label: "Projects", path: "/projects" },
              { icon: "📚", label: "Skills", path: "/skills" },
              { icon: "🎉", label: "Fun", path: "/fun" },
              { icon: "👤", label: "Contact", path: "/contact" },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => router.push(item.path)}
                className="bg-gray-50/50 backdrop-blur-sm border border-gray-100 rounded-full py-4 px-8 hover:bg-white hover:shadow-xl hover:border-gray-200 transition-all hover:scale-110 active:scale-95 flex items-center gap-3 group"
              >
                <span className="text-2xl group-hover:rotate-12 transition-transform">{item.icon}</span>
                <span className="font-bold text-gray-800 text-sm tracking-tight">{item.label}</span>
                <ArrowUpRight className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </motion.div>

          {/* Large Search Bar */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center w-full mb-16"
          >
            <SearchBar variant="hero" placeholder="Search my work, skills, or achievements..." />
          </motion.div>


          <motion.p variants={itemVariants} className="text-sm font-bold text-gray-400 uppercase tracking-widest">
            Type a keyword: me, projects, skills, fun, contact
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Decorative Background Text */}
      <div className="fixed bottom-0 left-0 right-0 pointer-events-none z-0 flex items-end justify-center pb-8 select-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 0.4, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-black text-gray-900 tracking-tighter whitespace-nowrap text-5xl sm:text-7xl md:text-9xl lg:text-[12rem] xl:text-[15rem]"
          style={{
            backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          yash bawari
        </motion.div>
      </div>
    </main>
  )
}
