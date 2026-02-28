"use client";

import type React from "react";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  } as const;

  const contactLinks = [
    {
      href: "mailto:yashbawari182006@gmail.com",
      label: "yashbawari182006@gmail.com",
      icon: Mail,
      color: "bg-red-50 text-red-600 border-red-100",
    },
    {
      href: "tel:7700977688",
      label: "+91 7700977688",
      icon: Phone,
      color: "bg-green-50 text-green-600 border-green-100",
    },
    {
      href: "https://github.com/YashBawari18",
      label: "GitHub Profile",
      icon: Github,
      color: "bg-gray-50 text-gray-900 border-gray-200",
    },
    {
      href: "https://www.linkedin.com/in/yash-bawari-5a3379313/",
      label: "LinkedIn Profile",
      icon: Linkedin,
      color: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      href: "https://freelancerprofilenuxt.mesh.prod.platform.usw2.upwork/freelancers/~011cc85875a4a9bf8b?mp_source=share",
      label: "Upwork Portfolio",
      icon: Globe,
      color: "bg-emerald-50 text-emerald-600 border-emerald-100",
      fullWidth: true,
    },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full bg-white text-gray-900 min-h-screen flex flex-col"
    >
      <section className="px-4 py-20 max-w-5xl mx-auto flex-1 w-full text-center">
        <motion.div variants={itemVariants} className="mb-16">
          <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-10 hover:scale-110 transition-transform duration-500">
            <img
              src="/images/memoji.png"
              alt="Yash Memoji"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">Let’s Connect</h1>
          <p className="text-gray-500 text-xl font-medium max-w-2xl mx-auto leading-relaxed tracking-tight">
            Whether it’s collaboration, freelance work, or just a tech conversation — I’m always open to meaningful connections.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {contactLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}

              className={`flex items-center gap-5 p-6 rounded-[2rem] border transition-all shadow-sm hover:shadow-xl ${link.color
                } ${link.fullWidth ? "sm:col-span-2" : ""}`}
            >
              <div className="p-3 bg-white rounded-2xl shadow-sm">
                <link.icon className="w-6 h-6" />
              </div>
              <span className="font-bold tracking-tight text-lg">{link.label}</span>
            </motion.a>
          ))}
        </div>
      </section>
    </motion.div>
  );
}

