export default function AboutStory() {
    return (
        <section className="bg-background py-20 px-6">
            <div className="container mx-auto max-w-5xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative aspect-square rounded-3xl overflow-hidden group">
                        <img
                            src="/images/about/hero-about.webp"
                            alt="Студио ТокиЙога"
                            className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        />
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-5xl font-bold text-accent">Нашата история</h2>
                        <div className="space-y-4 text-foreground leading-relaxed text-lg">
                            <p>
                                Токийога започна своето пътуване през 2025 година с мисията да създаде пространство, в което всеки да може да открие силата на йога практиката и нейното преобразяващо влияние.
                            </p>
                            <p>
                                Създадено от екип от отдадени и вдъхновени йога инструктори, нашето студио се разви от малко помещение в предпочитано място за практика от стотици хора в нашата общност.
                            </p>
                            <p>
                                Ние вярваме, че йогата е не просто физическо натоварване — тя е път към себепознание, вътрешен баланс и по-дълбока връзка със света около нас.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
