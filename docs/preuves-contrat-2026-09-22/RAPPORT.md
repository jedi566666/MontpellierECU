# MTP — reproduction du contrat officiel

Contrôle effectué le 22 septembre 2026 à 07:12 UTC, réseau Base (chainId 8453), bloc de lecture `0x313e6bc`.

## Conclusion vérifiée

Le contrat officiel `0x50626097a780881d3dFf1Ff97579e6dAF965366B` correspond exactement à la compilation du source MontpellierECU et de ses cinq dépendances retournés par Blockscout. Le corps du contrat principal correspond à l'extrait final fourni dans l'archive utilisateur, comme établi dans la comparaison locale précédente. Les dépendances complètes proviennent de l'explorateur, pas du ZIP utilisateur.

- Compilateur : Solidity 0.8.30+commit.73712a01.
- Optimisation : activée, 200 runs.
- EVM : cancun.
- Runtime recompilé : **1 764 octets**, identique intégralement au résultat `eth_getCode`, métadonnées incluses, sans retrait ou normalisation du bytecode.
- Code de création recompilé : identique intégralement à l'input de la transaction de création directe.
- SHA-256 des octets runtime, identique pour la compilation et Base : `182562287ca41843500137244cd3508dcf740522806234acf3368693fbef2d9d`.

Transaction de création : https://basescan.org/tx/0x2371c5cb77ce59d24390e1e0472da0b2879c1d75e2f6a587c7367f4e3d1b8948

Le reçu indique un succès, la bonne adresse créée et un événement Transfer depuis l'adresse zéro vers `0x320f6C7aaD64f6DAf91A853aAA5ceaE6fa740626`, pour `21000000000000000000000000` unités : **21 millions de MTP avec 18 décimales**. C'est donc bien la quantité créée au déploiement, pas seulement l'offre actuelle.

## Propriétés du contrat officiel

Les sources complètes compilées et examinées décrivent un ERC20 simple. MontpellierECU hérite d'ERC20 et ne définit que son constructeur. ERC20 utilise les soldes et autorisations standards ; les transferts débitent et créditent le même montant.

- Offre créée : 21 000 000 MTP ; offre actuelle relue : 21 000 000 MTP.
- Aucun point d'entrée de mint après construction. Les fonctions internes `_mint` et `_burn` de la dépendance ne sont pas des fonctions publiques appelables.
- Pas d'Ownable, d'administrateur privilégié ou de fonction owner(). Les variables locales appelées owner dans ERC20 désignent les détenteurs, pas un administrateur du token.
- Pas d'héritage ERC20Capped ni de fonction cap(). Les appels owner()/cap() échouent ; cette observation complète l'analyse des sources et n'en tient pas lieu.
- Aucune logique de taxe de transfert, blacklist ou pause dans les sources correspondantes.
- Aucun proxy dans cette implémentation compilée ; Blockscout indique également proxy_type=null et aucune implementation.
- Aucun mécanisme de rachat, prix plancher, frais fixes de 0,001 MTP ou registry/treasury dans ce contrat.

Fonctions exposées : allowance, approve, balanceOf, decimals, name, symbol, totalSupply, transfer, transferFrom.

## Ancienne adresse : correction importante

Les nouvelles réponses Blockscout pour `0x442472B616792609b1C53Af5aa7135ef14524183` décrivent bien un autre MTPToken : 10,5 millions d'offre indexée, propriétaire, fonction mint réservée au propriétaire et plafond MAX_SUPPLY de 21 millions.

**Cependant son source vérifié présenté par l'explorateur est une implémentation autonome, sans héritage OpenZeppelin ERC20Capped/Ownable.** Le fichier historique Capped/Ownable fourni n'est donc pas à présenter comme son source exact. La logique économique historique est cohérente, mais l'identité exacte de ce source historique avec V1 n'est pas établie.

V1 : informations de l'explorateur collectées, pas de reproduction indépendante de son bytecode dans ce rapport. V2 officielle : reproduction indépendante complète effectuée. Ne pas confondre ces niveaux de preuve.

## Correction documentaire recommandée

Description du token officiel : « Montpellier ECU (MTP), ERC20 sur Base, 18 décimales, offre fixe de 21 millions créée intégralement au déploiement, sans fonction de création supplémentaire ni administration Ownable. »

Classer 10,5 millions initiaux / plafond 21 millions / mint propriétaire comme ancienne génération. Classer le source ERC20Capped/Ownable fourni comme artefact historique distinct tant que son déploiement précis n'est pas prouvé.

## Reproductibilité et portée

`verify.cjs` collecte les réponses, construit compiler-input.json, compile avec solc verrouillé en 0.8.30 et produit RESULTAT.json. `compiler-output.json` conserve notamment ABI, métadonnées et bytecodes. Les réponses RPC et reçu de création sont conservés séparément. `pnpm-lock.yaml` fige le compilateur installé.

Références :
- https://base.blockscout.com/api/v2/smart-contracts/0x50626097a780881d3dFf1Ff97579e6dAF965366B
- https://mainnet.base.org (RPC, méthodes de lecture uniquement)
- https://docs.soliditylang.org/en/v0.8.30/using-the-compiler.html (interface standard JSON)

Aucune signature, transaction, dépense de gas, modification du contrat ou publication du site. Cette vérification de correspondance ne constitue pas un audit de sécurité exhaustif, une garantie de liquidité ou une promesse de rendement.
