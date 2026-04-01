import React from 'react'

export default function Logo({ className = '' }) {
    return (
        <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
            <defs></defs>
            <circle cx="32" cy="32" r="30" fill="#2f855a" />
            <path d="M20 36c4-6 12-10 20-6" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M28 24c2 3 8 4 12 6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
