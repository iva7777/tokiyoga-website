"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import Header from "./header"

export default function SuccessConfirmation() {
  const searchParams = useSearchParams()
  const sessionType = searchParams.get("type") || "Полулуние"
  const [showAnimation, setShowAnimation] = useState(false)

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setShowAnimation(true)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="min-h-screen bg-primary py-20 px-6 flex items-center">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-purple-900/20 backdrop-blur-sm border-2 border-purple-400/20 rounded-3xl p-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-accent mb-16 leading-relaxed">
                Честито! Ти успешно влезе във
                <br />
                фаза {sessionType} – и нещата
                <br />
                тепърва стават интересни.
              </h1>

              {/* Animated Moon with Checkmark */}
              <div className="relative w-64 h-64 mx-auto">
                {/* Moon base */}
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-cyan-300 to-purple-400 transition-all duration-1000 ${
                    showAnimation ? "scale-100 opacity-100" : "scale-50 opacity-0"
                  }`}
                  style={{
                    boxShadow: "0 0 60px rgba(34, 211, 238, 0.4), inset 0 0 40px rgba(168, 85, 247, 0.3)",
                  }}
                >
                  {/* Moon texture/pattern */}
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <div className="absolute top-8 left-12 w-8 h-8 rounded-full bg-cyan-300/30" />
                    <div className="absolute top-20 right-16 w-6 h-6 rounded-full bg-purple-300/20" />
                    <div className="absolute bottom-16 left-20 w-10 h-10 rounded-full bg-cyan-200/20" />
                  </div>
                </div>

                {/* Checkmark */}
                <svg
                  className={`absolute inset-0 w-full h-full transition-all duration-700 delay-500 ${
                    showAnimation ? "scale-100 opacity-100" : "scale-0 opacity-0"
                  }`}
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <path
                    d="M25 50 L40 65 L75 30"
                    stroke="white"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={showAnimation ? "animate-draw-check" : ""}
                    style={{
                      strokeDasharray: 100,
                      strokeDashoffset: showAnimation ? 0 : 100,
                      animation: showAnimation ? "drawCheck 0.8s ease-out 0.8s forwards" : "none",
                    }}
                  />
                </svg>

                {/* Glow effect */}
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-400/20 blur-3xl transition-all duration-1000 ${
                    showAnimation ? "scale-150 opacity-100" : "scale-50 opacity-0"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes drawCheck {
          from {
            stroke-dashoffset: 100;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  )
}
