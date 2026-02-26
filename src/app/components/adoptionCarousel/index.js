"use client"
import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

const INTERVAL_MS = 3000;

const variants = {
  enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
};

export default function AdoptionCarousel({ images }) {
  const [[index, dir], setPage] = useState([0, 1]);

  const next = useCallback(() => {
    setPage(([prev]) => [(prev + 1) % images.length, 1]);
  }, [images.length]);

  const prev = useCallback(() => {
    setPage(([prev]) => [(prev - 1 + images.length) % images.length, -1]);
  }, [images.length]);

  const goTo = (i) => {
    setPage(([prev]) => [i, i > prev ? 1 : -1]);
  };

  useEffect(() => {
    const id = setInterval(next, INTERVAL_MS);
    return () => clearInterval(id);
  }, [next]);

  const current = images[index];

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden select-none">
      {/* Slides */}
      <AnimatePresence initial={false} custom={dir}>
        <motion.img
          key={index}
          src={current.src}
          alt={current.alt}
          custom={dir}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
      </AnimatePresence>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        aria-label="Image précédente"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors"
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Image suivante"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors"
      >
        ›
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Aller à l'image ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === index ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
