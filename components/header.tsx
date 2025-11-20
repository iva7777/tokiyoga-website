import Link from "next/link"
import { User } from "lucide-react"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center transition-transform group-hover:scale-110">
              <div className="w-5 h-5 bg-primary-foreground rounded-full" />
            </div>
            <span className="text-2xl font-bold text-foreground">Токийога</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/sessions"
              className="text-accent font-medium hover:text-accent transition-colors underline decoration-2 underline-offset-4"
            >
              Сесии
            </Link>
            <Link href="/about" className="text-foreground font-medium hover:text-accent transition-colors">
              За нас
            </Link>
            <Link href="/accessories" className="text-foreground font-medium hover:text-accent transition-colors">
              Аксесоари
            </Link>
            <Link href="/contact" className="text-foreground font-medium hover:text-accent transition-colors">
              Контакти
            </Link>
          </nav>

          {/* User Icon */}
          <Link
            href="/profile"
            className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-all"
          >
            <User className="w-5 h-5 text-primary" />
          </Link>
        </div>
      </div>
    </header>
  )
}
