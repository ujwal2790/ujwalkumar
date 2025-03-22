import { Badge } from "@/components/ui/badge"

interface SkillBadgeProps {
  name: string
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <Badge className="bg-gray-800 hover:bg-gray-700 text-gray-200 py-2 px-4 text-sm transition-colors">{name}</Badge>
  )
}

