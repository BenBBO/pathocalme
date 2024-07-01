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
        <section className="p-8 md:p-14 grid" id="about">
          <motion.div className="w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden"
            initial={{ opacity: 0 }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1 }}>
            <div className="md:flex">
              <div className="md:shrink-0">
                <img className="h-80 w-full object-cover md:h-full md:w-80" src="images/bab.jpg" alt="Modern building architecture" />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-lg text-indigo-500 font-semibold">Barbara Bouillet</div>
                <a href="#" className="block mt-1 text-xl leading-tight font-medium text-black hover:underline">Formée par l&apos;institut Français de Zoothérpie à Velanne</a>
                <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
              </div>
            </div>
          </motion.div>
        </section>
        <section className=" bg-primary p-8 md:p-14">
          <h1 className="text-2xl font-semibold tracking-widest uppercase text-center mb-8">Nos services</h1>
          <div className="grid lg:grid-cols-2 2xl:grid-cols-4 grid-cols-1 gap-10">
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
              onClick={() => router.push('/404')}
              description="A venir"
              color="rgb(14 165 233)" />
          </div>
        </section>
        <section className="p-8 bg-event">
          <h1 className="text-2xl font-semibold tracking-widest uppercase text-center mb-8">Évenements à venir</h1>

          <blockquote className="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
            <p className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
              <b>La mini ferme sera en repos jusqu'au 2 septembre.</b>
              <br />
              Je serai au commande de The labyrinthe de maïs en collaboration avec Archi'Frais durant les 2 mois d'été dans ma caravane food truck !
              <br />
              Merci à Yann et Mickael pour leur aide et leur soutient dans la création du quiz intérieur et du dessin du labyrinthe
              <p className="mt-8">
                Plus d'informations :
                <ul className="max-w-md space-y-1 list-disc list-inside ml-8">
                  <li>
                    <a href="https://www.facebook.com/share/v/LXVsHyoaPDbzW8t9/" target="_blank">Facebook du labyrinthe</a>
                  </li>
                  <li>
                    <a href="https://the-labyrinthe.archi-frais.fr/" target="_blank">Site du labyrinthe</a>
                  </li>
                </ul>
              </p>
            </p>


          </blockquote>
          <div className="grid grid-cols-1 gap-10 place-items-center">
            <img className="h-auto max-w-full rounded-lg" loading="lazy" src="images/labyrinthe.jpg" alt="programme" />
          </div>
          <div className="grid grid-cols-1 gap-10 place-items-center">
            <img className="h-auto max-w-full rounded-lg" loading="lazy" src="images/babLabyrinthe.jpg" alt="programme" />
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