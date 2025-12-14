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
  Code2,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function MePage() {
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // ⭐ Added mounted flag (same as ProjectsPage)
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const delay = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(delay);
  }, []);

  const programmingSkills = ["C", "C++", "JavaScript"];
  const webSkills = ["HTML", "CSS", "React", "TypeScript", "Tailwind CSS"];
  const databaseSkills = ["Supabase", "SQL"];
  const tools = ["Git", "GitHub", "VS Code"];

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

    if (routes[query]) router.push(routes[query]);
    setSearchInput("");
  };

  // ----------------------------
  // LOADING SCREEN
  // ----------------------------
  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex gap-2">
          <span className="w-3 h-3 bg-gray-400 rounded-full animate-bounce"></span>
          <span
            className="w-3 h-3 bg-gray-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.15s" }}
          ></span>
          <span
            className="w-3 h-3 bg-gray-600 rounded-full animate-bounce"
            style={{ animationDelay: "0.3s" }}
          ></span>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full bg-white text-gray-900 min-h-screen flex flex-col">
      {/* NAVBAR */}
      <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-4 z-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center gap-2 md:gap-3 flex-wrap mb-4">
            <Link
              href="/me"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 hover:border-gray-400 transition-colors text-sm md:text-base"
            >
              <User className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden sm:inline">Me</span>
            </Link>
            <Link
              href="/projects"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 hover:border-gray-400 transition-colors text-sm md:text-base"
            >
              <Briefcase className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden sm:inline">Projects</span>
            </Link>
            <Link
              href="/skills"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 hover:border-gray-400 transition-colors text-sm md:text-base"
            >
              <BookOpen className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden sm:inline">Skills</span>
            </Link>
            <Link
              href="/fun"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 hover:border-gray-400 transition-colors text-sm md:text-base"
            >
              <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden sm:inline">Fun</span>
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 hover:border-gray-400 transition-colors text-sm md:text-base"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden sm:inline">Contact</span>
            </Link>
          </div>
        </div>
      </div>

      {/* MAIN SECTION */}
      <section className="px-4 py-8 md:py-12 max-w-6xl mx-auto flex-1 w-full">
        {/* PROFILE HEADER */}
        <div className="flex flex-col items-center mb-10 md:mb-12">
          <button
            onClick={() => router.push("/")}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          >
            <img
              src="/images/bit-emoji.png"
              alt="Yash emoji"
              className="w-16 md:w-20 h-16 md:h-20 rounded-full mb-4 md:mb-6 shadow-lg"
            />
          </button>
          <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-3 text-center">
            Yash Sunder Bawari
          </h1>
          <p className="text-gray-600 text-center text-sm md:text-base mb-1">
            19 <span className="mx-2">•</span> Thane, India
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* IMAGE */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/profile.jpeg"
                alt="Yash"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* INFO */}
          <div>
            {/* ABOUT */}
            <div className="mb-8">
              <h3 className="text-lg md:text-xl font-semibold mb-3 flex items-center gap-2">
                <span>🚀</span> About Me
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                I'm a Third-Year Computer Engineering student at DMCE with a strong
                passion for technology and coding. I also serve as a Google Gemini
                Campus Ambassador and a Tech Team Member at CSI-CATT.
              </p>
            </div>

            {/* SKILLS */}
            <div className="mb-8">
              <h3 className="text-lg md:text-xl font-semibold mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5" /> Technical Skills
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-2">
                    Programming Languages
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {programmingSkills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-blue-100 text-blue-700 px-3 py-1.5 rounded-lg text-xs md:text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-600 mb-2">
                    Web Development
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {webSkills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-purple-100 text-purple-700 px-3 py-1.5 rounded-lg text-xs md:text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-600 mb-2">
                    Database & Backend
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {databaseSkills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-green-100 text-green-700 px-3 py-1.5 rounded-lg text-xs md:text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-600 mb-2">Tools</p>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((skill) => (
                      <span
                        key={skill}
                        className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-xs md:text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ⭐⭐⭐ IDENTICAL SEARCH BAR (COPIED FROM PROJECTS PAGE) ⭐⭐⭐ */}
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
            <div className="flex-1 px-6 py-3 border border-gray-300 rounded-full bg-gray-100" />
          )}

          <button
            type="submit"
            className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center"
          >
            <Send />
          </button>
        </form>
      </div>
    </main>
  );
}
