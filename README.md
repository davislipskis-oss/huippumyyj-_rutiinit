# Huippumyyjä-rutiinit

Tämä on Vercelille optimoitu staattinen HTML-sovellus.

## Tiedostot

- `index.html` — valmis selainpohjainen sovellus
- `package.json` — build-komento Vercelille
- `vercel.json` — pakottaa Vercelin julkaisemaan `dist`-kansion
- `.gitignore`
- `README.md`

## Vercel-asetukset

Kun importtaat GitHub-repon Verceliin:

- Framework Preset: Other
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

Jos Vercel lukee `vercel.json`-tiedoston oikein, nämä asetukset tulevat automaattisesti.

## Tärkeää

GitHub-repon juuressa pitää näkyä suoraan nämä tiedostot:

- index.html
- package.json
- vercel.json
- README.md
- .gitignore

Älä laita niitä ylimääräisen alikansion sisään.
