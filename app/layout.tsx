import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Analytics } from "@vercel/analytics/next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import "./globals.css"

export const metadata: Metadata = {
  title: "Yash Sunder Bawari | Full-Stack Developer",
  description:
    "Official portfolio of Yash Sunder Bawari, showcasing premium full-stack projects and skills.",
  generator: "v0.app",
  verification: {
    google: "353J7VK8Stc7IlxDLOGwJOyLzYs7eBbDs-ptd2R2_DM",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-white selection:bg-gray-900 selection:text-white">
        {/* ✅ Person schema for Google name search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Yash Sunder Bawari",
              url: "https://my-portfolio-yjfu.vercel.app",
              jobTitle: "Full-Stack Developer",
              sameAs: [
                "https://github.com/YashBawari18",
                "https://www.linkedin.com/in/yash-bawari-5a3379313/",
              ],
            }),
          }}
        />

        <div className="flex min-h-screen flex-col relative overflow-x-hidden">
          <SiteHeader />
          <main className="flex-1 pb-32">{children}</main>
          <SiteFooter />
        </div>
        <Analytics />
      </body>
    </html>
  )
}

