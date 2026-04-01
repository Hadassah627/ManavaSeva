import React, { useEffect, useState } from 'react'
import Carousel from './Carousel'

const storyItems = [
    {
        id: 1,
        title: 'Education Support',
        description: 'Providing quality education to underprivileged children.',
        image: '/assets/download (3).jpeg'
    },
    {
        id: 2,
        title: 'Healthcare Access',
        description: 'Ensuring medical support for rural communities.',
        image: '/assets/download (4).jpeg'
    },
    {
        id: 3,
        title: 'Women Empowerment',
        description: 'Supporting women with skills and opportunities.',
        image: '/assets/download (5).jpeg'
    },
    {
        id: 4,
        title: 'Community Growth',
        description: 'Building sustainable and strong communities.',
        image: '/assets/missions-education.jpeg'
    }
]

const teamMembers = [
    {
        name: 'Priya Mehra',
        role: 'Founder & Executive Director',
        focus: 'Strategy, partnerships, and community outreach'
    },
    {
        name: 'Amit Rao',
        role: 'Program Lead',
        focus: 'Project design and grassroots implementation'
    },
    {
        name: 'Sana Karim',
        role: 'Operations Manager',
        focus: 'Volunteer coordination and on-ground logistics'
    }
]

export default function About() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const frame = requestAnimationFrame(() => setIsVisible(true))
        return () => cancelAnimationFrame(frame)
    }, [])

    return (
        <>
            <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-100">
                <div className="absolute -top-10 -left-10 w-72 h-72 bg-green-200/30 blur-3xl rounded-full pointer-events-none" aria-hidden="true" />
                <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-emerald-100/40 blur-3xl rounded-full pointer-events-none" aria-hidden="true" />
                <div className={`relative max-w-4xl mx-auto px-6 py-28 md:py-32 flex flex-col items-center justify-center text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-medium mb-6 shadow-inner">
                        🌿 Our Story & Impact
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 drop-shadow-[0_10px_40px_rgba(16,185,129,0.18)]">
                        About <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">ManavaSeva</span>
                    </h1>
                    <div className="w-16 h-1 bg-green-500 rounded-full mt-4 animate-pulse" aria-hidden="true" />
                    <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
                        Empowering communities through compassion, service, and sustainable development.
                    </p>
                </div>
            </section>

            <section className="bg-gradient-to-b from-white to-green-50">
                <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4">
                        <p className="text-sm font-semibold tracking-[0.3em] uppercase text-green-500">Our Story</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Story</h2>
                        <p className="text-lg text-gray-500">How a small idea became meaningful impact</p>
                        <p className="text-gray-600 leading-relaxed mt-4">
                            What began as a single act of service has grown into a movement that keeps empowering communities through compassion, service, and sustainable development. By listening to grassroots needs and partnering with local champions, ManavaSeva turns small initiatives into lasting change across education, healthcare, women empowerment, and community resilience.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <Carousel
                            items={storyItems}
                            baseWidth={300}
                            autoplay
                            autoplayDelay={3000}
                            pauseOnHover
                            loop
                            round={false}
                        />
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-20">
                <div className="text-left">
                    <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                        Our <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">Mission & Vision</span>
                    </h2>
                    <div className="w-20 h-1 bg-green-500 rounded-full mt-4" aria-hidden="true" />
                    <p className="text-gray-500 mt-3 text-lg max-w-2xl">Guided by purpose, driven by compassion</p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 mt-12">
                    {[{
                        title: 'Our Mission',
                        icon: '🎯',
                        description: 'At ManavaSeva, our mission is to uplift underprivileged communities by providing access to education, healthcare, and livelihood opportunities. We strive to create a society where every individual has the chance to grow with dignity and hope.'
                    }, {
                        title: 'Our Vision',
                        icon: '👁️',
                        description: 'Our vision is to build a world where humanity thrives through unity, compassion, and equal opportunities for all.'
                    }].map((card) => (
                        <article
                            key={card.title}
                            className="group relative overflow-hidden bg-white/90 backdrop-blur p-8 rounded-3xl shadow-lg border-2 border-green-200 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl"
                        >
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-emerald-100/70 via-transparent to-transparent opacity-0 -translate-y-full transition-all duration-500 group-hover:opacity-80 group-hover:translate-y-0" aria-hidden="true" />
                            <div className="absolute inset-x-6 top-4 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent" aria-hidden="true" />
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-100 to-green-50 text-green-700 text-3xl flex items-center justify-center shadow-inner">
                                    {card.icon}
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-[0.4em] text-green-500">{card.title.includes('Mission') ? 'Purpose' : 'Future'}</p>
                                    <h3 className="text-2xl font-semibold text-gray-900">{card.title}</h3>
                                </div>
                            </div>
                            <p className="mt-5 text-gray-600 leading-relaxed">
                                {card.description}
                            </p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 pb-20">
                <div className="bg-gradient-to-br from-white via-green-50 to-white border border-green-100 rounded-[32px] shadow-xl overflow-hidden">
                    <div className="px-6 md:px-10 py-10 bg-gradient-to-r from-emerald-600/5 via-emerald-100/60 to-green-50">
                        <p className="text-sm font-semibold tracking-[0.3em] uppercase text-green-600">Team</p>
                        <h2 className="text-3xl font-bold text-gray-900 mt-2">People behind ManavaSeva</h2>
                        <p className="text-gray-600 mt-3 max-w-2xl">
                            A focused core team coordinates programs, mentors volunteers, and ensures every initiative runs with professionalism and heart.
                        </p>
                    </div>
                    <div role="table" className="divide-y divide-green-100">
                        {teamMembers.map((member, idx) => (
                            <div
                                key={member.name}
                                role="row"
                                className={`grid md:grid-cols-[1.4fr_1fr] gap-6 px-6 md:px-10 py-6 items-center transition-colors duration-300 ${idx % 2 === 0 ? 'bg-white/80' : 'bg-white/60'} hover:bg-white`}
                            >
                                <div role="cell" className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-green-600/10 text-green-700 font-semibold flex items-center justify-center">
                                        {member.name.split(' ').map((part) => part[0]).join('')}
                                    </div>
                                    <div>
                                        <p className="text-lg font-semibold text-gray-900">{member.name}</p>
                                        <p className="text-sm text-gray-500">{member.focus}</p>
                                    </div>
                                </div>
                                <div role="cell" className="flex md:justify-end">
                                    <span className="inline-flex items-center gap-2 text-sm font-medium text-green-700 bg-green-50 border border-green-100 px-4 py-2 rounded-full shadow-sm">
                                        {member.role}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
