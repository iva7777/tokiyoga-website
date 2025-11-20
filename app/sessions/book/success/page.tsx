import SuccessConfirmation from "@/components/success-confirmation"
import { Suspense } from "react"

export default function SuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessConfirmation />
    </Suspense>
  )
}
