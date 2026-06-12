# Huippumyyjä-rutiinit

Selainpohjainen harjoitussovellus päivittäiseen myynti-identiteetin, vakuuttavuuden ja itsevarmuuden treenaamiseen.

## Tiedostot

- `index.html` — valmis sovellus
- `package.json` — tekee projektista Vercelin tunnistaman JavaScript-projektin
- `.gitignore` — GitHub/Vercel-perusasetukset

## GitHub + Vercel

1. Luo uusi GitHub-repo.
2. Uploadaa kaikki nämä tiedostot repon juureen.
3. Mene Verceliin.
4. Valitse `Add New Project`.
5. Importtaa GitHub-repo.
6. Vercel tunnistaa projektin Vite-projektina.
7. Deploy.

## Paikallinen käyttö

```bash
npm install
npm run dev
```

## Tallennus

Päivän harjoitukset tallentuvat selaimen localStorageen. Ne pysyvät samalla selaimella, mutta eivät synkronoidu eri laitteille.
