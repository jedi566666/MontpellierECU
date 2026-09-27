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
