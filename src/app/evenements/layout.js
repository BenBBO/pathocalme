import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Événements à la ferme : Pâques, Halloween, Noël",
  description: "Path'O Calme organise des événements tout au long de l'année : Pâques, Halloween, fêtes de fin d'année. Découvrez nos animations saisonnières à la ferme pédagogique de Trept, près de Bourgoin-Jallieu en Isère.",
  socialDescription: "Événements saisonniers à la ferme pédagogique Path'O Calme : Pâques, Halloween, fêtes de fin d'année. Animations pour petits et grands près de Bourgoin-Jallieu.",
  path: "/evenements",
  keywords: ["événements", "ferme pédagogique", "Pâques", "chasse aux œufs", "Halloween", "fêtes de fin d'année", "Bourgoin-Jallieu", "Trept", "Isère"],
});

export default function EvenementsLayout({ children }) {
  return children;
}
