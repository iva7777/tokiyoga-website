'use client'

import { useState } from "react"
import Link from "next/link"
import { User, Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const linkClasses = (path: string) =>
    pathname === path
      ? "text-accent font-medium underline decoration-2 underline-offset-4"
      : "text-foreground font-medium hover:text-accent transition-colors"

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile Hamburger */}
          <button
              className="md:hidden rounded-md hover:bg-background/10 transition"
              onClick={() => setIsOpen(!isOpen)}
          >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-60 h-10 flex items-center justify-center transition-transform group-hover:scale-110">
              <img src="/images/logo.svg" alt="Tokiyoga logo" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/sessions" className={linkClasses("/sessions")}>
              Сесии
            </Link>
            <Link href="/about" className={linkClasses("/about")}>
              За нас
            </Link>
            <Link href="/accessories" className={linkClasses("/accessories")}>
              Аксесоари
            </Link>
            <Link href="/contact" className={linkClasses("/contact")}>
              Контакти
            </Link>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center gap-4">
            <Link
              href="/profile"
              className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-all"
            >
              <User className="w-5 h-5 text-primary" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-background border-t border-border">
          <div className="flex flex-col px-6 py-4 gap-4">
            <Link href="/sessions" className={linkClasses("/sessions")} onClick={() => setIsOpen(false)}>
              Сесии
            </Link>
            <Link href="/about" className={linkClasses("/about")} onClick={() => setIsOpen(false)}>
              За нас
            </Link>
            <Link href="/accessories" className={linkClasses("/accessories")} onClick={() => setIsOpen(false)}>
              Аксесоари
            </Link>
            <Link href="/contact" className={linkClasses("/contact")} onClick={() => setIsOpen(false)}>
              Контакти
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
