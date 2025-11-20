"use client"
import UserInfoForm from "@/components/user-info-form"
import { Suspense } from "react"

export default function BookingInfoPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UserInfoForm />
    </Suspense>
  )
}
