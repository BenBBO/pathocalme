"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "../lightbox";

const OrganismeCard = ({ images, title, summary, description, footer }) => {
    const [lightboxIndex, setLightboxIndex] = useState(null);
    const [expanded, setExpanded] = useState(false);

    return (<>
        <motion.div
            className="flex flex-col overflow-hidden rounded-2xl bg-nature/30 shadow-lg border border-secondary/10 h-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 will-change-transform"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            {/* Image area — 2/3 ratio */}
            <div className="relative flex-shrink-0" style={{ minHeight: "320px", aspectRatio: "16/9" }}>
                {/* Main cover image */}
                <img
                    className="h-full w-full object-cover cursor-pointer transition-transform duration-500 hover:scale-105"
                    src={images[0].src}
                    alt={images[0].alt || title}
                    onClick={() => setLightboxIndex(0)}
                />
                {/* Gradient overlay for smooth image-to-content transition */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-nature/40 to-transparent pointer-events-none" />
                {/* Thumbnail strip overlay (if more than 1 image) */}
                {images.length > 1 && (
                    <div className="absolute bottom-0 left-0 right-0 flex gap-1 p-2 bg-gradient-to-t from-black/60 to-transparent">
                        {images.map((img, index) => (
                            <button
                                key={index}
                                onClick={() => setLightboxIndex(index)}
                                className={`h-12 w-12 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all hover:scale-105 ${index === 0 ? "border-white" : "border-white/50 hover:border-white"}`}
                                aria-label={`Voir photo ${index + 1}`}
                                aria-current={index === 0 ? "true" : undefined}
                            >
                                <img className="h-full w-full object-cover" src={img.src} alt={img.alt || ""} />
                            </button>
                        ))}
                        <span className="flex items-center text-white text-xs font-medium ml-auto pr-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                            </svg>
                            {images.length} photos
                        </span>
                    </div>
                )}
            </div>

            {/* Content area */}
            <div className="flex flex-col flex-grow p-5">
                {/* Title badge */}
                <div className="flex justify-center -mt-9 mb-3 relative z-10">
                    <h2 className="text-lg font-bold text-white bg-secondary px-6 py-2 rounded-full shadow-md">
                        {title}
                    </h2>
                </div>

                {/* Summary — always visible */}
                <div className="text-sm text-gray-700 leading-relaxed bg-white rounded-xl p-4 shadow-sm border border-secondary/5">
                    {summary}
                </div>

                {/* Full description — expandable with distinct background */}
                <AnimatePresence initial={false}>
                    {expanded && (
                        <motion.div
                            className="text-sm text-gray-700 space-y-2 leading-relaxed mt-3 bg-organisme rounded-xl p-4 border-l-4 border-text-nature shadow-inner"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {description.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Voir plus / Voir moins — centered pill button */}
                {description && description.length > 0 && (
                    <div className="flex justify-center mt-4">
                        <button
                            onClick={() => setExpanded(!expanded)}
                            className="inline-flex items-center gap-1.5 px-5 py-2 text-sm font-semibold rounded-full bg-secondary text-white hover:bg-text-nature shadow-md hover:shadow-lg transition-all duration-200"
                            aria-expanded={expanded}
                        >
                            {expanded ? "Voir moins" : "Voir plus"}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                )}

                <div className="flex-grow" />

                {footer && (
                    <div className="mt-4 bg-secondary/10 rounded-xl px-4 py-3">
                        <p className="font-semibold text-sm text-center text-secondary italic">
                            {footer}
                        </p>
                    </div>
                )}
            </div>
        </motion.div>

        {/* Lightbox */}
        {lightboxIndex !== null && (
            <Lightbox
                images={images}
                initialIndex={lightboxIndex}
                onClose={() => setLightboxIndex(null)}
            />
        )}
    </>)
}

export default OrganismeCard;
