import type { ReactNode } from "react"
import { Brain, Code, Database, LineChart, Cpu, Bot } from "lucide-react"

interface Service {
  id: string
  title: string
  description: string
  icon: ReactNode
}

export const services: Service[] = [
  {
    id: "1",
    title: "AI Development",
    description: "Building custom AI solutions tailored to your business needs using cutting-edge technologies.",
    icon: <Brain className="w-10 h-10" />,
  },
  {
    id: "2",
    title: "Web Development",
    description: "Creating responsive, modern web applications with the latest frameworks and technologies.",
    icon: <Code className="w-10 h-10" />,
  },
  {
    id: "3",
    title: "Data Engineering",
    description: "Designing and implementing data pipelines and infrastructure for efficient data processing.",
    icon: <Database className="w-10 h-10" />,
  },
  {
    id: "4",
    title: "Data Analysis",
    description: "Extracting insights from your data through statistical analysis and visualization.",
    icon: <LineChart className="w-10 h-10" />,
  },
  {
    id: "5",
    title: "MLOps",
    description: "Setting up infrastructure for continuous integration and deployment of machine learning models.",
    icon: <Cpu className="w-10 h-10" />,
  },
  {
    id: "6",
    title: "Chatbot Development",
    description: "Building intelligent conversational agents for customer service and automation.",
    icon: <Bot className="w-10 h-10" />,
  },
]

