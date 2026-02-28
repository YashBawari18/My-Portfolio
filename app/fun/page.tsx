"use client";

import type React from "react";
import Link from "next/link";

// IMAGES
import seminar from "./seminar.jpg";
import google from "./google.jpeg";
import badminton from "./badminton.png";
import hackathon from "./hackathon.jpg";
import hackathon_win from "./hackathon_win.jpg";
import codebyte from "./codebyte.jpg";



import {
  Send,
  User,
  Briefcase,
  BookOpen,
  Sparkles,
  Phone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

/* -----------------------------
   FUN CARD TYPE
------------------------------ */
interface FunItem {
  id: number;
  title: string;
  description: string;
  image: any;
  icon: string;
  objectPosition?: string;
  objectFit?: "object-cover" | "object-contain";
}



export default function FunPage() {
  const [searchInput, setSearchInput] = useState("");
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  /* -----------------------------
     FUN DATA
  ------------------------------ */
  const funItems: FunItem[] = [
    {
      id: 1,
      title: "Tech Seminars & Student Mentorship",
      description:
        "Actively involved in technical seminars and peer mentorship, helping students understand concepts and build confidence in technology.",
      image: seminar,
      icon: "🎤",
    },
    {
      id: 2,
      title: "Hackathons & Competitive Learning",
      description:
        "Participated in hackathons focused on innovation, teamwork, and solving real-world problems under time constraints.",
      image: hackathon,
      icon: "🏆",
    },
    {
      id: 3,
      title: "Google Student Ambassador",
      description:
        "Represented Google on campus by promoting developer technologies and building strong tech communities.",
      image: google,
      icon: "🌐",
    },
    {
      id: 4,
      title: "Badminton Achievement",
      description:
        "Actively participated in competitive badminton events, demonstrating discipline, focus, and sportsmanship.",
      image: badminton,
      icon: "🏸",
    },
    {
      id: 5,
      title: "1st Place — NKT TECH FEST '25",
      description:
        "Secured first place at Sheth N.K.T.T. College. A reminder that balance, focus, and consistency are the keys to winning.",
      image: hackathon_win,
      icon: "🥇",
      objectPosition: "object-center",
      objectFit: "object-contain",
    },
    {
      id: 6,
      title: "CodeByte 2.0 — 2nd Runner-Up",
      description:
        "Secured 3rd place at Lokmanya Tilak College of Engineering. 24 hours of coding, intense deployment battles, and unforgettable moments.",
      image: codebyte,
      icon: "🥈",
      objectPosition: "object-center",
      objectFit: "object-contain",
    },

  ];


  /* -----------------------------
     SEARCH HANDLER
  ------------------------------ */
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const routes: Record<string, string> = {
      me: "/me",
      projects: "/projects",
      skills: "/skills",
      fun: "/fun",
      contact: "/contact",
    };

    const route = routes[searchInput.toLowerCase()];
    if (route) router.push(route);

    setSearchInput("");
  };

  return (
    <main className="min-h-screen flex flex-col bg-white text-gray-900">

      {/* NAVBAR */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-6xl mx-auto flex justify-center gap-2 flex-wrap">
          {[
            { href: "/me", label: "Me", Icon: User },
            { href: "/projects", label: "Projects", Icon: Briefcase },
            { href: "/skills", label: "Skills", Icon: BookOpen },
            { href: "/fun", label: "Fun", Icon: Sparkles },
            { href: "/contact", label: "Contact", Icon: Phone },
          ].map(({ href, label, Icon }) => (
            <Link
              key={label}
              href={href}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 hover:border-gray-400"
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <section className="flex-1 px-4 py-16">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Beyond Coding
          </h2>

          <p className="text-gray-600 max-w-3xl mb-10 text-base sm:text-lg">
            Learning beyond classrooms and code — leadership, teamwork, discipline, and curiosity.
          </p>

          {/* CAROUSEL */}
          <div className="w-full">

            {/* SLIDER */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {funItems.map((item) => (
                  <div
                    key={item.id}
                    className="
                      w-full
                      sm:w-1/2
                      lg:w-1/3
                      flex-shrink-0
                      px-3
                    "
                  >
                    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow hover:shadow-xl transition bg-white h-full">

                      {/* IMAGE */}
                      <div className="h-56 bg-white">

                        <img
                          src={item.image.src}
                          alt={item.title}
                          className={`w-full h-full transition-transform duration-500 hover:scale-105 ${item.objectFit || "object-cover"
                            } ${item.objectPosition || "object-center"}`}
                        />

                      </div>

                      {/* CONTENT */}
                      <div className="p-6">
                        <div className="text-4xl mb-3">{item.icon}</div>
                        <h3 className="text-lg font-semibold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ARROWS BELOW */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() =>
                  setCurrentIndex((prev) =>
                    prev === 0 ? funItems.length - 1 : prev - 1
                  )
                }
                className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-800 transition"
              >
                <ChevronLeft />
              </button>

              <button
                onClick={() =>
                  setCurrentIndex((prev) =>
                    prev === funItems.length - 1 ? 0 : prev + 1
                  )
                }
                className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-800 transition"
              >
                <ChevronRight />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER SEARCH */}
      <div className="sticky bottom-0 bg-white border-t border-gray-200 px-4 py-4">
        <form onSubmit={handleSearch} className="max-w-6xl mx-auto flex gap-3">
          {mounted ? (
            <input
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1 px-6 py-3 border border-gray-300 rounded-full focus:outline-none"
            />
          ) : (
            <div className="flex-1 px-6 py-3 border rounded-full bg-gray-100" />
          )}
          <button className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center">
            <Send />
          </button>
        </form>
      </div>

    </main>
  );
}
