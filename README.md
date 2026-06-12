# Päivärutiini – Huippumyyjä

Staattinen selainpohjainen sovellus myynti-identiteetin, itsevarmuuden ja vakuuttavuuden päivittäiseen harjoitteluun.

## Sisältö

Sovelluksessa on kolme pääosiota:

1. Aamu, 15 min
   - Huippumyyjä-ankkuri, 7 min
   - Future pacing, 3 min
   - Ääniharjoitus, 5 min

2. Ennen soittoja, 90 sek
   - Hengitys
   - Ryhti
   - Ankkuri
   - Ensimmäinen lause ääneen

3. Päivän jälkeen, 7 min
   - Missä olin vakuuttava?
   - Missä menin hakemaan hyväksyntää?
   - Mitä teen huomenna suoremmin?

Lisäksi mukana on 30 päivän ydinlause:

“Minun tehtäväni ei ole miellyttää yrittäjää. Minun tehtäväni on auttaa häntä näkemään, onko jäsenyys hänelle järkevä päätös — ja jos on, johdan hänet päätökseen.”

## GitHub + Vercel

Vie nämä tiedostot suoraan GitHub-repon juureen:

- `index.html`
- `package.json`
- `vercel.json`
- `.gitignore`
- `README.md`

Vercel-asetukset:

- Framework Preset: Other
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

## Tallennus

Sovellus tallentaa päiväkirjaukset selaimen localStorage-muistiin.
