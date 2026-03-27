"use client"
import { motion } from "framer-motion";

const OrganismeCard = ({ images, title, description, footer }) => {
    return <>
        <div className="group relative overflow-hidden rounded-lg bg-white shadow-lg">
            <div className="grid grid-cols-2 gap-1">
                {images.map((img, index) => (
                    <img key={index} className="h-40 w-full object-cover" src={img.src} alt={img.alt || title} />
                ))}
            </div>
            <motion.div className="p-4"
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="font-serif text-xl font-semibold text-green-700 text-center mb-2">{title}</h2>
                <div className="text-sm text-gray-700 space-y-2">
                    {description.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
                {footer && (
                    <p className="border-t-2 mt-3 pt-2 italic font-bold text-sm text-center text-green-800">
                        {footer}
                    </p>
                )}
            </motion.div>
        </div>
    </>
}

export default OrganismeCard;
