import miniferme from "../../../public/images/miniferme.png";
import AnimationCard from '../components/animationCards';

import animationBebe from "../../../public/images/animation_bebe.png";
import acceuilNounou from "../../../public/images/acceuil_nounou.png";
import petitSoigneur from "../../../public/images/petit_soigneur.png";
import nourrissage from "../../../public/images/nourrissage.png";
import visiteAnimaux from "../../../public/images/visite_animaux.png";
import anniversaire from "../../../public/images/anniversaire.png";

export default function Animation() {
  return (<>
    <section className="bg-animation py-14">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-10 lg:py-8">
        <h1 className={`mb-4 text-4xl font-extrabold tracking-tight leading-none text-text-nature md:text-6xl lg:text-7xl`}>Animation pour enfants</h1>
        <p className={`mb-8 text-2xl font-normal text-gray-300 text-text-nature lg:text-3xl sm:px-16 lg:px-48`}>diplomée du BAFA</p>
      </div>
    </section>
    <section className="bg-cover bg-no-repeat bg-gray-600 bg-blend-multiply"
      style={{ backgroundImage: `url(${miniferme.src})` }}>
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56 text-white">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">Rejoignez nous à la mini-ferme</h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Située à Trept en Isère, entrez dans un parc de 3000m² arborés.
          Evoluez au milieu des animaux, entouré de différentes familles : caprin, porcin, gallinacé, lagomorphe, rongeur, réptile, insecte.
          Différentes activités sont proposées tout au long de l&apos;année afin de s&apos;émerveiller pour mieux respecter.</p>
        <p className="text-2xl underline">
          Sur réservation uniquement
        </p>
      </div>
    </section>
    <section className="bg-animation py-14">
      <h1 className="text-2xl font-semibold tracking-widest uppercase text-center mb-8">Animations</h1>
      <div className="grid gap-8 items-center px-4 mx-auto max-w-screen-xl grid-cols-1 lg:grid-cols-3">
        <AnimationCard imageUrl={animationBebe.src}
          title={"Atelier éveil bébé (45 min)"}
          description={"Le développement en pleine nature est important à cette âge pour explorer, grandir à son rythme et être accompagné"}
          age={"de 9 mois à 1 an"}
          limite={"limité à 5 enfants"}
          footerRight={"10€/enfant + 1 accompagnant"} />
        <AnimationCard imageUrl={acceuilNounou.src}
          title={"Acceuil des nounous (1h)"}
          description={"Grâce aux animaux et accompagnés des professionnels de la petite enfance, les enfants peuvent se rencontrer, échanger, prendre conscience de ce qui les entoure pour mieux appréhender leur corps."}
          footerLeft={"20€/nounou (3 enfants)"}
          limite={"limité à 15 enfants"}
          age={"de 0 à 5 ans"}
          footerRight={"5€/enfant supplémentaire"} />
        <AnimationCard imageUrl={petitSoigneur.src}
          title={"Atelier petit soigneur (2h)"}
          description={"Apprendre en s'amusant à prendre soin d'un animal afin de devenir responsable, de le connaître dans tous ses détails et passer un moment avec lui. Lors de l'acceuil d'un animal dans le foyer, toute la famille peut se former et avoir son 'certificat de capacité à prendre soin d'un animal'"}
          age={"À partir de 5 ans"}
          footerLeft={"18€/participant"}
          limite={"limité à 6 enfants"}
          footerRight={"60€/famille"} />
        <AnimationCard imageUrl={nourrissage.src}
          title={"Atelier nourissage (1h30)"}
          description={"Le matin, tout ce petit monde à grand faim. Afin qu'ils soient tous comblés, les aliments sont choisis, coupés, données pour le plus grand plaisir des familles et des animaux."}
          age={"À partir de 3 ans"}
          limite={"limité à 7 participants"}
          footerRight={"15€/enfant + 1 accompagnant"} />
        <AnimationCard imageUrl={visiteAnimaux.src}
          title={"Visite des animaux (1h30)"}
          description={"Être guidé le temps d'un instant pour visiter les parcs, profiter pour câliner les uns, gratouiller les autres, leur dire des mots doux. Dans le respect et la bienveillance de tous."}
          age={"Tout âge"}
          limite={"limité à 4 familles"}
          footerLeft={"20€/famille de 3"}
          footerRight={"5€/personne supplémentaire"} />
        <AnimationCard imageUrl={anniversaire.src}
          title={"Privatisation de la ferme (2h30)"}
          description={"Fêter un aniversaire, manger un goûter, déguster un apéritif, les lieux peuvent devenir privatifs pour un moment en famille ou entre amis. Pendant que les adultes profitent, les enfants sont pris en charge par Barbara pour la découverte des animaux autour de jeux et d'ateliers."}
          age={"Tout âge"}
          limite={"-6 ans: limité a 6 enfants ; +6 ans: limité à 10 enfants ; adultes+enfants limité à 20 personnes"}
          footerRight={"140€"} />
      </div>
    </section>
  </>
  )
}