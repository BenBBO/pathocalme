"use client";
import { motion } from "framer-motion";

export default function EvenementCard({ evenement, isPast, onClick }) {
  const dateObj = new Date(evenement.date + "T00:00:00");
  const dateFormatted = dateObj.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const miniatureSrc = `/images/evenements/${evenement.id}/${evenement.miniature}`;

  return (
    <motion.div
      className="cursor-pointer rounded-xl overflow-hidden shadow-md bg-white hover:shadow-xl transition-shadow"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="relative">
        <img
          loading="lazy"
          src={miniatureSrc}
          alt={evenement.titre}
          className="w-full h-48 object-cover"
        />
        <span
          className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full ${
            isPast
              ? "bg-gray-500 text-white"
              : "bg-green-600 text-white"
          }`}
        >
          {isPast ? "Passé" : "À venir"}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-secondary">{evenement.titre}</h3>
        <p className="text-sm text-gray-500 mt-1">{dateFormatted}</p>
      </div>
    </motion.div>
  );
}
