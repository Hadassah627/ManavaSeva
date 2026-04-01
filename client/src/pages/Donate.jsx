import React, { useState } from 'react'
import api from '../services/api'

const amounts = [500, 1000, 2500, 5000]
const modes = ['UPI', 'Bank Transfer', 'Card']

export default function Donate() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', amount: '', message: '', mode: modes[0] })
    const [status, setStatus] = useState('idle')
    const [banner, setBanner] = useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
    }

    const handleQuickAmount = (value) => setForm(prev => ({ ...prev, amount: value }))

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('loading')
        setBanner(null)
        try {
            await api.post('/donations', { ...form, amount: Number(form.amount) })
            setForm({ name: '', email: '', phone: '', amount: '', message: '', mode: modes[0] })
            setBanner({ type: 'success', text: 'Thank you! Our team will reach out with confirmation shortly.' })
        } catch (err) {
            setBanner({ type: 'error', text: err.response?.data?.message || 'Unable to submit donation. Please try again.' })
        } finally {
            setStatus('idle')
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50 py-16 px-4">
            <div className="max-w-5xl mx-auto grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
                <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 space-y-6">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-emerald-500">Donate</p>
                        <h1 className="mt-3 text-3xl font-bold text-slate-900">Fuel the next chapter of ManavaSeva</h1>
                        <p className="mt-2 text-slate-500">All contributions receive 80G receipts within 48 hours.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <label className="text-sm font-medium text-slate-700">Full Name
                            <input name="name" value={form.name} onChange={handleChange} required className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="Ananya Rao" />
                        </label>
                        <label className="text-sm font-medium text-slate-700">Email
                            <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="you@email.com" />
                        </label>
                        <label className="text-sm font-medium text-slate-700">Phone
                            <input name="phone" value={form.phone} onChange={handleChange} required className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="+91 90000 90000" />
                        </label>
                        <label className="text-sm font-medium text-slate-700">Preferred Mode
                            <select name="mode" value={form.mode} onChange={handleChange} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3">
                                {modes.map(mode => <option key={mode}>{mode}</option>)}
                            </select>
                        </label>
                    </div>

                    <div>
                        <label className="text-sm font-medium text-slate-700">Amount (₹)</label>
                        <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {amounts.map(value => (
                                <button type="button" key={value} onClick={() => handleQuickAmount(value)} className={`rounded-2xl border px-4 py-3 text-sm font-semibold ${form.amount === value ? 'bg-emerald-500 text-white border-emerald-500' : 'border-slate-200 text-slate-600'}`}>
                                    ₹{value.toLocaleString('en-IN')}
                                </button>
                            ))}
                            <input type="number" name="amount" value={form.amount} onChange={handleChange} required className="col-span-2 sm:col-span-4 rounded-2xl border border-slate-200 px-4 py-3" placeholder="Enter custom amount" />
                        </div>
                    </div>

                    <label className="text-sm font-medium text-slate-700">Message (optional)
                        <textarea name="message" value={form.message} onChange={handleChange} rows="4" className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="Tell us which initiative you’d like to support" />
                    </label>

                    <button type="submit" disabled={status === 'loading'} className="w-full rounded-2xl bg-brand px-6 py-3 text-lg font-semibold text-white shadow-lg shadow-emerald-500/40 disabled:opacity-70">
                        {status === 'loading' ? 'Processing…' : 'Contribute now'}
                    </button>

                    {banner && (
                        <div className={`rounded-2xl px-4 py-3 text-sm ${banner.type === 'success' ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-600'}`}>
                            {banner.text}
                        </div>
                    )}
                </form>

                <aside className="bg-emerald-900 text-white rounded-3xl p-8 space-y-6">
                    <div>
                        <p className="text-sm uppercase tracking-[0.4em] text-emerald-200">Impact tracker</p>
                        <h2 className="mt-3 text-2xl font-semibold">Every ₹1,000 today funds:</h2>
                        <ul className="mt-4 space-y-3 text-emerald-50/90 text-sm">
                            <li>• 2 weeks of nutrition kits for a child</li>
                            <li>• 15 learning hours via digital pods</li>
                            <li>• Safe water access for 3 families</li>
                        </ul>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/10">
                        <p className="text-sm text-emerald-200">Need help?</p>
                        <h3 className="text-lg font-semibold">donations@manavaseva.org</h3>
                        <p className="text-sm text-emerald-100/70">+91 98765 43210</p>
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-[0.4em] text-emerald-200">Certifications</p>
                        <p className="mt-2 text-sm">80G • 12A • CSR-1 compliant</p>
                    </div>
                </aside>
            </div>
        </div>
    )
}
