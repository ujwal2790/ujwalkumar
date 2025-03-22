"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  title: string
  subtitle?: string
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-4 relative inline-block">
          {title}
          <motion.span
            className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-500"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </h2>
        {subtitle && <p className="text-gray-400 max-w-2xl mx-auto">{subtitle}</p>}
      </motion.div>
    </div>
  )
}

