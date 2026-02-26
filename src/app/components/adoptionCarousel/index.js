"use client"
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const images = [
  "/images/adoption/adoption1.jpg",
  "/images/adoption/adoption2.jpg",
  "/images/adoption/adoption3.jpg",
  "/images/adoption/adoption4.jpg",
  "/images/adoption/adoption5.jpg",
  "/images/adoption/adoption6.jpg",
  "/images/adoption/adoption7.jpg",
  "/images/adoption/adoption8.jpg",
];

export default function AdoptionCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => setCurrent(index);

  return (
    <div className="relative w-full h-full min-h-64 overflow-hidden rounded-2xl">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt={`Photo adoption ${current + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Image ${i + 1}`}
            aria-current={i === current ? "true" : undefined}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white ${
              i === current ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
