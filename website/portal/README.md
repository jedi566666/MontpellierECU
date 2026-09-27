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
