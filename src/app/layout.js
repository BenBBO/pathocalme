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
  metadataBase: new URL("https://pathocalme.fr"),
  alternates: {
    canonical: "/",
  },
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Path'O Calme",
    "description": "Ferme pédagogique proposant des animations pour enfants, médiation par l'animal et pension pour chats et NACS.",
    "url": "https://pathocalme.fr",
    "telephone": "+33652867160",
    "email": "babnana38@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "185 Rte de Bourgoin",
      "addressLocality": "Trept",
      "postalCode": "38460",
      "addressCountry": "FR"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:30",
        "closes": "18:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "09:30",
        "closes": "13:30"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/PathOCalme"
    ]
  };

  return (
    <html lang="fr">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navigation />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
