import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const noop = () => { }

const Carousel = ({
    items = [],
    baseWidth = 300,
    autoplay = true,
    autoplayDelay = 3000,
    pauseOnHover = true,
    loop = true,
    round = false
}) => {
    const [index, setIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false)

    const total = items.length
    const hasMultiple = total > 1

    const clampIndex = useCallback((value) => {
        if (!total) return 0
        if (loop) {
            return (value + total) % total
        }
        return Math.min(Math.max(value, 0), total - 1)
    }, [loop, total])

    const goTo = useCallback((value) => {
        setIndex(clampIndex(value))
    }, [clampIndex])

    const next = useCallback(() => {
        if (!hasMultiple && !loop) return
        setIndex((prev) => clampIndex(prev + 1))
    }, [clampIndex, hasMultiple, loop])

    const prev = useCallback(() => {
        if (!hasMultiple && !loop) return
        setIndex((prev) => clampIndex(prev - 1))
    }, [clampIndex, hasMultiple, loop])

    useEffect(() => {
        if (!autoplay || !hasMultiple) return noop
        if (pauseOnHover && isHovered) return noop

        const timer = setInterval(next, autoplayDelay)
        return () => clearInterval(timer)
    }, [autoplay, autoplayDelay, hasMultiple, pauseOnHover, isHovered, next])

    useEffect(() => {
        if (index >= total) {
            setIndex(total ? total - 1 : 0)
        }
    }, [index, total])

    const activeItem = useMemo(() => items[index], [items, index])

    if (!total) {
        return null
    }

    return (
        <div
            className="w-full"
            onMouseEnter={() => pauseOnHover && setIsHovered(true)}
            onMouseLeave={() => pauseOnHover && setIsHovered(false)}
        >
            <div className="relative overflow-hidden">
                <AnimatePresence mode="wait">
                    {activeItem && (
                        <motion.article
                            key={activeItem?.id ?? index}
                            initial={{ opacity: 0, y: 60, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -60, scale: 0.98 }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            style={{ minHeight: 320, minWidth: baseWidth }}
                            className="relative bg-white p-8 rounded-3xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-transparent to-emerald-50 opacity-90" aria-hidden="true" />
                            <div className="relative flex flex-col gap-5">
                                {activeItem.image && (
                                    <div className="relative h-48 rounded-2xl overflow-hidden shadow-inner">
                                        <img
                                            src={activeItem.image}
                                            alt={activeItem.title}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" aria-hidden="true" />
                                    </div>
                                )}
                                <div>
                                    <p className="text-sm uppercase tracking-[0.35em] text-green-500">
                                        Impact #{index + 1}
                                    </p>
                                    <h3 className="text-2xl font-semibold text-gray-900 mt-2">
                                        {activeItem.title}
                                    </h3>
                                    <p className="text-gray-600 mt-3 leading-relaxed">
                                        {activeItem.description}
                                    </p>
                                </div>
                            </div>
                        </motion.article>
                    )}
                </AnimatePresence>

                {hasMultiple && (
                    <>
                        <button
                            type="button"
                            onClick={prev}
                            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 shadow-lg p-3 text-green-600 hover:bg-green-50 transition-colors"
                            aria-label="Previous story"
                        >
                            ‹
                        </button>
                        <button
                            type="button"
                            onClick={next}
                            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 shadow-lg p-3 text-green-600 hover:bg-green-50 transition-colors"
                            aria-label="Next story"
                        >
                            ›
                        </button>
                    </>
                )}
            </div>

            {hasMultiple && (
                <div className="flex items-center justify-center gap-2 mt-6">
                    {items.map((item, idx) => (
                        <button
                            key={item.id ?? idx}
                            type="button"
                            aria-label={`Go to slide ${idx + 1}`}
                            onClick={() => goTo(idx)}
                            className={`transition-all duration-300 ${idx === index
                                ? 'w-10 bg-green-500'
                                : 'w-3 bg-gray-300 hover:bg-green-200'
                                } ${round ? 'h-3 rounded-full' : 'h-[6px] rounded-full'}`}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Carousel
