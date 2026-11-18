import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Pension pour chats et NACS à Trept (Isère)",
  description: "Pension pour chats et nouveaux animaux de compagnie (NACS) à Trept, près de Bourgoin-Jallieu en Isère. Garde à la ferme ou visites à votre domicile par une professionnelle diplômée, formée et assurée.",
  socialDescription: "Pension pour chats et NACS près de Bourgoin-Jallieu. Service professionnel à la ferme ou à domicile par Path'O Calme.",
  path: "/pension",
  keywords: ["pension chat", "pension NACS", "garde de chat", "ferme pédagogique", "Bourgoin-Jallieu", "Trept", "Isère", "pets sitting", "garde animaux"],
});

export default function PensionLayout({ children }) {
  return children;
}
