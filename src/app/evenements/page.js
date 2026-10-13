"use client"
import { motion } from "framer-motion";

export default function Evenements() {
  return (
    <>
      {/* Hero */}
      <section className="bg-event py-14">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-10 lg:py-8">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-text-nature md:text-6xl lg:text-7xl">
            Événements
          </h1>
          <p className="mb-6 text-2xl font-normal text-text-nature lg:text-3xl sm:px-16 lg:px-48">
            Des animations tout au long de l&apos;année&nbsp;!
          </p>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Tout au long de l&apos;année, Path&apos;O Calme organise des événements
            spéciaux pour petits et grands&nbsp;: chasses aux œufs à Pâques,
            activités frissonnantes à Halloween, et moments festifs pour
            célébrer les fêtes de fin d&apos;année.
          </p>
        </div>
      </section>

      {/* ─── Pâques ─────────────────────────────────────────────────── */}
      <motion.section
        className="bg-white py-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="px-4 mx-auto max-w-screen-xl">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <span className="text-4xl" aria-hidden="true">🐣</span>
            <h2 className="text-3xl font-extrabold text-secondary tracking-tight">Pâques</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
            <div className="md:col-span-1 flex flex-col justify-center">
              <p className="text-gray-600 leading-relaxed mb-3">
                Chaque année, à l&apos;occasion de Pâques, la ferme ouvre ses
                portes pour une journée spéciale&nbsp;: chasse aux œufs dans la
                nature, rencontre avec les animaux de la ferme et ateliers
                créatifs pour les enfants.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Un moment convivial à partager en famille au cœur de la campagne
                iséroise&nbsp;!
              </p>
            </div>
            <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <motion.div
                className="rounded-xl overflow-hidden shadow-md col-span-2 sm:col-span-1"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  loading="lazy"
                  src="/images/evenements/paques1.jpg"
                  alt="Événement de Pâques à Path'O Calme"
                  className="w-full h-48 object-cover"
                />
              </motion.div>
              <motion.div
                className="rounded-xl overflow-hidden shadow-md"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  loading="lazy"
                  src="/images/evenements/paques2.jpg"
                  alt="Activités de Pâques à la ferme"
                  className="w-full h-48 object-cover"
                />
              </motion.div>
              <motion.div
                className="rounded-xl overflow-hidden shadow-md"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  loading="lazy"
                  src="/images/evenements/paques3.jpg"
                  alt="Chasse aux œufs de Pâques"
                  className="w-full h-48 object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ─── Halloween ──────────────────────────────────────────────── */}
      <motion.section
        className="bg-primary py-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="px-4 mx-auto max-w-screen-xl">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <span className="text-4xl" aria-hidden="true">🎃</span>
            <h2 className="text-3xl font-extrabold text-secondary tracking-tight">Halloween</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
            <div className="md:col-span-1 flex flex-col justify-center order-1">
              <p className="text-gray-600 leading-relaxed mb-3">
                Frissons garantis à la ferme&nbsp;! Pour Halloween, Path&apos;O
                Calme se transforme et propose des animations spéciales&nbsp;:
                parcours mystère, ateliers créatifs sur le thème de l&apos;automne
                et découverte des animaux nocturnes.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Venez déguisés et partagez un moment inoubliable en famille&nbsp;!
              </p>
            </div>
            <div className="md:col-span-2 grid grid-cols-2 gap-3 order-2">
              <motion.div
                className="rounded-xl overflow-hidden shadow-md"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  loading="lazy"
                  src="/images/evenements/Halloween.jpg"
                  alt="Événement Halloween à Path'O Calme"
                  className="w-full h-48 object-cover"
                />
              </motion.div>
              <motion.div
                className="rounded-xl overflow-hidden shadow-md"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  loading="lazy"
                  src="/images/evenements/Halloween2.jpg"
                  alt="Activités Halloween à la ferme"
                  className="w-full h-48 object-cover"
                />
              </motion.div>
            </div>
          </div>

          <motion.div
            className="mt-10 bg-white border-l-4 border-secondary rounded-xl p-6 md:p-8 shadow md:flex gap-8 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-secondary mb-4">Halloween à la ferme &middot; mercredi 28 octobre</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                Deux sessions au choix&nbsp;: <strong>9h30 - 11h30</strong> ou <strong>14h30 - 16h30</strong>.
              </p>
              <ul className="list-disc list-inside text-gray-600 leading-relaxed mb-3">
                <li>Fabrique ta potion magique</li>
                <li>Visite les animaux</li>
                <li>Mange des bonbons</li>
                <li>Défile dans ton beau costume</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-3">
                17&nbsp;€ par enfant + 1 accompagnant (3&nbsp;€ par accompagnant supplémentaire).
                À partir de 2 ans, adapté aux petits.
              </p>
              <p className="font-semibold text-secondary">
                Uniquement sur réservation au 06.52.86.71.60
              </p>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <img
                loading="lazy"
                src="/images/affiche halloween.jpg"
                alt="Affiche Halloween à la ferme, mercredi 28 octobre"
                className="w-full max-w-md mx-auto h-auto rounded-xl shadow-md"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ─── Fêtes de fin d'année ───────────────────────────────────── */}
      <motion.section
        className="bg-white py-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="px-4 mx-auto max-w-screen-xl">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <span className="text-4xl" aria-hidden="true">🎄</span>
            <h2 className="text-3xl font-extrabold text-secondary tracking-tight">Fêtes de fin d&apos;année</h2>
          </div>

          <motion.div
            className="bg-event border-l-4 border-secondary rounded-xl p-8 max-w-3xl mx-auto shadow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Pour les fêtes de fin d&apos;année, Path&apos;O Calme organise des
              moments chaleureux à la ferme&nbsp;: ateliers créatifs sur le
              thème de Noël, rencontres avec les animaux et goûters festifs
              pour toute la famille.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Restez informés de nos prochains événements en nous suivant sur
              nos réseaux sociaux&nbsp;!
            </p>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
