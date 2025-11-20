import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative bg-primary min-h-[600px] flex items-center overflow-hidden pt-20">
      {/* Decorative Flower */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-center opacity-40">
        <img src="/images/flower-overlay.png" className='w-[600px] h-[600px]' alt="chrisanthemium overlay" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Поток от енергия,<br />
            пространство за тишина.
          </h1>
          
          <Link href='sessions'>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-primary-foreground font-semibold px-8 py-6 text-2xl rounded-full transition-all hover:scale-105 hover:shadow-lg"
            >
              Запиши час
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
