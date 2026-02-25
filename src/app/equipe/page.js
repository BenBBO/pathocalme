"use client"
import { motion } from "framer-motion";

const animals = [
  {
    name: "Apollon",
    description: "Le cochon costaud qui adore les gratouilles",
    images: ["images/animaux/cochon_dinde.png", "images/animaux/gratte.png"],
  },
  {
    name: "T'choupi",
    description: "Le roi des conneries élevé au biberon, il croit qu'il est un humain",
    images: ["images/animaux/poussin.png", "images/animaux/copains.png"],
  },
  {
    name: "Malin",
    description: "Le lapin qui sait réclamer des câlins",
    images: ["images/animaux/lapin.png", "images/animaux/lapin2.png"],
  },
  {
    name: "Pouik",
    description: "Élevée par son humaine, elle aime manger avec vous un petit bout de sandwich",
    images: ["images/animaux/ponpon.png"],
  },
  {
    name: "Câline",
    description: "La poule aussi douce que gentille",
    images: ["images/animaux/poule.png"],
  },
  {
    name: "Zazou",
    description: "Fils d'Umi, que rien ne dérange et qui prend la vie comme un long fleuve tranquille",
    images: ["images/animaux/chevreau.png"],
  },
  {
    name: "Olaf",
    description: "Trop gentil, il vous lave dès que possible avec sa langue",
    images: ["images/animaux/chien.png"],
  },
  {
    name: "Zoom",
    description: "La chatte qui file plus vite que son ombre",
    images: ["images/animaux/chat.png"],
  },
  {
    name: "Rasta",
    description: "Aussi cool qu'adorable",
    images: ["images/animaux/copains.png"],
  },
  {
    name: "Tagada",
    description: "Il donne des coups de tête aux autres pour avoir les plus grosses caresses",
    images: ["images/animaux/chevreau.png"],
  },
  {
    name: "Gros Coco",
    description: "Né à la ferme, il saura vous impressionner par sa douceur",
    images: ["images/animaux/poussin.png"],
  },
  {
    name: "Szwen",
    description: "Tellement sensible que même les gouttes d'eau le dérangent",
    images: ["images/animaux/hamster.png"],
  },
  {
    name: "Canail",
    description: "Qui aime trop les feuillages",
    images: ["images/animaux/lapin2.png"],
  },
  {
    name: "Lustucru",
    description: "Répond à son appel pour manger, sauf lors de son hibernation",
    images: ["images/animaux/hamster.png"],
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {animals.map((animal, index) => (
              <motion.div
                key={animal.name}
                className="bg-primary rounded-2xl shadow-md overflow-hidden flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className={`grid gap-1 ${animal.images.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
                  {animal.images.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={animal.name}
                      loading="lazy"
                      className="w-full h-48 object-cover"
                    />
                  ))}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-2xl font-bold text-secondary mb-2">{animal.name}</h2>
                  <p className="text-gray-600 text-base leading-relaxed">{animal.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}