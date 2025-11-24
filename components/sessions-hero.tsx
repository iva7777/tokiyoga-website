"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

interface Session {
  id: string
  title: string
  subtitle?: string
  description: string
  moonPhase: "new" | "firstQuarter" | "full" | "fullMoon"
  color: "purple" | "cyan" | "magenta" | "lightPurple"
}

const sessions: Session[] = [
  {
    id: "new-moon",
    title: "Новолуние",
    subtitle: "",
    description: "Дай старт на своята йога пътека с нас.",
    moonPhase: "new",
    color: "purple",
  },
  {
    id: "first-quarter",
    title: "Първа четвърт",
    description: "Идеално за развиване на твоя мир.",
    moonPhase: "firstQuarter",
    color: "cyan",
  },
  {
    id: "half-moon",
    title: "Полулуние",
    subtitle: "",
    description: "За опитни хора, готови да задълбочат познанията си.",
    moonPhase: "full",
    color: "magenta",
  },
  {
    id: "full-moon",
    title: "Пълнолуние",
    subtitle: "",
    description: "За изследователите на своя пълен потенциал.",
    moonPhase: "fullMoon",
    color: "lightPurple",
  },
]

function MoonPhase({ phase }: { phase: Session["moonPhase"] }) {
  const getMoonGradient = () => {
    switch (phase) {
      case "new":
        return "radial-gradient(circle at 30% 30%, rgba(60, 70, 90, 0.3) 0%, rgba(30, 35, 50, 0.8) 100%)"
      case "firstQuarter":
        return "linear-gradient(to right, rgba(60, 70, 90, 0.4) 0%, rgba(30, 35, 50, 0.7) 35%, rgba(240, 240, 245, 0.9) 35%, rgba(240, 240, 245, 0.9) 100%)"
      case "full":
        return "linear-gradient(to right, rgba(240, 240, 245, 0.9) 0%, rgba(240, 240, 245, 0.9) 50%, rgba(60, 70, 90, 0.4) 50%, rgba(30, 35, 50, 0.7) 100%)"
      case "fullMoon":
        return "radial-gradient(circle at 50% 50%, rgba(240, 240, 245, 0.95) 0%, rgba(220, 225, 235, 0.9) 100%)"
    }
  }

  return (
    <div className="relative w-32 h-32">
      <div
        className="w-full h-full rounded-full shadow-lg"
        style={{
          background: getMoonGradient(),
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
        }}
      />
    </div>
  )
}

export default function SessionsHero() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const router = useRouter()

  const getButtonClasses = (color: Session["color"], isHovered: boolean) => {
    const baseClasses = "px-12 py-4 rounded-full text-xl font-medium transition-all duration-300 border-2 hover:cursor-pointer"

    switch (color) {
      case "purple":
        return `${baseClasses} border-purple-400/50 text-purple-300 ${
          isHovered ? "bg-purple-500/20 border-purple-400 scale-105 shadow-lg shadow-purple-500/20" : ""
        }`
      case "cyan":
        return `${baseClasses} border-cyan-400 text-cyan-400 ${
          isHovered ? "bg-cyan-500/20 border-cyan-300 scale-105 shadow-lg shadow-cyan-500/30" : ""
        }`
      case "magenta":
        return `${baseClasses} border-accent text-accent ${
          isHovered ? "bg-accent/20 border-accent scale-105 shadow-lg shadow-accent/30" : ""
        }`
      case "lightPurple":
        return `${baseClasses} border-purple-400/50 text-purple-300 ${
          isHovered ? "bg-purple-500/20 border-purple-400 scale-105 shadow-lg shadow-purple-500/20" : ""
        }`
    }
  }

  const handleSessionSelect = (sessionId: string) => {
    const session = sessions.find((s) => s.id === sessionId)
    if (session) {
      router.push(`/sessions/book?type=${encodeURIComponent(session.title)}`)
    }
  }

  return (
    <section className="min-h-screen bg-primary py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-accent mb-6">Избери своята пътека</h1>
          <p className="text-2xl text-primary-foreground/90">Избери луната, презентираща уменията ти в йогата</p>
        </div>

        {/* Sessions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {sessions.map((session) => (
            <div
              key={session.id}
              className="flex flex-col items-center text-center group"
              onMouseEnter={() => setHoveredCard(session.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Moon Phase */}
              <div className="mb-8 transform transition-transform duration-300 group-hover:scale-110">
                <MoonPhase phase={session.moonPhase} />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-primary-foreground mb-2">
                {session.title}
                {session.subtitle && (
                  <>
                    <br />
                    <span>{session.subtitle}</span>
                  </>
                )}
              </h3>

              {/* Description */}
              <p className="text-lg text-primary-foreground/80 mb-8 min-h-16 flex items-center">
                {session.description}
              </p>

              {/* Button */}
              <button
                onClick={() => handleSessionSelect(session.id)}
                className={getButtonClasses(session.color, hoveredCard === session.id)}
              >
                Избери
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
