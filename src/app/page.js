"use client"
import { motion } from "framer-motion";
import { Clicker_Script } from "next/font/google";
import { useRouter } from "next/navigation";
import Prestation from './components/prestation';

import logoImage from "../../public/images/logo.png";
import natureImage from "../../public/images/nature.png";
import animationImage from "../../public/images/animation.png";
import mediationImage from "../../public/images/mediation.png";
import pensionImage from "../../public/images/pension.png";
import associationImage from "../../public/images/miniferme.png";


const cookie = Clicker_Script({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

export default function Home() {

  const router = useRouter();

  const transitionValues = {
    duration: 2,
    repeat: Infinity,
    ease: "easeOut"
  };

  return (
    <>
      <div id="intro">
        <section className="bg-contain bg-center bg-no-repeat bg-gray-700 bg-blend-multiply"
          style={{ backgroundImage: `url(${logoImage.src})` }}>
          <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <p className={`${cookie.className} mb-2 text-2xl font-normal text-gray-300 lg:text-3xl sm:px-16 lg:px-48`}>La mini-ferme</p>
            <h1 className={`${cookie.className} mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-6xl lg:text-7xl`}>Path&apos;O Calme</h1>
            <p className={`${cookie.className} mb-8 text-2xl font-normal text-gray-300 lg:text-3xl sm:px-16 lg:px-48`}>Médiation par l&apos;animal</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0"
            >
              <a href="#about" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Nous découvrir
                <motion.span className="px-2" transition={{
                  y: transitionValues
                }}
                  animate={{
                    y: ["0rem", "0.5rem", "0rem"]
                  }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                  </svg>
                </motion.span>
              </a>
            </div>
          </div>
        </section>
        <section className="p-8 bg-event">
          <h1 className="text-2xl font-semibold tracking-widest uppercase text-center mb-8">Planning mensuel</h1>
           <div className="grid grid-cols-1  lg:grid-cols-2  gap-10">
            <img className="h-auto max-w-full rounded-lg justify-self-center" loading="lazy" src="images/Fevrier1.jpg" alt="programme" />
            <img className="h-auto max-w-full rounded-lg justify-self-center" loading="lazy" src="images/Fevrier2.jpg" alt="programme" />
          </div>
        </section>
        <section className="p-8 md:p-14" id="about">
          <motion.div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <div className="md:flex">
              <div className="md:shrink-0">
                <img className="h-72 w-full object-cover md:h-full md:w-80" src="images/bab.jpg" alt="Barbara Bouillet" />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <div className="uppercase tracking-wide text-lg text-secondary font-semibold">Barbara Bouillet</div>
                <p className="mt-1 text-sm text-secondary/70 font-medium italic">Diplômée du BAFA &middot; Formée à la médiation par l&apos;animal</p>
                <div className="mt-4 space-y-3 text-slate-600 text-sm leading-relaxed">
                  <p>
                    Je m&apos;appelle Barbara et j&apos;ai pris racine en Isère grâce à ma mini ferme Path&apos;O Calme, un lieu simple, vrai, profondément naturel... Où l&apos;animal est un allié précieux pour se reconnecter à l&apos;essentiel. C&apos;est un espace de vie entre partage et bienveillance où les humains et les animaux peuvent se rencontrer autrement, à ciel ouvert. Depuis toujours, le vivant me lie et me guide.
                  </p>
                  <p>
                    Diplômée du BAFA et formée à la médiation par l&apos;animal, j&apos;ai choisi de mêler mes compétences pédagogiques à ma passion pour les animaux. Ensemble, nous proposons des expériences sensibles pleines de respect, d&apos;émerveillement et de liens. Ces expériences sont proposées autant pour les enfants, les familles, les adultes avec chacune de leur fragilité.
                  </p>
                  <p>
                    Chaque jour, je prends soin de mes animaux, j&apos;anime des ateliers, je prépare des médiations, j&apos;accueille les visiteurs, je crée des moments où l&apos;on peut ralentir, observer, écouter. Je travaille avec mes animaux, ils sont mes partenaires, mes amis, mes médiateurs, de véritables alliés dans cette aventure naturelle et sensible. Chez eux, ils vous accueillent comme êtres à part entière, tous ont un prénom, une histoire et leur propre caractère.
                  </p>
                  <p>
                    À travers Path&apos;O Calme, j&apos;ai voulu offrir un cadre sécurisant et vivant où l&apos;on peut apprendre à respecter, à comprendre, et à ressentir pour partager ses émotions. Un lieu à taille humaine rythmé par les saisons, les émotions et les découvertes.
                  </p>
                  <p className="font-medium text-secondary/80 italic">
                    Rencontrons-nous, créons du lien, prenons le temps autant que nécessaire afin de se reconnecter à l&apos;essentiel.
                  </p>
                  <p>
                    Ici, je m&apos;investis avec le cœur tout en restant fidèle à mes valeurs. Si je peux grâce à ce lieu transmettre un peu de douceur, d&apos;émerveillement et de respect alors j&apos;ai atteint ce pourquoi je me lève chaque matin.
                  </p>
                  <p className="font-semibold text-secondary text-center mt-2">
                    Respectons la vie sans hiérarchie.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
        <section className=" bg-primary p-8 md:p-14">
          <h1 className="text-2xl font-semibold tracking-widest uppercase text-center mb-8">Nos services</h1>
          <div className="grid lg:grid-cols-2 2xl:grid-cols-5 grid-cols-1 gap-10">
            <Prestation title="Nature"
              imageUrl={natureImage.src}
              onClick={() => router.push('/nature')}
              description="Découverte et respect du monde animal et végétal"
              color="rgb(34 197 94)" />
            <Prestation title="Animation"
              imageUrl={animationImage.src}
              onClick={() => router.push('/animation')}
              description="Diplomée du BAFA"
              color="rgb(239 68 68)" />
            <Prestation title="Médiation"
              imageUrl={mediationImage.src}
              onClick={() => router.push('/mediation')}
              description="Formée par l&apos;institut Français de Zoothérapie à Velanne"
              color="rgb(249 115 22)" />
            <Prestation title="Pension"
              imageUrl={pensionImage.src}
              onClick={() => router.push('/pension')}
              description="Pension pour chats et NACS"
              color="rgb(14 165 233)" />
            <Prestation title="Association"
              imageUrl={associationImage.src}
              onClick={() => router.push('/association')}
              description="Les pattes de l&apos;isle — loi 1901"
              color="rgb(202 138 4)" />
          </div>
        </section>

        <a className="back-to-top fixed bottom-24 right-4 text-red-500 hover:text-red-600 focus:text-red-600" href="#intro" role="button" aria-label="Back to top">
          <svg aria-hidden="true" xmlns="https://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.58l5.995 5.988-1.416 1.414-4.579-4.574-4.59 4.574-1.416-1.414 6.006-5.988z" />
          </svg>
        </a>
      </div>
    </>
  );
}