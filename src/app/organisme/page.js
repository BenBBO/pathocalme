import miniferme from "../../../public/images/miniferme.png";
import OrganismeCard from '../components/organismeCard';

import petiteEnfance1 from "../../../public/images/professionnel petite enfance/professionnel petite enfance1.jpg";
import petiteEnfance2 from "../../../public/images/professionnel petite enfance/professionnel petite enfance2.jpg";
import petiteEnfance3 from "../../../public/images/professionnel petite enfance/professionnel petite enfance3.jpg";
import petiteEnfance4 from "../../../public/images/professionnel petite enfance/professionnel petite enfance4.jpg";

import instituts1 from "../../../public/images/instituts/instituts1.jpg";
import instituts2 from "../../../public/images/instituts/instituts2.png";

import centreLoisir from "../../../public/images/centre loisirs/centre loisir.jpg";

import ecole1 from "../../../public/images/ecoles/ecole1.jpg";
import ecole2 from "../../../public/images/ecoles/ecole2.jpg";
import ecole3 from "../../../public/images/ecoles/ecole3.png";
import ecole4 from "../../../public/images/ecoles/ecole4.png";

export const metadata = {
  title: "Organismes",
  description: "Découvrez nos prestations pour les organismes : professionnels de la petite enfance, instituts spécialisés, centres de loisirs et écoles. Animations et médiations animales adaptées à vos projets.",
  keywords: ["organismes", "ferme pédagogique", "petite enfance", "instituts spécialisés", "centre de loisirs", "écoles", "médiation animale", "Bourgoin-Jallieu", "Trept", "Isère"],
};

export default function Organisme() {
  return (<>
    <section className="bg-organisme py-14">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-10 lg:py-8">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-text-nature md:text-6xl lg:text-7xl">Organismes</h1>
        <p className="mb-8 text-2xl font-normal text-text-nature lg:text-3xl sm:px-16 lg:px-48">Animations et médiations pour vos structures</p>
      </div>
    </section>
    <section className="bg-cover bg-center bg-no-repeat bg-gray-600 bg-blend-multiply"
      style={{ backgroundImage: `url(${miniferme.src})` }}>
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56 text-white">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">Accueil des organismes à la ferme</h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          À la ferme, plusieurs animations sont proposées sur place en fonction de votre projet et votre demande. Rencontrons-nous.
          J&apos;accueille jusqu&apos;à 20 personnes avec accompagnant dans un lieu en plein air. La plupart de mes animaux sont habitués à tous les publics, ils sont doux et ont des comportements adaptés envers les humains petits et grands.
        </p>
        <p className="mb-4 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Je peux également me déplacer dans vos instituts en fonction de vos demandes et de mes capacités.
          Mes médiateurs sont approuvés et suivis par un vétérinaire certifié. Ils sont chèvres, poules, chiens, lapins, cochons d&apos;inde, tortues ou insectes inoffensifs.
        </p>
        <p className="text-2xl underline font-semibold">
          Toute demande est sur devis + déplacement 30 min max
        </p>
      </div>
    </section>
    <section className="bg-organisme py-14">
      <h1 className="text-2xl font-semibold tracking-widest uppercase text-center mb-8">Nos prestations pour les organismes</h1>
      <div className="grid gap-8 items-start px-4 mx-auto max-w-screen-xl grid-cols-1 lg:grid-cols-2">
        <OrganismeCard
          images={[
            { src: petiteEnfance1.src, alt: "Professionnel petite enfance 1" },
            { src: petiteEnfance2.src, alt: "Professionnel petite enfance 2" },
            { src: petiteEnfance3.src, alt: "Professionnel petite enfance 3" },
            { src: petiteEnfance4.src, alt: "Professionnel petite enfance 4" },
          ]}
          title="Professionnels petite enfance"
          description={[
            "RAM, MAM, CRÈCHES… tout autre institut de la petite enfance, contactez-moi pour parler de votre projet.",
            "NOUNOUS indépendantes : un tarif spécial est appliqué pour les visites.",
            "Vous pouvez également privatiser les lieux entre collègues nounous (3 minimums). Jusqu'à 20 personnes, je propose des activités adaptées aux tout-petits.",
          ]}
          footer="Durée : 1H30 — 20€ forfait 3 enfants + 1 nounou — 5€/enfant supplémentaire"
        />
        <OrganismeCard
          images={[
            { src: instituts1.src, alt: "Instituts spécialisés 1" },
            { src: instituts2.src, alt: "Instituts spécialisés 2" },
          ]}
          title="Instituts spécialisés"
          description={[
            "IME, EHPAD, EAM, MAS… tout autre institut accueillant des personnes ayant des troubles ou handicaps, contactez-moi pour me parler de votre projet. Sur place, jusqu'à 8 personnes peuvent venir en animation et pour les médiations, 4 personnes maximum.",
            "Professionnels indépendants, soulagement des familles : en tant qu'accompagnant, vous pouvez venir aux visites de groupe déjà planifiées (voir sur le planning) UNIQUEMENT SUR RÉSERVATION.",
            "Vous pouvez également proposer des séances individuelles ou collectives avec pathologie similaire aux familles. Ces séances se feront en collaboration entre vous et moi pour le bénéficiaire.",
          ]}
          footer="SUR DEVIS ET RÉSERVATION"
        />
        <OrganismeCard
          images={[
            { src: centreLoisir.src, alt: "Centre de loisirs" },
          ]}
          title="Centre de loisirs"
          description={[
            "Afin de vous accueillir dans les meilleures conditions, jusqu'à 15 enfants maximums seront acceptés.",
            "En fonction de vos projets d'animations, je peux m'adapter et vous proposer différents ateliers. Possibilité sur une demi-journée ou journée complètes.",
          ]}
          footer="SUR DEVIS"
        />
        <OrganismeCard
          images={[
            { src: ecole1.src, alt: "Écoles 1" },
            { src: ecole2.src, alt: "Écoles 2" },
            { src: ecole3.src, alt: "Écoles 3" },
            { src: ecole4.src, alt: "Écoles 4" },
          ]}
          title="Écoles"
          description={[
            "Afin de vous accueillir dans les meilleures conditions, seules les petites classes de 20 élèves maximums seront acceptées. En fonction de vos projets pédagogiques, je peux m'adapter et vous proposer des animations. Possibilité sur une demi-journée ou journée complètes. Je peux également me déplacer dans vos classes avec des animaux et petites bêtes.",
            "Passionnée, formée et instruite sur les différents animaux, la nature et leur mode de vie, je suis en capacité de transmettre à vos élèves le respect animal, une connaissance simplifiée des animaux, une prévention contre les morsures de chien (PECRAM), la bonne attitude pour apprendre et comprendre les minuscules.",
            "Des apprentissages à la ferme ou dans votre école avec des pédagogies ludiques adaptées à vos programmes scolaires et ajustées à chaque âge dès 3 ans.",
          ]}
          footer="SUR DEVIS"
        />
      </div>
    </section>
  </>)
}
