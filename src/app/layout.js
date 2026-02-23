import { Inter } from 'next/font/google'
import Navigation from "./components/navigation";
import './globals.css'
import Footer from './components/footer';
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    template: "%s | Path'O Calme",
    default: "Path'O Calme - Ferme pédagogique près de Bourgoin-Jallieu",
  },
  description: "Path'O Calme est une ferme pédagogique située à Trept, près de Bourgoin-Jallieu en Isère. Découvrez nos animations pour enfants, notre pension pour chats et nos séances de médiation par l'animal.",
  keywords: ["ferme pédagogique", "Bourgoin-Jallieu", "Trept", "Isère", "animations enfants", "médiation par l'animal", "zoothérapie", "pension chat", "mini-ferme", "BAFA"],
  openGraph: {
    title: "Path'O Calme - Ferme pédagogique près de Bourgoin-Jallieu",
    description: "Path'O Calme est une ferme pédagogique située à Trept, près de Bourgoin-Jallieu en Isère. Animations pour enfants, pension pour chats et médiation par l'animal.",
    url: "https://pathocalme.fr",
    siteName: "Path'O Calme",
    locale: "fr_FR",
    type: "website",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
