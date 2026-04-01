import React, { useEffect, useState } from 'react'

const heroBackground = "url('/assets/ChatGPT%20Image%20Apr%201,%202026,%2001_09_24%20PM.png')"

export default function Hero() {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        const frame = requestAnimationFrame(() => setIsMounted(true))
        return () => cancelAnimationFrame(frame)
    }, [])

    return (
        <section
            className="relative min-h-[80vh] md:min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
            style={{ backgroundImage: heroBackground }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/60" aria-hidden="true" />
            <div className="relative z-10 w-full">
                <div className={`max-w-5xl mx-auto px-4 py-20 text-center flex flex-col items-center transition-all duration-700 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight space-y-2">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-100 via-emerald-300 to-green-400 drop-shadow-[0_10px_35px_rgba(34,197,94,0.55)]">
                            Be the Change.
                        </span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-400 to-orange-600 drop-shadow-[0_12px_40px_rgba(249,115,22,0.6)]">
                            Build a Better Tomorrow.
                        </span>
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
                        Join ManavaSeva in our mission to empower communities through education, health, and livelihood programs. Your small act makes a big difference.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
                        <a
                            href="/volunteer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-3 text-lg font-semibold rounded-full text-white shadow-lg bg-gradient-to-r from-green-600 to-green-500 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                            Volunteer
                        </a>
                        <a
                            href="/works"
                            className="inline-flex items-center justify-center gap-2 px-8 py-3 text-lg font-semibold rounded-full text-white shadow-lg bg-gradient-to-r from-orange-500 to-orange-600 transition-transform duration-300 hover:scale-105 hover:brightness-110"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12 1C7.03 1 3 5.03 3 10s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm-.75 4.5h1.5v3h2.25v1.5h-2.25v2.25h3v1.5h-3v2.25h-1.5v-2.25H8.25v-1.5h3v-2.25H9v-1.5h2.25v-3z" />
                            </svg>
                            Donate
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
