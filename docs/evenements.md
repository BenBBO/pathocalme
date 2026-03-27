# Événements

## Fonctionnement

La page **Événements** (`/evenements`) affiche les événements de la ferme Path'O Calme, répartis en deux sections :

- **Événements à venir** – tous les événements dont la date est aujourd'hui ou dans le futur, triés par date croissante.
- **Événements passés** – tous les événements dont la date est déjà passée, triés du plus récent au plus ancien.

Chaque événement est représenté par une **carte miniature** qui affiche :

- La photo miniature
- Le titre
- La date (formatée en français, ex. « 20 avril 2025 »)
- Un badge **À venir** (vert) ou **Passé** (gris)

Au **clic sur une carte**, une **modale** s'ouvre avec :

- Le titre et la date
- La description complète
- Le tarif
- Le nombre de places maximum (si renseigné)
- Une galerie de photos (avec lightbox plein écran au clic sur une photo)

## Structure des fichiers

```
src/
├── data/
│   └── evenements.json            ← Fichier de données des événements
├── app/
│   ├── evenements/
│   │   ├── layout.js              ← Métadonnées SEO de la page
│   │   └── page.js                ← Page principale (tri à venir / passés)
│   └── components/
│       ├── evenementCard/
│       │   └── index.js           ← Composant carte miniature
│       └── evenementModal/
│           └── index.js           ← Composant modale détail + lightbox
├── utils/
│   └── dates.js                   ← Utilitaires de parsing/formatage de dates
public/
└── images/
    └── evenements/
        ├── <id-evenement>/        ← Dossier photos pour chaque événement
        │   ├── photo1.jpg
        │   └── photo2.jpg
        └── ...
```

## Ajouter un nouvel événement

### 1. Ajouter les photos

Créer un dossier dans `public/images/evenements/` portant l'**identifiant** de l'événement et y déposer toutes les photos (miniature incluse).

```
public/images/evenements/noel-2026/
├── noel1.jpg       ← servira de miniature
├── noel2.jpg
└── noel3.jpg
```

### 2. Ajouter l'événement dans le fichier de données

Ouvrir `src/data/evenements.json` et ajouter un objet dans le tableau :

```json
{
  "id": "noel-2026",
  "titre": "Noël à la ferme",
  "date": "2026-12-20",
  "description": "Venez fêter Noël à la ferme avec des ateliers créatifs, un goûter festif et la rencontre avec les animaux !",
  "tarif": "10€ par enfant",
  "maxPersonnes": 20,
  "miniature": "noel1.jpg",
  "photos": ["noel1.jpg", "noel2.jpg", "noel3.jpg"]
}
```

### 3. Redéployer le site

Commiter les changements et pousser la branche. Le site sera automatiquement redéployé avec le nouvel événement.

## Format d'un événement

| Champ            | Type       | Obligatoire | Description                                                                 |
|------------------|------------|-------------|-----------------------------------------------------------------------------|
| `id`             | `string`   | ✅          | Identifiant unique, utilisé comme nom de dossier photos (ex. `paques-2026`) |
| `titre`          | `string`   | ✅          | Titre affiché sur la carte et dans la modale                                |
| `date`           | `string`   | ✅          | Date au format `YYYY-MM-DD` (ex. `2026-04-05`)                             |
| `description`    | `string`   | ✅          | Texte descriptif affiché dans la modale                                     |
| `tarif`          | `string`   | ✅          | Tarif affiché dans la modale (ex. `15€ par enfant`)                         |
| `maxPersonnes`   | `number`   | ❌          | Nombre maximum de participants (affiché uniquement si renseigné)            |
| `miniature`      | `string`   | ✅          | Nom du fichier image utilisé comme miniature (doit être dans le dossier `public/images/evenements/<id>/`) |
| `photos`         | `string[]` | ✅          | Liste des noms de fichiers photos (dans le même dossier)                    |

> **Note :** la classification « à venir » ou « passé » est automatique en fonction de la date du jour.
