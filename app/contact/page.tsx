"use client";

import type React from "react";
import Link from "next/link";
import {
  Send,
  User,
  Briefcase,
  BookOpen,
  Sparkles,
  Mail,
  Phone,
  Github,
  Linkedin,
  Globe,
} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();

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

  return (
    <main className="w-full bg-white text-gray-900 min-h-screen flex flex-col">

      {/* 🔹 NAVBAR — UNCHANGED */}
      <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-4 z-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center gap-2 md:gap-3 flex-wrap mb-4">
            {[
              { href: "/me", label: "Me", Icon: User },
              { href: "/projects", label: "Projects", Icon: Briefcase },
              { href: "/skills", label: "Skills", Icon: BookOpen },
              { href: "/fun", label: "Fun", Icon: Sparkles },
              { href: "/contact", label: "Contact", Icon: Sparkles },
            ].map(({ href, label, Icon }) => (
              <Link
                key={label}
                href={href}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 hover:border-gray-400 transition-colors text-sm md:text-base"
              >
                <Icon className="w-4 h-4 md:w-5 md:h-5" />
                <span className="hidden sm:inline">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 🌈 HERO / CONTACT SECTION */}
      <section className="flex-1 px-4 py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto text-center">

          {/* BITMOJI */}
          <div className="relative inline-block group mb-10">
            <Link href="/">
              <img
                src="/images/bit-emoji.png"
                alt="Yash Bitmoji"
                className="w-32 h-32 rounded-full border-4 border-gray-900 shadow-xl hover:scale-105 transition cursor-pointer"
              />
            </Link>

            {/* Tooltip */}
            <div className="absolute left-1/2 -translate-x-1/2 mt-3 opacity-0 group-hover:opacity-100 transition bg-gray-900 text-white text-sm px-4 py-2 rounded-full shadow-lg">
              Click to go to Landing Page
            </div>
          </div>

          {/* TITLE */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let’s Connect
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-14 text-lg">
            Whether it’s collaboration, freelance work, or just a tech
            conversation — I’m always open to meaningful connections.
          </p>

          {/* CONTACT CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">

            {/* Email */}
            <a
              href="mailto:yashbawari182006@gmail.com"
              className="contact-card"
            >
              <Mail />
              <span>yashbawari182006@gmail.com</span>
            </a>

            {/* Phone */}
            <a href="tel:7700977688" className="contact-card">
              <Phone />
              <span>+91 7700977688</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/YashBawari18"
              target="_blank"
              className="contact-card"
            >
              <Github />
              <span>GitHub</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/yash-bawari-5a3379313/"
              target="_blank"
              className="contact-card"
            >
              <Linkedin />
              <span>LinkedIn</span>
            </a>

            {/* Upwork */}
            <a
              href="https://freelancerprofilenuxt.mesh.prod.platform.usw2.upwork/freelancers/~011cc85875a4a9bf8b?mp_source=share"
              target="_blank"
              className="contact-card sm:col-span-2"
            >
              <Globe />
              <span>Upwork Freelance Profile</span>
            </a>
          </div>
        </div>
      </section>

      {/* 🔻 FOOTER SEARCH — UNCHANGED */}
      <div className="sticky bottom-0 bg-white border-t border-gray-200 px-4 py-4 md:py-6">
        <form onSubmit={handleSearch} className="max-w-6xl mx-auto flex items-center gap-3">
          <input
            type="text"
            placeholder="Ask me anything..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="flex-1 px-6 py-3 md:py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
          <button
            type="submit"
            className="w-12 h-12 md:w-14 md:h-14 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition shadow-lg"
          >
            <Send />
          </button>
        </form>
      </div>

      {/* 🔹 CARD STYLE */}
      <style jsx>{`
        .contact-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 18px 22px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(8px);
          border: 1px solid #e5e7eb;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
          transition: all 0.25s ease;
          font-size: 1rem;
          font-weight: 500;
        }

        .contact-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 30px rgba(0, 0, 0, 0.08);
        }
      `}</style>
    </main>
  );
}
