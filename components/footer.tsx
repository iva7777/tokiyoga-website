'use client'

import Link from 'next/link'
import { Instagram, Youtube, Facebook } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-start">
            <img
              src="/images/logo-light.svg"
              alt="Tokiyoga logo"
              className="mb-4 h-32 md:h-48 w-auto"
            />
          </div>

          {/* Сесии Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">Сесии</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/sessions/book?type=Новолуние" className="text-primary-foreground/80 hover:text-accent transition-colors text-lg">
                  Новолуние
                </Link>
              </li>
              <li>
                <Link href="/sessions/book?type=Първа%20четвърт" className="text-primary-foreground/80 hover:text-accent transition-colors text-lg">
                  Първа четвърт
                </Link>
              </li>
              <li>
                <Link href="/sessions/book?type=Полулуние" className="text-primary-foreground/80 hover:text-accent transition-colors text-lg">
                  Полулуние
                </Link>
              </li>
              <li>
                <Link href="/sessions/book?type=Пълнолуние" className="text-primary-foreground/80 hover:text-accent transition-colors text-lg">
                  Пълнолуние
                </Link>
              </li>
            </ul>
          </div>

          {/* За нас Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">За нас</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-primary-foreground/80 hover:text-accent transition-colors text-lg">
                  Услуги
                </Link>
              </li>
              <li>
                <Link href="/about/" className="text-primary-foreground/80 hover:text-accent transition-colors text-lg">
                  За нас
                </Link>
              </li>
              <li>
                <Link href="/accessories" className="text-primary-foreground/80 hover:text-accent transition-colors text-lg">
                  Аксесоари
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors text-lg">
                  Контакти
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">Бюлетин</h3>
            <p className="text-primary-foreground/80 mb-4 text-md">
              Въведете своя имейл
            </p>
            <form className="space-y-3">
              <Input 
                type="email" 
                placeholder="Имейл адрес"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-accent text-xl"
              />
              <Button 
                type="submit"
                className="w-full bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-primary-foreground transition-all text-lg"
              >
                Абонирай се
              </Button>
            </form>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
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
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-md text-primary-foreground/60">
            <p>Токийога | Всички права запазени</p>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
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
