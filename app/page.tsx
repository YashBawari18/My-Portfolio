"use client"

import type React from "react"
import dynamic from "next/dynamic"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronRight } from "lucide-react"

// Fix hydration mismatch by disabling SSR for these components
const CursorTracker = dynamic(() => import("@/components/cursor-tracker"), { ssr: false })
const Preloader = dynamic(() => import("@/components/preloader"), { ssr: false })

export default function PortfolioPage() {
  const router = useRouter()
  const [searchInput, setSearchInput] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const query = searchInput.toLowerCase().trim()

    const routes: Record<string, string> = {
      me: "/me",
      about: "/me",
      projects: "/projects",
      project: "/projects",
      skills: "/skills",
      skill: "/skills",
      fun: "/fun",
      hobby: "/fun",
      contact: "/contact",
      email: "/contact",
      resume: "/Yash_Bawari_Resume.pdf",
    }

    const route = routes[query]
    if (route) {
      router.push(route)
      setSearchInput("")
    }
  }

  return (
    <main className="w-full bg-white text-gray-900 min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <Preloader />
      <CursorTracker />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center relative z-10 w-full max-w-3xl mx-auto">
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-2">Hey, I'm yash-bawari 👋</p>
          <h1 className="text-7xl md:text-8xl font-bold mb-12">My Portfolio!</h1>

          {/* Bit Emoji Card */}
          <div className="mb-12 flex justify-center">
            <div className="w-56 h-56 rounded-3xl bg-black flex items-center justify-center shadow-2xl overflow-hidden">
              <img src="/images/bit-emoji.png" alt="Yash coding" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Resume Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            {/* 1️⃣ VIEW RESUME */}
            <a
              href="/Yash_Bawari_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-all active:scale-95"
            >
              👀 View Resume
            </a>

            {/* 2️⃣ DOWNLOAD RESUME */}
            <a
              href="/Yash_Bawari_Resume.pdf"
              download="Yash_Bawari_Resume"
              className="bg-white border border-gray-300 px-8 py-3 rounded-full text-sm font-medium hover:border-gray-400 hover:shadow active:scale-95"
            >
              📄 Download Resume
            </a>
          </div>

          {/* Navigation Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              { icon: "😊", label: "Me", keyword: "me" },
              { icon: "📁", label: "Projects", keyword: "projects" },
              { icon: "📚", label: "Skills", keyword: "skills" },
              { icon: "🎉", label: "Fun", keyword: "fun" },
              { icon: "👤", label: "Contact", keyword: "contact" },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  const routes: Record<string, string> = {
                    me: "/me",
                    projects: "/projects",
                    skills: "/skills",
                    fun: "/fun",
                    contact: "/contact",
                  }
                  router.push(routes[item.keyword])
                }}
                className="bg-white border border-gray-300 rounded-full py-3 px-6 hover:shadow-md hover:border-gray-400 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium text-gray-700 text-sm">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Large Search Bar */}
          <form
            onSubmit={handleSearch}
            className="flex items-center bg-gray-100 rounded-full px-8 py-4 w-full max-w-2xl mx-auto mb-12 shadow-lg"
          >
            <input
              type="text"
              placeholder="Ask me anything"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-base"
            />
            <button
              type="submit"
              className="ml-4 bg-gray-800 text-white rounded-full p-3 hover:bg-gray-700 transition-colors active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </form>

          {/* Helper text for search */}
          <p className="text-sm text-gray-500 mt-8">
            Type a keyword (me, projects, skills, fun, contact, resume)
          </p>
        </div>
      </section>

      {/* Background Name */}
      <div className="fixed bottom-0 left-0 right-0 pointer-events-none z-0 flex items-end justify-center pb-8">
        <div
          className="font-black text-gray-900 opacity-50 tracking-wider whitespace-nowrap text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl"
          style={{
            backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          yash bawari
        </div>
      </div>
    </main>
  )
}
