"use client"
import { motion } from "framer-motion";
import AdoptionCarousel from "../components/adoptionCarousel";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7 },
  viewport: { once: true },
};

const quickLinks = [
  { id: "visites", emoji: "🎟️", label: "Visites" },
  { id: "dons", emoji: "💛", label: "Dons" },
  { id: "benevolat", emoji: "🤝", label: "Bénévolat" },
  { id: "adoption", emoji: "🐾", label: "Adoption" },
];

export default function Association() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative bg-cover bg-center bg-no-repeat bg-gray-700 bg-blend-multiply"
        style={{ backgroundImage: "url(images/miniferme.png)" }}
      >
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-40">
          <motion.p
            className="mb-2 text-lg font-semibold uppercase tracking-widest text-amber-300"
            {...fadeUp}
          >
            Association loi 1901
          </motion.p>
          <motion.h1
            className="mb-5 text-5xl font-extrabold tracking-tight leading-tight text-white md:text-7xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Les pattes de l&apos;isle
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Créée pour garantir la <strong className="text-white">sécurité</strong>,
            le <strong className="text-white">nourrissage</strong> et les{" "}
            <strong className="text-white">soins</strong> des animaux de notre ferme.
            Rejoignez notre belle aventure !
          </motion.p>
        </div>

        {/* Quick-nav tiles */}
        <div className="relative z-10 bg-secondary/90 backdrop-blur-sm">
          <div className="mx-auto max-w-screen-xl grid grid-cols-2 md:grid-cols-4">
            {quickLinks.map(({ id, emoji, label }, i) => (
              <motion.a
                key={id}
                href={`#${id}`}
                className="flex flex-col items-center gap-2 py-5 text-white hover:bg-white/10 transition-colors duration-200 border-r border-white/20 last:border-r-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <span className="text-3xl">{emoji}</span>
                <span className="text-sm font-semibold uppercase tracking-wider">{label}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── A — VISITES ──────────────────────────────────────────── */}
      <section id="visites" className="bg-association py-16">
        <div className="px-4 mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row gap-10 items-stretch">

            {/* Left — warm message panel */}
            <motion.div
              className="md:w-1/2 bg-secondary rounded-2xl p-8 flex flex-col justify-between text-white"
              {...fadeUp}
            >
              <div>
                <span className="text-5xl mb-4 block" aria-hidden="true">🎟️</span>
                <h2 className="text-3xl font-extrabold mb-3">Visites</h2>
                <span className="block w-12 h-1 rounded-full bg-amber-300 mb-5"></span>
                <p className="text-green-100 leading-relaxed">
                  Chaque visite finance <strong className="text-white">directement</strong> le repas
                  et les soins de nos animaux. En réservant par <a href="tel:0652867160" className="text-white underline underline-offset-2">téléphone au 06 52 86 71 60</a>, vous devenez acteur du bien-être de notre
                  famille à pattes.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-3 bg-white/10 rounded-xl p-4">
                <span className="text-2xl" aria-hidden="true">💻</span>
                <p className="text-sm text-green-100">
                  Paiement simple &amp; sécurisé en ligne via{" "}
                  <strong className="text-white">Hello Asso</strong> — le montant alimente directement
                  le compte des animaux.
                </p>
              </div>
            </motion.div>

            {/* Right — visite photos */}
            <motion.div
              className="md:w-1/2 rounded-2xl overflow-hidden association-photos-visites"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-2 h-full min-h-64">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  loading="lazy"
                  src="/images/visites/visite1.png"
                  alt="Visite de la ferme - vue de la mini-ferme"
                />
                <img
                  className="w-full h-full object-cover rounded-lg"
                  loading="lazy"
                  src="/images/visites/visite2.jpg"
                  alt="Visite de la ferme - activités avec les animaux"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── B — DONS ─────────────────────────────────────────────── */}
      <section id="dons" className="bg-white py-16">
        <div className="px-4 mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row-reverse gap-10 items-stretch">

            {/* Right — big stat panel */}
            <motion.div
              className="md:w-2/5 bg-amber-50 border-2 border-amber-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-4"
              {...fadeUp}
            >
              <span className="text-5xl" aria-hidden="true">💛</span>
              <p className="text-7xl font-black text-amber-500 leading-none">66%</p>
              <p className="text-sm font-semibold text-amber-700 uppercase tracking-wider">
                de déduction fiscale
              </p>
              <span className="block w-10 h-0.5 rounded-full bg-amber-300"></span>
              <p className="text-xs text-amber-600 italic">
                dans la limite de 20 % de votre revenu imposable
              </p>
            </motion.div>

            {/* Left — text */}
            <motion.div
              className="md:w-3/5 flex flex-col justify-center gap-5"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-extrabold text-secondary">Dons</h2>
              <span className="block w-12 h-1 rounded-full bg-secondary"></span>
              <p className="text-gray-600 leading-relaxed">
                Grâce au statut loi 1901 de notre association, votre don vous ouvre droit à une{" "}
                <strong>déduction fiscale de 66 %</strong>. Pensez à nous demander votre{" "}
                <strong>justificatif reçu fiscal</strong> lors de votre don.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-400 rounded-lg p-4">
                <p className="text-amber-800 italic text-sm leading-relaxed">
                  ✨ C&apos;est un grand honneur de vous compter parmi nos donateurs. Un grand merci pour
                  votre générosité envers nos animaux.
                </p>
              </div>
              {/* Photos placeholder */}
              <div className="association-photos-dons"></div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── C — BÉNÉVOLAT ────────────────────────────────────────── */}
      <section id="benevolat" className="bg-primary py-16">
        <div className="px-4 mx-auto max-w-screen-xl">
          <motion.div className="text-center mb-10" {...fadeUp}>
            <span className="text-5xl block mb-3" aria-hidden="true">🤝</span>
            <h2 className="text-3xl font-extrabold text-secondary">Bénévolat</h2>
            <span className="block w-12 h-1 rounded-full bg-secondary mx-auto mt-3 mb-4"></span>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Devenez bénévole à l&apos;année ou ponctuellement ! Barbara Bouillet vous accueille et vous
              accompagne dans vos actions : aide, nettoyage, travaux, soins et bien plus encore.
              <span className="block mt-2 font-semibold text-secondary">Toute aide est précieuse et la bienvenue.</span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Régulier */}
            <motion.div
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-secondary px-6 py-5">
                <span className="text-3xl block mb-1" aria-hidden="true">📅</span>
                <h3 className="text-xl font-bold text-white">Bénévolat régulier</h3>
                <p className="text-green-100 text-sm mt-1">Adhésion annuelle</p>
              </div>
              <div className="p-6 flex flex-col gap-4 flex-1">
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-extrabold text-secondary">30</span>
                  <span className="text-2xl font-bold text-secondary mb-1">€</span>
                  <span className="text-gray-500 mb-1">/ an</span>
                </div>
                <span className="block w-10 h-1 rounded-full bg-secondary"></span>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold mt-0.5">✓</span>
                    Accès bénévole à l&apos;année à la mini-ferme
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold mt-0.5">✓</span>
                    <strong>2 visites offertes</strong> dans l&apos;année (jusqu&apos;à 4 personnes)
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Ponctuel */}
            <motion.div
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-text-nature px-6 py-5">
                <span className="text-3xl block mb-1" aria-hidden="true">🌿</span>
                <h3 className="text-xl font-bold text-white">Bénévolat ponctuel</h3>
                <p className="text-green-100 text-sm mt-1">Sans engagement</p>
              </div>
              <div className="p-6 flex flex-col gap-4 flex-1">
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-extrabold text-text-nature">Gratuit</span>
                </div>
                <span className="block w-10 h-1 rounded-full bg-text-nature"></span>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-text-nature font-bold mt-0.5">✓</span>
                    Aucune obligation d&apos;adhésion
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-text-nature font-bold mt-0.5">✓</span>
                    Venez quand vous le souhaitez
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-text-nature font-bold mt-0.5">✓</span>
                    Votre participation est toujours la bienvenue
                  </li>
                </ul>
              </div>
            </motion.div>

          </div>
          {/* Photos placeholder */}
          <div className="mt-8 association-photos-benevolat"></div>
        </div>
      </section>

      {/* ── D — ADOPTION ─────────────────────────────────────────── */}
      <section id="adoption" className="bg-white py-16">
        <div className="px-4 mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row gap-10 items-stretch">

            {/* Left — adoption image grid */}
            <motion.div
              className="md:w-1/2 association-photos-adoption"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <AdoptionCarousel />
            </motion.div>

            {/* Right — text */}
            <motion.div
              className="md:w-1/2 flex flex-col justify-center gap-5"
              {...fadeUp}
            >
              <span className="text-5xl" aria-hidden="true">🐾</span>
              <h2 className="text-3xl font-extrabold text-secondary">Adoption</h2>
              <span className="block w-12 h-1 rounded-full bg-secondary"></span>
              <p className="text-gray-600 leading-relaxed">
                La plupart de nos animaux sont stérilisés. Lorsque des bébés naissent, ils sont
                précautionneusement <strong>sociabilisés</strong> dans le plus grand respect afin
                d&apos;être adoptés dans de <strong>bonnes familles</strong> ou de nouvelles fermes
                bienveillantes.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { emoji: "🏷️", label: "Identifié" },
                  { emoji: "💉", label: "Vacciné" },
                  { emoji: "🔬", label: "Testé" },
                  { emoji: "✂️", label: "Stérilisé" },
                ].map(({ emoji, label }) => (
                  <div key={label} className="flex items-center gap-2 bg-association rounded-xl px-4 py-3">
                    <span className="text-xl" aria-hidden="true">{emoji}</span>
                    <span className="text-sm font-semibold text-secondary">{label}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 italic">
                Un montant est demandé pour couvrir les frais engagés pour le bien de tous.
              </p>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
