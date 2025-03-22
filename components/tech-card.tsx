import type React from "react"

interface TechCardProps {
  skill: {
    id: string
    name: string
    icon: React.ReactNode
  }
}

export default function TechCard({ skill }: TechCardProps) {
  return (
    <div className="bg-[#1a1f2e] p-6 rounded-lg flex flex-col items-center justify-center gap-4 hover:transform hover:scale-105 transition-all">
      <div className="flex items-center justify-center">{skill.icon}</div>
      <span className="font-medium">{skill.name}</span>
    </div>
  )
}

