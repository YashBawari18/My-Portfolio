"use client";

import type React from "react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// IMAGES
import seminar from "./seminar.jpg";
import google from "./google.jpeg";
import badminton from "./badminton.png";
import hackathon from "./hackathon.jpg";
import hackathon_win from "./hackathon_win.jpg";
import codebyte from "./codebyte.jpg";

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
  const [itemsToShow, setItemsToShow] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const visibleItems = Array.from({ length: itemsToShow }).map(
    (_, i) => funItems[(currentIndex + i) % funItems.length]
  );

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + funItems.length) % funItems.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % funItems.length);
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
      <section className="px-4 py-20 max-w-6xl mx-auto flex-1 w-full">
        <motion.div variants={itemVariants} className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-gray-900">Beyond Coding</h1>
          <p className="text-gray-500 text-xl font-medium max-w-3xl leading-relaxed tracking-tight">
            Learning beyond classrooms and code — leadership, teamwork, discipline, and curiosity.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            <AnimatePresence mode="popLayout" initial={false}>
              {visibleItems.map((item, idx) => (
                <motion.div
                  key={`${item.id}-${idx}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all bg-white h-full flex flex-col group"
                >
                  <div className="h-56 bg-white overflow-hidden p-4">
                    <img
                      src={item.image.src}
                      alt={item.title}
                      className={`w-full h-full rounded-2xl transition-transform duration-500 group-hover:scale-105 ${item.objectFit || "object-cover"
                        } ${item.objectPosition || "object-center"}`}
                    />
                  </div>
                  <div className="p-4 md:p-8 flex-1 flex flex-col">
                    <div className="text-3xl md:text-5xl mb-4 md:mb-6 group-hover:scale-110 transition-transform origin-left">{item.icon}</div>
                    <h3 className="text-lg md:text-2xl font-black mb-1 md:mb-3 tracking-tight">{item.title}</h3>
                    <p className="text-gray-500 font-medium leading-tight text-xs md:text-base">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

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
    </motion.div>
  );
}

