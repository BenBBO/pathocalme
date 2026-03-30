"use client";
import { motion } from "framer-motion";
import { formatEventDate } from "@/utils/dates";

export default function EvenementCard({ evenement, isPast, onClick }) {
  const dateFormatted = formatEventDate(evenement.date);

  const miniatureSrc = `/images/evenements/${evenement.id}/${evenement.miniature}`;

  return (
    <motion.div
      className="group cursor-pointer rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-300"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Image with gradient overlay */}
      <div className="relative h-56 overflow-hidden">
        <img
          loading="lazy"
          src={miniatureSrc}
          alt={evenement.titre}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Badge */}
        <span
          className={`absolute top-3 right-3 text-xs font-bold px-3 py-1.5 rounded-full shadow-md backdrop-blur-sm ${
            isPast
              ? "bg-gray-600/80 text-white"
              : "bg-green-600/90 text-white"
          }`}
        >
          {isPast ? "Passé" : "À venir"}
        </span>

        {/* Date badge on image */}
        <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 opacity-80"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-sm font-medium drop-shadow-md">
            {dateFormatted}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-secondary group-hover:text-secondary/80 transition-colors">
          {evenement.titre}
        </h3>
        <p className="text-sm text-gray-500 mt-2 line-clamp-2 leading-relaxed">
          {evenement.description}
        </p>

        {/* Footer info */}
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
          <span className="text-xs font-semibold text-secondary/70 bg-event rounded-full px-3 py-1">
            {evenement.tarif}
          </span>
          <span className="text-xs font-medium text-secondary/60 flex items-center gap-1 group-hover:text-secondary transition-colors">
            Voir plus
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      </div>
    </motion.div>
  );
}
