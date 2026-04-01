import React from 'react'
import VolunteerForm from '../components/VolunteerForm'

export default function Volunteer() {
    return (
        <div className="min-h-[70vh] bg-gradient-to-b from-emerald-50 via-white to-white py-16">
            <div className="max-w-4xl mx-auto px-4">
                <VolunteerForm />
            </div>
        </div>
    )
}
