import React, { useState } from 'react'
import api from '../services/api'

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState(null)

    const handle = e => setForm({ ...form, [e.target.name]: e.target.value })
    const submit = async (e) => {
        e.preventDefault();
        try {
            setStatus('sending')
            // For demo, we'll POST to donations as contact
            await api.post('/donations', { name: form.name, email: form.email, amount: 1, message: form.message })
            setStatus('sent')
        } catch (err) { setStatus('error') }
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-2xl font-semibold">Contact Us</h1>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <form onSubmit={submit} className="bg-white p-6 rounded shadow">
                    <input name="name" value={form.name} onChange={handle} className="w-full border p-2 rounded" placeholder="Name" />
                    <input name="email" value={form.email} onChange={handle} className="w-full border p-2 rounded mt-3" placeholder="Email" />
                    <textarea name="message" value={form.message} onChange={handle} className="w-full border p-2 rounded mt-3" placeholder="Message" />
                    <div className="mt-3 text-right">
                        <button className="px-4 py-2 bg-brand text-white rounded">Send</button>
                    </div>
                </form>

                <div className="bg-white p-6 rounded shadow">
                    <h3 className="font-semibold">Visit Us</h3>
                    <p className="text-sm text-gray-600 mt-2">123 Charity Ave, City, Country</p>
                    <p className="text-sm text-gray-600 mt-2">Phone: +1 234 567 890</p>
                    <div className="mt-4">
                        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019777786596!2d-122.4194150846817!3d37.774929779759195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c2f0b3b0f%3A0x4a1c3a1d4b6f6f6!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin" width="100%" height="200" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
