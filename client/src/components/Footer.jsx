import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t mt-16">
            <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                    <div className="font-semibold text-brand text-lg">ManavaSeva</div>
                    <div className="text-sm text-gray-600">Service to Humanity</div>
                </div>
                <div className="text-sm text-gray-600 text-center">© {new Date().getFullYear()} ManavaSeva. All rights reserved.</div>
                <div className="flex gap-4 text-sm text-gray-600">
                    <Link to="/about" className="hover:text-gray-900 transition">About</Link>
                    <Link to="/works" className="hover:text-gray-900 transition">Our Work</Link>
                    <Link to="/contact" className="hover:text-gray-900 transition">Contact</Link>
                </div>
            </div>
        </footer>
    )
}
