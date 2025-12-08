export default function AccessoriesHero() {
    return (
        <section className="relative bg-primary pt-32 pb-20 overflow-hidden">
            <div className="absolute left-0 w-350 h-350 opacity-20">
                <img src="/images/flower-overlay.png" className='w-[350px] h-[350px]' alt="chrisanthemium overlay" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-accent mb-6 text-balance">Аксесоари за йога</h1>
                    <p className="text-xl text-primary-foreground max-w-2xl mx-auto text-pretty">
                        Открийте нашата колекция от висококачествени йога аксесоари за вашия комфорт
                    </p>
                </div>
            </div>
        </section>
    )
}
