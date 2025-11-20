import Header from "@/components/header"
import Footer from "@/components/footer"
import BookingForm from "@/components/booking-form"

export default function BookSessionPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <BookingForm />
      </main>
      <Footer />
    </div>
  )
}
