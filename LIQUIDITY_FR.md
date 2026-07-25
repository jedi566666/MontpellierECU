# Principes de liquidité

[English version](LIQUIDITY.md)

## Objectif

La liquidité doit faciliter les achats, ventes et transactions légitimes de l’écosystème. Elle ne doit jamais être présentée comme un outil garantissant une hausse du cours.

## Principes de fonctionnement

1. **Financement progressif** — les ajouts doivent rester compatibles avec le budget réel du projet.
2. **Aucune stratégie de volume artificiel** — l’auto-transaction, les opérations trompeuses coordonnées et la demande fabriquée sont incompatibles avec ce plan.
3. **Identification publique** — les pools officielles pourront être référencées après vérification indépendante de leur adresse et de leur statut.
4. **Conscience des risques** — un fournisseur de liquidité s’expose aux variations de prix, à la perte impermanente, au risque de smart contract et à une faible profondeur de marché.
5. **Aucune promesse de défense du cours** — le projet ne promet ni un prix déterminé ni le rachat de chaque vente.
6. **Séparation des fonctions** — les fonds d’exploitation, fonds personnels et positions de liquidité devraient être suivis séparément lorsque cela est possible.

## État des pools

MTP a été associé sur des marchés décentralisés, notamment dans des configurations MTP/USD, MTP/USDT et MTP/WETH. Les interfaces et le statut des paires peuvent évoluer. Les adresses exactes ne doivent être ajoutées à ce document qu’après une vérification actuelle sur la blockchain.

Référence historique connue fournie par le projet :

- Paire QuickSwap V2 Base MTP/WETH : `0xBfdb1D822aC316669D65A417edEed7EAD24017b`

Cette référence ne garantit ni la liquidité actuelle, ni l’activité, ni la sécurité.

## Enseignement des petites positions de liquidité

Même une petite position peut perdre de la valeur par rapport à la simple conservation des deux actifs. La variation du solde d’une pool ne signifie pas automatiquement qu’elle a été volée ou vidée : elle peut résulter des swaps, des mouvements de prix, des frais et de la perte impermanente. Chaque position doit être contrôlée à partir du contrat de la pool et de l’historique du wallet concerné.
