export const SITE_URL = "https://pathocalme.fr";
export const SITE_NAME = "Path'O Calme";

export const OG_IMAGE = {
  url: "/images/og-image.png",
  width: 1200,
  height: 630,
  alt: "Path'O Calme — mini-ferme pédagogique et médiation par l'animal à Trept (Isère)",
};

// Next.js ne fusionne pas les objets `openGraph` / `twitter` entre layout et page :
// une page qui redéfinit `openGraph` perd siteName, locale, type et image du layout racine.
// Ce helper garantit que chaque page publie un jeu complet de balises.
export function pageMetadata({ title, socialTitle, description, socialDescription, path, keywords }) {
  const shareTitle = socialTitle ?? `${title} | ${SITE_NAME}`;
  const shareDescription = socialDescription ?? description;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: shareTitle,
      description: shareDescription,
      url: path,
      siteName: SITE_NAME,
      locale: "fr_FR",
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description: shareDescription,
      images: [OG_IMAGE.url],
    },
  };
}
