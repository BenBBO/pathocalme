"use client"
import { motion } from "framer-motion";

export default function Pension() {
  return (
    <>
      <section className="bg-pension py-14">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-10 lg:py-8">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-text-nature md:text-6xl lg:text-7xl">
            Pension
          </h1>
          <p className="mb-8 text-2xl font-normal text-text-nature lg:text-3xl sm:px-16 lg:px-48">
            Chats &amp; Nouveaux Animaux de Compagnie (NACS)
          </p>
        </div>
      </section>

      <section className="py-10 bg-white text-dark">
        <div className="px-4 mx-auto max-w-screen-xl">
          <p className="text-center text-lg font-medium text-gray-700 mb-10">
            Je suis passionnée, formée, diplômée et assurée en tant que professionnelle pour rendre service à vos animaux.
          </p>

          {/* Section A - À la ferme */}
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1 }}
          >
            <h2 className="text-2xl font-semibold tracking-widest uppercase text-center mb-8">
              A — À la ferme
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-10">

              {/* Pension chat */}
              <div className="bg-pension rounded-xl shadow-md p-6 flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-text-nature">🐱 Pension pour chat</h3>
                <p className="text-gray-600 text-sm">Intérieur avec accès extérieur sécurisé</p>
                <span className="block w-12 h-0.5 bg-text-nature"></span>
                <p className="text-3xl font-bold text-text-nature">13 €<span className="text-base font-normal text-gray-600"> / jour</span></p>
                <ul className="text-gray-600 text-sm list-disc list-inside space-y-1">
                  <li>Croquettes fournies</li>
                  <li>Litière fournie</li>
                </ul>
              </div>

              {/* Pension NACS */}
              <div className="bg-pension rounded-xl shadow-md p-6 flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-text-nature">🐾 Pension pour NACS</h3>
                <p className="text-gray-600 text-sm">Intérieure — vous fournissez les accessoires et la nourriture</p>
                <span className="block w-12 h-0.5 bg-text-nature"></span>
                <ul className="text-gray-700 space-y-2 mt-1">
                  <li className="flex justify-between items-center">
                    <span className="text-sm">En enclos</span>
                    <span className="font-bold text-text-nature">8 € / jour</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-sm">En cage</span>
                    <span className="font-bold text-text-nature">6 € / jour</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-sm">Tout petits</span>
                    <span className="font-bold text-text-nature">1 € à 3 € / jour</span>
                  </li>
                </ul>
              </div>

              {/* Pension animaux extérieur */}
              <div className="bg-pension rounded-xl shadow-md p-6 flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-text-nature">🌿 Animaux d&apos;extérieur</h3>
                <p className="text-gray-600 text-sm">Par box — vous fournissez les accessoires et la nourriture</p>
                <span className="block w-12 h-0.5 bg-text-nature"></span>
                <p className="text-3xl font-bold text-text-nature">8 €<span className="text-base font-normal text-gray-600"> / jour par box</span></p>
                <p className="text-gray-600 text-sm italic">Peu importe le nombre d&apos;animaux de la même famille présents dans le box</p>
              </div>
            </div>

            {/* Soins */}
            <div className="bg-sky-50 border border-sky-200 rounded-xl p-6 mb-12 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-text-nature mb-2">💉 Soins</h3>
              <p className="text-gray-600 text-sm">
                À partir de <strong>1 € / jour</strong> en fonction de la difficulté et du temps retenu
                (médicament, piqûre, désinfection…)
              </p>
              <p className="text-gray-500 text-sm italic mt-2">
                Tout acte doit être soumis obligatoirement à une ordonnance vétérinaire.
              </p>
            </div>
          </motion.div>

          {/* Section B - À votre domicile */}
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1 }}
          >
            <h2 className="text-2xl font-semibold tracking-widest uppercase text-center mb-8">
              B — À votre domicile
            </h2>

            <div className="bg-pension rounded-xl shadow-md p-8 max-w-2xl mx-auto flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-text-nature">🏠 Pets sitting</h3>
              <p className="text-gray-600 text-sm">Maximum 20 minutes sur place</p>
              <span className="block w-12 h-0.5 bg-text-nature"></span>
              <p className="text-3xl font-bold text-text-nature">13 €<span className="text-base font-normal text-gray-600"> / jour</span></p>
              <p className="text-gray-600 text-sm">+ frais de déplacement</p>
              <p className="text-gray-600 text-sm">
                C&apos;est un service en <strong>«&nbsp;forfait temps&nbsp;»</strong>, peu importe le nombre d&apos;animaux sur place.
                Si le temps doit être plus important, des surplus seront comptabilisés sur le tarif (vu en amont).
              </p>
              <blockquote className="border-l-4 border-text-nature pl-4 italic text-gray-500 text-sm mt-2">
                «&nbsp;Que souhaitez-vous mettre en place chez vous et combien de temps voulez-vous que je sois présente ?&nbsp;»
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
