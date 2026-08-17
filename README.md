This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

This project runs on **Node.js 24** (see `.nvmrc` and the `engines` field in `package.json`):

```bash
nvm use        # or: nvm use 24
npm ci
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Sécurité des dépendances

Le champ `overrides` de `package.json` corrige des vulnérabilités de dépendances transitives :

- **`postcss: ^8.5.26`** — Next 14 épingle `postcss` en 8.4.31, version affectée par plusieurs advisories
  (XSS via `</style>` non échappé, lecture de fichiers arbitraires via `sourceMappingURL`).
- **`@next/eslint-plugin-next > glob: ^10.5.0`** — corrige l'injection de commande du CLI `glob`.
  L'override est **volontairement imbriqué** : un override global de `glob` le forcerait aussi sous
  `rimraf@3`, qui utilise l'API callback de `glob@7` et casserait le cache d'ESLint.

`npm audit` signale encore une advisory sur `next` lui-même, corrigeable seulement par Next 16
(breaking : React 19, `next lint` supprimé). Elle est **acceptée en connaissance de cause** : ce site
est un export statique (`output: 'export'`), sans runtime serveur Next en production, et les advisories
concernées visent toutes ce runtime (Server Actions, middleware, image optimizer, cache RSC, rewrites).
À réévaluer si le projet passe un jour en SSR ou sur des routes dynamiques.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
