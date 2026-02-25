"use client"
import { motion } from "framer-motion";

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

export default function Equipe() {
  return (
    <>
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
                <div className={`grid gap-0.5 ${animal.images.length > 1 ? "grid-cols-2" : "grid-cols-1"} h-80`}>
                  {animal.images.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={animal.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                      style={animal.objectPosition ? { objectPosition: animal.objectPosition } : undefined}
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