"use client"

import { useState } from "react"
import { CalendarIcon, Clock } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"

// Mock data for fully booked dates (would come from API in production)
const fullyBookedDates = [9, 10, 11, 12, 13, 21, 24, 25]

const getAvailableTimeSlots = (date: Date) => {
  const allSlots = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ]

  const bookedSlots = date.getDate() % 2 === 0 ? ["09:00", "12:00", "16:00"] : ["10:00", "15:00", "19:00"]

  return allSlots.map((slot) => ({
    time: slot,
    available: !bookedSlots.includes(slot),
  }))
}

export default function BookingForm() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [showTimePicker, setShowTimePicker] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 11))

  const router = useRouter()
  const searchParams = useSearchParams()
  const sessionType = searchParams.get("type") || "Полулуние"

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    return { daysInMonth, startingDayOfWeek, year, month }
  }

  const formatDate = (date: Date | null) => {
    if (!date) return ""
    return date.toLocaleDateString("en-US", { month: "2-digit", day: "2-digit", year: "numeric" })
  }

  const monthNames = [
    "Януари",
    "Февруари",
    "Март",
    "Април",
    "Май",
    "Юни",
    "Юли",
    "Август",
    "Септември",
    "Октомври",
    "Ноември",
    "Декември",
  ]

  const dayNames = ["нд", "пон", "вт", "ср", "чт", "пт", "сб"]

  const handleDateSelect = (day: number) => {
    if (fullyBookedDates.includes(day)) return
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    setSelectedDate(newDate)
  }

  const handleTimeSelect = (time: string, available: boolean) => {
    if (!available) return
    setSelectedTime(time)
    setShowTimePicker(false)
  }

  const renderCalendar = () => {
    const { daysInMonth, startingDayOfWeek, year, month } = getDaysInMonth(currentMonth)
    const days = []

    // Previous month's days
    const prevMonthDays = new Date(year, month, 0).getDate()
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push(
        <button
          key={`prev-${i}`}
          disabled
          className="aspect-square flex items-center justify-center text-primary-foreground/30 text-sm"
        >
          {prevMonthDays - i}
        </button>,
      )
    }

    // Current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      const isFullyBooked = fullyBookedDates.includes(day)
      const isSelected = selectedDate?.getDate() === day && selectedDate?.getMonth() === month
      const isToday = day === 31 && !selectedDate // Mock today

      days.push(
        <button
          key={day}
          onClick={() => handleDateSelect(day)}
          disabled={isFullyBooked}
          className={`aspect-square rounded-full flex items-center justify-center text-sm transition-all duration-200 ${
            isSelected
              ? "bg-accent text-primary scale-110"
              : isToday
                ? "bg-accent text-primary"
                : isFullyBooked
                  ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                  : "text-primary-foreground hover:bg-primary-foreground/10 hover:scale-105"
          }`}
        >
          {day}
        </button>,
      )
    }

    return days
  }

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  const timeSlots = selectedDate ? getAvailableTimeSlots(selectedDate) : []

  const handleContinue = () => {
    if (selectedDate && selectedTime) {
      router.push(`/sessions/book/info?type=${sessionType}&date=${formatDate(selectedDate)}&time=${selectedTime}`)
    }
  }

  return (
    <section className="min-h-screen bg-primary py-20 px-6">
      <div className="container mx-auto max-w-2xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-accent mb-6">
            {showDatePicker ? "Твоят лунен календар" : `Твоят лунен календар във фаза ${sessionType}`}
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Избери удобен ден {!showDatePicker && "и час"} за твоето вълнуващо преживяване
          </p>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {/* Date Input */}
          <div className="relative">
            <label className="block text-cyan-400 text-xl mb-2">Дата</label>
            <button
              onClick={() => setShowDatePicker(!showDatePicker)}
              className="w-full bg-primary/50 border-2 border-purple-400/30 rounded-2xl px-6 py-4 text-left text-primary-foreground/70 flex items-center justify-between hover:border-purple-400/50 transition-colors duration-200"
            >
              <span>{formatDate(selectedDate) || "11/30/2025"}</span>
              <CalendarIcon className="w-5 h-5 text-primary-foreground/50" />
            </button>

            {/* Date Picker Dropdown */}
            {showDatePicker && (
              <div className="absolute top-full mt-4 left-0 right-0 bg-[#1a1535] border-2 border-purple-400/30 rounded-2xl p-6 z-10 shadow-xl">
                {/* Month Navigation */}
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={previousMonth}
                    className="p-2 hover:bg-primary-foreground/10 rounded-lg transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-primary-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <div className="text-primary-foreground font-medium">
                    {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                  </div>
                  <button
                    onClick={nextMonth}
                    className="p-2 hover:bg-primary-foreground/10 rounded-lg transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-primary-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Day Names */}
                <div className="grid grid-cols-7 gap-2 mb-2">
                  {dayNames.map((day) => (
                    <div key={day} className="text-center text-primary-foreground/60 text-xs font-medium py-2">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-2 mb-6">{renderCalendar()}</div>

                {/* Actions */}
                <div className="flex items-center justify-end gap-4 pt-4 border-t border-primary-foreground/10">
                  <button
                    onClick={() => setShowDatePicker(false)}
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    Откажи
                  </button>
                  <button
                    onClick={() => setShowDatePicker(false)}
                    className="bg-linear-to-r from-accent to-cyan-400 text-primary px-8 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-accent/30 transition-all duration-200"
                  >
                    OK
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Time Input */}
          {!showDatePicker && (
            <div className="relative">
              <label className="block text-cyan-400 text-xl mb-2">Час</label>
              <button
                onClick={() => setShowTimePicker(!showTimePicker)}
                className="w-full bg-primary/50 border-2 border-purple-400/30 rounded-2xl px-6 py-4 text-left text-primary-foreground/70 flex items-center justify-between hover:border-purple-400/50 transition-colors duration-200"
              >
                <span>{selectedTime || "20:00"}</span>
                <Clock className="w-5 h-5 text-primary-foreground/50" />
              </button>

              {/* Time Picker Dropdown */}
              {showTimePicker && (
                <div className="absolute top-full mt-4 left-0 right-0 bg-[#1a1535] border-2 border-purple-400/30 rounded-2xl p-6 z-10 shadow-xl max-h-80 overflow-y-auto">
                  <div className="grid grid-cols-3 gap-3">
                    {timeSlots.map(({ time, available }) => (
                      <button
                        key={time}
                        onClick={() => handleTimeSelect(time, available)}
                        disabled={!available}
                        className={`py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                          selectedTime === time
                            ? "bg-accent text-primary scale-105"
                            : available
                              ? "bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/10 hover:scale-105"
                              : "bg-gray-600/30 text-gray-500 cursor-not-allowed"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Continue Button */}
          {!showDatePicker && (
            <button
              onClick={handleContinue}
              disabled={!selectedDate || !selectedTime}
              className="w-full mt-12 bg-transparent border-2 border-purple-400/30 text-purple-300/50 px-12 py-4 rounded-full text-lg font-medium hover:border-purple-400 hover:text-purple-300 hover:bg-purple-500/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Продължи
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
