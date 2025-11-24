import Link from "next/link"

export default function NotFoundPage() {
    return (
        <main className="min-h-screen bg-primary relative overflow-hidden flex items-center justify-center">
            <div className="absolute top-0 left-0 w-64 h-64 opacity-20">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                    <g transform="translate(100, 100)">
                        {[...Array(16)].map((_, i) => (
                            <ellipse
                                key={i}
                                cx="0"
                                cy="-60"
                                rx="15"
                                ry="45"
                                fill="#b794f6"
                                transform={`rotate(${i * 22.5})`}
                                className="animate-pulse"
                                style={{
                                    animationDelay: `${i * 0.1}s`,
                                    animationDuration: "3s",
                                }}
                            />
                        ))}
                    </g>
                </svg>
            </div>

            {/* Decorative chrysanthemum - bottom right */}
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] opacity-20">
                <img src="/images/flower-overlay.png" className='w-full h-full' alt="chrisanthemium overlay" />
            </div>

            <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-[180px] font-bold leading-none bg-linear-to-br from-accent via-cyan to-accent bg-clip-text text-transparent animate-pulse">
                        404
                    </h1>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-accent mb-6">Страницата не е намерена</h2>
                <p className="text-xl text-white/80 mb-12 leading-relaxed">
                    Изглежда, че тази страница медитира. Нека ви върнем към началото на вашето пътуване.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        href="/"
                        className="px-8 py-4 bg-accent text-primary rounded-full font-medium text-lg
                        hover:scale-105 hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]
                        transition-all duration-300 ease-out min-w-[200px]"
                    >
                        Към началото
                    </Link>

                    <Link
                        href="/sessions"
                        className="px-8 py-4 border-2 border-cyan text-background rounded-full font-medium text-lg
                        hover:bg-cyan hover:scale-105 
                        hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]
                        transition-all duration-300 ease-out min-w-[200px]"
                    >
                        Запишете час
                    </Link>
                </div>

                {/* Decorative moon phase element */}
                <div className="mt-16 flex justify-center">
                    <div
                        className="w-24 h-24 rounded-full bg-linear-to-br from-white/20 to-white/5 
                        border border-white/20 flex items-center justify-center
                        hover:scale-110 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]
                        transition-all duration-500"
                    >
                        <div
                            className="w-16 h-16 rounded-full bg-linear-to-br from-accent/30 to-cyan/30 animate-pulse"
                            style={{ animationDuration: "3s" }}
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}
