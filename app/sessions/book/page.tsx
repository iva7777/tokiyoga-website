import Header from "@/components/header"
import Footer from "@/components/footer"
import BookingForm from "@/components/booking-form"
import { Suspense } from "react"

export default function BookSessionPage() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <main className="pt-20">
        <Suspense fallback={<div>Loading...</div>}>
          <BookingForm />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
