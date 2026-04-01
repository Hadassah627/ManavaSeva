import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import OurWorks from './pages/OurWorks'
import VolunteerPage from './pages/Volunteer'
import GalleryPage from './pages/GalleryPage'
import Contact from './pages/Contact'
import Admin from './pages/Admin'
import DonationSuccess from './pages/DonationSuccess'
import Donate from './pages/Donate'
import AdminLogin from './pages/AdminLogin'
import RequireAdmin from './components/RequireAdmin'

export default function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                <Routes future={{ v7_relativeSplatPath: true }}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/works" element={<OurWorks />} />
                    <Route path="/volunteer" element={<VolunteerPage />} />
                    <Route path="/gallery" element={<GalleryPage />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/admin-login" element={<AdminLogin />} />
                    <Route path="/admin" element={<RequireAdmin><Admin /></RequireAdmin>} />
                    <Route path="/donate" element={<Donate />} />
                    <Route path="/donation-success" element={<DonationSuccess />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}
