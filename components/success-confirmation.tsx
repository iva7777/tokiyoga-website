'use client'

import { useSearchParams } from "next/navigation"
import { Suspense, useEffect, useState } from "react"
import Header from "./header"

export default function SuccessConfirmation() {
  const searchParams = useSearchParams()
  const sessionType = searchParams.get("type") || "Полулуние"
  const [showAnimation, setShowAnimation] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowAnimation(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <section className="min-h-screen bg-primary py-16 px-4 flex items-center">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-purple-900/20 backdrop-blur-sm border-2 border-purple-400/20 rounded-3xl p-8 md:p-16 flex flex-col items-center text-center gap-12">
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent leading-snug">
              Честито! Ти успешно влезе във
              <br />
              фаза {sessionType} – и нещата
              <br />
              тепърва стават интересни.
            </h1>

            {/* Animated Moon with Checkmark */}
            <div className="relative w-56 sm:w-64 h-56 sm:h-64">
              {/* Moon base */}
              <div
                className={`absolute inset-0 rounded-full bg-linear-to-br from-cyan-400 via-cyan-300 to-purple-400 transition-all duration-1000 ${
                  showAnimation ? "scale-100 opacity-100" : "scale-50 opacity-0"
                }`}
                style={{
                  boxShadow: "0 0 60px rgba(34, 211, 238, 0.4), inset 0 0 40px rgba(168, 85, 247, 0.3)",
                }}
              >
                {/* Moon texture */}
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
                  style={{
                    strokeDasharray: 100,
                    strokeDashoffset: showAnimation ? 0 : 100,
                    animation: showAnimation ? "drawCheck 0.8s ease-out 0.8s forwards" : "none",
                  }}
                />
              </svg>

              {/* Glow effect */}
              <div
                className={`absolute inset-0 rounded-full bg-linear-to-br from-cyan-400/20 to-purple-400/20 blur-3xl transition-all duration-1000 ${
                  showAnimation ? "scale-150 opacity-100" : "scale-50 opacity-0"
                }`}
              />
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
