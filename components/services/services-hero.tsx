export default function ServicesHero() {
    return (
        <section className="relative bg-primary pt-32 pb-20 overflow-hidden">
            {/* Decorative chrysanthemum - left */}
            <div className="absolute left-0 top-20 w-64 h-64 opacity-20">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                    <g transform="translate(100, 100)">
                        {Array.from({ length: 12 }).map((_, i) => (
                            <ellipse
                                key={i}
                                cx="0"
                                cy="-60"
                                rx="15"
                                ry="45"
                                fill="#C084FC"
                                opacity="0.6"
                                transform={`rotate(${i * 30})`}
                            />
                        ))}
                    </g>
                </svg>
            </div>

            {/* Decorative chrysanthemum - right */}
            <div className="absolute right-96 w-[600px] h-[600px] opacity-20">
                <img src="/images/flower-overlay.png" className='w-[600px] h-[600px]' alt="chrisanthemium overlay" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-accent mb-6 text-balance">Нашите услуги</h1>
                    <p className="text-xl md:text-2xl text-primary-foreground/90 text-balance">
                        Открийте пътя към вътрешна хармония с нашите специализирани йога и медитация програми
                    </p>
                </div>
            </div>
        </section>
    )
}
