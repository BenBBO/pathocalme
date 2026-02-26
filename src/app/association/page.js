"use client"
import { motion } from "framer-motion";

const Section = ({ id, emoji, title, children }) => (
  <motion.div
    id={id}
    className="bg-white rounded-2xl shadow-md overflow-hidden"
    initial={{ opacity: 0, y: 30 }}
    transition={{ duration: 0.8 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <div className="bg-secondary px-6 py-5 flex items-center gap-3">
      <span className="text-4xl" aria-hidden="true">{emoji}</span>
      <h2 className="text-2xl font-bold text-white">{title}</h2>
    </div>
    <div className="p-6 text-gray-700 space-y-4 text-base leading-relaxed">
      {children}
    </div>
  </motion.div>
);

export default function Association() {
  return (
    <>
      {/* Hero */}
      <section className="bg-association py-14">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-10 lg:py-8">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-secondary md:text-6xl lg:text-7xl">
            Notre Association
          </h1>
          <p className="mb-6 text-xl font-normal text-gray-600 lg:text-2xl sm:px-16 lg:px-48">
            Les pattes de l&apos;isle — Association loi 1901
          </p>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Notre association a été créée afin de garantir la sécurité, le nourrissage et les soins
            des animaux de notre ferme. Rejoignez-nous et participez à notre belle aventure !
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="bg-primary py-14">
        <div className="px-4 mx-auto max-w-screen-xl grid grid-cols-1 gap-10">

          {/* A — Visites */}
          <Section id="visites" emoji="🎟️" title="A — Visites">
            <p>
              Pour garantir la pérennité des soins de notre famille à pattes, toutes les visites financent
              directement le repas et les soins de ceux-ci.
            </p>
            <p>
              Grâce à <strong>Hello Asso</strong>, c&apos;est simple : vous réglez directement en ligne ce qui
              alimente le compte des animaux.
            </p>
            {/* Photos placeholder — images will be added here */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 association-photos-visites">
              {/* Photos à venir */}
            </div>
          </Section>

          {/* B — Dons */}
          <Section id="dons" emoji="💛" title="B — Dons">
            <p>
              Vous pouvez régler en fin d&apos;année vos revenus fiscaux grâce au statut loi 1901 de
              l&apos;association. Faire un don vous permet de bénéficier d&apos;une{" "}
              <strong>déduction fiscale de 66 %</strong> dans la limite de 20 % de votre revenu imposable.
            </p>
            <p>
              Lors de votre don, demandez le <strong>justificatif reçu fiscal</strong>.
            </p>
            <p className="italic text-secondary font-medium">
              C&apos;est un grand honneur de vous compter parmi nos donateurs. Un grand merci à vous et
              votre générosité pour les animaux.
            </p>
            {/* Photos placeholder */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 association-photos-dons">
              {/* Photos à venir */}
            </div>
          </Section>

          {/* C — Bénévolat */}
          <Section id="benevolat" emoji="🤝" title="C — Bénévolat">
            <p>
              Devenez bénévole à l&apos;année ou ponctuellement ! Barbara Bouillet, la présidente, vous
              accueille et vous accompagne dans vos actions à la mini-ferme : entre aide, nettoyage,
              travaux, soins, charges lourdes et bien d&apos;autres tâches encore.
            </p>
            <p>Toute aide est précieuse et la bienvenue.</p>
            <ul className="space-y-3 mt-2">
              <li className="flex gap-3">
                <span className="text-secondary font-bold text-lg flex-shrink-0">•</span>
                <span>
                  <strong>Bénévolat régulier</strong> — nous demandons une adhésion de{" "}
                  <strong>30 € à l&apos;année</strong>, ce qui vous donne également le droit à{" "}
                  <strong>2 visites</strong> de la ferme valables dans l&apos;année en cours (jusqu&apos;à
                  4 personnes maximum). Avec nos remerciements.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary font-bold text-lg flex-shrink-0">•</span>
                <span>
                  <strong>Bénévolat ponctuel</strong> — aucune obligation d&apos;adhésion. Votre
                  participation ne nous sera que bénéfique et nous vous en remercions.
                </span>
              </li>
            </ul>
            {/* Photos placeholder */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 association-photos-benevolat">
              {/* Photos à venir */}
            </div>
          </Section>

          {/* D — Adoption */}
          <Section id="adoption" emoji="🐾" title="D — Adoption">
            <p>
              Le but n&apos;étant pas de faire de l&apos;élevage ou de la production, il arrive que certains
              animaux naissent à la ferme. La plupart de nos animaux sont stérilisés.
            </p>
            <p>
              Lorsque cela arrive, les bébés sont précautionneusement manipulés et sociabilisés dans leur
              plus grand respect, afin qu&apos;ils puissent être adoptés dans de bonnes familles ou de nouvelles
              fermes bienveillantes. Les nouvelles familles seront scrupuleusement choisies, car un animal
              adopté devient un compagnon de vie sur plusieurs années.
            </p>
            <p>
              Un certain montant est demandé pour l&apos;adoption afin de couvrir les frais et les soins engagés
              pour avoir des animaux <strong>identifiés, vaccinés, testés et stérilisés chirurgicalement</strong>{" "}
              pour le bien de tous.
            </p>
            {/* Photos placeholder */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 association-photos-adoption">
              {/* Photos à venir */}
            </div>
          </Section>

        </div>
      </section>
    </>
  );
}
