"use client"

import type React from "react"

import { Suspense, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Header from "./header"

export default function UserInfoForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const sessionType = searchParams.get("type") || "Полулуние"
  const date = searchParams.get("date")
  const time = searchParams.get("time")

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    paymentMethod: "",
    comments: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/sessions/book/success?type=${sessionType}`)
  }

  const handleSocialLogin = (provider: string) => {
    router.push(`/sessions/book/success?type=${sessionType}`)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <section className="min-h-screen bg-primary py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-purple-900/20 backdrop-blur-sm border-2 border-purple-400/20 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left Column - Form */}
              <div>
                <h2 className="text-4xl font-bold text-accent mb-8 text-center">
                  Попълни своите лични данни
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Име"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full text-xl bg-purple-300/20 border-0 rounded-xl px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-purple-400/50 transition-all"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Фамилия"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full text-xl bg-purple-300/20 border-0 rounded-xl px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-purple-400/50 transition-all"
                    />
                  </div>

                  <input
                    type="email"
                    name="email"
                    placeholder="Имейл"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full text-xl bg-purple-300/20 border-0 rounded-xl px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-purple-400/50 transition-all"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Телефонен номер"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full text-xl bg-purple-300/20 border-0 rounded-xl px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-purple-400/50 transition-all"
                  />

                  <input
                    type="text"
                    name="paymentMethod"
                    placeholder="Желан метод на плащане"
                    value={formData.paymentMethod}
                    onChange={handleInputChange}
                    className="w-full text-xl bg-purple-300/20 border-0 rounded-xl px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-purple-400/50 transition-all"
                  />

                  <textarea
                    name="comments"
                    placeholder="Допълнителни коментари"
                    value={formData.comments}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full text-xl bg-purple-300/20 border-0 rounded-xl px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-purple-400/50 transition-all resize-none"
                  />

                  <button
                    type="submit"
                    className="w-full text-3xl bg-transparent border-2 border-accent text-accent px-12 py-4 rounded-full font-medium hover:bg-accent hover:text-primary hover:shadow-lg hover:shadow-accent/30 hover:scale-105 hover:cursor-pointer transition-all duration-300 mt-6"
                  >
                    Изпрати
                  </button>
                </form>
              </div>

              {/* Right Column - Social Login */}
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-3xl font-bold text-accent mb-8 text-center">Или влез с профил</h3>
                <div className="flex gap-4">
                  <button
                    onClick={() => handleSocialLogin("google")}
                    className="w-20 h-20 rounded-full bg-purple-300/20 flex items-center justify-center hover:bg-purple-300/30 hover:scale-110 transition-all hover:cursor-pointer duration-200 group"
                  >
                    <svg className="w-10 h-10 text-primary-foreground" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                  </button>

                  <button
                    onClick={() => handleSocialLogin("facebook")}
                    className="w-20 h-20 rounded-full bg-purple-300/20 flex items-center justify-center hover:bg-purple-300/30 hover:scale-110 hover:cursor-pointer transition-all duration-200 group"
                  >
                    <svg className="w-10 h-10 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </button>

                  <button
                    onClick={() => handleSocialLogin("twitter")}
                    className="w-20 h-20 rounded-full bg-purple-300/20 flex items-center justify-center hover:bg-purple-300/30 hover:scale-110 transition-all duration-200 group hover:cursor-pointer"
                  >
                    <svg className="w-10 h-10 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}
