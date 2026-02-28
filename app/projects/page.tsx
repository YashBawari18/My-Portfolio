"use client";

import type React from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
    {
      id: 4,
      title: "CareerOrbit AI",
      subtitle: "AI-Powered Career Intelligence",
      description: "Track skill decay and bridge learning gaps with AI.",
      fullDescription:
        "CareerOrbit AI helps you master your career trajectory in the AI era. Track skill decay, predict your next move, and bridge learning gaps with AI-driven intelligence.",
      image: "/projects/careerorbit.png",
      icon: "🚀",
      gradient: "from-orange-500 to-red-600",
      features: ["Skill Decay Tracking", "Career Path Prediction", "AI Insights", "Learning Gaps"],
      links: [
        { label: "Live Demo", url: "https://careerorbit-ai-3.onrender.com" },
        { label: "GitHub Repo", url: "https://github.com/YashBawari18/CareerOrbit-AI.git" },
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  } as const;


  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full bg-white text-gray-900 min-h-screen flex flex-col"
    >
      <section className="px-4 py-20 max-w-6xl mx-auto">
        <motion.div variants={itemVariants} className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">My Projects</h1>
          <p className="text-gray-500 text-xl font-medium max-w-3xl leading-relaxed tracking-tight">
            A collection of my work, focusing on user-centered design, clean UI, and impactful functionality.
          </p>
        </motion.div>

        {/* PROJECT GRIDS */}
        <motion.div variants={itemVariants} className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout" initial={false}>
              {visibleProjects.map((project, idx) => (
                <motion.button
                  key={`${project.id}-${idx}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  onClick={() => setSelectedProject(project)}
                  className="rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100 group text-left bg-white h-full flex flex-col"
                >
                  <div className="h-56 overflow-hidden flex items-center justify-center bg-gray-50 p-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform origin-left">{project.icon}</div>
                    <h3 className="text-2xl font-black mb-3 tracking-tight">{project.title}</h3>
                    <p className="text-gray-500 font-medium mb-6 line-clamp-2 leading-snug">{project.description}</p>
                    <div className="mt-auto pt-4 border-t border-gray-50 flex items-center gap-2 text-sm font-bold text-gray-400 group-hover:text-gray-900 transition-colors">
                      View Project <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-6 mt-12">
            <button
              onClick={handlePrev}
              className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors active:scale-90"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors active:scale-90"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-[200]"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-[3rem] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl no-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`p-10 text-white relative bg-gradient-to-br ${selectedProject.gradient}`}>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="w-full rounded-[2rem] shadow-2xl mb-10 overflow-hidden flex items-center justify-center bg-white/10 backdrop-blur-md p-4 aspect-video">
                  <img src={selectedProject.image} className="max-w-full max-h-full object-contain" />
                </div>
                <h2 className="text-4xl font-black mb-2 tracking-tighter">{selectedProject.title}</h2>
                <p className="text-xl font-bold opacity-80 mb-6 tracking-tight">{selectedProject.subtitle}</p>
                <p className="text-lg leading-relaxed font-medium opacity-90">{selectedProject.fullDescription}</p>
              </div>
              <div className="p-10">
                <h3 className="text-xl font-black mb-6 tracking-tight">Key Features</h3>
                <div className="flex flex-wrap gap-3 mb-12">
                  {selectedProject.features.map((f, i) => (
                    <span
                      key={i}
                      className="px-6 py-3 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-bold shadow-sm"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedProject.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 bg-gray-900 text-white rounded-2xl flex items-center justify-center gap-3 font-bold hover:bg-black transition-all hover:scale-105 active:scale-95 shadow-xl"
                    >
                      {link.label} <ArrowRight className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

