"use client";

import type React from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  ArrowRight,
} from "lucide-react";
import { useState, useEffect } from "react";
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
  const [itemsToShow, setItemsToShow] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projects: Project[] = [

      

        { id: 1,
        title: "SecureGate",
        subtitle: "AI‑Powered Access Control",
        description: "Secure, scalable gate management system.",
        fullDescription: "SecureGate offers AI‑driven gate monitoring, automatic visitor recognition, and remote control, ensuring secure premises access.",
        image: "/projects/securegate.png",
        icon: "🔐",
        gradient: "from-purple-600 to-pink-800",
        features: ["AI Vision", "Remote Control", "Visitor Logs", "Secure API"],
        links: [
          { label: "Live Demo", url: "https://securegate-example.com" },
          { label: "GitHub Repo", url: "https://github.com/YashBawari18/SecureGate" },
        ],
      },
      {
        id: 2,
        title: "CareerOrbit",
        subtitle: "Career Tracking Platform",
        description: "Personalized career roadmap and job matching.",
        fullDescription: "CareerOrbit provides AI‑based skill assessment, personalized learning paths, and job matching to accelerate professional growth.",
        image: "/projects/careerorbit.png",
        icon: "🚀",
        gradient: "from-green-500 to-teal-700",
        features: ["Skill Assessment", "Learning Paths", "Job Matching", "Analytics Dashboard"],
        links: [
          { label: "Live Demo", url: "https://careerorbit-example.com" },
          { label: "GitHub Repo", url: "https://github.com/YashBawari18/CareerOrbit" },
        ],
      },
      {
        id: 3,
        title: "Kalchakra",
        subtitle: "Well‑Being & Yoga App",
        description: "Guided yoga sessions and wellness tracking.",
        fullDescription: "Kalchakra blends curated yoga routines, meditation guides, and health tracking to promote holistic well‑being.",
        image: "/projects/kalchakra.png",
        icon: "🧘‍♀️",
        gradient: "from-indigo-500 to-purple-700",
        features: ["Yoga Sessions", "Meditation", "Health Tracking", "Community"],
        links: [
          { label: "Live Demo", url: "https://kalchakra-example.com" },
          { label: "GitHub Repo", url: "https://github.com/YashBawari18/Kalchakra" },
        ],
      },
      {
        id: 4,
        title: "Digital Recipe",
        subtitle: "Smart Cooking Assistant",
        description: "AI‑generated recipes based on ingredients.",
        fullDescription: "Digital Recipe suggests personalized meals, calculates nutrition, and provides step‑by‑step cooking instructions using AI.",
        image: "/projects/recipea1.png",
        icon: "🍳",
        gradient: "from-orange-500 to-red-600",
        features: ["Ingredient Scan", "AI Recipes", "Nutrition Info", "Meal Planner"],
        links: [
          { label: "Live Demo", url: "https://digitalrecipe-example.com" },
          { label: "GitHub Repo", url: "https://github.com/YashBawari18/DigitalRecipe" },
        ],
      },
      // ---------- END OF NEW ENTRIES ----------
      {
      id: 8,
      title: "KavachAI",
      subtitle: "AI‑Powered Security Suite",
      description: "Intelligent threat detection and response platform.",
      fullDescription:
        "KavachAI combines machine‑learning models with real‑time analytics to protect applications from vulnerabilities, offering automated alerts and remediation workflows.",
      image: "/projects/kavachai.png",
      icon: "🛡️",
      gradient: "from-blue-600 to-indigo-800",
      features: ["Threat Detection", "Real‑time Alerts", "Automated Remediation", "Dashboard Analytics"],
      links: [
        { label: "Live Demo", url: "https://kavachai-example.com" },
        { label: "GitHub Repo", url: "https://github.com/YashBawari18/KavachAI" },
      ],
    },
    {
      id: 7,
      title: "Smart Irrigation Dashboard",
      subtitle: "IoT‑Enabled Farm Management",
      description: "Realtime monitoring & control of irrigation systems.",
      fullDescription:
        "An analytics dashboard that visualises soil moisture, weather forecasts, and pump status, letting farmers optimise water usage via a sleek UI.",
      image: "/projects/smartirrigation.png",
      icon: "💧",
      gradient: "from-teal-600 to-cyan-500",
      features: ["Live Sensor Data", "Water‑Usage Forecast", "Device Control", "Alert Notifications"],
      links: [
        { label: "Live Demo", url: "https://smart-irrigation-dashboard-nine.vercel.app/" },
        { label: "GitHub Repo", url: "https://github.com/YashBawari18/Smart-Irrigation-Dashboard" },
      ],
    },

      // ---------- END OF NEW ENTRIES ----------
];

  const visibleProjects = Array.from({ length: itemsToShow }).map(
    (_, i) => projects[(currentIndex + i) % projects.length]
  );

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const containerVariants = { // Added subtle upward motion for premium feel
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  } as const;


  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full bg-white text-gray-900 min-h-screen flex flex-col relative"
    >
      <section className="px-4 py-20 max-w-6xl mx-auto relative"><div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-full filter blur-3xl opacity-30 pointer-events-none" /></section>
        <motion.div variants={itemVariants} className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-center">My Projects</h1>
          <p className="text-gray-500 text-xl font-medium max-w-3xl leading-relaxed tracking-tight text-center">
            A collection of my work, focusing on user-centered design, clean UI, and impactful functionality.
          </p>
        </motion.div>

        {/* PROJECT GRIDS */}
        <motion.div variants={itemVariants} className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            <AnimatePresence mode="popLayout" initial={false}>
              {visibleProjects.map((project, idx) => (
                <motion.button
                  key={`${project.id}-${idx}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  onClick={() => setSelectedProject(project)}
                  className="rounded-[2rem] overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl hover:shadow-2xl transition-all hover:scale-105 hover:rotate-1 group text-center flex flex-col h-full"
                >
                  <div className="h-56 overflow-hidden flex items-center justify-center bg-gray-50 p-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 md:p-8 flex-1 flex flex-col">
                    <div className="text-3xl md:text-5xl mb-4 md:mb-6 group-hover:scale-110 transition-transform origin-left">{project.icon}</div>
                    <h3 className="text-lg md:text-2xl font-black mb-1 md:mb-3 tracking-tight">{project.title}</h3>
                    <p className="text-gray-500 font-medium mb-4 md:mb-6 line-clamp-2 leading-tight text-xs md:text-base">{project.description}</p>
                    <div className="mt-auto pt-2 md:pt-4 border-t border-gray-50 flex items-center gap-2 text-[10px] md:text-sm font-bold text-gray-400 group-hover:text-gray-900 transition-colors">
                      View Project <ChevronRight className="w-3 h-3 md:w-4 h-4" />
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

