import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className="relative bg-primary min-h-[600px] flex items-center overflow-hidden pt-20">
      {/* Decorative Flower */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-center opacity-40">
        <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(300, 300)">
            {/* Chrysanthemum petals */}
            {[...Array(16)].map((_, i) => {
              const angle = (i * 22.5 * Math.PI) / 180
              const length = 150 + (i % 2) * 50
              return (
                <g key={i} transform={`rotate(${i * 22.5})`}>
                  <ellipse
                    cx={length / 2}
                    cy="0"
                    rx={length / 2}
                    ry="25"
                    fill="currentColor"
                    className="text-decorative"
                  />
                </g>
              )
            })}
          </g>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Поток от енергия,<br />
            пространство за тишина.
          </h1>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full transition-all hover:scale-105 hover:shadow-lg"
          >
            Запиши час
          </Button>
        </div>
      </div>
    </section>
  )
}
