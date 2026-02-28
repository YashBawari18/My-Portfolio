"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Send, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SearchBarProps {
    variant?: "hero" | "footer";
    placeholder?: string;
}

export function SearchBar({ variant = "footer", placeholder = "Ask me anything..." }: SearchBarProps) {
    const placeholders = [
        "Ask me anything...",
        "Search my projects...",
        "What are my skills?",
        "Check out my achievements...",
        "How to contact me?",
    ];

    const [searchInput, setSearchInput] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [placeholderIndex, setPlaceholderIndex] = useState(0);
    const [displayPlaceholder, setDisplayPlaceholder] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [isNotMatched, setIsNotMatched] = useState(false);
    const router = useRouter();

    // Typing effect for placeholders
    useEffect(() => {
        if (searchInput) {
            setDisplayPlaceholder("");
            return;
        }

        const currentPlaceholder = placeholders[placeholderIndex];
        const typingSpeed = isDeleting ? 30 : 50;
        const nextCharDelay = 1500;

        const timeout = setTimeout(() => {
            if (!isDeleting && displayPlaceholder.length < currentPlaceholder.length) {
                // Typing
                setDisplayPlaceholder(currentPlaceholder.slice(0, displayPlaceholder.length + 1));
            } else if (isDeleting && displayPlaceholder.length > 0) {
                // Deleting
                setDisplayPlaceholder(currentPlaceholder.slice(0, displayPlaceholder.length - 1));
            } else if (!isDeleting && displayPlaceholder.length === currentPlaceholder.length) {
                // Pause before deleting
                setTimeout(() => setIsDeleting(true), nextCharDelay);
            } else if (isDeleting && displayPlaceholder.length === 0) {
                // Switch to next placeholder
                setIsDeleting(false);
                setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayPlaceholder, isDeleting, placeholderIndex, searchInput]);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        const query = searchInput.toLowerCase().trim();
        if (!query) return;

        setIsSearching(true);
        setIsNotMatched(false);

        // Navigation logic with expanded keywords
        const keywordMap: Record<string, string[]> = {
            "/me": ["me", "about", "bio", "profile", "who are you", "yourself", "yash", "biography"],
            "/projects": ["projects", "work", "portfolio", "apps", "built", "made", "github", "code"],
            "/skills": ["skills", "expertise", "tech", "stack", "languages", "tools", "coding", "can you do"],
            "/fun": ["fun", "beyond", "hobbies", "achievements", "hackathon", "life", "awards", "win"],
            "/contact": ["contact", "connect", "email", "hire", "reach", "message", "linkedin", "socials"],
        };

        // Simulate ChatGPT-style "thinking" delay
        await new Promise((resolve) => setTimeout(resolve, 800));

        let targetRoute = "";
        for (const [route, keywords] of Object.entries(keywordMap)) {
            if (keywords.some((keyword) => query.includes(keyword))) {
                targetRoute = route;
                break;
            }
        }

        if (targetRoute) {
            router.push(targetRoute);
            setSearchInput("");
        } else {
            // Shake effect or feedback for non-match
            setIsNotMatched(true);
            setTimeout(() => setIsNotMatched(false), 2000);
        }

        setIsSearching(false);
    };

    return (
        <form
            onSubmit={handleSearch}
            className={`relative w-full transition-all duration-500 ease-out ${variant === "hero" ? "max-w-2xl" : "max-w-6xl"
                } ${isNotMatched ? "animate-shake" : ""}`}
        >
            <div className={`relative flex items-center group transition-all ${variant === "hero"
                ? "bg-gray-50 rounded-[2.5rem] px-8 py-6 shadow-2xl border border-white focus-within:ring-8 focus-within:ring-gray-900/5"
                : "bg-gray-50/80 backdrop-blur-sm border border-gray-200 rounded-full px-6 py-3 focus-within:border-gray-900/20 shadow-sm"
                } ${isNotMatched ? "border-red-200 bg-red-50/10" : ""}`}>
                <input
                    type="text"
                    placeholder={displayPlaceholder}
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    disabled={isSearching}
                    className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400 text-lg font-medium disabled:opacity-50"
                />

                <button
                    type="submit"
                    disabled={isSearching}
                    className={`relative overflow-hidden flex items-center justify-center transition-all active:scale-90 shadow-lg ${variant === "hero"
                        ? "bg-gray-900 text-white rounded-full p-5 hover:bg-black"
                        : "bg-gray-900 text-white rounded-full w-12 h-12 hover:bg-black"
                        }`}
                >
                    <AnimatePresence mode="wait">
                        {isSearching ? (
                            <motion.div
                                key="loading"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                            >
                                <Loader2 className="w-6 h-6 animate-spin" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="send"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                            >
                                <Send className="w-5 h-5" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
            </div>

            {/* Error Hint */}
            <AnimatePresence>
                {isNotMatched && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-4 py-2 rounded-full font-bold shadow-xl"
                    >
                        Try keywords like "projects", "skills", or "me"!
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ChatGPT-style Loading Pulse / Progress Bar */}
            <AnimatePresence>
                {isSearching && (
                    <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="absolute bottom-0 left-8 right-8 h-1 bg-gray-900/10 rounded-full overflow-hidden origin-left"
                    >
                        <motion.div
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                            className="w-full h-full bg-gray-900"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </form>
    );
}
