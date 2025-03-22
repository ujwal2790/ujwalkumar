"use client"

import { Calendar, Building2, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

interface ExperienceProps {
  experience: {
    title: string
    company: string
    period: string
    description: string
    technologies?: string[]
  }
}

export default function ExperienceCard({ experience }: ExperienceProps) {
  return (
    <motion.div
      className="group bg-white/5 dark:bg-[#1a1f2e] p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{experience.title}</h3>
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-gray-400" />
              <span className="text-gray-400">{experience.company}</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-gray-400 text-sm">
            <Calendar className="w-4 h-4" />
            <span>{experience.period}</span>
          </div>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed">{experience.description}</p>

        {experience.technologies && (
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/20">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
          initial={false}
        >
          {/* <ArrowRight className="w-4 h-4" /> */}
        </motion.div>
      </div>
    </motion.div>
  )
}

