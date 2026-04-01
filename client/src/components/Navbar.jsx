import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
    const { isAdmin, logout } = useAuth()
    const navItems = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/works', label: 'Our Works' },
        { to: '/volunteer', label: 'Volunteer' },
        { to: '/gallery', label: 'Gallery' },
        { to: '/contact', label: 'Contact' },
        { to: isAdmin ? '/admin' : '/admin-login', label: isAdmin ? 'Dashboard' : 'Admin' }
    ]

    return (
        <header className="sticky top-0 bg-white/80 backdrop-blur z-40 shadow-sm">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3">
                    <Logo className="w-10 h-10" />
                    <div className="text-lg font-semibold text-brand">ManavaSeva</div>
                </Link>
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
        </header>
    )
}
