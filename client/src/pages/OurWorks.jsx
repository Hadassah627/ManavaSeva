import React, { useMemo, useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { useData } from '../context/DataContext'

export default function OurWorks() {
    const { projects } = useData()
    const [query, setQuery] = useState('')
    const [category, setCategory] = useState('')
    const featuredEvents = [
        {
            title: 'Bridge the Classroom Drive',
            summary: 'Annual distribution of STEM kits and digital scholarships for government-school students across three mandals.',
            impact: '1,200+ children now have continuous access to curated learning pods and mentors.',
            tag: 'Education • Since 2021',
            color: 'from-emerald-500/15 to-emerald-100/60'
        },
        {
            title: 'Drink Safe Villages',
            summary: 'Solar-powered RO kiosks plus hygiene workshops delivered in fluoride-affected hamlets.',
            impact: '5 borewells revived, 18 kiosks installed, and 9,500 villagers onboarded to water clubs.',
            tag: 'Water & Health • 2023-24',
            color: 'from-sky-400/15 to-cyan-100/60'
        },
        {
            title: 'Sakhi Livelihood Circles',
            summary: 'Self-help groups receiving seed capital, design mentorship, and e-commerce storefronts.',
            impact: '260 artisans doubled monthly income and now fulfill institutional orders.',
            tag: 'Women Empowerment • Ongoing',
            color: 'from-rose-400/15 to-amber-100/50'
        },
        {
            title: 'Green Canopy Weekends',
            summary: 'Citizen-led plantation marathons plus climate literacy pop-ups in peri-urban zones.',
            impact: '14,000 saplings nurtured with 82% survival thanks to IoT-enabled drip kits.',
            tag: 'Climate Action • Monthly',
            color: 'from-lime-400/15 to-green-100/50'
        }
    ]
    const filteredProjects = useMemo(() => {
        return projects.filter(project => {
            const matchesQuery = project.title.toLowerCase().includes(query.toLowerCase()) || (project.description || '').toLowerCase().includes(query.toLowerCase())
            const matchesCategory = !category || project.category === category
            return matchesQuery && matchesCategory
        })
    }, [projects, query, category])

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-2xl font-semibold">Our Works</h1>
            <div className="mt-4 flex gap-2">
                <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search projects" className="border p-2 rounded flex-1" />
                <select value={category} onChange={e => setCategory(e.target.value)} className="border p-2 rounded">
                    <option value="">All</option>
                    <option value="education">Education</option>
                    <option value="health">Health</option>
                    <option value="community">Community</option>
                    <option value="events">Events</option>
                </select>
                <button onClick={() => { setQuery(''); setCategory('') }} className="px-3 py-2 bg-brand text-white rounded">Reset</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {filteredProjects.map(p => <ProjectCard key={p._id} project={p} />)}
                {filteredProjects.length === 0 && (
                    <div className="col-span-full text-center text-gray-500 border border-dashed border-gray-200 rounded-2xl py-12">
                        No projects found for this filter. Explore our featured impact events below.
                    </div>
                )}
            </div>

            <section className="mt-16">
                <div className="text-center max-w-3xl mx-auto">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Impact Diaries</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Projects & signature events</h2>
                    <p className="text-gray-600 mt-3">
                        A quick look at the flagship initiatives our teams and volunteers nurture year-round. Each block highlights the objective,
                        the experience on-ground, and the lives touched so far.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {featuredEvents.map(event => (
                        <article
                            key={event.title}
                            className={`rounded-3xl border border-white/40 bg-gradient-to-br ${event.color} p-6 shadow-sm hover:shadow-xl transition`}
                        >
                            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">{event.tag}</p>
                            <h3 className="text-2xl font-semibold text-gray-900 mt-3">{event.title}</h3>
                            <p className="text-gray-700 mt-3 leading-relaxed">{event.summary}</p>
                            <div className="mt-4 flex items-center gap-2 text-emerald-700 font-semibold">
                                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-emerald-600 shadow">
                                    ✱
                                </span>
                                <p className="text-sm text-gray-800">{event.impact}</p>
                            </div>
                            <a
                                href="/volunteer"
                                className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-emerald-700"
                            >
                                Register
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M10 7h7v7" />
                                </svg>
                            </a>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    )
}
