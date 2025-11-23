import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactInfo() {
    const contactDetails = [
        {
            icon: MapPin,
            title: "Адрес",
            content: "гр. Пловдив, ул. Цанко Дюстабанов 14",
            color: "text-accent",
        },
        {
            icon: Phone,
            title: "Телефон",
            content: "+359 89 1435 084",
            color: "text-cyan-400",
        },
        {
            icon: Mail,
            title: "Имейл",
            content: "toki_yoga@hello.com",
            color: "text-accent",
        },
        {
            icon: Clock,
            title: "Работно време",
            content: "Понеделник - Неделя: 08:00 - 24:00",
            color: "text-cyan-400",
        },
    ]

    return (
        <section className="bg-muted py-16">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {contactDetails.map((detail, index) => {
                        const Icon = detail.icon
                        return (
                            <div
                                key={index}
                                className="bg-background p-8 rounded-2xl text-center group hover:scale-105 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4 group-hover:bg-accent/10 transition-colors">
                                    <Icon className={`w-8 h-8 ${detail.color}`} />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-primary">{detail.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{detail.content}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
