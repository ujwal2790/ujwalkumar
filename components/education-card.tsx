"use client"

import { Calendar, MapPin, Award, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

interface EducationCardProps {
  education: {
    degree: string
    institution: string
    period: string
    location: string
    grade?: string
    achievements?: string[]
  }
}

export default function EducationCard({ education }: EducationCardProps) {
  return (
    <motion.div
      className="bg-white/5 dark:bg-[#1a1f2e] p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h3 className="text-xl font-bold">{education.degree}</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/20">
                {education.institution}
              </Badge>
            </div>
          </div>
          <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/20">
            {education.grade}
          </Badge>
        </div>

        <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{education.period}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{education.location}</span>
          </div>
        </div>

        {education.achievements && education.achievements.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-300">
              <Award className="w-4 h-4" />
              <span>Key Achievements</span>
            </div>
            <ul className="grid gap-2">
              {education.achievements.map((achievement, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-2 text-gray-400 text-sm"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Star className="w-4 h-4 mt-1 text-yellow-500" />
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  )
}

