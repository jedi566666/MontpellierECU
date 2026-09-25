# Source du marché statique

Copier `marketplace-studio.cjs` à la racine du projet web, et `marketplace.js` / `marketplace.css` dans son dossier `static`.

Dans `build.cjs`, appeler `require('./marketplace-studio.cjs')({fs,path,root})` après `creation-content.cjs` et avant l’injection des contacts et la finalisation SEO. Le module remplace uniquement la page française `/echanges/`. Les pages traduites conservent leur éditeur de brouillons ; le stockage historique `mtp.web.listings` est compatible en lecture.

Ajouter `https://raw.githubusercontent.com` à la directive CSP `connect-src` et les hôtes d’images GitHub nécessaires à `img-src` : `https://github.com`, `https://private-user-images.githubusercontent.com`, `https://user-images.githubusercontent.com`, `https://github-production-user-asset-6210df.s3.amazonaws.com`.

Le catalogue vient de `marketplace/catalog.json` sur main. Son workflow de validation et le mode d’emploi sont décrits dans [marketplace/README.md](../../marketplace/README.md). Aucune clé d’API ni aucun secret dans le client.

Fonctions : recherche, lieu, catégories, état, prix et devise, tri, dons, favoris, fiches, galerie, création et modification locale, compression des images, export/import JSON, suppression confirmée, proposition via GitHub. Les exemples illustratifs ne sont pas des annonces réelles. Le tri par prix ne compare pas EUR et MTP sans conversion : il utilise la devise sélectionnée.

Contrôles locaux : 320, 390, 768 et 1440 px, parcours CRUD et sauvegardes, stockage indisponible, rendu de texte non interprété, images, catalogue indisponible et parseur de publication.
