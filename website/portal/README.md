# Portail Montpellier ECU

Sources du site https://mtptoken.pages.dev, reprises de la version de design du 26 septembre 2026.

## Construction

Avec Node.js et npm :

```sh
npm install
npm run build
```

Le dossier généré est `site/`. Les ressources originales sont dans `static/`. Ne pas modifier uniquement le HTML généré. Ne pas lancer MkDocs dans ce dossier : il ne construit pas le portail.

`experiments-content.cjs` génère les pages FR/EN et leurs liens, avant le design partagé et le sitemap. La page de remerciements est conservée dans `remerciements-openai.html`.

## Publication

Après validation locale, utiliser le projet Cloudflare Pages existant `mtptoken`, branche de production `main`. Vérifier les pages publiques après déploiement. Aucun secret n’est inclus dans les sources.

## Vérification du 27 septembre

Les mesures du carnet IA sont marquées non validées faute de protocole et de résultats bruts. Cette livraison documente les essais sans invoquer les modèles ni effectuer de transaction blockchain.

## Livraison du 27 septembre 2026

- Sources et carnet intégrés sur `main` (commit `55459b6`).
- Production Cloudflare : https://a1140a04.mtptoken.pages.dev ; domaine stable : https://mtptoken.pages.dev.
- 51 pages vérifiées sur mobile ; contrôles tablette/ordinateur, transitions, navigation sans JavaScript, Wallet avec RPC simulé et brouillons locaux réussis.
- Après publication : 51 pages et 9 ressources en HTTP 200, contenu identique à la construction locale publiée.
- Scripts de contrôle : `verify-design.cjs` (Playwright/Edge, chemin du runtime local à adapter sur une autre machine) et `verify-design-public.cjs https://mtptoken.pages.dev` (Node.js).
- Les contrôles Wallet simulés ne prouvent pas la disponibilité des fournisseurs blockchain publics.

## Navigation IA et lecture compacte

La navigation principale propose désormais **IA**, et l’accueil un accès direct au laboratoire. `/ia/` présente les parcours ; `/frankenstein/` possède sa page dédiée. Les anciennes URLs du carnet restent disponibles.

Les sections éditoriales longues sont repliables, utilisables au clavier ; les liens vers une ancre ouvrent la rubrique visée. Sans JavaScript, le contenu reste intégralement lisible. Wallet, Live et les formulaires restent accessibles directement. Les illustrations décoratives de l’accueil sont masquées sur mobile pour réduire le défilement.

Contrôles : `node verify-design.cjs` (53 pages), `node verify-ia.cjs` (navigation, absence de débordement, rubriques au clavier, ancres et captures 390/1440 px).

## L’envers du décor IA — 27 septembre 2026

Nouvelle rubrique `/envers-du-decor-ia/`, édition anglaise `/en/behind-the-ai-scenes/`, 19 chapitres, schémas, vidéo Alpha et souvenir de l’atelier. Les PDF français et anglais sont disponibles dans `/assets/behind-scenes/fr.pdf` et `/assets/behind-scenes/en.pdf`, avec le logo MTP en filigrane sur chaque page. Leur texte est également publié dans `docs/` sur GitHub.

Source éditoriale commune : `behind-scenes-data.cjs`. Rendu HTML et Markdown : `behind-scenes-content.cjs`. Voir [la procédure de reproduction bilingue](../../docs/REPRODUIRE-LE-DOSSIER-IA.md). Les originaux métiers du jeu et de la BD ne sont pas modifiés. La capture privée du bêtisier n’est pas publiée.
## Dossier technique et archives — 30 septembre 2026

Sources éditoriales : `engineering-data.cjs`. Rendu commun : `engineering-render.cjs`; pages, bibliothèque et Markdown : `engineering-content.cjs`. Routes : `/ia/technique/`, `/en/ai/engineering/`, `/ia/archives/`, `/en/ai/archives/`.

Reproduction locale (dépendances déjà installées) :

```powershell
node generate-engineering-pdfs.cjs
npm run build
node verify-engineering.cjs
```

Le générateur PDF utilise Playwright et Edge; `PLAYWRIGHT_MODULE` permet de préciser le module installé. Les PDF fournis sont conservés sous `static/assets/ia-archives/`, avec manifeste de provenance, empreintes et indications d’expurgation. Les originaux privés ne sont pas nécessaires au build. Les nouveaux PDF FR/EN et six captures sont sous `static/assets/engineering/`. Les instantanés JSON documentent des sources locales inspectées, sans publier de configuration secrète ni prétendre certifier la disponibilité des modèles.
