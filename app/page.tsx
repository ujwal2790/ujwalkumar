"use client"

import { useState, useEffect } from "react"
import {  Linkedin, Mail, Menu } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import ExperienceCard from "@/components/experience-card"
import { projects } from "@/data/projects"
import { experiences } from "@/data/experiences"
import AnimatedBackground from "@/components/animated-background"
import EducationCard from "@/components/education-card"
import CertificationCard from "@/components/certification-card"
import { education } from "@/data/education"
import { certifications } from "@/data/certifications"
import { skillCategories } from "@/data/skills"
import { Badge } from "@/components/ui/badge"
import { motion, useScroll, useTransform } from "framer-motion"
import MobileMenu from "@/components/mobile-menu"
import AnimatedText from "@/components/animated-text"
import SectionHeading from "@/components/section-heading"
// import CursorFollower from "@/components/cursor-follower"
import ScrollIndicator from "@/components/scroll-indicator"
import { useTheme } from "next-themes"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // For parallax effect
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 100])
  const y2 = useTransform(scrollY, [0, 500], [0, -100])

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 300

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const isDark = theme === "dark"

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-black dark:to-gray-900 text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      <AnimatedBackground />
      {/* <CursorFollower /> */}
      <ScrollIndicator />

      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold relative group">
            <span className="relative z-10">UK</span>
            <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-500 to-green-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </Link>

          <nav className="hidden md:flex gap-8">
            {["home", "education", "experience", "projects", "tech-stack", "contact"].map((section) => (
              <Link
                key={section}
                href={`#${section}`}
                className={`hover:text-primary transition-colors relative ${
                  activeSection === section ? "text-primary" : ""
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {activeSection === section && (
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {mounted && (isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />)}
            </button> */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors md:hidden"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      <main className="container mx-auto px-4">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col justify-center relative pt-20">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <Badge
                variant="outline"
                className="mb-6 px-4 py-2 text-sm bg-blue-500/10 text-blue-400 border-blue-500/20"
              >
                Software Engineer
              </Badge>
            </motion.div>

            <AnimatedText text="Hi 👋, I am Ujwal Kumar" className="text-5xl md:text-7xl font-bold mb-4" />

            <AnimatedText
              text="Software Engineer crafting intelligent systems"
              className="text-2xl md:text-3xl mb-8 text-gray-600 dark:text-gray-300"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-gray-600 dark:text-gray-400 mb-10 max-w-2xl"
            >
              I specialize in building innovative solutions that leverage cutting-edge technologies to solve complex
              problems. With expertise in AI and software development, I create systems that make a difference.
            </motion.p>

            <motion.div
              className="flex gap-4 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Button
                className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white rounded-full px-8 py-6"
                asChild
              >
                <Link href="#contact">Contact Me</Link>
              </Button>
              <Button
                className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white rounded-full px-8 py-6"
                asChild
              >
                <Link href="#projects">View Projects</Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="absolute right-0 bottom-0 -z-10 opacity-20 dark:opacity-10 pointer-events-none"
            style={{ y: y1 }}
          >
            <svg width="400" height="400" viewBox="0 0 200 200">
              <path
                fill="#4d9fff"
                d="M45.5,-59.5C59.1,-52.8,70.3,-39.7,75.9,-24.5C81.5,-9.3,81.5,7.9,75.8,22.4C70.1,36.9,58.6,48.6,45,56.5C31.4,64.4,15.7,68.4,0.2,68.1C-15.3,67.9,-30.6,63.3,-43.9,54.6C-57.3,45.9,-68.7,33.1,-73.1,17.8C-77.5,2.5,-74.9,-15.3,-67.1,-29.7C-59.3,-44.1,-46.3,-55.1,-32.5,-61.7C-18.7,-68.3,-4.7,-70.5,9.2,-69.8C23.1,-69.1,31.9,-66.3,45.5,-59.5Z"
                transform="translate(100 100)"
              />
            </svg>
          </motion.div>

          <motion.div
            className="absolute left-0 top-1/3 -z-10 opacity-20 dark:opacity-10 pointer-events-none"
            style={{ y: y2 }}
          >
            <svg width="300" height="300" viewBox="0 0 200 200">
              <path
                fill="#4ade80"
                d="M42.8,-62.2C54.9,-54.3,63.6,-40.9,69.7,-26.2C75.8,-11.5,79.3,4.6,75.9,19.2C72.5,33.8,62.2,47,49.1,56.3C36,65.7,20.1,71.2,3.2,68.1C-13.7,65,-31.6,53.3,-45.4,39.7C-59.2,26.1,-68.9,10.6,-70.4,-6.3C-71.9,-23.2,-65.2,-41.5,-52.9,-49.9C-40.6,-58.3,-22.8,-56.8,-6.3,-49.8C10.2,-42.8,30.7,-70.1,42.8,-62.2Z"
                transform="translate(100 100)"
              />
            </svg>
          </motion.div>
        </section>

        <section id="education" className="py-20 pt-32">
          <SectionHeading title="Education" subtitle="My academic journey and professional certifications" />

          <div className="max-w-4xl mx-auto grid gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <EducationCard education={edu} />
              </motion.div>
            ))}
          </div>

          <div className="mt-20">
            <SectionHeading title="Certifications" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CertificationCard certification={cert} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 pt-32">
          <SectionHeading title="Experience" subtitle="My professional journey and work experience" />

          <motion.div
            className="grid gap-8 max-w-4xl mx-auto"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {experiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 pt-32">
          <SectionHeading title="Projects" subtitle="Showcasing my recent work and technical achievements" />

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech-stack" className="py-20 pt-32">
          <SectionHeading title="Tech Stack" subtitle="Technologies and tools I work with" />

          <div className="space-y-16">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.9, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold mb-6 text-center">
                  <Badge
                    variant="outline"
                    className="text-lg py-2 px-4 bg-blue-500/10 text-blue-400 border-blue-500/20"
                  >
                    {category.name}
                  </Badge>
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="bg-white/5 dark:bg-[#1a1f2e] p-6 rounded-lg flex flex-col items-center justify-center gap-4 hover:transform hover:scale-105 transition-all border border-gray-200 dark:border-gray-800"
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    >
                      <div className="h-8 w-8 flex items-center justify-center">{skill.icon}</div>
                      <span className="font-medium text-center">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-10 pt-24 relative">
        {/* Wrap SectionHeading with reduced spacing */}
        <div className="mb-12">
          <SectionHeading title="Connect With Me" subtitle="Let's discuss how we can work together" />
        </div>

        {/* Icons Container with reduced spacing */}
        <div className="flex justify-center gap-8 mb-12 mt-8 flex-wrap">
          <Link
            href="mailto:ujwalkumar2720@gmail.com"
            className="bg-gradient-to-br from-blue-500 to-blue-700 p-4 rounded-full hover:shadow-lg transition-all duration-300"
            aria-label="Email"
          >
            <Mail className="w-8 h-8" />
          </Link>

          {/* <Link
            href="https://github.com/ujwal270"
            target="_blank"
            className="bg-gradient-to-br from-gray-700 to-gray-900 p-4 rounded-full hover:shadow-lg transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="w-8 h-8" />
          </Link> */}

          <Link
            href="https://www.linkedin.com/in/ujwal-kumar-belde-5712b5213/"
            target="_blank"
            className="bg-gradient-to-br from-blue-600 to-blue-800 p-4 rounded-full hover:shadow-lg transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-8 h-8" />
          </Link>
        </div>

        {/* Text and Button Container */}
        <div className="max-w-md mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {"I'm currently open to new opportunities and collaborations. Feel free to reach out!"}
            </p>

            <Button
              className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white rounded-full px-6 py-4"
              asChild
            >
              <Link href="mailto:your.email@example.com">Send me a message</Link>
            </Button>
          </motion.div>
        </div>
      </section>
      </main>

      <footer className="border-t border-gray-200 dark:border-white/10 py-8 mt-20 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Ujwal Kumar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

