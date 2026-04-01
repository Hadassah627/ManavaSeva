import React from 'react'

export default function ProjectCard({ project }) {
    return (
        <div className="card hover:shadow-lg transition-shadow">
            <div className="h-40 bg-gray-100 rounded-md overflow-hidden flex items-center justify-center">
                {project.image ? <img src={project.image} alt={project.title} className="w-full h-full object-cover" /> : <div className="text-gray-400">No image</div>}
            </div>
            <div className="mt-3 flex items-center justify-between gap-2">
                <h3 className="font-semibold text-lg">{project.title}</h3>
                {project.status && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-semibold">{project.status}</span>
                )}
            </div>
            <p className="text-sm text-gray-600 mt-2">{project.description}</p>
            <a
                href="/volunteer"
                className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-emerald-600 hover:text-emerald-700"
            >
                Register
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M10 7h7v7" />
                </svg>
            </a>
        </div>
    )
}
