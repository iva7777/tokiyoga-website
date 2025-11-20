import Header from "@/components/header"
import Footer from "@/components/footer"
import SessionsHero from "@/components/sessions-hero"
import { Suspense } from "react"

export default function SessionsPage() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <main className="pt-20">
        <SessionsHero />
      </main>
      <Footer />
    </div>
  )
}
