'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    name: 'Елица Стоянова',
    text: 'След дългия ден на работа и безкрайните задачи искам вечерта да е моят момент за спокойствие, да изключа стреса и да се свържа със себе си. Нощната йога ми помага да намеря баланс и да се чувствам истински спокойна, а и да бъда част от общност, където хората се подкрепят и вдъхновяват взаимно.',
    rating: 4,
  },
  {
    name: 'Георги Петров',
    text: 'Токийога е моят начин за разпускане от хаотичното и динамично ежедневие. Атмосферата е невероятна и треньорите са уникални професионалисти!',
    rating: 5,
  },
  {
    name: 'Мария Димитрова',
    text: 'След година в Токийога чувствам се по-силна, по-балансирана и по-щастлива. Благодаря на целия екип!',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section className="py-20 bg-primary relative overflow-hidden min-h-[600px] flex items-center">
      {/* Decorative Flowers */}
      <div className="absolute left-0 bottom-0 w-96 h-96 opacity-20">
        <img src="/images/flower-overlay.png" className='w-[400px] h-[400px]' alt="chrisanthemium overlay" />
      </div>

      <div className="absolute right-20 top-20 w-80 h-80 opacity-20">
        <img src="/images/flower-overlay.png" alt="chrisanthemium overlay" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-bold text-accent text-center mb-16">Мнения</h2>

        <div className="max-w-3xl mx-auto flex items-center gap-8">
          {/* Previous Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground transition-all hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          {/* Testimonial Card */}
          <div className="bg-card rounded-3xl p-10 flex-1 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-accent">{current.name}</h3>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < current.rating ? 'fill-accent text-accent' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-card-foreground leading-relaxed text-lg">{current.text}</p>
          </div>

          {/* Next Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground transition-all hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}
