"use client";

import type React from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Send,
  User,
  Briefcase,
  BookOpen,
  Sparkles,
  Phone,
  X,
  ArrowRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  image: string;
  icon: string;
  gradient: string;
  features: string[];
  links: { label: string; url: string }[];
}

export default function ProjectsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  // <-- ADDED: mounted flag to avoid hydration mismatch for client-only attributes
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "Online Ticket Concession",
      subtitle: "Train Concession Portal",
      description: "Digital platform for train concession applications at DMCE",
      fullDescription:
        "This platform allows students to apply for train concessions online without waiting in queues.",
      image: "/projects/ticketcons.png",
      icon: "🎟️",
      gradient: "from-slate-600 to-slate-800",
      features: ["Online Application", "Approval System", "Dashboard", "User Login"],
      links: [
        { label: "Live Demo", url: "https://online-ticket-consession.vercel.app/" },
        { label: "GitHub Repo", url: "https://github.com/YashBawari18/Online-TicketConsession" },
      ],
    },
    {
      id: 2,
      title: "Digital Recipe Discovery",
      subtitle: "RecipeAI",
      description: "AI-Powered platform for futuristic meal ideas",
      fullDescription:
        "RecipeAI helps users discover meals using ingredients they already have.",
      image: "/projects/recipea1.png",
      icon: "🍳",
      gradient: "from-pink-500 via-purple-500 to-blue-500",
      features: ["AI Recipes", "Nutrition Engine", "Ingredient Scanner"],
      links: [
        { label: "Live Demo", url: "https://tsce-recipe-ai.vercel.app/" },
        { label: "GitHub Repo", url: "https://github.com/YashBawari18/TSCE-RecipeAI" },
      ],
    },
    {
      id: 3,
      title: "Frontend E-Commerce Clone",
      subtitle: "Shopping Platform",
      description: "Modern shopping UI with advanced animations",
      fullDescription:
        "A fully responsive e-commerce frontend showcasing products, filters, categories, and cart system.",
      image: "/projects/shopify.png",
      icon: "🛍️",
      gradient: "from-amber-600 to-blue-600",
      features: ["Product Grid", "Filters", "Cart UI", "Responsive Layout"],
      links: [
        { label: "Live Demo", url: "https://shopify-clone-inky.vercel.app/" },
        { label: "Github Repo", url: "https://github.com/YashBawari18/Shopify-Clone" },
      ],
    },
  ];

  const visibleProjects = [
    projects[currentIndex],
    projects[(currentIndex + 1) % projects.length],
    projects[(currentIndex + 2) % projects.length],
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const routes: Record<string, string> = {
      me: "/me",
      projects: "/projects",
      skills: "/skills",
      fun: "/fun",
      contact: "/contact",
    };
    if (routes[searchInput.toLowerCase()]) router.push(routes[searchInput.toLowerCase()]);
    setSearchInput("");
  };

  return (
    <main className="w-full bg-white text-gray-900 min-h-screen flex flex-col">

      {/* Loader */}
      {loading && (
        <div className="fixed bottom-6 right-6 bg-black text-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-3 z-[999]">
          <span className="text-sm">Gathering information…</span>
          <div className="flex gap-1">
            <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>
            <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.15s" }}></span>
            <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.3s" }}></span>
          </div>
        </div>
      )}

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


      {/* ----------------------------- */}
      {/* ⭐ PROJECT CARDS SECTION      */}
      {/* ----------------------------- */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">My Projects</h2>

          {/* ⭐ DESKTOP GRID (UNCHANGED) */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {visibleProjects.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-200 group text-left"
              >
                <div className="h-48 overflow-hidden flex items-center justify-center bg-gray-100">
                  <img src={project.image} className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-6">
                  <div className="text-4xl mb-3">{project.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </button>
            ))}
          </div>

          {/* ⭐ MOBILE CAROUSEL (NEW) */}
          <div className="md:hidden flex gap-4 overflow-x-auto no-scrollbar pb-4">
            {visibleProjects.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="min-w-[260px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-200 group text-left flex-shrink-0"
              >
                <div className="h-48 overflow-hidden flex items-center justify-center bg-gray-100">
                  <img src={project.image} className="max-h-full max-w-full object-contain" />
                </div>
                <div className="p-6">
                  <div className="text-4xl mb-3">{project.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Slider buttons (unchanged) */}
          <div className="flex justify-center gap-4 mt-8">
            <button onClick={handlePrev} className="p-3 bg-gray-200 rounded-full"><ChevronLeft /></button>
            <button onClick={handleNext} className="p-3 bg-gray-200 rounded-full"><ChevronRight /></button>
          </div>

          {/* ⭐ DESCRIPTION PARA (NEW) */}
          <p className="text-gray-700 mt-10 text-lg leading-relaxed">
            These are some of the projects I have worked on, focusing on user-centered
            design, clean UI, and impactful functionality. Each project represents a
            different area of development—from AI-powered tools to full-stack
            applications and modern frontend experiences.
          </p>
        </div>
      </section>

      {/* Modal (unchanged) */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-[200]">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className={`p-8 text-white relative bg-gradient-to-br ${selectedProject.gradient}`}>
              <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 p-2">
                <X className="w-6 h-6" />
              </button>
              <div className="w-full rounded-2xl shadow-md mb-6 overflow-hidden flex items-center justify-center bg-gray-100">
                <img src={selectedProject.image} className="max-w-full max-h-[60vh] object-contain" />
              </div>
              <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
              <p className="opacity-80 mb-4">{selectedProject.subtitle}</p>
              <p>{selectedProject.fullDescription}</p>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold mb-4">Features</h3>
              <div className="flex flex-wrap gap-3 mb-8">
                {selectedProject.features.map((f, i) => (
                  <span key={i} className="px-4 py-2 bg-gray-100 rounded-full text-sm">{f}</span>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedProject.links.map((link, i) => (
                  <a key={i} href={link.url} className="px-6 py-3 bg-gray-900 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800">
                    {link.label} <ArrowRight />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search Bar */}
      <div className="sticky bottom-0 bg-white border-t border-gray-200 px-4 py-4">
        <form onSubmit={handleSearch} className="max-w-6xl mx-auto flex gap-3">
          {/* Only render the input after the component mounts to avoid hydration mismatch */}
          {mounted ? (
            <input
              type="text"
              placeholder="Ask me anything..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="flex-1 px-6 py-3 border border-gray-300 rounded-full"
            />
          ) : (
            // lightweight placeholder (server renders this; it won't be interactive)
            <div className="flex-1 px-6 py-3 border border-gray-300 rounded-full bg-gray-100" />
          )}
          <button type="submit" className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center">
            <Send />
          </button>
        </form>
      </div>

    </main>
  );
}
