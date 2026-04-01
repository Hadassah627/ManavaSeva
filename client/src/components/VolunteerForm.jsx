import React, { useMemo, useState } from 'react'
import api from '../services/api'

const volunteerEvents = [
    'Bridge the Classroom Drive',
    'Drink Safe Villages',
    'Sakhi Livelihood Circles',
    'Green Canopy Weekends',
    'Community Health Camps',
    'Emergency Relief Pods'
]

export default function VolunteerForm() {
    const eventOptions = useMemo(() => volunteerEvents, [])
    const [form, setForm] = useState({ name: '', email: '', phone: '', address: '', event: '' })
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState(null)

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = async (e) => {
        e.preventDefault()
        setMessage(null)
        if (!form.name || !form.email || !form.event) {
            setMessage({ type: 'error', text: 'Name, Email and Preferred Event are required.' })
            return
        }
        try {
            setLoading(true)
            await api.post('/volunteer', form)
            setMessage({ type: 'success', text: 'Thank you for volunteering! We will contact you.' })
            setForm({ name: '', email: '', phone: '', address: '', event: '' })
        } catch (err) {
            setMessage({ type: 'error', text: err?.response?.data?.message || 'Submission failed' })
        } finally { setLoading(false) }
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-[32px] border border-emerald-100 shadow-xl shadow-emerald-50/70 px-8 py-10">
            <div className="text-center">
                <p className="text-xs uppercase tracking-[0.4em] text-emerald-500">Volunteer</p>
                <h3 className="text-3xl font-semibold text-gray-900 mt-2">Join an upcoming ManavaSeva event</h3>
                <p className="text-sm text-gray-500 mt-3">Leave your details and we’ll confirm your slot within 24 hours.</p>
            </div>
            {message && (
                <div className={`mt-6 p-4 rounded-2xl text-sm font-medium text-center ${message.type === 'error' ? 'bg-rose-50 text-rose-700' : 'bg-emerald-50 text-emerald-700'}`}>
                    {message.text}
                </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
                <div>
                    <label className="text-sm font-semibold text-gray-700">Full Name<span className="text-rose-500">*</span></label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Your full name" className="mt-2 w-full border border-gray-200 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
                <div>
                    <label className="text-sm font-semibold text-gray-700">Email Address<span className="text-rose-500">*</span></label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@email.com" className="mt-2 w-full border border-gray-200 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
                <div>
                    <label className="text-sm font-semibold text-gray-700">Phone</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="(+91) 90000 12345" className="mt-2 w-full border border-gray-200 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
                <div>
                    <label className="text-sm font-semibold text-gray-700">City / Address</label>
                    <input name="address" value={form.address} onChange={handleChange} placeholder="City / Village" className="mt-2 w-full border border-gray-200 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
                <div className="md:col-span-2">
                    <label className="text-sm font-semibold text-gray-700">Preferred Event<span className="text-rose-500">*</span></label>
                    <select
                        name="event"
                        value={form.event}
                        onChange={handleChange}
                        className="mt-2 w-full border border-gray-200 rounded-2xl p-3 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                        <option value="">Select an event</option>
                        {eventOptions.map(eventName => (
                            <option key={eventName} value={eventName}>{eventName}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-xs text-gray-500">We never share your data. Expect a confirmation call and reminder text.</p>
                <button type="submit" disabled={loading} className="px-8 py-3 bg-emerald-600 text-white font-semibold rounded-2xl shadow-lg shadow-emerald-200/60 disabled:opacity-60">
                    {loading ? 'Sending...' : 'Submit'}
                </button>
            </div>
        </form>
    )
}
