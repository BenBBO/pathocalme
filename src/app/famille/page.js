import OrganismeCard from '../components/organismeCard';

import visite1 from "../../../public/images/visites/visite1.jpg";
import visite2 from "../../../public/images/visites/visite2.png";
import visite3 from "../../../public/images/visites/visites3.jpeg";
import visites4 from "../../../public/images/visites/visites4.jpeg";

import atelierEveil1 from "../../../public/images/atelier eveil/atelier.jpeg";
import atelierEveil2 from "../../../public/images/atelier eveil/atelier 2.jpg";
import atelierEveil3 from "../../../public/images/atelier eveil/atelier 3.jpg";
import atelierEveil4 from "../../../public/images/atelier eveil/atelier 4.jpg";
import atelierEveil5 from "../../../public/images/atelier eveil/atelier 5.jpg";

import atelierPetit1 from "../../../public/images/atelier petits/atelier petit.png";
import atelierPetit2 from "../../../public/images/atelier petits/atelier petit 3.jpg";
import atelierPetit3 from "../../../public/images/atelier petits/atelier petit 4.jpg";
import atelierPetit4 from "../../../public/images/atelier petits/atelier petit 5.jpg";
import atelierPetit5 from "../../../public/images/atelier petits/atelier petit 6.jpg";
import atelierPetit6 from "../../../public/images/atelier petits/atelier petit 7.png";
import atelierPetit7 from "../../../public/images/atelier petits/atelier petit 8.jpg";

import anniversaire1 from "../../../public/images/anniversaires/anniversaire.jpg";
import anniversaire2 from "../../../public/images/anniversaires/anniversaire2.jpg";
import anniversaire3 from "../../../public/images/anniversaires/anniversaire3.jpg";

import stage1 from "../../../public/images/stages/stage1.jpg";

import fragile1 from "../../../public/images/personne fragile/Personne fragile1.jpg";
import fragile2 from "../../../public/images/personne fragile/Personne fragile2.jpg";
import fragile3 from "../../../public/images/personne fragile/Personne fragile3.jpg";
import fragile4 from "../../../public/images/personne fragile/accompagnement.jpeg";

export const metadata = {
  title: "Famille",
  description: "Découvrez nos prestations pour les familles : visites des animaux, ateliers éveil bébé, ateliers petits et grands, anniversaires, stages et accompagnement des personnes fragiles.",
  keywords: ["famille", "enfants", "adultes", "ferme pédagogique", "visite animaux", "atelier éveil", "anniversaire", "stages", "personne fragile", "médiation animale", "Bourgoin-Jallieu", "Trept", "Isère"],
};

export default function Famille() {
  return (<>
    {/* Header */}
    <section className="bg-famille py-10">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-6 lg:py-4">
        <h1 className="mb-3 text-4xl font-extrabold tracking-tight leading-none text-text-nature md:text-6xl lg:text-7xl">Famille</h1>
        <p className="mb-4 text-2xl font-normal text-text-nature lg:text-3xl sm:px-16 lg:px-24">Activités et prestations pour toute la famille</p>
        <div className="text-base text-gray-600 max-w-5xl mx-auto space-y-2">
          <p>
            Toutes les animations et privatisations sont ouvertes de <strong className="text-text-nature">0 à 99+ ans</strong>.
            Venez partager des moments uniques en famille au cœur de la ferme, entouré d&apos;animaux bienveillants et en pleine nature.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <a href="#enfants-adultes" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-full bg-secondary text-white hover:bg-text-nature shadow-md hover:shadow-lg transition-all duration-200">
            Enfants et adultes
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a href="#personnes-fragiles" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-full bg-secondary text-white hover:bg-text-nature shadow-md hover:shadow-lg transition-all duration-200">
            Personnes fragiles
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>

    {/* Section A - Enfants et Adultes */}
    <section id="enfants-adultes" className="bg-white py-14 scroll-mt-20">
      <h2 className="text-2xl font-semibold tracking-widest uppercase text-center mb-8">Enfants et adultes</h2>
      <div className="grid gap-8 px-4 mx-auto max-w-screen-xl grid-cols-1 lg:grid-cols-2">

        {/* 1. Visite des animaux */}
        <OrganismeCard
          images={[
            { src: visite1.src, alt: "Visite des animaux 1" },
            { src: visite2.src, alt: "Visite des animaux 2" },
            { src: visite3.src, alt: "Visite des animaux 3" },
            { src: visites4.src, alt: "Visite des animaux 4" },
          ]}
          title="Visite des animaux pour tous"
          summary={<>
            Laissez-vous guider pour une <strong className="text-text-nature">visite de 1H30</strong> au cœur de la ferme. Entrez dans les parcs, <strong className="text-text-nature">câlinez</strong> les animaux, grattez-les et partagez un moment de <strong className="text-text-nature">douceur et de bienveillance</strong>.
          </>}
          description={[
            <>Prenez le temps d&apos;être guidé pendant un instant pour rendre visite aux animaux. Entrez dans les parcs et profitez de <strong className="text-text-nature">câliner</strong> les uns, <strong className="text-text-nature">gratter</strong> les autres, leur dire des mots doux, dans le <strong className="text-text-nature">respect et la bienveillance</strong> de tous.</>,
          ]}
          footer="Durée 1H30 — Forfait 3 personnes : 20€ — +5€/personne supplémentaire"
        />

        {/* 2. Atelier éveil bébé */}
        <OrganismeCard
          images={[
            { src: atelierEveil1.src, alt: "Atelier éveil bébé 1" },
            { src: atelierEveil2.src, alt: "Atelier éveil bébé 2" },
            { src: atelierEveil3.src, alt: "Atelier éveil bébé 3" },
            { src: atelierEveil4.src, alt: "Atelier éveil bébé 4" },
            { src: atelierEveil5.src, alt: "Atelier éveil bébé 5" },
          ]}
          title="Atelier éveil de bébé (9 mois – 3 ans)"
          summary={<>
            Un atelier en <strong className="text-text-nature">pleine nature</strong> pour les tout-petits de <strong className="text-text-nature">9 mois à 3 ans</strong>. Explorer en sécurité, <strong className="text-text-nature">éveiller ses 5 sens</strong>, s&apos;émerveiller et grandir à son rythme.
          </>}
          description={[
            <>Le développement en pleine nature est important pour explorer en sécurité, <strong className="text-text-nature">grandir à son rythme</strong>, s&apos;émerveiller, apprendre, échanger, manipuler et <strong className="text-text-nature">éveiller ses 5 sens</strong>.</>,
          ]}
          footer="Durée 1H — Forfait 1 enfant + 2 accompagnants : 11€ — +5€/personne supplémentaire"
        />

        {/* 3. Atelier des petits et grands */}
        <OrganismeCard
          images={[
            { src: atelierPetit1.src, alt: "Atelier petits et grands 1" },
            { src: atelierPetit2.src, alt: "Atelier petits et grands 2" },
            { src: atelierPetit3.src, alt: "Atelier petits et grands 3" },
            { src: atelierPetit4.src, alt: "Atelier petits et grands 4" },
            { src: atelierPetit5.src, alt: "Atelier petits et grands 5" },
            { src: atelierPetit6.src, alt: "Atelier petits et grands 6" },
            { src: atelierPetit7.src, alt: "Atelier petits et grands 7" },
          ]}
          title="Atelier des petits et grands (dès 4 ans)"
          summary={<>
            S&apos;ouvrir au monde extérieur pour <strong className="text-text-nature">prendre soin des animaux</strong>, apprendre et partager. Plusieurs ateliers au choix : <strong className="text-text-nature">petits fermiers</strong>, <strong className="text-text-nature">petits soigneurs</strong>, <strong className="text-text-nature">soigneurs d&apos;insectes</strong> et plus encore !
          </>}
          description={[
            <>S&apos;ouvrir au monde extérieur afin de prendre soin des autres, d&apos;apprendre, de comprendre, de partager, de prendre le temps autour des animaux.</>,
            <><strong className="text-text-nature">Atelier petits fermiers</strong> : préparation des repas pour les animaux et leur donner à manger.</>,
            <><strong className="text-text-nature">Atelier petits soigneurs</strong> : prendre soin des animaux en nettoyant leurs cabanes, en écoutant leur cœur, en les pesant, en coupant leurs griffes, en apprenant qui ils sont pour bien s&apos;en occuper.</>,
            <><strong className="text-text-nature">Atelier petits soigneurs d&apos;insectes</strong> : apprendre et comprendre les petites bêtes afin de les préserver tout en se protégeant. Observer, toucher et donner à manger à de vrais insectes inoffensifs.</>,
            <>D&apos;autres ateliers sont proposés durant les <strong className="text-text-nature">vacances scolaires</strong> : petit éducateur caprin, petit créateur nature, petit cuisinier du goûter, petit bricoleur (voir planning).</>,
          ]}
          footer="Durée 1H30 — Forfait 1 enfant + 1 accompagnant : 16€ — +5€/personne supplémentaire"
        />

        {/* 4. Anniversaire ou privatisation */}
        <OrganismeCard
          images={[
            { src: anniversaire1.src, alt: "Anniversaire 1" },
            { src: anniversaire2.src, alt: "Anniversaire 2" },
            { src: anniversaire3.src, alt: "Anniversaire 3" },
          ]}
          title="Anniversaire ou privatisation"
          summary={<>
            <strong className="text-text-nature">Privatisez</strong> la ferme en famille ou entre amis pour célébrer un événement. Deux formules : <strong className="text-text-nature">3H à 152€</strong> ou <strong className="text-text-nature">2H à 98€</strong>. Boissons offertes, décoration fournie !
          </>}
          description={[
            <>En famille ou entre amis, vous avez la possibilité de <strong className="text-text-nature">privatiser les lieux</strong> afin de célébrer des événements particuliers, privatiser un atelier ou simplement passer un bon moment.</>,
            <><strong className="text-text-nature">Formule 3H — 152€</strong> : jusqu&apos;à <strong className="text-text-nature">10 enfants max</strong> (+6 ans) ou 6 enfants (-6 ans). Jusqu&apos;à 12 enfants possibles au tarif de 20€/enfant supplémentaire. Boissons enfants offertes, verres réutilisables et décoration fournis. Repas à vos frais. Seuls les parents de l&apos;enfant fêté sont acceptés pendant la fête. Pour une fête familiale : jusqu&apos;à 15 personnes (enfants compris).</>,
            <><strong className="text-text-nature">Formule 2H — 98€</strong> : jusqu&apos;à <strong className="text-text-nature">8 enfants max</strong> ou 15 personnes max sur les lieux (enfants compris). Boissons offertes, verres réutilisables et décoration fournis. Repas à vos frais.</>,
            <>Un <strong className="text-text-nature">acompte de 70€</strong> par chèque ou virement est demandé pour réserver. Une fois l&apos;acompte versé, les invitations vous seront transmises par mail et la date validée.</>,
            <>En cas de mauvais temps temporaire, une caravane sert de petit abri. En cas de grosses intempéries, vous avez <strong className="text-text-nature">9 mois</strong> pour retrouver une nouvelle date. Toute annulation de dernière minute sans consentement entraîne la non-restitution de l&apos;acompte.</>,
          ]}
          footer="Formule 3H : 152€ — Formule 2H : 98€ — Acompte 70€ à la réservation"
        />

        {/* 5. Stages */}
        <OrganismeCard
          images={[
            { src: stage1.src, alt: "Stage à la ferme" },
          ]}
          title="Stages"
          summary={<>
            Votre enfant évolue comme un <strong className="text-text-nature">vrai petit fermier</strong> ! Stage <strong className="text-text-nature">½ journée (3H) à 32€</strong> dès 3 ans ou <strong className="text-text-nature">journée complète (5H) à 53€</strong> dès 4 ans. Sans accompagnant, boissons offertes.
          </>}
          description={[
            <><strong className="text-text-nature">Stage ½ journée — 32€</strong> : durant 3H, votre enfant évolue au sein de la ferme en compagnie d&apos;autres enfants comme un vrai petit fermier pour prendre soin des animaux. Prévoir un goûter, les boissons sont offertes. <strong className="text-text-nature">Forfait 1 enfant sans accompagnant, dès 3 ans</strong>.</>,
            <><strong className="text-text-nature">Stage 1 journée — 53€</strong> : durant 5H, votre enfant apprend, comprend, soigne, nettoie, bricole, joue, mange, câline les animaux, observe, se repose, rigole et s&apos;émerveille. Un moment unique en pleine nature. <strong className="text-text-nature">Forfait 1 enfant sans accompagnant, dès 4 ans</strong>.</>,
            <>Pour que le stage se passe au mieux, pensez à <strong className="text-text-nature">venir préalablement en visite</strong> pour que votre enfant rencontre les animaux et les lieux. Apportez un petit sac à dos avec une affaire de rechange et des vêtements adaptés à la météo. Pensez à une gourde et un repas équilibré (un micro-ondes est sur place).</>,
          ]}
          footer="½ journée (3H) : 32€ dès 3 ans — Journée (5H) : 53€ dès 4 ans"
        />
      </div>
    </section>

    {/* Section B - Personnes fragiles */}
    <section id="personnes-fragiles" className="bg-famille/50 py-14 scroll-mt-20">
      <h2 className="text-2xl font-semibold tracking-widest uppercase text-center mb-8">Personnes fragiles</h2>
      <div className="grid gap-8 px-4 mx-auto max-w-screen-xl grid-cols-1 lg:grid-cols-2">
        <div className="lg:col-span-2 max-w-3xl mx-auto w-full">
          <OrganismeCard
            images={[
              { src: fragile1.src, alt: "Personne fragile 1" },
              { src: fragile2.src, alt: "Personne fragile 2" },
              { src: fragile3.src, alt: "Personne fragile 3" },
              { src: fragile4.src, alt: "Accompagnement personne fragile" },
            ]}
            title="Médiation par l'animal — Personnes fragiles"
            summary={<>
              <strong className="text-text-nature">Formée à la médiation par l&apos;animal</strong> (IFZ de Velannes, 2023). Accompagnement adapté pour enfants, adultes et seniors : troubles <strong className="text-text-nature">neuro-atypiques</strong>, <strong className="text-text-nature">autisme</strong>, difficultés psychologiques ou physiques, <strong className="text-text-nature">burnout</strong> et bien plus.
            </>}
            description={[
              <>Depuis 2023, je suis formée à la <strong className="text-text-nature">médiation par l&apos;animal</strong> au sein de l&apos;IFZ de Velannes. Je suis amenée à rencontrer autant de petits, de grands que d&apos;adultes ou de seniors.</>,
              <>Les troubles liés peuvent être <strong className="text-text-nature">neuro-atypiques</strong>, <strong className="text-text-nature">autistiques</strong>, autant psychologiques que physiques, <strong className="text-text-nature">burnout</strong> et bien d&apos;autres encore.</>,
              <>Prenons le temps d&apos;échanger au sein de la ferme afin de se connaître, de rencontrer mes <strong className="text-text-nature">partenaires médiateurs</strong> et de découvrir les lieux. Laissons-nous le temps de savoir si nous sommes en <strong className="text-text-nature">confiance</strong> afin de collaborer dans nos démarches pour évoluer ensemble.</>,
              <>J&apos;interviens pendant les séances afin de permettre aux médiateurs et aux bénéficiaires d&apos;évoluer dans leur lien grâce à des <strong className="text-text-nature">activités adaptées</strong> favorisant les objectifs fixés en amont. Nous travaillons en <strong className="text-text-nature">triangulation</strong>. Contactez-moi pour en discuter.</>,
            ]}
            footer="Contactez-moi pour en discuter et planifier un premier échange"
          />
        </div>
      </div>
    </section>
  </>)
}
