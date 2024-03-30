"use client"
import { motion } from "framer-motion";

export default function Mediation() {
  return (
    <>
      <section className="bg-mediation py-14">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-10 lg:py-8">
          <h1 className={`mb-4 text-4xl font-extrabold tracking-tight leading-none text-text-nature md:text-6xl lg:text-7xl`}>Médiation par l&apos;animal</h1>
          <p className={`mb-8 text-2xl font-normal text-gray-300 text-text-nature lg:text-3xl sm:px-16 lg:px-48`}>formée par l&apos;institut français de Zoothérapie à Velanne</p>
        </div>
      </section>


      <section className="py-14 bg-white text-dark">
        <div className="px-4 mx-auto max-w-screen-xl grid gap-10">
          <div className="flex flex-col items-center gap-8 md:gap-10 md:flex-row">
            <div className="h-96 w-full md:order-2 md:w-1/2">
              <div className="w-full h-full mx-auto overflow-hidden md:max-w-xl">
                <div className="h-full">
                  <img loading="lazy" src="images/mediation_relax.png" className="object-cover w-full h-full" alt="pantry meal image" />
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 md:order-1">
              <h4 className="text-xl font-semibold tracking-widest uppercase">Venez partager vos émotions</h4>

              <span className="block w-20 h-0.5 my-4 bg-dark md:my-6"></span>

              <p className="text-base font-light leading-relaxed md:leading-loose mb-4">
                La médiation par l&apos;animal est une <strong>technique thérapeutique individuelle ou en petit groupe</strong> qui permet un lien en triangulation entre l&apos;intervenant professionnel, le bénéficiaire et l&apos;animal.
              </p>
              <p className="text-base font-light leading-relaxed md:leading-loose mb-4">
                Elle consiste à faire intervenir un animal <strong>soigneusement sélectionné et entraîné.</strong>
              </p>
              <p className="text-base font-light leading-relaxed md:leading-loose mb-4">
                Elle s&apos;effectue sous la responsabilité d&apos;un <strong>intervenant en médiation</strong> par l&apos;animal formé pour cette séance.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-8 md:gap-10 md:flex-row">
            <div className="w-full md:w-1/2 order-2 md:order-2">
              <h4 className="text-xl font-semibold tracking-widest uppercase">Différentes situations</h4>

              <span className="block w-20 h-0.5 my-4 bg-dark md:my-6"></span>

              <div className="text-base font-light leading-relaxed md:leading-loose">
                <ul className="max-w-md ml-4 space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                  <li>
                    Aide aux devoirs (école primaire)
                  </li><li>
                    Accompagnement pour des personnes en situation d&apos;isolement
                  </li><li>
                    Déplacement en EHPAD
                  </li><li>
                    Accueil de personne atteinte de handicap physique / intellectuel
                  </li><li>
                    Les situations de trop plein, burn out
                  </li><li>
                    Accompagnement pour les enfants atypiques
                  </li><li>
                    ...
                  </li></ul>

              </div>

            </div>
            <div className="h-96 w-full md:order-1 md:w-1/2">
              <div className="w-full h-full mx-auto overflow-hidden md:max-w-xl">
                <div className="h-full">
                  <img loading="lazy" src="images/mediation_handicap.png" className="object-cover w-full h-full" alt="pantry meal image" />
                </div>
              </div>
            </div>

          </div>
          <div className="flex flex-col items-center gap-8 md:gap-10 md:flex-row">
            <div className="h-96 w-full md:order-2 md:w-1/2">
              <div className="w-full h-full mx-auto overflow-hidden md:max-w-xl">
                <div className="h-full">
                  <img loading="lazy" src="images/mediation_besoin.png" className="object-cover w-full h-full" alt="pantry meal image" />
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 md:order-1">
              <h4 className="text-xl font-semibold tracking-widest uppercase">Adapté a vos besoins</h4>

              <span className="block w-20 h-0.5 my-4 bg-dark md:my-6"></span>

              <p className="text-base font-light leading-relaxed md:leading-loose">
                <strong>De 45 minutes à 1h30</strong> - En fonction de l&apos;âge, des situations, des objectifs et du nombre de personnes
              </p>
              <p className="text-base font-light leading-relaxed md:leading-loose">
                <strong>De 1 à 3 personnes</strong> - Pour privilégier le lien entre l&apos;animal et le bénéficiaire ainsi qu&apos;une attention particulièrement intense de l&apos;intervenant afin d&apos;allier des échanges et de développer la connexion établie.
              </p>
              <div className="grid grid-cols-2 gap-10 content-center py-2">
                <div className="flex flex-col gap-4 place-items-center">
                  <img loading="lazy" src="images/ferme.png" alt="Ferme" />
                  <span><strong>À la mini-ferme</strong></span>
                </div>
                <div className="flex flex-col gap-4 place-items-center">
                  <img loading="lazy" src="images/appartement.png" alt="Etabilssement spécialisé" />
                  <span><strong>En établissement spécialisé</strong></span>
                </div>

              </div>
              <p className="py-4 italic">Tarif sur devis</p>
            </div>
          </div>
        </div>
      </section>
      <motion.section className="bg-mediation py-14"
        initial={{ opacity: 0 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1 }}>
        <div className="container px-5 mx-auto max-w-screen-xl">
          <h1 className="text-2xl font-semibold tracking-widest uppercase text-center mb-8">Nos animaux</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
            <div className="grid gap-4">
              <div>
                <img className="h-auto max-w-full rounded-lg" loading="lazy" src="images/animaux/lapin.png" alt="lapin" />
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" loading="lazy" src="images/animaux/cochon_dinde.png" alt="cochon d&apos;inde" />
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" loading="lazy" src="images/animaux/chat.png" alt="chat" />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img className="h-auto max-w-full rounded-lg" loading="lazy" src="images/animaux/poussin.png" alt="poussin" />
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" loading="lazy" src="images/animaux/copains.png" alt="copains" />
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" loading="lazy" src="images/animaux/gratte.png" alt="gratte" />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img className="h-auto max-w-full rounded-lg" loading="lazy" src="images/animaux/ponpon.png" alt="ponpon" />
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" loading="lazy" src="images/animaux/poule.png" alt="poule" />
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" loading="lazy" src="images/animaux/hamster.png" alt="hamster" />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img className="h-auto max-w-full rounded-lg" loading="lazy" src="images/animaux/chien.png" alt="chien" />
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" loading="lazy" src="images/animaux/chevreau.png" alt="chevreau" />
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" loading="lazy" src="images/animaux/lapin2.png" alt="lapin2" />
              </div>
            </div>
          </div>

        </div>
      </motion.section>

    </>
  )
}