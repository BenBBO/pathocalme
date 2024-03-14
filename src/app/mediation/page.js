export default function Mediation() {
  return (
    <>
      <section className="bg-mediation py-14">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-10 lg:py-8">
          <h1 className={`mb-4 text-4xl font-extrabold tracking-tight leading-none text-text-nature md:text-6xl lg:text-7xl`}>Médiation par l&apos;animal</h1>
          <p className={`mb-8 text-2xl font-normal text-gray-300 text-text-nature lg:text-3xl sm:px-16 lg:px-48`}>formée par l'institut français de Zoothérapie à Velanne</p>
        </div>
      </section>


      <section className="py-14 bg-white text-dark">
        <div className="px-4 mx-auto max-w-screen-xl grid  gap-10">
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
                La médiation par l'animal est une <strong>technique thérapeutique individuelle ou en petit groupe</strong> qui permet un lien en triangulation entre l&apos;intervenant professionnel, le bénéficiaire et l&apos;animal.
              </p>
              <p className="text-base font-light leading-relaxed md:leading-loose mb-4">
                Elle consiste à faire intervenir un animal <strong>soigneusement sélectionné et entraîné.</strong>
              </p>
              <p className="text-base font-light leading-relaxed md:leading-loose mb-4">
                Elle s&apos;effectue sous la responsabilité d'un <strong>intervenant en médiation</strong> par l&apos;animal formé pour cette séance.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-8 md:gap-10 md:flex-row">
            <div className="w-full md:w-1/2 order-2 md:order-2">
              <h4 className="text-xl font-semibold tracking-widest uppercase">Différentes situations</h4>

              <span className="block w-20 h-0.5 my-4 bg-dark md:my-6"></span>

              <p className="text-base font-light leading-relaxed md:leading-loose">
                <ul className="max-w-md ml-4 space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                  <li>
                    Aide aux devoirs (école primaire)
                  </li><li>
                    Accompagnement pour des personnes en situation d'isolement
                  </li><li>
                    Déplacement en EHPAD
                  </li><li>
                    Accueil de personne atteinte de handicap physique/ intellectuel
                  </li><li>
                    Les situations de trop plein, burn out
                  </li><li>
                    Accompagnement pour les enfants atypiques
                  </li><li>
                    ...
                  </li></ul>

              </p>

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
                  <img loading="lazy" src="images/preventionMorsure.png" className="object-cover w-full h-full" alt="pantry meal image" />
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
              <p className="py-10 italic">De 3 ans à 12 ans. Possibilité de s&apos;adapter</p>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}