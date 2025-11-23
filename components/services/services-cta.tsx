import Link from "next/link"

export default function ServicesCTA() {
    return (
        <section className="relative bg-primary py-20 overflow-hidden">
            {/* Decorative chrysanthemum */}
            <div className="absolute left-0 top-0 w-[600px] h-[600px] opacity-10">
                <img src="/images/flower-overlay.png" className='w-full h-full' alt="chrisanthemium overlay" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-accent mb-6 text-balance">
                        Готови ли сте да започнете пътуването си?
                    </h2>
                    <p className="text-xl text-primary-foreground/90 mb-10 text-balance">
                        Изберете услугата, която отговаря на вашите нужди и запишете час за вашата първа сесия днес.
                    </p>
                    <Link
                        href="/sessions"
                        className="inline-block px-10 py-4 bg-accent text-primary rounded-full font-semibold text-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-all duration-300"
                    >
                        Запиши час сега
                    </Link>
                </div>
            </div>
        </section>
    )
}
