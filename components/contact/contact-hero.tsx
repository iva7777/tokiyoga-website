export default function ContactHero() {
    return (
        <section className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
            <div className="absolute top-10 left-0 w-[600px] h-[600px] opacity-20">
                <img src="/images/flower-overlay.png" className='w-full h-full' alt="chrisanthemium overlay" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-5xl font-bold mb-6 text-accent">Свържете се с нас</h1>
                    <p className="text-xl text-primary-foreground/90 leading-relaxed">
                        Имате въпроси или искате да резервирате своята първа сесия? Ние сме тук, за да ви помогнем.
                    </p>
                </div>
            </div>
        </section>
    )
}
