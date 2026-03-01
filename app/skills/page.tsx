"use client";

import type React from "react";
import { motion } from "framer-motion";

export default function SkillsPage() {
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
      <section className="px-4 py-20 max-w-6xl mx-auto flex-1 w-full">
        <motion.div variants={itemVariants} className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">Skills & Expertise</h1>
          <p className="text-gray-500 text-xl font-medium max-w-3xl leading-relaxed tracking-tight">
            Crafting pixel-perfect UI and rock-solid backends — because good design is a feeling, and good code is a vibe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* FRONTEND */}
          <motion.div
            variants={itemVariants}
            className="p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all bg-white group"
          >
            <h3 className="text-3xl font-black mb-8 tracking-tight group-hover:translate-x-2 transition-transform">
              Frontend Development
            </h3>

            <div className="flex flex-wrap gap-3 mb-8">
              {["React", "Next.js", "TypeScript", "TailwindCSS", "JavaScript", "HTML", "CSS"].map((skill) => (
                <span
                  key={skill}
                  className="px-6 py-3 bg-gray-50 border border-gray-100 text-gray-900 rounded-2xl text-sm font-bold shadow-sm hover:bg-gray-900 hover:text-white transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>

            <p className="text-gray-500 font-medium text-lg leading-relaxed">
              I build fast, responsive, modern UI with clean architecture and pixel-perfect detail.
            </p>
          </motion.div>

          {/* BACKEND */}
          <motion.div
            variants={itemVariants}
            className="p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all bg-white group"
          >
            <h3 className="text-3xl font-black mb-8 tracking-tight group-hover:translate-x-2 transition-transform">
              Backend Development
            </h3>

            <div className="flex flex-wrap gap-3 mb-8">
              {["DBMS", "SQL", "PostgreSQL", "MongoDB", "REST API", "SupaBase"].map((skill) => (
                <span
                  key={skill}
                  className="px-6 py-3 bg-gray-50 border border-gray-100 text-gray-900 rounded-2xl text-sm font-bold shadow-sm hover:bg-gray-900 hover:text-white transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>

            <p className="text-gray-500 font-medium text-lg leading-relaxed">
              Focused on efficient server logic, database design, real-time APIs, and scalable systems.
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

