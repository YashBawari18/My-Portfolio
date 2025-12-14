"use client"

import { useEffect, useRef } from "react"

export default function CursorTracker() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const colors = [
      { r: 255, g: 20, b: 147 }, // Deep Pink
      { r: 0, g: 255, b: 200 }, // Cyan
      { r: 138, g: 43, b: 226 }, // Blue Violet
      { r: 50, g: 255, b: 126 }, // Spring Green
      { r: 255, g: 165, b: 0 }, // Orange
      { r: 0, g: 200, b: 255 }, // Sky Blue
      { r: 255, g: 0, b: 255 }, // Magenta
      { r: 0, g: 255, b: 100 }, // Lime Green
    ]

    let currentColor = colors[0]
    let colorChangeCounter = 0

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      colorChangeCounter++

      if (colorChangeCounter % 40 === 0) {
        currentColor = colors[Math.floor(Math.random() * colors.length)]
      }
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const { x, y } = mousePos.current

      const gradient = ctx.createRadialGradient(x, y, 0, x, y, 250)
      gradient.addColorStop(0, `rgba(${currentColor.r}, ${currentColor.g}, ${currentColor.b}, 0.5)`)
      gradient.addColorStop(0.4, `rgba(${currentColor.r}, ${currentColor.g}, ${currentColor.b}, 0.25)`)
      gradient.addColorStop(0.8, `rgba(${currentColor.r}, ${currentColor.g}, ${currentColor.b}, 0.05)`)
      gradient.addColorStop(1, `rgba(${currentColor.r}, ${currentColor.g}, ${currentColor.b}, 0)`)

      ctx.fillStyle = gradient
      ctx.fillRect(x - 250, y - 250, 500, 500)

      requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleResize)
    animate()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 pointer-events-none z-0" style={{ display: "block" }} />
}
