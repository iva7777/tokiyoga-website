import { Smile, Scale, Users } from 'lucide-react'

const features = [
  {
    icon: Smile,
    title: 'Спокойствие',
    description: 'Нашето студио предлага уютна вечерна атмосфера, която ти помага да изключиш стреса и да се презаредиш.',
  },
  {
    icon: Scale,
    title: 'Баланс',
    description: 'Специално подбрани нощни практики водят тялото и ума към хармония преди сън.',
  },
  {
    icon: Users,
    title: 'Общност',
    description: 'Присъединяваш се към подкрепяща група хора, които споделят твоето желание за релакс и лична грижа.',
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-background relative">
      {/* Decorative element */}
      <div className="absolute right-10 top-10 w-32 h-32 opacity-20">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 10 Q70 30 50 50 Q30 70 50 90" stroke="currentColor" className="text-decorative" strokeWidth="8" fill="none"/>
        </svg>
      </div>

      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-accent text-center mb-16">За нас</h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-secondary rounded-3xl p-8 flex flex-col items-center text-center transition-all hover:scale-105 hover:shadow-xl group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-accent mb-4">{feature.title}</h3>
                <p className="text-secondary-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
