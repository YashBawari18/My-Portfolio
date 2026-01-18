import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Yash Sunder Bawari | Full-Stack Developer Portfolio",
  description:
    "Official portfolio of Yash Sunder Bawari, a full-stack developer showcasing projects, skills, and experience.",
  generator: "v0.app",

  // ✅ Google Search Console verification
  verification: {
    google: "353J7VK8Stc7IlxDLOGwJOyLzYs7eBbDs-ptd2R2_DM",
  },

  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">

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
                "https://www.linkedin.com/in/yash-bawari-5a3379313/"
              ],
            }),
          }}
        />

        {children}
        <Analytics />
      </body>
    </html>
  )
}
