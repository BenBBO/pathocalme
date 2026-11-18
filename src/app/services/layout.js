import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Garderie périscolaire et accompagnement aux devoirs",
  description: "Nouveaux services à la mini-ferme Path'O Calme de Trept : garderie périscolaire à la sortie de l'école le lundi et le vendredi, et accompagnement aux devoirs avec les animaux (atelier Petit apprenti) le jeudi, du CP au CM2.",
  socialDescription: "Garderie périscolaire le lundi et le vendredi, accompagnement aux devoirs avec les animaux le jeudi, à la mini-ferme Path'O Calme de Trept.",
  path: "/services",
  keywords: ["garderie périscolaire", "accompagnement aux devoirs", "aide aux devoirs", "Petit apprenti", "médiation par l'animal", "école de Trept", "Trept", "Bourgoin-Jallieu", "Isère", "ferme pédagogique"],
});

export default function ServicesLayout({ children }) {
  return children;
}
