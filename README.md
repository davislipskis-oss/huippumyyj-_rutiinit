# Huippumyyjä-rutiinit

Selainpohjainen, staattinen HTML-sovellus päivittäisten myynti-identiteettiä ja itsevarmuutta vahvistavien rutiinien tekemiseen.

## Sisältö

- `index.html` — koko sovellus yhdessä tiedostossa
- `.gitignore` — perus GitHub/Vercel-käyttöön

## Käyttö GitHubin ja Vercelin kanssa

1. Luo uusi GitHub-repo.
2. Uploadaa tämän ZIP-paketin sisältö repon juureen.
3. Mene Verceliin.
4. Valitse `Add New Project`.
5. Importtaa GitHub-repo.
6. Framework preset: `Other`.
7. Deploy.

Sovellus ei tarvitse backendia, tietokantaa eikä npm-asennusta.

## Tallennus

Päivän rutiinit tallentuvat selaimen `localStorage`-muistiin.  
Eli tiedot pysyvät samalla selaimella, mutta eivät siirry automaattisesti eri laitteille.
