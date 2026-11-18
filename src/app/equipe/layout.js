import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Les animaux de la mini-ferme",
  description: "Découvrez les animaux de la ferme pédagogique Path'O Calme à Trept, près de Bourgoin-Jallieu en Isère : chèvres, poules, lapins, cochon, tortue et bien d'autres compagnons à pattes et à plumes.",
  socialDescription: "Rencontrez les animaux de la ferme pédagogique Path'O Calme : chèvres, poules, lapins, cochon, tortue et bien d'autres compagnons.",
  path: "/equipe",
  keywords: ["animaux ferme", "ferme pédagogique", "chèvres", "poules", "lapins", "cochon", "tortue", "Bourgoin-Jallieu", "Trept", "Isère", "Path'O Calme"],
});

export default function EquipeLayout({ children }) {
  return children;
}
