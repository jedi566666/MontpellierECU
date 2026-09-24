# Montpellier ECU — reconstruction web

Site statique en français, inspiré d'une présentation produit sobre, palette MTP noir/or/rouge. Sources graphiques : ressources originales extraites de Monia. Contrat Base conservé : `0x50626097a780881d3dFf1Ff97579e6dAF965366B`.

## Pages

- `/` : présentation, identité occitane, Argent 0, Monia, transparence.
- `/wallet/` : portefeuille injecté EIP-1193 ou adresse publique, lecture des soldes MTP/ETH via Base, QR de réception, aucune transaction signée.
- `/live/` : GeckoTerminal (première page) et DexScreener, pools dédupliquées, absence et erreur explicites, aucune série historique simulée.
- `/echanges/` : brouillons locaux avec copie manuelle pour partage, aucun stock ni paiement inventé.
- `/confidentialite/` : stockage et services externes.

## Construction

Node 24, pnpm, `pnpm install`, `node build.cjs`. Dossier à publier : **site**. Aucun serveur applicatif, secret, base de données ni Function Cloudflare.

Tests : `node test.cjs` avec Playwright et Edge. Ce script utilise le runtime Playwright installé dans l'environnement Codex de cet ordinateur ; adapter le chemin du require sur un autre poste. Les scénarios de soldes/pools utilisent des réponses contrôlées et l'instantané d'audit `../audit/gecko-pools.txt` ; ils ne prouvent pas la disponibilité courante des API. Captures et résultats dans verification.

Archives : `python package.py`. Le ZIP complet contient index.html à sa racine. Live et Wallet autonomes contiennent aussi leur index.html à la racine et renvoient au domaine principal pour les autres espaces. Leurs URL canoniques restent celles du site principal afin d'éviter les duplications.

## Déploiement autorisé

Remplacer le projet existant **mtptoken**, après vérifications. Authentification Cloudflare requise. Ne pas créer un autre projet par erreur. Utiliser d'abord une branche de prévisualisation avec Wrangler, vérifier le déploiement puis publier sur la branche de production réelle retournée par Cloudflare.

Sitemap et robots présents ; leur publication ne constitue pas une validation Search Console ou une garantie d'indexation. Les deux jetons Google connus sont conservés, chacun une seule fois (demande Netlify historique et jeton du Cloudflare existant).

## Limites explicites

Les anciennes applications Netlify répondent 404 lors de l'audit. Les sources récupérées permettent la reconstruction mais pas une synchronisation serveur des annonces/messages. Aucun backend de commerce, transfert signé, cours garanti ou récompense de jeu n'est ajouté. Monia renvoie aux versions réellement publiées sur GitHub. Les traductions ne sont pas simulées.

Les affirmations historiques « mint initial 10,5 millions » et « ERC20Capped/Ownable » contredisent le code vérifié de l'adresse officielle selon l'audit existant ; elles ne sont pas reprises. Le site ne remplace jamais le contrat.

Hébergement statique prévu sur le plan gratuit Cloudflare Pages. Pas de ressource payante activée par la construction.
