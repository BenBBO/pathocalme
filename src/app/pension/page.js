"use client"
import { motion } from "framer-motion";

export default function Pension() {
  return (
    <>
      {/* Hero */}
      <section className="bg-pension py-14">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-10 lg:py-8">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-text-nature md:text-6xl lg:text-7xl">
            Pension
          </h1>
          <p className="mb-6 text-2xl font-normal text-text-nature lg:text-3xl sm:px-16 lg:px-48">
            Chats &amp; Nouveaux Animaux de Compagnie (NACS)
          </p>
          <p className="text-base text-gray-600 max-w-xl mx-auto">
            Je suis passionnée, formée, diplômée et assurée en tant que professionnelle pour rendre service à vos animaux.
          </p>
        </div>
      </section>

      {/* Mode selector banners */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-secondary text-white flex items-center justify-center py-6 px-4 gap-3">
          <span className="text-3xl">🏡</span>
          <span className="text-xl font-semibold tracking-wider uppercase">À la ferme</span>
        </div>
        <div className="bg-text-nature text-white flex items-center justify-center py-6 px-4 gap-3">
          <span className="text-3xl">🚗</span>
          <span className="text-xl font-semibold tracking-wider uppercase">À votre domicile</span>
        </div>
      </div>

      {/* ─── SECTION A — À la ferme ─────────────────────────────────── */}
      <motion.section
        className="bg-primary py-14"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="px-4 mx-auto max-w-screen-xl">
          <div className="flex items-center gap-3 mb-10 justify-center">
            <span className="text-4xl">🏡</span>
            <h2 className="text-3xl font-extrabold text-secondary tracking-tight">À la ferme</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

            {/* Pension chat */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-secondary px-6 py-5">
                <span className="text-4xl block mb-1" aria-hidden="true">🐱</span>
                <h3 className="text-xl font-bold text-white">Pension pour chat</h3>
                <p className="text-green-100 text-sm mt-1">Intérieur &amp; extérieur sécurisé</p>
              </div>
              <div className="p-6 flex flex-col gap-4 flex-1">
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-extrabold text-secondary">13</span>
                  <span className="text-2xl font-bold text-secondary mb-1">€</span>
                  <span className="text-gray-500 mb-1">/ jour</span>
                </div>
                <span className="block w-10 h-1 rounded-full bg-secondary"></span>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-secondary font-bold">✓</span> Croquettes fournies
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-secondary font-bold">✓</span> Litière fournie
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Pension NACS */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-secondary px-6 py-5">
                <span className="text-4xl block mb-1">🐾</span>
                <h3 className="text-xl font-bold text-white">Pension NACS</h3>
                <p className="text-green-100 text-sm mt-1">Intérieure — accessoires &amp; nourriture à votre charge</p>
              </div>
              <div className="p-6 flex flex-col gap-4 flex-1">
                <span className="block w-10 h-1 rounded-full bg-secondary"></span>
                <ul className="divide-y divide-gray-100 text-sm">
                  <li className="flex justify-between items-center py-3">
                    <span className="text-gray-600">En enclos</span>
                    <span className="text-2xl font-extrabold text-secondary">8 €<span className="text-sm font-normal text-gray-400"> / j</span></span>
                  </li>
                  <li className="flex justify-between items-center py-3">
                    <span className="text-gray-600">En cage</span>
                    <span className="text-2xl font-extrabold text-secondary">6 €<span className="text-sm font-normal text-gray-400"> / j</span></span>
                  </li>
                  <li className="flex justify-between items-center py-3">
                    <span className="text-gray-600">Tout petits</span>
                    <span className="text-2xl font-extrabold text-secondary">1–3 €<span className="text-sm font-normal text-gray-400"> / j</span></span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Animaux extérieur */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-secondary px-6 py-5">
                <span className="text-4xl block mb-1">🌿</span>
                <h3 className="text-xl font-bold text-white">Animaux d&apos;extérieur</h3>
                <p className="text-green-100 text-sm mt-1">Par box — accessoires &amp; nourriture à votre charge</p>
              </div>
              <div className="p-6 flex flex-col gap-4 flex-1">
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-extrabold text-secondary">8</span>
                  <span className="text-2xl font-bold text-secondary mb-1">€</span>
                  <span className="text-gray-500 mb-1">/ jour par box</span>
                </div>
                <span className="block w-10 h-1 rounded-full bg-secondary"></span>
                <p className="text-sm text-gray-500 italic">
                  Peu importe le nombre d&apos;animaux de la même famille dans le box
                </p>
              </div>
            </motion.div>
          </div>

          {/* Soins */}
          <motion.div
            className="bg-white border-l-4 border-secondary rounded-xl p-6 max-w-2xl mx-auto shadow flex gap-4 items-start"
            initial={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-3xl flex-shrink-0">💉</span>
            <div>
              <h3 className="font-semibold text-secondary text-base mb-1">Soins</h3>
              <p className="text-gray-600 text-sm">
                À partir de <strong>1 € / jour</strong> selon la difficulté et le temps retenu
                (médicament, piqûre, désinfection…)
              </p>
              <p className="text-gray-400 text-xs italic mt-2">
                Tout acte doit être soumis obligatoirement à une ordonnance vétérinaire.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ─── SECTION B — À votre domicile ───────────────────────────── */}
      <motion.section
        className="bg-white py-14"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="px-4 mx-auto max-w-screen-xl">
          <div className="flex items-center gap-3 mb-10 justify-center">
            <span className="text-4xl">🚗</span>
            <h2 className="text-3xl font-extrabold text-text-nature tracking-tight">À votre domicile</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              className="rounded-2xl overflow-hidden shadow-xl"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              {/* Card header */}
              <div className="bg-text-nature px-8 py-6 flex items-center gap-4">
                <span className="text-5xl">🏠</span>
                <div>
                  <h3 className="text-2xl font-bold text-white">Pets sitting</h3>
                  <p className="text-green-100 text-sm">Maximum 20 minutes sur place</p>
                </div>
              </div>

              {/* Card body */}
              <div className="bg-pension p-8 grid md:grid-cols-2 gap-8">
                {/* Prix */}
                <div className="flex flex-col gap-3">
                  <p className="text-xs font-semibold uppercase tracking-widest text-text-nature">Tarif</p>
                  <div className="flex items-end gap-1">
                    <span className="text-6xl font-extrabold text-text-nature">13</span>
                    <span className="text-3xl font-bold text-text-nature mb-1">€</span>
                    <span className="text-gray-500 mb-2">/ jour</span>
                  </div>
                  <p className="text-sm text-gray-500">+ frais de déplacement</p>
                  <span className="block w-10 h-1 rounded-full bg-text-nature mt-1"></span>
                  <p className="text-sm text-gray-600">
                    Service en <strong>«&nbsp;forfait temps&nbsp;»</strong>&nbsp;: peu importe le nombre
                    d&apos;animaux sur place. Si le temps doit être plus important, des surplus seront
                    comptabilisés (vu en amont).
                  </p>
                </div>

                {/* Quote */}
                <div className="flex items-center justify-center">
                  <figure className="bg-white rounded-xl p-6 shadow-inner text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8 text-text-nature mx-auto mb-3" viewBox="0 0 975.036 975.036">
                      <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
                    </svg>
                    <blockquote className="text-sm italic text-gray-600 leading-relaxed">
                      Que souhaitez-vous mettre en place chez vous et combien de temps voulez-vous que je sois présente ?
                    </blockquote>
                  </figure>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
