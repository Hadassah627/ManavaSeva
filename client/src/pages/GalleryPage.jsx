import React, { useMemo, useState } from 'react'
import { useData } from '../context/DataContext'

export default function GalleryPage() {
    const { gallery } = useData()
    const [filter, setFilter] = useState('all')
    const categories = useMemo(() => {
        const unique = new Set(gallery.map(item => item.category || 'events'))
        return ['all', ...unique]
    }, [gallery])
    const images = useMemo(() => gallery.filter(i => {
        const category = i.category || 'events'
        return filter === 'all' || category === filter
    }), [gallery, filter])

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-2xl font-semibold">Gallery</h1>
            <div className="mt-4 flex flex-wrap gap-2">
                {categories.map(cat => (
                    <button key={cat} onClick={() => setFilter(cat)} className={`px-3 py-2 rounded ${filter === cat ? 'bg-brand text-white' : 'border rounded text-gray-600'}`}>
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                ))}
            </div>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
                {images.map((img, i) => (
                    <div key={img._id || `${img.image}-${i}`} className="h-40 bg-gray-100 rounded overflow-hidden flex items-center justify-center relative">
                        <img src={img.image} alt={img.caption || 'gallery'} className="w-full h-full object-cover" />
                        {img.caption && <span className="absolute bottom-0 left-0 right-0 bg-black/40 text-white text-xs px-2 py-1">{img.caption}</span>}
                    </div>
                ))}
            </div>
        </div>
    )
}
