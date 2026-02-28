"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { User, Briefcase, BookOpen, Sparkles, Phone, Home } from "lucide-react";

const navItems = [
    { href: "/me", label: "Me", icon: User },
    { href: "/projects", label: "Projects", icon: Briefcase },
    { href: "/skills", label: "Skills", icon: BookOpen },
    { href: "/fun", label: "Fun", icon: Sparkles },
    { href: "/contact", label: "Contact", icon: Phone },
];

export function SiteHeader() {
    const pathname = usePathname();

    // Don't show header on the home page (hero search page)
    if (pathname === "/") return null;

    return (
        <header className="sticky top-0 z-50 w-full px-4 py-4 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-6xl mx-auto flex items-center justify-center relative">
                {/* Home Icon Redirect */}
                <Link
                    href="/"
                    className="absolute left-0 p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-600 hover:text-gray-900"
                    title="Go to Home"
                >
                    <Home className="w-6 h-6" />
                </Link>

                <nav>
                    <div className="flex items-center gap-1 p-1 bg-gray-100/50 rounded-full border border-gray-200 shadow-sm relative">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`relative flex items-center gap-2 px-4 py-2 rounded-full transition-colors text-sm font-medium z-10 ${isActive ? "text-white" : "text-gray-600 hover:text-gray-900"
                                        }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="active-pill"
                                            className="absolute inset-0 bg-gray-900 rounded-full -z-10"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <item.icon className="w-4 h-4" />
                                    <span className="hidden sm:inline">{item.label}</span>
                                </Link>
                            );
                        })}
                    </div>
                </nav>
            </div>
        </header>
    );
}
