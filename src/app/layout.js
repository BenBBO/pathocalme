import { Inter } from 'next/font/google'
import Navigation from "./components/navigation";
import './globals.css'
import Footer from './components/footer';
import { Analytics } from '@vercel/analytics/react'
import { OG_IMAGE, SITE_NAME, SITE_URL } from './seo';

const inter = Inter({ subsets: ['latin'], display: 'swap' })

const defaultTitle = "Path'O Calme - Ferme pédagogique près de Bourgoin-Jallieu";
const defaultDescription = "Path'O Calme est une ferme pédagogique située à Trept, près de Bourgoin-Jallieu en Isère. Découvrez nos animations pour enfants, notre pension pour chats et nos séances de médiation par l'animal.";
const socialDescription = "Path'O Calme est une ferme pédagogique située à Trept, près de Bourgoin-Jallieu en Isère. Animations pour enfants, pension pour chats et médiation par l'animal.";

export const metadata = {
  title: {
    template: `%s | ${SITE_NAME}`,
    default: defaultTitle,
  },
  description: defaultDescription,
  keywords: ["ferme pédagogique", "mini-ferme", "Bourgoin-Jallieu", "Trept", "Isère", "Nord-Isère", "animations enfants", "anniversaire à la ferme", "médiation par l'animal", "médiation animale", "pension chat", "garderie périscolaire"],
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  authors: [{ name: "Barbara Bouillet" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: defaultTitle,
    description: socialDescription,
    url: "/",
    siteName: SITE_NAME,
    locale: "fr_FR",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: socialDescription,
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      "url": SITE_URL,
      "name": SITE_NAME,
      "inLanguage": "fr-FR",
      "publisher": { "@id": `${SITE_URL}/#business` }
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      "name": SITE_NAME,
      "alternateName": "La mini-ferme Path'O Calme",
      "description": "Mini-ferme pédagogique à Trept (Isère) : visites et ateliers pour enfants, anniversaires, stages, médiation par l'animal, garderie périscolaire, accompagnement aux devoirs et pension pour chats et NACS.",
      "url": SITE_URL,
      "image": `${SITE_URL}${OG_IMAGE.url}`,
      "logo": `${SITE_URL}/images/logo.webp`,
      "telephone": "+33652867160",
      "email": "babnana38@gmail.com",
      "priceRange": "€",
      "founder": {
        "@type": "Person",
        "name": "Barbara Bouillet"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "185 Rte de Bourgoin",
        "addressLocality": "Trept",
        "postalCode": "38460",
        "addressRegion": "Isère",
        "addressCountry": "FR"
      },
      "hasMap": "https://maps.app.goo.gl/56bzLyiwiwL3FCNK9",
      "areaServed": [
        { "@type": "City", "name": "Trept" },
        { "@type": "City", "name": "Bourgoin-Jallieu" },
        { "@type": "AdministrativeArea", "name": "Isère" }
      ],
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
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Prestations de la mini-ferme",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Visites et ateliers à la ferme en famille", "url": `${SITE_URL}/famille` } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Anniversaires et privatisation de la ferme", "url": `${SITE_URL}/famille` } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Médiation par l'animal", "url": `${SITE_URL}/famille` } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Animations pour écoles, crèches, centres de loisirs et instituts spécialisés", "url": `${SITE_URL}/organisme` } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pension pour chats et NACS", "url": `${SITE_URL}/pension` } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Garderie périscolaire", "url": `${SITE_URL}/services` } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Accompagnement aux devoirs avec les animaux", "url": `${SITE_URL}/services` } }
        ]
      },
      "sameAs": [
        "https://www.facebook.com/PathOCalme"
      ]
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
