import React, { useEffect, useState } from 'react'
import api from '../services/api'
import { useData } from '../context/DataContext'

const tabs = [
    { id: 'event', label: 'Add Event' },
    { id: 'photo', label: 'Add Photo' }
]

export default function Admin() {
    const [volunteers, setVolunteers] = useState([])
    const [stats, setStats] = useState({ volunteers: 0, projects: 0 })
    const [activeTab, setActiveTab] = useState('event')
    const [eventForm, setEventForm] = useState({ title: '', description: '', image: '', category: 'education', status: 'Planned' })
    const [photoForm, setPhotoForm] = useState({ image: '', category: 'events' })
    const [eventState, setEventState] = useState({ loading: false, message: null, error: null })
    const [photoState, setPhotoState] = useState({ loading: false, message: null, error: null })
    const { projects, addProject, addPhoto } = useData()

    useEffect(() => {
        const load = async () => {
            const v = await api.get('/volunteer')
            setVolunteers(v.data)
            setStats({ volunteers: v.data.length, projects: projects.length })
        }
        load()
    }, [projects.length])

    const handleEventSubmit = async (e) => {
        e.preventDefault()
        setEventState({ loading: true, message: null, error: null })
        try {
            await addProject(eventForm)
            setEventForm({ title: '', description: '', image: '', category: 'education', status: 'Planned' })
            setEventState({ loading: false, message: 'Event added successfully', error: null })
        } catch (err) {
            setEventState({ loading: false, message: null, error: err.response?.data?.message || 'Unable to add event' })
        }
    }

    const handlePhotoSubmit = async (e) => {
        e.preventDefault()
        setPhotoState({ loading: true, message: null, error: null })
        try {
            await addPhoto(photoForm)
            setPhotoForm({ image: '', category: 'events' })
            setPhotoState({ loading: false, message: 'Photo uploaded successfully', error: null })
        } catch (err) {
            setPhotoState({ loading: false, message: null, error: err.response?.data?.message || 'Unable to upload photo' })
        }
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
            <p className="text-gray-500 mt-2">Create events and refresh the gallery in real time.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="card">Volunteers<br /><div className="text-3xl font-bold">{stats.volunteers}</div></div>
                <div className="card">Projects<br /><div className="text-3xl font-bold">{projects.length}</div></div>
                <div className="card">Gallery<br /><div className="text-3xl font-bold">Live</div></div>
            </div>

            <section className="mt-10">
                <div className="flex gap-4 border-b border-gray-200">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-4 py-2 text-sm font-semibold border-b-2 transition ${activeTab === tab.id ? 'border-brand text-brand' : 'border-transparent text-gray-500 hover:text-brand/70'}`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {activeTab === 'event' && (
                    <form onSubmit={handleEventSubmit} className="mt-6 max-w-3xl bg-white rounded-2xl shadow p-6 space-y-4">
                        <div>
                            <label className="text-sm font-semibold text-gray-700">Title</label>
                            <input value={eventForm.title} onChange={e => setEventForm({ ...eventForm, title: e.target.value })} required className="mt-2 w-full border rounded-xl px-4 py-2.5" placeholder="Community Health Camp" />
                        </div>
                        <div>
                            <label className="text-sm font-semibold text-gray-700">Description</label>
                            <textarea value={eventForm.description} onChange={e => setEventForm({ ...eventForm, description: e.target.value })} required rows="3" className="mt-2 w-full border rounded-xl px-4 py-2.5" placeholder="Describe the initiative" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-semibold text-gray-700">Image URL</label>
                                <input value={eventForm.image} onChange={e => setEventForm({ ...eventForm, image: e.target.value })} required className="mt-2 w-full border rounded-xl px-4 py-2.5" placeholder="https://..." />
                            </div>
                            <div>
                                <label className="text-sm font-semibold text-gray-700">Category</label>
                                <select value={eventForm.category} onChange={e => setEventForm({ ...eventForm, category: e.target.value })} className="mt-2 w-full border rounded-xl px-4 py-2.5">
                                    <option value="education">Education</option>
                                    <option value="health">Health</option>
                                    <option value="community">Community</option>
                                    <option value="events">Events</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="text-sm font-semibold text-gray-700">Status</label>
                            <select value={eventForm.status} onChange={e => setEventForm({ ...eventForm, status: e.target.value })} className="mt-2 w-full border rounded-xl px-4 py-2.5">
                                <option value="Planned">Planned</option>
                                <option value="Ongoing">Ongoing</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div>
                        <button type="submit" disabled={eventState.loading} className="w-full md:w-auto px-6 py-3 bg-brand text-white font-semibold rounded-xl shadow">
                            {eventState.loading ? 'Saving…' : 'Add Event'}
                        </button>
                        {eventState.message && <p className="text-sm text-emerald-600">{eventState.message}</p>}
                        {eventState.error && <p className="text-sm text-rose-600">{eventState.error}</p>}
                    </form>
                )}

                {activeTab === 'photo' && (
                    <form onSubmit={handlePhotoSubmit} className="mt-6 max-w-3xl bg-white rounded-2xl shadow p-6 space-y-4">
                        <div>
                            <label className="text-sm font-semibold text-gray-700">Image URL</label>
                            <input value={photoForm.image} onChange={e => setPhotoForm({ ...photoForm, image: e.target.value })} required className="mt-2 w-full border rounded-xl px-4 py-2.5" placeholder="https://..." />
                        </div>
                        <div>
                            <label className="text-sm font-semibold text-gray-700">Category</label>
                            <select value={photoForm.category} onChange={e => setPhotoForm({ ...photoForm, category: e.target.value })} className="mt-2 w-full border rounded-xl px-4 py-2.5">
                                <option value="events">Events</option>
                                <option value="education">Education</option>
                                <option value="health">Health</option>
                                <option value="community">Community</option>
                            </select>
                        </div>
                        <button type="submit" disabled={photoState.loading} className="w-full md:w-auto px-6 py-3 bg-brand text-white font-semibold rounded-xl shadow">
                            {photoState.loading ? 'Uploading…' : 'Add Photo'}
                        </button>
                        {photoState.message && <p className="text-sm text-emerald-600">{photoState.message}</p>}
                        {photoState.error && <p className="text-sm text-rose-600">{photoState.error}</p>}
                    </form>
                )}
            </section>

            <section className="mt-12">
                <h2 className="text-xl font-semibold">Volunteers</h2>
                <div className="mt-2 bg-white rounded shadow overflow-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50">
                            <tr><th className="p-2">Name</th><th>Email</th><th>Phone</th></tr>
                        </thead>
                        <tbody>
                            {volunteers.map(v => (
                                <tr key={v._id}><td className="p-2">{v.name}</td><td>{v.email}</td><td>{v.phone}</td></tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}
