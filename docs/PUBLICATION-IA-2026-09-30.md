# Publication IA — 30 septembre 2026

## Contenu / Content

- Dossier technique FR/EN : 18 chapitres, 2 annexes, 6 captures réelles et deux PDF de 22 pages.
- Neuf archives fournies, 111 pages. Deux copies expurgées : `embauche-kimi.pdf` (valeur d’authentification locale) et `ma-vie-matrix.pdf` (identifiants de compte dans des captures). Originaux locaux conservés.
- Bibliothèque bilingue référençant aussi les quatre PDF des guides antérieurs.
- Sources éditoriales, Markdown, manifestes SHA-256, catalogue local des routes et empreintes des fichiers inspectés.

## Vérifications locales / Local verification

- `npm run build` : 61 pages canoniques et 6 scripts localisés générés.
- `node verify-engineering.cjs` : 5 routes à 390 et 1440 px; aucun débordement horizontal, image cassée ou erreur JavaScript; liens internes contrôlés; 9 empreintes d’archives vérifiées et 2 signatures PDF vérifiées.
- Inspection visuelle : couverture, sommaire, chapitres, tableaux, sources, masquages et présentation mobile/ordinateur. Correction d’un héritage CSS global qui limitait la hauteur du bandeau éditorial sur ordinateur.
- Contrôle PDF : pagination des neuf archives; 22 pages non vides pour chaque nouvelle édition; texte à l’intérieur des pages; valeur de clé locale retirée du texte extractible.
- Tous les fichiers PDF ajoutés sont sous la limite de 25 Mio par fichier de la cible de déploiement.

## Portée / Scope

Le dossier décrit un instantané inspecté, pas une nouvelle livraison du jeu. La V1 reste la version validée; les 44 contrôles cités proviennent de son registre, ils n’ont pas été relancés pour cette publication. Aucune invocation de modèle payante, aucun achat et aucun recalcul des données urbaines.

The dossier describes an inspected snapshot, not a new game release. V1 remains the approved version; the cited 44 checks come from its release registry and were not rerun for this publication. No paid inference, purchases or urban dataset rebuilds were performed.

Routes : [FR](https://mtptoken.pages.dev/ia/technique/) · [EN](https://mtptoken.pages.dev/en/ai/engineering/) · [Archives FR](https://mtptoken.pages.dev/ia/archives/) · [Archives EN](https://mtptoken.pages.dev/en/ai/archives/).
