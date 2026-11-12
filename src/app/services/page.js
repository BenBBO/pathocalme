"use client"
import { motion } from "framer-motion";

const Check = () => <span className="text-secondary font-bold flex-shrink-0">✓</span>;

const InfoRow = ({ icon, label, children }) => (
  <li className="flex items-start gap-3 py-3">
    <span className="text-2xl flex-shrink-0" aria-hidden="true">{icon}</span>
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">{label}</p>
      <p className="text-gray-700">{children}</p>
    </div>
  </li>
);

const BookingButton = ({ label }) => (
  <a href="tel:0652867160" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-full bg-secondary text-white hover:bg-text-nature shadow-md hover:shadow-lg transition-all duration-200">
    <span aria-hidden="true">📞</span>
    {label} au 06 52 86 71 60
  </a>
);

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="bg-nature py-14">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-10 lg:py-8">
          <span className="inline-block mb-4 px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-yellow-400 text-secondary">
            Nouveau
          </span>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-text-nature md:text-6xl lg:text-7xl">
            Services
          </h1>
          <p className="mb-6 text-2xl font-normal text-text-nature lg:text-3xl sm:px-16 lg:px-48">
            Après l&apos;école, à la mini-ferme
          </p>
          <p className="text-base text-gray-600 max-w-xl mx-auto">
            Deux nouveaux services pour les enfants scolarisés à Trept : une garderie périscolaire et un accompagnement aux devoirs, entourés des animaux de la ferme.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <a href="#garderie" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-full bg-secondary text-white hover:bg-text-nature shadow-md hover:shadow-lg transition-all duration-200">
              Garderie périscolaire
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a href="#devoirs" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-full bg-secondary text-white hover:bg-text-nature shadow-md hover:shadow-lg transition-all duration-200">
              Accompagnement aux devoirs
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ─── SECTION A — Garderie périscolaire ─────────────────────── */}
      <motion.section
        id="garderie"
        className="bg-primary py-14 scroll-mt-20"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="px-4 mx-auto max-w-screen-xl">
          <div className="flex items-center gap-3 mb-10 justify-center">
            <span className="text-4xl" aria-hidden="true">🐐</span>
            <h2 className="text-3xl font-extrabold text-secondary tracking-tight">Garderie périscolaire</h2>
          </div>

          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl bg-white">
            <div className="bg-secondary px-8 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white">De l&apos;école à la ferme</h3>
                <p className="text-green-100 text-sm">À partir de 3 ans · places limitées</p>
              </div>
              <div className="flex items-end gap-1 text-white">
                <span className="text-5xl font-extrabold">13</span>
                <span className="text-2xl font-bold mb-1">€</span>
                <span className="text-green-100 mb-1">/ heure</span>
              </div>
            </div>

            <div className="p-8 grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-3">Ce qui est proposé</p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex gap-2"><Check /> Prise en charge des enfants à la sortie de l&apos;école de Trept</li>
                  <li className="flex gap-2"><Check /> Retour à pied jusqu&apos;à la ferme (15 min de trajet)</li>
                  <li className="flex gap-2"><Check /> Mise en sécurité des enfants pendant le trajet</li>
                  <li className="flex gap-2"><Check /> Collation sortie du sac</li>
                  <li className="flex gap-2"><Check /> Activités autour des animaux, dehors ou dedans</li>
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-1">Infos pratiques</p>
                <ul className="divide-y divide-gray-100 text-sm">
                  <InfoRow icon="📅" label="Jours">Uniquement le lundi et le vendredi</InfoRow>
                  <InfoRow icon="🕠" label="Horaires">Flexibles, de 17h30 à 18h30</InfoRow>
                  <InfoRow icon="🎒" label="À prévoir">Un gilet réfléchissant et des vêtements adaptés à l&apos;extérieur</InfoRow>
                </ul>
              </div>
            </div>

            <div className="px-8 pb-8 flex flex-col items-center gap-2 text-center">
              <p className="text-sm text-gray-500">Service uniquement sur réservation</p>
              <BookingButton label="Réserver" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* ─── SECTION B — Accompagnement aux devoirs ─────────────────── */}
      <motion.section
        id="devoirs"
        className="bg-white py-14 scroll-mt-20"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="px-4 mx-auto max-w-screen-xl">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <span className="text-4xl" aria-hidden="true">📚</span>
            <h2 className="text-3xl font-extrabold text-text-nature tracking-tight">Accompagnement aux devoirs</h2>
          </div>
          <p className="text-center text-gray-600 mb-10">
            Atelier <strong className="text-text-nature">Petit apprenti</strong>, grâce aux animaux de la ferme
          </p>

          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl">
            <div className="bg-text-nature px-8 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white">Besoin d&apos;un coup de patte pour réussir tes devoirs&nbsp;?</h3>
                <p className="text-green-100 text-sm">Du CP au CM2 · places limitées</p>
              </div>
              <div className="flex items-end gap-1 text-white">
                <span className="text-5xl font-extrabold">23</span>
                <span className="text-2xl font-bold mb-1">€</span>
                <span className="text-green-100 mb-1">/ séance</span>
              </div>
            </div>

            <div className="bg-nature p-8 grid md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-text-nature">Pourquoi avec les animaux&nbsp;?</p>
                <p className="text-sm text-gray-600">
                  Les animaux aident à se concentrer et n&apos;ont aucun jugement. Grâce à eux, l&apos;enfant&nbsp;:
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2"><Check /> reprend confiance</li>
                  <li className="flex gap-2"><Check /> reste serein</li>
                  <li className="flex gap-2"><Check /> canalise ses pensées</li>
                  <li className="flex gap-2"><Check /> retrouve sa motivation</li>
                  <li className="flex gap-2"><Check /> apaise ses émotions</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-inner">
                <p className="text-xs font-semibold uppercase tracking-widest text-text-nature mb-1">Infos pratiques</p>
                <ul className="divide-y divide-gray-100 text-sm">
                  <InfoRow icon="📅" label="Quand">Le jeudi, de 16h45 à 18h15</InfoRow>
                  <InfoRow icon="🏫" label={"Sortie d'école"}>Possibilité de récupérer les enfants à l&apos;école de Trept</InfoRow>
                  <InfoRow icon="📍" label="Où">185 route de Bourgoin, 38460 Trept</InfoRow>
                </ul>
              </div>
            </div>

            <div className="bg-nature px-8 pb-8 flex flex-col items-center gap-2 text-center">
              <p className="text-sm text-gray-500">Renseignements et inscriptions</p>
              <BookingButton label="Inscrire mon enfant" />
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
