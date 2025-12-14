"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true)
  const [showStrips, setShowStrips] = useState(false)
  const strips = 8

  useEffect(() => {
    const stripTimer = setTimeout(() => {
      setShowStrips(true)
    }, 1000)

    const closeTimer = setTimeout(() => {
      setIsVisible(false)
    }, 2800)

    return () => {
      clearTimeout(stripTimer)
      clearTimeout(closeTimer)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {!showStrips && (
        <div className="absolute inset-0 bg-black z-20 flex flex-col items-center justify-center gap-8">
          <Image
            src="/images/bit-emoji.png"
            alt="YASH BAWARI"
            width={200}
            height={200}
            className="w-40 h-40 md:w-56 md:h-56 object-contain"
            priority
          />
          <div className="text-center">
            <div className="text-6xl md:text-8xl font-black tracking-tight text-white drop-shadow-2xl mb-6 animate-pulse">
              YASH BAWARI
            </div>
          </div>
        </div>
      )}

      {showStrips &&
        Array.from({ length: strips }).map((_, i) => (
          <div
            key={i}
            className="absolute top-0 left-0 w-full h-full bg-black"
            style={{
              left: `${(i / strips) * 100}%`,
              width: `${100 / strips}%`,
              animation: `slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
              animationDelay: `${i * 0.08}s`,
            }}
          ></div>
        ))}

      <style>{`
        @keyframes slideUp {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-100%);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  )
}
