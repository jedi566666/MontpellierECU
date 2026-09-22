# Site Montpellier ECU — état du 22 septembre 2026

Site officiel : https://mtptoken.pages.dev/

| Espace | Fonctionnement disponible | Limites |
|---|---|---|
| Accueil | Présentation, liens et transparence | Pas de promesse de rendement |
| [Wallet](https://mtptoken.pages.dev/wallet/) | Connexion navigateur, lecture des soldes Base, adresse publique, QR | Aucun transfert signé depuis cette version |
| [Live](https://mtptoken.pages.dev/live/) | Pools et graphique Canvas, sélection de pool, historique, actualisation 60 s quand visible | Sources publiques parfois anciennes ou indisponibles ; prix indicatif non garanti à l'exécution |
| [Échanges](https://mtptoken.pages.dev/echanges/) | Brouillons d'annonces, copie et suppression | Stockage local uniquement, aucune publication ou commande automatique |
| [Confidentialité](https://mtptoken.pages.dev/confidentialite/) | Explication du stockage et des services interrogés | API externes utilisées pour les lectures |

## Architecture et exploitation

HTML/CSS/JavaScript statique, hébergé sur le projet Cloudflare Pages existant `mtptoken`. Identité noir/or/rouge, assets MTP réutilisés. Le graphique utilise Canvas natif. Le QR utilise qrcode. Le Wallet lit le RPC Base ; Live utilise GeckoTerminal et DexScreener. Aucune base de données serveur ni API payante nécessaire à ces fonctions.

Le site est exportable en ZIP. Le dossier publié contient index.html à sa racine. Les archives de livraison restent locales à cette date ; cette mise à jour GitHub publie la documentation et les preuves du contrat, pas toutes les sources applicatives.

## Contrat et preuves

Adresse officielle Base : `0x50626097a780881d3dFf1Ff97579e6dAF965366B`.

Recompilation du 22 septembre : code runtime et code de création identiques intégralement aux données RPC du contrat officiel. Offre fixe de 21 millions, 18 décimales, pas de mint externe, administration Ownable, taxe de transfert, pause, blacklist ou proxy dans ce code.

[Rapport et limites](preuves-contrat-2026-09-22/RAPPORT.md) · [Résultats machine](preuves-contrat-2026-09-22/RESULTAT.json) · [Dossier reproductible ZIP](preuves-contrat-2026-09-22/MTP-PREUVE-BYTECODE-2026-09-22.zip).

Cette correspondance ne constitue pas une certification de sécurité ni une garantie économique. Les anciennes descriptions 10,5 millions initiaux/mint propriétaire ne décrivent pas le contrat officiel actuel.

## Référencement et livraisons

Titres, descriptions, URL canoniques, sitemap et robots présents. La présence des balises Google a été contrôlée ; validation Search Console et indexation effective non confirmées. Les anciennes adresses Netlify ne sont plus les liens de référence de cette reconstruction.

Monia 2.0.0 a été préparée localement en portable Windows, non signée ; sa publication comme release publique n'est pas confirmée. La page Releases reste la référence des versions effectivement publiées.

## Tests

20 contrôles locaux couvrent notamment affichage mobile, navigation, précision des soldes, QR, persistance et pannes des sources. Certains tests utilisent des réponses simulées. Des vérifications réelles supplémentaires ont été réalisées sur Cloudflare. Ces contrôles ne sont pas un audit exhaustif.

## Argent 0

Réutiliser l'existant, privilégier le navigateur et les outils gratuits, garder des livraisons exportables. Aucune dépense ne doit être engagée par défaut. Les lectures ne consomment pas de gas ; un futur transfert réel pourrait en demander.
