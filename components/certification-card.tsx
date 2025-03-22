"use client"

import { motion } from "framer-motion"
import { Award, Calendar, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface CertificationCardProps {
  certification: {
    title: string
    issuer: string
    date: string
    credentialId?: string
    link?: string
  }
}

export default function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <motion.div
  className="h-full min-h-[260px] flex flex-col justify-between bg-white/5 dark:bg-[#1a1f2e] p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all"
  whileHover={{ y: -5 }}
>
      <div className="flex items-start gap-4">
        <div className="bg-blue-500/10 p-3 rounded-full">
          <Award className="w-6 h-6 text-blue-500" />
        </div>
        <div className="flex-1 ">
          <h3 className="text-lg font-bold mb-1">{certification.title}</h3>
          <Badge variant="outline" className="mb-2 bg-blue-500/10 text-blue-400 border-blue-500/20">
            {certification.issuer}
          </Badge>
          <div className="flex items-center text-gray-500 dark:text-gray-400 mb-3">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{certification.date}</span>
          </div>
          {certification.link && (
            <Link
              href={certification.link}
              target="_blank"
              className="flex items-center text-blue-500 hover:text-blue-600 transition-colors text-sm"
            >
              View Credential <ExternalLink className="w-3 h-3 ml-1" />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  )
}

