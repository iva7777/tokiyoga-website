const team = [
    {
        name: "Елена Петрова",
        role: "Основател и главен инструктор",
        specialty: "Виняса и Хатха йога",
        image: "/images/about/elena.webp",
    },
    {
        name: "Мария Иванова",
        role: "Старши инструктор",
        specialty: "Ащанга йога",
        image: "/images/about/maria.webp",
    },
    {
        name: "Давид Стоянов",
        role: "Инструктор по медитация",
        specialty: "Хатха йога и медитация",
        image: "/images/about/david.webp",
    },
    {
        name: "София Димитрова",
        role: "Инструктор",
        specialty: "Пренатална и възстановителна йога",
        image: "/images/about/sofia.webp",
    },
]

export default function AboutTeam() {
    return (
        <section className="bg-background py-20 px-6">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-4xl font-bold text-accent text-center mb-4">Нашият екип</h2>
                <p className="text-foreground text-center mb-16 text-xl max-w-2xl mx-auto">
                    Запознайте се с нашите опитни инструктори, които ще ви водят по пътя на йога практиката
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <div key={index} className="group">
                            <div className="relative aspect-square rounded-3xl overflow-hidden mb-4 border-4 border-secondary group-hover:border-accent transition-all">
                                <img
                                    src={member.image || "/placeholder.svg"}
                                    alt={member.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                                {member.name}
                            </h3>
                            <p className="text-accent font-medium mb-2 text-lg">{member.role}</p>
                            <p className="text-foreground/70">{member.specialty}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <h3 className="text-3xl font-bold text-accent mb-6">Готови ли сте да започнете своето пътуване?</h3>
                    <p className="text-foreground mb-8 text-xl max-w-2xl mx-auto">
                        Присъединете се към нашата общност и открийте трансформиращата сила на йогата
                    </p>
                    <a
                        href="/sessions"
                        className="inline-block bg-accent text-primary-foreground px-10 py-4 rounded-full font-bold text-lg hover:scale-105 hover:shadow-lg hover:shadow-accent/50 transition-all"
                    >
                        Запиши час
                    </a>
                </div>
            </div>
        </section>
    )
}
