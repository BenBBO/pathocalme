"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "../lightbox";

const OrganismeCard = ({ images, title, description, footer }) => {
    const [lightboxIndex, setLightboxIndex] = useState(null);

    return <>
        <motion.div
            className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100 h-full"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            {/* Image area — fixed height */}
            <div className="relative h-56 flex-shrink-0">
                {/* Main cover image */}
                <img
                    className="h-full w-full object-cover cursor-pointer"
                    src={images[0].src}
                    alt={images[0].alt || title}
                    onClick={() => setLightboxIndex(0)}
                />
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

            {/* Content area — flex-grow to fill remaining space */}
            <div className="flex flex-col flex-grow p-5">
                <h2 className="text-xl font-bold text-secondary text-center mb-3">{title}</h2>
                <div className="text-sm text-gray-600 space-y-2 leading-relaxed flex-grow">
                    {description.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
                {footer && (
                    <p className="border-t border-gray-200 mt-4 pt-3 font-semibold text-sm text-center text-secondary italic">
                        {footer}
                    </p>
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
    </>
}

export default OrganismeCard;
