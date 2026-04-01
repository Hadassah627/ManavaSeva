import React from 'react'
import Hero from '../components/Hero'
import TextType from '../components/TextType'
import CircularGallery from '../components/CircularGallery'

const sampleProjects = [
    {
        title: 'Education for All',
        description: 'Supporting rural education',
        icon: '📚',
        tag: 'Education',
        gradient: 'from-emerald-600 via-emerald-500 to-green-500'
    },
    {
        title: 'Clean Water',
        description: 'Providing clean water',
        icon: '💧',
        tag: 'Health & Hygiene',
        gradient: 'from-sky-600 via-cyan-500 to-teal-500'
    },
    {
        title: 'Women Empowerment',
        description: 'Skill training programs',
        icon: '🌿',
        tag: 'Livelihood',
        gradient: 'from-orange-500 via-amber-500 to-rose-500'
    }
]

const missionItems = [
    {
        image: '/assets/missions-education.jpeg',
        text: 'Education'
    },
    {
        image: '/assets/missions-healthcare.jpeg',
        text: 'Healthcare'
    },
    {
        image: '/assets/missions-women.jpeg',
        text: 'Women Empowerment'
    },
    {
        image: '/assets/missions-water.jpeg',
        text: 'Clean Water'
    },
    {
        image: '/assets/missions-community.jpeg',
        text: 'Community Support'
    }
]

const socialLinks = [
    {
        label: 'WhatsApp',
        handle: '+91 90000 90000',
        href: 'https://wa.me/919000090000',
        accent: 'text-emerald-600',
        ring: 'ring-emerald-100',
        description: 'Chat with our volunteer desk',
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-7 h-7" fill="currentColor">
                <path d="M20.52 3.48C18.24 1.2 15.24 0 12.06 0 5.76 0 .51 5.07.5 11.32c0 2 .52 3.98 1.52 5.73L0 24l7.13-1.87c1.69.92 3.58 1.41 5.49 1.41h.01c6.3 0 11.55-5.07 11.56-11.32 0-3-.12-5.8-3.67-8.74Zm-8.96 15.66h-.003c-1.287 0-2.554-.333-3.678-.961l-.264-.158-2.735.718.732-2.665-.173-.274c-.705-1.124-1.077-2.414-1.077-3.736 0-3.88 3.237-7.018 7.217-7.018 1.931 0 3.745.749 5.112 2.107 1.362 1.354 2.109 3.156 2.109 5.078-.003 3.882-3.24 7.02-7.24 7.02Zm5.61-4.758c-.297-.148-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.149-.197.296-.767.966-.94 1.164-.173.198-.345.223-.642.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.345.446-.518.149-.173.198-.297.297-.495.099-.198.05-.371-.025-.52-.074-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.007-.371-.009-.57-.009-.198 0-.52.074-.792.371-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.1 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.413-.074-.123-.272-.198-.57-.346Z" />
            </svg>
        )
    },
    {
        label: 'Instagram',
        handle: '@manavaseva',
        href: 'https://www.instagram.com/manavaseva',
        accent: 'text-pink-600',
        ring: 'ring-pink-100',
        description: 'Daily field stories & reels',
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-7 h-7" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.263 2.242 1.325 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.35 2.633-1.325 3.608-.975.975-2.242 1.263-3.608 1.325-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.325-.975-.975-1.263-2.242-1.325-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.325-3.608.975-.975 2.242-1.263 3.608-1.325C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.897.332 4.158.634 3.393.944 2.77 1.36 2.148 1.983.926 3.205.51 4.823.45 7.052.391 8.332.378 8.741.378 12s.013 3.668.072 4.948c.059 2.229.376 3.847 1.698 5.169 1.322 1.322 2.94 1.639 5.169 1.698 1.28.059 1.689.072 4.948.072s3.668-.013 4.948-.072c2.229-.059 3.847-.376 5.169-1.698 1.322-1.322 1.639-2.94 1.698-5.169.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.059-2.229-.376-3.847-1.698-5.169C20.795.926 19.177.609 16.948.55 15.668.491 15.259.478 12 .478Z" />
                <path d="M12 5.838A6.162 6.162 0 1 0 18.162 12 6.157 6.157 0 0 0 12 5.838m0 10.162A4 4 0 1 1 16 12a4 4 0 0 1-4 4Z" />
                <circle cx="18.406" cy="5.594" r="1.44" />
            </svg>
        )
    },
    {
        label: 'Facebook',
        handle: '/ManavaSevaOfficial',
        href: 'https://www.facebook.com/manavaseva',
        accent: 'text-blue-600',
        ring: 'ring-blue-100',
        description: 'Event updates & live streams',
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-7 h-7" fill="currentColor">
                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.333v21.333C0 23.403.597 24 1.325 24h11.495v-9.294H9.847v-3.622h2.973V8.413c0-2.937 1.792-4.54 4.413-4.54 1.254 0 2.334.093 2.646.135v3.07h-1.82c-1.428 0-1.704.678-1.704 1.673v2.193h3.406l-.444 3.622h-2.963V24h5.807C23.403 24 24 23.403 24 22.667V1.333C24 .597 23.403 0 22.675 0" />
            </svg>
        )
    }
]

export default function Home() {
    return (
        <div>
            <Hero />
            <section className="max-w-6xl mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand/70">Highlights</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Impact Pillars</h2>
                        <p className="text-gray-600 mt-2 max-w-2xl">Three focus areas where ManavaSeva volunteers and donors are creating meaningful change every single day.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    {sampleProjects.map((project, index) => (
                        <div
                            key={project.title}
                            className={`relative overflow-hidden rounded-2xl shadow-xl border border-white/10 text-white bg-gradient-to-br ${project.gradient}`}
                        >
                            <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),_rgba(255,255,255,0))]" aria-hidden="true" />
                            <div className="relative p-6 flex flex-col h-full">
                                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center text-2xl">
                                    {project.icon}
                                </div>
                                <div className="mt-6 space-y-2">
                                    <span className="text-xs uppercase tracking-[0.3em] text-white/80">{project.tag}</span>
                                    <h3 className="text-2xl font-semibold leading-snug">{project.title}</h3>
                                    <p className="text-white/80 text-sm">{project.description}</p>
                                </div>
                                <div className="mt-auto pt-6 flex items-center gap-2 text-sm font-semibold text-white/90">
                                    <span>Explore impact</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-24 px-6 bg-gradient-to-b from-white to-green-50 text-center">
                <div className="max-w-6xl mx-auto">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Focus Areas</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">Our Missions</h2>
                    <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                        Driving impact through focused initiatives
                    </p>
                    <div className="h-[350px] md:h-[500px] mt-12 relative">
                        <CircularGallery
                            items={missionItems}
                            bend={1}
                            textColor="#166534"
                            borderRadius={0.08}
                            scrollSpeed={2}
                            scrollEase={0.05}
                        />
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-b from-white via-emerald-50 to-green-50">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand/70">Testimonials</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Stories of Hope</h2>
                    <p className="text-gray-600 mt-3">Hear how ManavaSeva is inspiring volunteers, donors, and families across our communities.</p>

                    <div className="mt-10 bg-white/90 border border-emerald-100 rounded-3xl shadow-2xl shadow-emerald-100/70 p-8 backdrop-blur">
                        <TextType
                            as="div"
                            text={[
                                '“Fantastic work. They changed lives.” — Asha',
                                '“Volunteering here was fulfilling.” — Raj',
                                '“Professional and caring.” — Meera'
                            ]}
                            typingSpeed={75}
                            deletingSpeed={50}
                            pauseDuration={1500}
                            cursorBlinkDuration={0.5}
                            showCursor
                            cursorCharacter="_"
                            className="text-2xl md:text-3xl font-semibold leading-snug text-left md:text-center text-gray-800 min-h-[120px]"
                            textColors={['#065f46', '#047857', '#ea580c']}
                            variableSpeed={{ min: 60, max: 120 }}
                            startOnVisible
                        />
                    </div>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                        {['Asha — Community Leader', 'Raj — Volunteer', 'Meera — Beneficiary'].map((person) => (
                            <div key={person} className="rounded-2xl bg-white/80 border border-emerald-100 py-4 px-6 shadow-sm">
                                {person}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mt-16">
                <div className="border-y border-white/40 bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-500 text-white">
                    <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        <div>
                            <p className="text-sm uppercase tracking-[0.25em] text-white/80">Get Involved</p>
                            <h3 className="text-3xl font-semibold mt-2 leading-snug">Ready to uplift a community today?</h3>
                            <p className="text-white/80 mt-2 max-w-2xl">
                                Every volunteer hour and every rupee donated helps us bring education, clean water, and healthcare to more families.
                                Join our circle of kindness.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                            <a
                                href="/volunteer"
                                className="inline-flex items-center justify-center rounded-2xl bg-white text-emerald-700 font-semibold px-6 py-3 shadow-lg shadow-emerald-700/30"
                            >
                                Become a Volunteer
                            </a>
                            <a
                                href="/donation-success"
                                className="inline-flex items-center justify-center rounded-2xl border border-white/60 text-white font-semibold px-6 py-3"
                            >
                                Donate Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 px-6 bg-white">
                <div className="max-w-5xl mx-auto text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Stay Connected</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">Reach us on your favourite platform</h2>
                    <p className="text-gray-600 mt-3">Tap an icon to open the respective app and follow our latest updates.</p>

                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {socialLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className="group rounded-3xl border border-gray-100 px-6 py-6 text-left shadow-sm hover:shadow-lg transition bg-white"
                            >
                                <div className={`w-14 h-14 flex items-center justify-center rounded-2xl ${link.ring} ring-4 ${link.accent}`}>
                                    {link.icon}
                                </div>
                                <div className="mt-4">
                                    <p className="text-xs uppercase tracking-[0.3em] text-gray-500">{link.label}</p>
                                    <p className="text-xl font-semibold text-gray-900 mt-1">{link.handle}</p>
                                    <p className="text-sm text-gray-500 mt-2">{link.description}</p>
                                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-600 mt-3">
                                        Open app
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M10 7h7v7" />
                                        </svg>
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
