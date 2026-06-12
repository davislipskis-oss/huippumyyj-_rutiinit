# Päivärutiini – Huippumyyjä

Tämä on Next.js-sovellus Vercel-deployta varten.

## GitHubiin vietävät tiedostot

Vie nämä suoraan repon juureen:

- `package.json`
- `next.config.js`
- `app/layout.jsx`
- `app/page.jsx`
- `app/styles.css`
- `.gitignore`
- `README.md`

Tärkeää: GitHubissa `package.json` pitää näkyä heti repon etusivulla, ei alikansion sisällä.

## Vercel-asetukset

Normaalisti Vercel tunnistaa tämän automaattisesti Next.js-projektiksi.

Jos kysyy asetuksia:

- Framework Preset: Next.js
- Build Command: `next build`
- Output Directory: jätä tyhjäksi
- Install Command: `npm install`
