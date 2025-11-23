export default function ContactMap() {
    return (
        <section className="bg-muted py-16">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-primary">Посетете ни</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Открийте ни на картата и елате да изпитате спокойствието
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-accent/20 hover:border-accent/40 transition-all duration-300">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2973.4427636363637!2d24.745!3d42.145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDA4JzQyLjAiTiAyNMKwNDQnNDIuMCJF!5e0!3m2!1sen!2sbg!4v1234567890"
                            width="100%"
                            height="500"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Tokiyoga Location Map"
                            className="grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>

                    <div className="mt-8 text-center">
                        <a
                            href="https://www.google.com/maps/dir//42.145,24.745"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-accent hover:text-purple-500 transition-colors font-semibold text-lg"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Вижте местоположението
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
