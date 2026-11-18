import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Association Les pattes de l'isle",
  socialTitle: "Association Les pattes de l'isle | Path'O Calme",
  description: "L'association loi 1901 « Les pattes de l'isle » veille à la sécurité, au nourrissage et aux soins des animaux de la mini-ferme Path'O Calme à Trept (Isère). Visites, dons, bénévolat et adoption.",
  socialDescription: "Association loi 1901 dédiée à la sécurité, au nourrissage et aux soins des animaux de la mini-ferme Path'O Calme. Visites, dons, bénévolat et adoption.",
  path: "/association",
  keywords: ["association", "loi 1901", "les pattes de l'isle", "bénévolat", "adoption", "dons", "ferme pédagogique", "Bourgoin-Jallieu", "Trept", "Isère"],
});

export default function AssociationLayout({ children }) {
  return children;
}
