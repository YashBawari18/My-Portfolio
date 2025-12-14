"use client";

import type React from "react";
import Link from "next/link";
import {
  Send,
  User,
  Briefcase,
  BookOpen,
  Sparkles,
  Phone,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SkillsPage() {
  const [searchInput, setSearchInput] = useState("");
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchInput.toLowerCase().trim();

    const routes: Record<string, string> = {
      me: "/me",
      projects: "/projects",
      skills: "/skills",
      fun: "/fun",
      contact: "/contact",
    };

    if (routes[query]) {
      router.push(routes[query]);
    }

    setSearchInput("");
  };

  return (
    <main className="w-full bg-white text-gray-900 min-h-screen flex flex-col">

      {/* ⭐ HEADER — Matching MePage */}
      <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-4 z-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center gap-2 md:gap-3 flex-wrap mb-3">
            
            <Link
              href="/me"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 hover:border-gray-400 transition text-sm md:text-base"
            >
              <User className="w-4 h-4 md:w-5 md:h-5" /> 
              <span className="hidden sm:inline">Me</span>
            </Link>

            <Link
              href="/projects"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 hover:border-gray-400 transition text-sm md:text-base"
            >
              <Briefcase className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden sm:inline">Projects</span>
            </Link>

            <Link
              href="/skills"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-800 bg-gray-900 text-white transition text-sm md:text-base shadow-md"
            >
              <BookOpen className="w-4 h-4 md:w-5 md:h-5" /> 
              <span className="hidden sm:inline">Skills</span>
            </Link>

            <Link
              href="/fun"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 hover:border-gray-400 transition text-sm md:text-base"
            >
              <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden sm:inline">Fun</span>
            </Link>

            <Link
              href="/contact"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 hover:border-gray-400 transition text-sm md:text-base"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5" /> 
              <span className="hidden sm:inline">Contact</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ⭐ CONTENT */}
      <section className="px-4 py-16 md:py-20 bg-white flex-1 w-full">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-bold mb-14">
            Skills & Expertise
          </h2>

          <p className="text-gray-600 text-lg md:text-xl mb-14">
          Crafting pixel-perfect UI and rock-solid backends — because good design is a feeling, and good code is a vibe.
</p>

          <div className="grid md:grid-cols-2 gap-12">

            {/* FRONTEND */}
            <div className="p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 text-transparent bg-clip-text">
                Frontend Development
              </h3>

              <div className="flex flex-wrap gap-3 mb-6">
                {["React", "Next.js", "TypeScript", "TailwindCSS", "JavaScript", "HTML", "CSS"].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-900 text-white rounded-full text-sm shadow-sm hover:bg-gray-800 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed">
                I build fast, responsive, modern UI with clean architecture and pixel-perfect detail.
              </p>
            </div>

            {/* BACKEND */}
            <div className="p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 text-transparent bg-clip-text">
                Backend Development
              </h3>

              <div className="flex flex-wrap gap-3 mb-6">
                {["DBMS", "SQL", "PostgreSQL", "MongoDB", "REST API", "SupaBase"].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-900 text-white rounded-full text-sm shadow-sm hover:bg-gray-800 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed">
                Focused on efficient server logic, database design, real-time APIs, and scalable systems.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ⭐ FOOTER — identical search bar */}
      <div className="sticky bottom-0 bg-white border-t border-gray-200 px-4 py-4">
        <form onSubmit={handleSearch} className="max-w-6xl mx-auto flex gap-3">

          {mounted ? (
            <input
              type="text"
              placeholder="Ask me anything..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="flex-1 px-6 py-3 border border-gray-300 rounded-full"
            />
          ) : (
            <div className="flex-1 px-6 py-3 border border-gray-200 rounded-full bg-gray-100" />
          )}

          <button
            type="submit"
            className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center shadow-md"
          >
            <Send />
          </button>
        </form>
      </div>
    </main>
  );
}
