import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import FeaturesSection from '@/components/features-section'
import TestimonialsSection from '@/components/testimonials-section'
import Footer from '@/components/footer'
import { Suspense } from 'react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <main>
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}
