"use client"
import { motion } from "framer-motion";

export default function Nature() {
  return (<>
    <section className="bg-nature py-14">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-10 lg:py-8">
        <h1 className={`mb-4 text-4xl font-extrabold tracking-tight leading-none text-text-nature md:text-6xl lg:text-7xl`}>Prévention de la nature</h1>
        <p className={`mb-8 text-2xl font-normal text-gray-300 text-text-nature lg:text-3xl sm:px-16 lg:px-48`}>découverte et respect du monde animal</p>
      </div>
    </section>
    <section className="bg-white">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Tout être vivant mérite respect</h2>
          <p className="mb-4">Chaque être communique différement, mais cela veut-il dire que certains êtres ne ressentent rien ?</p>
          <p className="mb-4">Tout être utilise ses 5 sens plus ou moins développés pour survivre dans la nature, mais comment ?</p>
          <p className="mb-4">Des programmes sont développés afin d&apos;améliorer les connaissances pour mieux comprendre et respecter les êtres vivants</p>
          <div className="mx-auto mb-8 flex flex-col md:flex-row md:justify-around xl:justify-start">
            <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0 xl:mr-20 font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" className="mr-2 h-5 w-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Apprendre des autres
            </p>

            <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0 xl:mr-20 font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" className="mr-2 h-5 w-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Échanger
            </p>

            <p className="mx-auto mb-2 flex items-center md:mx-0 lg:mb-0 font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" className="mr-2 h-5 w-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Comprendre
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img className="w-full rounded-lg" src="images/l214.png" alt="affiche l214" />
          <img className="mt-4 w-full lg:mt-10 rounded-lg" src="images/classe.png" alt="en classe" />
        </div>
      </div>
      <section className="text-gray-600 body-font bg-slate-200 py-8">
        <div className="container px-5 py-4 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed text-lg">On ne voit bien qu&apos;avec le coeur, l&apos;essentiel est invisible pour les yeux.</p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-4 mb-4"></span>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Le renard au Petit Prince</h2>
          </div>
        </div>
      </section>
    </section>

    <motion.section className="py-14 bg-nature text-dark"
      initial={{ opacity: 0 }}
      transition={{ duration: 2 }}
      whileInView={{ opacity: 1 }}>
      <div className="px-4 mx-auto max-w-screen-xl grid  gap-10">
        <div className="flex flex-col items-center gap-8 md:gap-10 md:flex-row">
          <div className="h-96 w-full md:order-2 md:w-1/2">
            <div className="w-full h-full mx-auto overflow-hidden md:max-w-xl">
              <div className="h-full">
                <img loading="lazy" src="images/preventionRespect.png" className="object-cover w-full h-full" alt="pantry meal image" />
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 md:order-1">
            <h4 className="text-xl font-semibold tracking-widest uppercase">Prévention respect animal</h4>

            <span className="block w-20 h-0.5 my-4 bg-dark md:my-6"></span>

            <p className="text-base font-light leading-relaxed md:leading-loose">
              Grâce à <strong>L214</strong>, un programme complet pédagogique et spécial scolaire est développé.
              Les enfants comprennent que l&apos;animal est un <strong>être vivant sensible</strong>, ils deviennent responsables en connaissant les êtres qui nous entourent.
              Tout ceci s&apos;ouvre à une vraie discussion, des échanges pour <strong>s&apos;interroger</strong> et <strong>respecter</strong>.
            </p>
            <p className="py-10 italic">A partir de 9 ans </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 md:gap-10 md:flex-row">
          <div className="w-full md:w-1/2 order-2 md:order-2">
            <h4 className="text-xl font-semibold tracking-widest uppercase">Prévention respect des minuscules de notre jardin</h4>

            <span className="block w-20 h-0.5 my-4 bg-dark md:my-6"></span>

            <p className="text-base font-light leading-relaxed md:leading-loose">
              Parceque sans eux nous ne sommes rien.
              Un programme simple, ludique grâce à des figurines et des vrais insectes aide à mieux les connaître, les étudier et permet à tout âge d&apos;être fasciner afin de les respecter
            </p>
            <p className="py-10 italic">A partir de 3 ans </p>
          </div>
          <div className="h-96 w-full md:order-1 md:w-1/2">
            <div className="w-full h-full mx-auto overflow-hidden md:max-w-xl">
              <div className="h-full">
                <img loading="lazy" src="images/preventionMinuscule.png" className="object-cover w-full h-full" alt="pantry meal image" />
              </div>
            </div>
          </div>

        </div>
        <div className="flex flex-col items-center gap-8 md:gap-10 md:flex-row">
          <div className="h-96 w-full md:order-2 md:w-1/2">
            <div className="w-full h-full mx-auto overflow-hidden md:max-w-xl">
              <div className="h-full">
                <img loading="lazy" src="images/preventionMorsure.png" className="object-cover w-full h-full" alt="pantry meal image" />
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 md:order-1">
            <h4 className="text-xl font-semibold tracking-widest uppercase">Prévention contre les morsures de chien</h4>

            <span className="block w-20 h-0.5 my-4 bg-dark md:my-6"></span>

            <p className="text-base font-light leading-relaxed md:leading-loose">
              Tout un programme <strong>PECCRAM</strong> reconnu et approuvé par de nombreux institus.
              Il permet de protéger les enfants contre les morsures de chien, de comprendre leur communication, d&apos;appliquer des gestes et des postures indispensables, d&apos;être responsabilisé face aux chiens.
            </p>
            <p className="py-10 italic">De 3 ans à 12 ans. Possibilité de s&apos;adapter</p>
          </div>
        </div>
      </div>
    </motion.section>
    <section className="text-gray-600 body-font bg-slate-200 py-14">
      <div className="container px-5 py-4 mx-auto max-w-screen-xl">
        <h1 className="text-xl font-semibold tracking-widest uppercase">Renseignez vous : </h1>
        <div className="gap-16 items-center py-8 px-4 mx-auto grid lg:grid-cols-4 lg:py-16 lg:px-6">
          <a href="https://www.fimaccanin.fr/" target="_blank">
            <img loading="lazy" src="images/fimac.png" className="object-cover w-full h-full" alt="Fimac canin" />
          </a>
          <a href="https://www.l214.com/" target="_blank">
            <img loading="lazy" src="images/l214Logo.png" className="object-cover w-full h-full" alt="L214" />
          </a>
          <a href="https://www.lpo.fr/" target="_blank">
            <img loading="lazy" src="images/lpo.png" className="object-cover w-full h-full" alt="Ligue de protection des oiseaux" />
          </a>
          <a href="https://loparvi.fr/" target="_blank">
            <img loading="lazy" src="images/loparvi.png" className="object-cover w-full h-full" alt="Lo parvi" />
          </a>
        </div>
      </div>
    </section>

  </>
  )
}