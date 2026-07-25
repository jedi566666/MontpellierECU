# Écosystème MTP

[English version](ECOSYSTEM.md)

## Couche centrale

### Montpellier ECU (MTP)
Le token ERC-20 déployé sur Base relie les services et les interfaces de l’écosystème.

Contrat canonique :

`0x50626097a780881d3dFf1Ff97579e6dAF965366B`

## Interfaces publiques

### Site officiel
https://mtp-coin.netlify.app/

Source principale pour l’identité du projet, la navigation et l’accès public.

### MTP Live
https://mtplive.netlify.app/

Interface de suivi destinée à rendre l’activité du marché et du réseau plus compréhensible. Les données affichées dépendent d’indexeurs tiers et doivent toujours pouvoir être recoupées sur la blockchain.

### MTP Wallet
https://mtpwallet.netlify.app/

Interface orientée wallet donnant accès aux fonctions liées à MTP. Chaque utilisateur reste responsable de la protection de ses accès et de la validation des transactions.

### Marketplace
Couche de services pour les annonces d’objets, de prestations et de savoir-faire proposés en MTP. À long terme, elle doit constituer le principal cas d’usage non spéculatif de l’écosystème.

### MONIA
Application officielle pour ordinateur. La version 1.0 comprend une distribution portable destinée à limiter les contraintes d’installation. MONIA est une option d’accès à l’écosystème ; elle n’est pas l’écosystème lui-même.

### Argent 0
Philosophie publique et direction de conception fondées sur le principe :

> L’argent n’est pas une fin. C’est un moyen.

## Canaux communautaires

- Telegram : https://t.me/MTPOCCITANIE
- X : https://x.com/JEDI566666
- GitHub : https://github.com/jedi566666

Seules les informations publiées sur les canaux officiels vérifiés doivent être considérées comme des déclarations officielles du projet.

## Principes d’architecture

- Le MTP reste l’actif central.
- Les interfaces doivent rester facultatives et interopérables lorsque cela est possible.
- Aucun utilisateur ne doit être obligé d’installer MONIA pour comprendre ou consulter le projet.
- Les données publiques doivent provenir de la blockchain ou de fournisseurs clairement identifiés.
- Aucune interface ne doit inventer des données de marché lorsqu’un fournisseur est indisponible.
