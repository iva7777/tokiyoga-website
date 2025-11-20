import Header from "@/components/header"
import Footer from "@/components/footer"
import SessionsHero from "@/components/sessions-hero"

export default function SessionsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <SessionsHero />
      </main>
      <Footer />
    </div>
  )
}
