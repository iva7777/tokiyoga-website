import Link from 'next/link'
import { Instagram, Youtube, Facebook } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Tagline */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <div className="w-5 h-5 bg-primary-foreground rounded-full" />
              </div>
              <span className="text-2xl font-bold">Токийога</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Поток от енергия,<br />
              пространство за тишина.
            </p>
          </div>

          {/* Сесии Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent">Сесии</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/sessions/beginning" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Новолуние
                </Link>
              </li>
              <li>
                <Link href="/sessions/first" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Първа четвърт
                </Link>
              </li>
              <li>
                <Link href="/sessions/popular" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Полулуние
                </Link>
              </li>
              <li>
                <Link href="/sessions/meditation" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Пълнолуние
                </Link>
              </li>
            </ul>
          </div>

          {/* За нас Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent">За нас</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about/services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Услуги
                </Link>
              </li>
              <li>
                <Link href="/about/about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  За нас
                </Link>
              </li>
              <li>
                <Link href="/about/accessories" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Аксесоари
                </Link>
              </li>
              <li>
                <Link href="/about/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Контакти
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent">Бюлетин</h3>
            <p className="text-primary-foreground/80 mb-4 text-sm">
              Въведете своя имейл
            </p>
            <form className="space-y-3">
              <Input 
                type="email" 
                placeholder="Имейл адрес"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-accent"
              />
              <Button 
                type="submit"
                className="w-full bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-primary-foreground transition-all"
              >
                Абонирай се
              </Button>
            </form>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 mb-12">
          <Link 
            href="https://www.instagram.com/tokiyoga_/" 
            target="_blank"
            className="w-10 h-10 rounded-full border-2 border-primary-foreground/30 flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-all"
          >
            <Instagram className="w-5 h-5" />
          </Link>
          <Link 
            href="https://youtube.com" 
            target="_blank"
            className="w-10 h-10 rounded-full border-2 border-primary-foreground/30 flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-all"
          >
            <Youtube className="w-5 h-5" />
          </Link>
          <Link 
            href="https://facebook.com" 
            target="_blank"
            className="w-10 h-10 rounded-full border-2 border-primary-foreground/30 flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-all"
          >
            <Facebook className="w-5 h-5" />
          </Link>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>Токийога | Всички права запазени</p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>гр. Пловдив, ул. Цанко Дюстабанов 14</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>toki_yoga@hello.com</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+359 89 1435 084</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
