"use client";

import { usePathname } from "next/navigation";
import { SearchBar } from "./search-bar";

export function SiteFooter() {
    const pathname = usePathname();

    // Don't show global footer on the home page as it has its own hero search
    if (pathname === "/") return null;

    return (
        <footer className="fixed bottom-0 left-0 right-0 w-full bg-white/80 backdrop-blur-md border-t border-gray-100 px-4 py-6 z-40">
            <div className="max-w-6xl mx-auto flex justify-center">
                <SearchBar variant="footer" />
            </div>
        </footer>
    );
}

