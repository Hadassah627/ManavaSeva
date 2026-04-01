import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
    const { isAdmin, logout } = useAuth()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const navItems = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/works', label: 'Our Works' },
        { to: '/volunteer', label: 'Volunteer' },
        { to: '/gallery', label: 'Gallery' },
        { to: '/contact', label: 'Contact' },
        { to: isAdmin ? '/admin' : '/admin-login', label: isAdmin ? 'Dashboard' : 'Admin' }
    ]

    const closeMobileMenu = () => setIsMobileMenuOpen(false)

    return (
        <header className="sticky top-0 bg-white/80 backdrop-blur z-40 shadow-sm">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3">
                    <Logo className="w-10 h-10" />
                    <div className="text-lg font-semibold text-brand">ManavaSeva</div>
                </Link>
                <button
                    type="button"
                    className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-gray-200 text-gray-700"
                    onClick={() => setIsMobileMenuOpen(prev => !prev)}
                    aria-label="Toggle navigation menu"
                >
                    <svg
                        className={`w-5 h-5 transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        {isMobileMenuOpen ? (
                            <path d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <>
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </>
                        )}
                    </svg>
                </button>
                <nav className="hidden md:flex gap-4 items-center">
                    {navItems.map(({ to, label }) => (
                        <NavLink
                            key={to}
                            to={to}
                            className={({ isActive }) => `group relative px-1 py-1 text-sm font-semibold tracking-wide transition-colors duration-200 ${isActive ? 'text-brand drop-shadow-[0_0_10px_rgba(16,185,129,0.7)]' : 'text-gray-700 hover:text-brand/80'}`}
                        >
                            {({ isActive }) => (
                                <>
                                    <span>{label}</span>
                                    <span
                                        className={`pointer-events-none absolute left-0 right-0 -bottom-1 h-0.5 rounded-full transition-transform duration-300 origin-center ${isActive ? 'bg-brand scale-x-100' : 'bg-brand/40 scale-x-0 group-hover:scale-x-100'}`}
                                    />
                                </>
                            )}
                        </NavLink>
                    ))}
                </nav>
                <div className="flex gap-2 items-center">
                    {isAdmin && (
                        <button
                            onClick={logout}
                            className="hidden md:inline-block px-3 py-2 border border-red-200 text-red-500 rounded-md text-sm font-semibold"
                        >
                            Logout
                        </button>
                    )}
                    <Link to="/volunteer" className="hidden md:inline-block px-4 py-2 bg-brand text-white rounded-md">Volunteer</Link>
                    <Link to="/donate" className="hidden md:inline-block px-4 py-2 border border-brand text-brand rounded-md">Donate</Link>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur">
                    <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
                        {navItems.map(({ to, label }) => (
                            <NavLink
                                key={to}
                                to={to}
                                onClick={closeMobileMenu}
                                className={({ isActive }) => `px-2 py-2 rounded-md text-sm font-semibold ${isActive ? 'bg-brand/10 text-brand' : 'text-gray-700 hover:bg-gray-50'}`}
                            >
                                {label}
                            </NavLink>
                        ))}
                        <Link
                            to="/volunteer"
                            onClick={closeMobileMenu}
                            className="w-full px-4 py-2 bg-brand text-white rounded-md text-center"
                        >
                            Volunteer
                        </Link>
                        <Link
                            to="/donate"
                            onClick={closeMobileMenu}
                            className="w-full px-4 py-2 border border-brand text-brand rounded-md text-center"
                        >
                            Donate
                        </Link>
                        {isAdmin && (
                            <button
                                onClick={() => {
                                    closeMobileMenu()
                                    logout()
                                }}
                                className="w-full px-4 py-2 border border-red-200 text-red-500 rounded-md text-center"
                            >
                                Logout
                            </button>
                        )}
                    </nav>
                </div>
            )}
        </header>
    )
}
