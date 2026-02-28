"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Code2, Briefcase, GraduationCap, Trophy, Globe, Heart } from "lucide-react";
import { useRouter } from "next/navigation";

export default function MePage() {
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  } as const;

  const programmingSkills = ["C", "C++", "JavaScript", "TypeScript"];
  const webSkills = ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"];
  const backendSkills = ["Node.js", "Supabase", "SQL", "REST APIs"];
  const tools = ["Git", "GitHub", "VS Code", "Vercel", "Framer Motion"];

  const experiences = [
    {
      role: "Google Gemini Campus Ambassador",
      company: "Google Developer Groups",
      period: "2024 - Present",
      description: "Leading AI initiatives on campus, conducting workshops on Gemini API, and fostering a community of AI enthusiasts.",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      role: "Tech Team Member",
      company: "CSI-CATT",
      period: "2023 - Present",
      description: "Contributing to technical projects, organizing hackathons, and managing technical infrastructure for college events.",
      icon: <Code2 className="w-5 h-5" />,
    },
  ];

  const education = [
    {
      degree: "B.E. in Computer Engineering",
      institution: "Datta Meghe College of Engineering (DMCE)",
      period: "2022 - 2026",
      details: "Currently in 3rd Year. Focus on Software Engineering, Data Structures, and Algorithms.",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full bg-white text-gray-900 min-h-screen flex flex-col pb-24"
    >
      {/* HERO SECTION */}
      <section className="px-4 pt-12 md:pt-20 pb-16 max-w-6xl mx-auto w-full">
        <motion.div variants={itemVariants} className="flex flex-col items-center mb-16">
          <button
            onClick={() => router.push("/")}
            className="cursor-pointer hover:scale-105 transition-transform mb-8 group"
          >
            <div className="w-32 md:w-40 h-32 md:h-40 rounded-full overflow-hidden border-4 border-gray-50 shadow-xl group-hover:shadow-2xl transition-all">
              <img
                src="/images/memoji.png"
                alt="Yash Memoji"
                className="w-full h-full object-contain"
              />
            </div>
          </button>
          <h1 className="text-5xl md:text-8xl font-black mb-4 tracking-tighter text-center">
            Yash Sunder Bawari
          </h1>
          <div className="flex flex-wrap justify-center gap-4 text-gray-500 font-bold uppercase tracking-widest text-xs">
            <span>Developer</span>
            <span className="opacity-20">•</span>
            <span>Gemini Ambassador</span>
            <span className="opacity-20">•</span>
            <span>Engineer</span>
          </div>
        </motion.div>

        {/* BIO GRID */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-24">
          <motion.div variants={itemVariants} className="lg:col-span-5">
            <div className="relative group">
              <div className="absolute inset-0 bg-gray-900 rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform duration-500 -z-10 opacity-5"></div>
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 -rotate-2 group-hover:rotate-0 transition-transform duration-500 aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
                <img
                  src="/images/profile.jpeg"
                  alt="Yash"
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-7 space-y-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Crafting digital experiences with purpose.</h2>
              <p className="text-gray-600 leading-relaxed text-xl font-medium">
                I'm a Third-Year Computer Engineering student based in Thane, India. With a deep fascination for how software impacts the world, I spend my time building projects that bridge the gap between complex logic and intuitive design.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 pt-6">
              <div className="p-8 rounded-[2rem] bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-xl transition-all">
                <Heart className="w-8 h-8 mb-4 text-gray-900" />
                <h4 className="text-xl font-bold mb-2">My Philosophy</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Coding isn't just about syntax; it's about solving real-world problems and creating joy through seamless interfaces.
                </p>
              </div>
              <div className="p-8 rounded-[2rem] bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-xl transition-all">
                <Globe className="w-8 h-8 mb-4 text-gray-900" />
                <h4 className="text-xl font-bold mb-2">My Mission</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  As a Google Gemini Ambassador, my goal is to make cutting-edge AI technology accessible and understandable for everyone.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* EXPERIENCE & EDUCATION */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {/* EXPERIENCE */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-2xl bg-gray-900 flex items-center justify-center text-white shadow-lg">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-black tracking-tight">Journey</h3>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:left-[23px] before:w-[2px] before:bg-gray-100 before:z-0">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative z-10 pl-16 group">
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-2xl bg-white border-4 border-gray-50 flex items-center justify-center text-gray-400 group-hover:text-gray-900 group-hover:border-gray-900 transition-all shadow-sm">
                    {exp.icon}
                  </div>
                  <div className="p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm group-hover:shadow-2xl group-hover:border-gray-200 transition-all">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">{exp.period}</span>
                    <h4 className="text-xl font-bold text-gray-900">{exp.role}</h4>
                    <p className="text-gray-500 font-bold mb-4">{exp.company}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* EDUCATION */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-2xl bg-gray-900 flex items-center justify-center text-white shadow-lg">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-black tracking-tight">Education</h3>
            </div>

            <div className="space-y-8">
              {education.map((edu, idx) => (
                <div key={idx} className="p-8 rounded-[2.5rem] bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:border-gray-200 transition-all group">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">{edu.period}</span>
                  <h4 className="text-2xl font-black text-gray-900 mb-1 leading-tight">{edu.degree}</h4>
                  <p className="text-gray-600 font-bold mb-4">{edu.institution}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{edu.details}</p>
                </div>
              ))}

              <div className="p-8 rounded-[2.5rem] bg-gray-900 text-white shadow-2xl relative overflow-hidden group">
                <Trophy className="absolute right-[-10px] bottom-[-10px] w-32 h-32 text-white/10 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
                <h4 className="text-xl font-bold mb-2 relative z-10">Continuous Learning</h4>
                <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                  Actively pursuing certifications in Cloud Computing, AI, and Full-Stack Development to stay ahead in the tech landscape.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SKILLS REVISITED */}
        <motion.div variants={itemVariants} className="bg-gray-50 rounded-[4rem] p-12 md:p-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">The Toolkit</h3>
            <p className="text-gray-500 font-medium">Equipped with modern technologies to build high-performance applications.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-6">Programming</p>
              <div className="flex flex-wrap gap-2">
                {programmingSkills.map(s => <span key={s} className="bg-white px-4 py-2 rounded-xl text-xs font-bold border border-gray-100 shadow-sm">{s}</span>)}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-6">Frontend</p>
              <div className="flex flex-wrap gap-2">
                {webSkills.map(s => <span key={s} className="bg-white px-4 py-2 rounded-xl text-xs font-bold border border-gray-100 shadow-sm">{s}</span>)}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-6">Backend</p>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map(s => <span key={s} className="bg-white px-4 py-2 rounded-xl text-xs font-bold border border-gray-100 shadow-sm">{s}</span>)}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-6">Tools</p>
              <div className="flex flex-wrap gap-2">
                {tools.map(s => <span key={s} className="bg-white px-4 py-2 rounded-xl text-xs font-bold border border-gray-100 shadow-sm">{s}</span>)}
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}

