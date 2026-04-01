import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function AdminLogin() {
    const { login, authError } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const [form, setForm] = useState({ email: '', password: '' })
    const [status, setStatus] = useState('idle')
    const [error, setError] = useState(null)

    const from = location.state?.from?.pathname || '/admin'

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('loading')
        setError(null)
        try {
            await login(form)
            navigate(from, { replace: true })
        } catch (err) {
            setError(authError || 'Unable to sign in. Please check your credentials.')
        } finally {
            setStatus('idle')
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4 py-16">
            <div className="w-full max-w-md">
                <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 shadow-2xl">
                    <p className="text-xs uppercase tracking-[0.4em] text-emerald-200">Admin Access</p>
                    <h1 className="mt-4 text-3xl font-semibold text-white">Enter the control room</h1>
                    <p className="mt-2 text-sm text-emerald-100/80">
                        Only authorized ManavaSeva admins can review submissions and post new events.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                        <div>
                            <label className="text-sm font-medium text-emerald-100">Admin Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                placeholder="admin@manavaseva.com"
                                className="mt-2 w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-emerald-100">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                required
                                placeholder="••••••••"
                                className="mt-2 w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full rounded-2xl bg-emerald-400 px-4 py-3 text-base font-semibold text-emerald-900 shadow-lg shadow-emerald-500/40 transition hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-80"
                        >
                            {status === 'loading' ? 'Signing in…' : 'Sign in as Admin'}
                        </button>
                    </form>

                    {(error || authError) && (
                        <div className="mt-5 rounded-2xl border border-rose-500/20 bg-rose-500/10 px-4 py-3 text-sm text-rose-100">
                            {error || authError}
                        </div>
                    )}

                    <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/90">
                        <p className="text-xs uppercase tracking-[0.4em] text-emerald-200">Admin Credentials</p>
                        <div className="mt-3 space-y-2 font-mono">
                            <div className="flex justify-between gap-4">
                                <span className="text-white/60">Email</span>
                                <span className="text-white">admin@manavaseva.com</span>
                            </div>
                            <div className="flex justify-between gap-4">
                                <span className="text-white/60">Password</span>
                                <span className="text-white">Admin@123</span>
                            </div>
                        </div>
                        <p className="mt-3 text-xs text-white/60">Change these credentials from the database once your team sets up unique accounts.</p>
                    </div>
                </div>
                <p className="mt-6 text-center text-xs uppercase tracking-[0.4em] text-white/40">Secure Portal · ManavaSeva</p>
            </div>
        </div>
    )
}
