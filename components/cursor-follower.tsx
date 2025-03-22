"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    const handleMouseOver = () => setCursorVariant("hover")
    const handleMouseOut = () => setCursorVariant("default")

    window.addEventListener("mousemove", mouseMove)

    // Add event listeners to all clickable elements
    const clickableElements = document.querySelectorAll('a, button, [role="button"]')
    clickableElements.forEach((element) => {
      element.addEventListener("mouseover", handleMouseOver)
      element.addEventListener("mouseout", handleMouseOut)
    })

    return () => {
      window.removeEventListener("mousemove", mouseMove)
      clickableElements.forEach((element) => {
        element.removeEventListener("mouseover", handleMouseOver)
        element.removeEventListener("mouseout", handleMouseOut)
      })
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "rgba(77, 159, 255, 0.1)",
      border: "1px solid rgba(77, 159, 255, 0.3)",
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: "rgba(77, 159, 255, 0.2)",
      border: "1px solid rgba(77, 159, 255, 0.5)",
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
  }

  // Only show on desktop
  if (typeof window !== "undefined" && window.innerWidth < 768) {
    return null
  }

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50 hidden md:block"
      variants={variants}
      animate={cursorVariant}
    />
  )
}

