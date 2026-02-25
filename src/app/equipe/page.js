"use client"
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const animals = [
  {
    name: "Apollon",
    description: "Le cochon costaud qui adore les gratouilles",
    images: ["images/equipe/appolon1.jpg", "images/equipe/appolon2.jpg"],
  },
  {
    name: "T'choupi",
    description: "Le roi des conneries élevé au biberon, il croit qu'il est un humain",
    images: ["images/equipe/Tchoupi.jpg"],
  },
  {
    name: "Malin",
    description: "Le lapin qui sait réclamer des câlins",
    images: ["images/equipe/Malin.jpg"]    
  },
  {
    name: "Pouik",
    description: "Élevée par son humaine, elle aime manger avec vous un petit bout de sandwich",
    images: ["images/equipe/Pouik1.jpg", "images/equipe/Pouik2.jpg"],
  },
  {
    name: "Câline",
    description: "La poule aussi douce que gentille",
    images: ["images/equipe/Caline.jpg"],
  },
  {
    name: "Zazou",
    description: "Fils d'Umi, que rien ne dérange et qui prend la vie comme un long fleuve tranquille",
    images: ["images/equipe/Zazou1.jpg", "images/equipe/Zazou2.jpg"],
  },
  {
    name: "Olaf",
    description: "Trop gentil, il vous lave dès que possible avec sa langue",
    images: ["images/equipe/Olaf1.jpg", "images/equipe/Olaf2.jpg"],
  },
  {
    name: "Zoom",
    description: "La chatte qui file plus vite que son ombre",
    images: ["images/equipe/Zoom.jpg"]
  },
  {
    name: "Rasta",
    description: "Aussi cool qu'adorable",
    images: ["images/equipe/Rasta1.jpg", "images/equipe/Rasta2.jpg"],
  },
  {
    name: "Tagada",
    description: "Il donne des coups de tête aux autres pour avoir les plus grosses caresses",
    images: ["images/equipe/Tagada.jpg"],
  },
  {
    name: "Gros Coco",
    description: "Né à la ferme, il saura vous impressionner par sa douceur",
    images: ["images/equipe/GrosCoco1.jpg", "images/equipe/GrosCoco2.jpg"],
  },
  {
    name: "Szwen",
    description: "Tellement sensible que même les gouttes d'eau le dérangent",
    images: ["images/equipe/Szwen .jpg"]
  },
  {
    name: "Canail",
    description: "Qui aime trop les feuillages",
    images: ["images/equipe/Canail.jpg"],
  },
  {
    name: "Lustucru",
    description: "Répond à son appel pour manger, sauf lors de son hibernation",
    images: ["images/equipe/Lustucru.jpg"]
  },
];

// Flatten all images into a single list for gallery navigation
const allPhotos = animals.flatMap((animal) =>
  animal.images.map((src) => ({ src, name: animal.name, description: animal.description }))
);

function Lightbox({ photoIndex, onClose, onPrev, onNext }) {
  const photo = allPhotos[photoIndex];

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 z-10"
          onClick={onClose}
          aria-label="Fermer"
        >
          &times;
        </button>

        {/* Prev button */}
        <button
          className="absolute left-4 text-white text-5xl font-bold hover:text-gray-300 z-10 select-none"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          aria-label="Photo précédente"
        >
          &#8249;
        </button>

        {/* Image + caption */}
        <div
          className="flex flex-col items-center max-w-4xl max-h-screen px-16"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={photo.src}
            alt={photo.name}
            className="max-h-[80vh] max-w-full object-contain rounded-xl shadow-2xl"
          />
          <div className="mt-4 text-center">
            <h2 className="text-2xl font-bold text-white">{photo.name}</h2>
            <p className="text-gray-300 mt-1">{photo.description}</p>
            <p className="text-gray-500 text-sm mt-2">{photoIndex + 1} / {allPhotos.length}</p>
          </div>
        </div>

        {/* Next button */}
        <button
          className="absolute right-4 text-white text-5xl font-bold hover:text-gray-300 z-10 select-none"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          aria-label="Photo suivante"
        >
          &#8250;
        </button>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Equipe() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = useCallback((photoIndex) => {
    setLightboxIndex(photoIndex);
  }, []);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const prevPhoto = useCallback(() => {
    setLightboxIndex((i) => (i - 1 + allPhotos.length) % allPhotos.length);
  }, []);

  const nextPhoto = useCallback(() => {
    setLightboxIndex((i) => (i + 1) % allPhotos.length);
  }, []);

  // Build a lookup: animal name + image index → flat photo index
  const getPhotoIndex = (animalName, imageIndex) => {
    let count = 0;
    for (const animal of animals) {
      if (animal.name === animalName) return count + imageIndex;
      count += animal.images.length;
    }
    return 0;
  };

  return (
    <>
      {lightboxIndex !== null && (
        <Lightbox
          photoIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevPhoto}
          onNext={nextPhoto}
        />
      )}

      <section className="bg-primary py-14">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-10 lg:py-8">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-secondary md:text-6xl lg:text-7xl">
            Nos animaux
          </h1>
          <p className="mb-8 text-xl font-normal text-gray-600 lg:text-2xl sm:px-16 lg:px-48">
            Venez rencontrer les résidents de la ferme pédagogique Path&apos;O Calme
          </p>
        </div>
      </section>

      <section className="bg-white py-12 px-4">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {animals.map((animal, index) => (
              <motion.div
                key={animal.name}
                className="rounded-2xl shadow-lg overflow-hidden relative"
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className={`grid gap-0.5 ${animal.images.length > 1 ? "grid-cols-2" : "grid-cols-1"} h-[28rem]`}>
                  {animal.images.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={animal.name}
                      loading="lazy"
                      className="w-full h-full object-cover cursor-pointer hover:brightness-90 transition-[filter]"
                      style={animal.objectPosition ? { objectPosition: animal.objectPosition } : undefined}
                      onClick={() => openLightbox(getPhotoIndex(animal.name, i))}
                    />
                  ))}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent px-5 pt-12 pb-5">
                  <h2 className="text-2xl font-bold text-white drop-shadow">{animal.name}</h2>
                  <p className="text-sm text-gray-200 leading-snug mt-1 drop-shadow">{animal.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}