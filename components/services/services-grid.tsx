import Link from "next/link"
import { Users, Heart, Brain, Flower2, Wind, Sparkles } from "lucide-react"

const services = [
    {
        icon: Users,
        title: "Групови класове по йога",
        description: "Присъединете се към нашите динамични групови сесии, подходящи за всички нива. Практикувайте заедно с общност от единомишленици.",
        features: ["До 12 участници", "90 минути", "Всички нива"],
        color: "accent",
    },
    {
        icon: Heart,
        title: "Индивидуални сесии",
        description: "Персонализирана йога практика, адаптирана според вашите нужди, цели и физически възможности.",
        features: ["Лично внимание", "60-90 минути", "Гъвкаво разписание"],
        color: "accent",
    },
    {
        icon: Brain,
        title: "Медитация и майндфулнес",
        description: "Научете техники за успокояване на ума, намаляване на стреса и повишаване на концентрацията.",
        features: ["Водени медитации", "45 минути", "Онлайн опция"],
        color: "accent",
    },
    {
        icon: Flower2,
        title: "Хатха йога",
        description: "Традиционна практика, съчетаваща физически пози с дихателни упражнения за баланс на тялото и ума.",
        features: ["Традиционна практика", "90 минути", "Средно ниво"],
        color: "accent",
    },
    {
        icon: Wind,
        title: "Пранаяма (Дихателни техники)",
        description: "Овладейте древни дихателни практики за контрол на жизнената енергия и подобрено здраве.",
        features: ["Дихателни техники", "45 минути", "Всички нива"],
        color: "accent",
    },
    {
        icon: Sparkles,
        title: "Корпоративна йога",
        description: "Пренасяме йогата във вашия офис с програми за подобряване на благосъстоянието на служителите.",
        features: ["На място", "Гъвкаво време", "Групови сесии"],
        color: "accent",
    },
]

export default function ServicesGrid() {
    return (
        <section className="py-20 bg-secondary">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <div
                                key={index}
                                className="group bg-primary rounded-3xl p-8 border-2 border-border hover:border-accent transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                            >
                                <div
                                    className={`w-16 h-16 rounded-full bg-${service.color}/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                                >
                                    <Icon className={`w-8 h-8 text-${service.color}`} />
                                </div>

                                <h3 className="text-2xl font-bold text-accent mb-4 group-hover:text-cyan transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-primary-foreground/80 mb-6 leading-relaxed">{service.description}</p>

                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-primary-foreground/70">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="/sessions"
                                    className="inline-flex items-center text-accent font-medium hover:text-cyan transition-colors group-hover:translate-x-1 text-lg transform duration-300"
                                >
                                    Запиши час
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
