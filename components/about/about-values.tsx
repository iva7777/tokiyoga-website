import { Heart, Users, Sparkles, Leaf } from "lucide-react"

const values = [
    {
        icon: Heart,
        title: "Съпричастност",
        description: "Създаваме топла и подкрепяща среда, където всеки се чувства приет и ценен.",
    },
    {
        icon: Users,
        title: "Общност",
        description: "Вярваме в силата на практиката заедно и изграждането на истински връзки.",
    },
    {
        icon: Sparkles,
        title: "Трансформация",
        description: "Подкрепяме личностното развитие и растежа на всеки практикуващ.",
    },
    {
        icon: Leaf,
        title: "Устойчивост",
        description: "Грижим се за планетата и насърчаваме екологични практики.",
    },
]

export default function AboutValues() {
    return (
        <section className="bg-primary py-20 px-6 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute right-0 bottom-0 w-80 h-80 opacity-10">
                <svg viewBox="0 0 400 400" className="w-full h-full text-decorative">
                    <path
                        d="M200,200 Q220,150 240,140 Q250,135 255,145 Q258,155 245,165 Q230,175 220,190 Z"
                        fill="currentColor"
                    />
                    <path
                        d="M200,200 Q250,220 260,240 Q265,250 255,255 Q245,258 235,245 Q225,230 210,220 Z"
                        fill="currentColor"
                    />
                    <circle cx="200" cy="200" r="15" fill="currentColor" />
                </svg>
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <h2 className="text-4xl font-bold text-accent text-center mb-4">Нашите ценности</h2>
                <p className="text-primary-foreground text-center mb-16 text-xl max-w-2xl mx-auto">
                    Водени от принципи, които ни вдъхновяват да създаваме по-добро бъдеще
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => {
                        const Icon = value.icon
                        return (
                            <div
                                key={index}
                                className="bg-primary-foreground/10 backdrop-blur-sm p-8 rounded-3xl border border-primary-foreground/20 hover:bg-primary-foreground/15 hover:border-accent hover:scale-105 transition-all group"
                            >
                                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Icon className="w-8 h-8 text-primary-foreground" />
                                </div>
                                <h3 className="text-xl font-bold text-accent mb-3">{value.title}</h3>
                                <p className="text-primary-foreground leading-relaxed">{value.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
