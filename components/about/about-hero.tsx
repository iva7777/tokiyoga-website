export default function AboutHero() {
    return (
        <section className="bg-primary pt-32 pb-20 px-6 relative overflow-hidden">
            <div className="absolute left-0 w-350 h-350 opacity-20">
                <img src="/images/flower-overlay.png" className='w-[350px] h-[350px]' alt="chrisanthemium overlay" />
            </div>

            <div className="container mx-auto max-w-4xl relative z-10">
                <h1 className="text-5xl md:text-6xl font-bold text-accent text-center mb-6">За нас</h1>
                <p className="text-2xl text-primary-foreground text-center max-w-2xl mx-auto leading-relaxed">
                    Открийте пътя към вътрешна хармония и физическа сила с ТокиЙога
                </p>
            </div>
        </section>
    )
}
