"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { formatEventDate } from "@/utils/dates";

export default function EvenementModal({ evenement, onClose }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const dateFormatted = formatEventDate(evenement.date);

  const photos = evenement.photos.map((photo, i) => ({
    src: `/images/evenements/${evenement.id}/${photo}`,
    alt: `${evenement.titre} - Photo ${i + 1}`,
  }));

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % photos.length);
  }, [photos.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + photos.length) % photos.length);
  }, [photos.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (lightboxIndex !== null) {
          closeLightbox();
        } else {
          onClose();
        }
      }
      if (lightboxIndex !== null) {
        if (e.key === "ArrowRight") goNext();
        if (e.key === "ArrowLeft") goPrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, lightboxIndex, closeLightbox, goNext, goPrev]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <div>
              <h2 className="text-2xl font-bold text-secondary">
                {evenement.titre}
              </h2>
              <p className="text-sm text-gray-500 mt-1">{dateFormatted}</p>
            </div>
            <button
              className="text-gray-400 hover:text-gray-600 transition-colors"
              onClick={onClose}
              aria-label="Fermer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="p-6 space-y-6">
            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              {evenement.description}
            </p>

            {/* Info */}
            <div className="flex flex-wrap gap-4">
              <div className="bg-event rounded-lg px-4 py-2">
                <span className="text-xs text-gray-500 block">Tarif</span>
                <span className="text-sm font-semibold text-secondary">
                  {evenement.tarif}
                </span>
              </div>
              {evenement.maxPersonnes && (
                <div className="bg-event rounded-lg px-4 py-2">
                  <span className="text-xs text-gray-500 block">
                    Places max
                  </span>
                  <span className="text-sm font-semibold text-secondary">
                    {evenement.maxPersonnes} personnes
                  </span>
                </div>
              )}
            </div>

            {/* Affiche */}
            {evenement.affiche && (
              <div>
                <h3 className="text-lg font-bold text-secondary mb-3">
                  Affiche
                </h3>
                <div className="flex flex-col items-center gap-3">
                  <img
                    src={`/images/evenements/${evenement.id}/${evenement.affiche}`}
                    alt={`Affiche - ${evenement.titre}`}
                    className="rounded-xl shadow-md max-h-96 object-contain"
                  />
                  <a
                    href={`/images/evenements/${evenement.id}/${evenement.affiche}`}
                    download
                    className="inline-flex items-center gap-2 bg-secondary text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity text-sm font-semibold"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3"
                      />
                    </svg>
                    Télécharger l&apos;affiche
                  </a>
                </div>
              </div>
            )}

            {/* Photos */}
            {photos.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-secondary mb-3">
                  Photos
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {photos.map((photo, index) => (
                    <motion.div
                      key={index}
                      className="rounded-xl overflow-hidden shadow-md cursor-pointer"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => setLightboxIndex(index)}
                    >
                      <img
                        loading="lazy"
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-32 object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
            onClick={closeLightbox}
            aria-label="Fermer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="absolute top-4 left-4 text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
            {lightboxIndex + 1} / {photos.length}
          </div>

          {photos.length > 1 && (
            <button
              className="absolute left-4 text-white hover:text-gray-300 z-50 bg-black/40 rounded-full p-2"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              aria-label="Photo précédente"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          <motion.img
            key={lightboxIndex}
            src={photos[lightboxIndex].src}
            alt={photos[lightboxIndex].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          />

          {photos.length > 1 && (
            <button
              className="absolute right-4 text-white hover:text-gray-300 z-50 bg-black/40 rounded-full p-2"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              aria-label="Photo suivante"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
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
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
