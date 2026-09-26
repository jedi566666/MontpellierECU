# MTP ECU — Documentation & Reconstruction Web

Ce dépôt contient la documentation du projet MTP (Monnaie Territoriale de Montpellier), l''historique de l''expérience Frankenstein/GLM-5, et la reconstruction du site web statique.

## Structure

- `frankenstein/` : Documentation de l''intégration GLM-5 × Codex Windows
- `site/` : Site statique reconstruit (prêt à déployer sur Cloudflare Pages)
- `livraison/` : Archives ZIP du site complet et des modules autonomes
- Documents MTP (manifestes, chartes, parcours, architectures)

## Frankenstein : l''expérience agentique

Le répertoire `frankenstein/` documente comment connecter AWS Bedrock à Codex Windows Desktop pour créer une boucle agentique complète avec exécution réelle de commandes sur la machine.

Consultez `frankenstein/README.md` pour la chronologie complète.

## Site Web Montpellier ECU

Site statique en français, inspiration sobre, palette MTP noir/or/rouge. Sources graphiques extraites de Monia. Contrat Base conservé : `0x50626097a780881d3dFf1Ff97579e6dAF965366B`.

### Pages

- `/` : présentation, identité occitane, Argent 0, Monia, transparence
- `/wallet/` : portefeuille injecté EIP-1193 ou adresse publique, lecture soldes MTP/ETH via Base, QR réception
- `/live/` : GeckoTerminal (première page) et DexScreener, pools dédupliquées
- `/echanges/` : brouillons locaux avec copie manuelle pour partage
- `/confidentialite/` : stockage et services externes

### Construction

Node 24, pnpm, `pnpm install`, `node build.cjs`. Dossier à publier : **site**. Aucun serveur applicatif, secret, base de données ni Function Cloudflare.

Tests : `node test.cjs` avec Playwright et Edge. Captures et résultats dans `verification/`.

Archives : `python package.py`. ZIP complet et modules autonomes (Live, Wallet) dans `livraison/`.

### Déploiement autorisé

Remplacer le projet existant **mtptoken** sur Cloudflare Pages après vérifications. Authentification Cloudflare requise.

Sitemap et robots présents. Les deux jetons Google connus sont conservés.

### Limites explicites

Les anciennes applications Netlify répondent 404. Aucun backend de commerce, transfert signé, cours garanti ou récompense de jeu n''est ajouté. Monia renvoie aux versions publiées sur GitHub.

Les affirmations historiques « mint initial 10,5 millions » et « ERC20Capped/Ownable » contredisent le code vérifié ; elles ne sont pas reprises.

Hébergement statique prévu sur le plan gratuit Cloudflare Pages.

## Liens

- AWS Bedrock : https://aws.amazon.com/bedrock/
- Codex CLI (open source) : https://github.com/openai/codex
- Base (contrat) : https://basescan.org/token/0x50626097a780881d3dFf1Ff97579e6dAF965366B

---

*Repo initialisé le 2026-09-26.*
