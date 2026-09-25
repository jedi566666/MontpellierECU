<p align="center"><img src="mtp-logo-official.png" alt="Logo officiel Montpellier ECU" width="160"></p>

# MTP — Montpellier ECU

**Né en Occitanie, valable partout dans le monde.**

MTP est un crypto-actif sur Base, né à Montpellier, dont nous construisons progressivement les usages : outils numériques, échanges volontaires et création.

**Montpellier est son origine, pas sa frontière.** L’ouverture mondiale est notre ambition ; elle ne signifie pas que MTP est accepté partout aujourd’hui.

[Site](https://mtptoken.pages.dev/) · [Contrat Base](https://basescan.org/token/0x50626097a780881d3dFf1Ff97579e6dAF965366B) · [MTP Live](https://mtptoken.pages.dev/live/) · [MTP App](https://github.com/jedi566666/MontpellierECU/releases) · [Documentation](docs/README.md) · [Argent 0](docs/philosophy/README.md) · [English](README.en.md)

## Comprendre en une minute

- **Ce que c’est :** un token ERC-20 sur Base, avec une offre fixe de 21 millions de MTP.
- **Pourquoi :** explorer des échanges utiles autour des objets, du temps, des compétences et des créations.
- **Aujourd’hui :** consulter une adresse publique, observer les données disponibles, préparer une annonce locale et participer à la communauté.
- **En construction :** paiements intégrés, publication d’annonces et parcours commerçants. Ces fonctions ne sont pas annoncées comme livrées.
- **Vérifier :** lire le contrat, ses preuves reproductibles et les limites connues.

## Pourquoi Montpellier ?

Montpellier donne au projet son point de départ. L’Occitanie lui donne une identité. Le monde constitue son horizon d’ouverture. MTP est un projet indépendant ; son nom n’annonce aucun soutien de la ville ou d’une institution.

## Argent 0 — la valeur existe avant l’argent

Une heure disponible. Un objet qui peut servir encore. Une compétence à transmettre. Une création à partager. La valeur existe déjà, avant d’être exprimée en monnaie.

**Temps · Compétence · Savoir · Objet · Création · Service · Réemploi**

Argent 0 invite à utiliser ce qui existe, réduire les dépenses inutiles et reconnaître les contributions humaines. Cela ne veut pas dire que tout doit être gratuit : le travail peut être rémunéré, les échanges doivent être consentis et les coûts réels restent visibles.

MTP peut devenir un outil pour faire circuler cette valeur. C’est une utilité à démontrer avec les participants.

**UTILITÉ > SPÉCULATION**

[Lire le manifeste](docs/philosophy/argent-zero.md) · [Les sept principes](docs/philosophy/seven-principles.md) · [Premier essai d’utilité proposé](docs/PISTE-UTILITE-ARGENT-0.md)

## Des usages à construire, un territoire ouvert

Parcours cible, et non chaîne de services déjà intégrée :

**MTP → MTP App → Paiement → Marketplace → De l’écran à l’abandon → Montpellier → Occitanie → Monde**

*De l’écran à l’abandon* est le premier grand écosystème d’usage visé : la BD et le jeu en développement donnent des créations concrètes autour desquelles expérimenter. Ils restent des projets distincts. Détenir MTP ne donne pas automatiquement accès à la BD, au jeu ou à des revenus.

## Explorer l’écosystème

### MTP Token · STABLE — déployé
Le token existe sur Base. L’offre et les transactions sont consultables publiquement. Ce statut ne qualifie ni son prix ni son niveau de risque.
[Explorer le contrat](https://basescan.org/token/0x50626097a780881d3dFf1Ff97579e6dAF965366B) · [Preuves](docs/preuves-contrat-2026-09-22/RAPPORT.md)

### MTP App / Monia · BETA
L’application Windows rassemble les outils du projet. La release publique est Monia 1.0 ; Monia 2.0 reste une livraison locale en attente de publication vérifiée. Les anciennes versions peuvent contenir des liens devenus indisponibles.
[Versions publiques](https://github.com/jedi566666/MontpellierECU/releases) · [Architecture](docs/app/architecture.md)

### MTP Live · BETA
Observer les pools et les données renvoyées par les sources. La fraîcheur et la disponibilité varient ; un prix affiché ne garantit pas un prix d’exécution.
[Ouvrir Live](https://mtptoken.pages.dev/live/) · [Fonctionnement réel](docs/ETAT-DU-SITE.md)

### Marketplace · PROTOTYPE
Préparer des annonces sur son appareil et les partager manuellement. Aucun paiement ni publication serveur automatique.
[Préparer un brouillon](https://mtptoken.pages.dev/echanges/) · [Documentation](docs/marketplace/README.md)

### Argent 0 · Documentation en harmonisation
Une philosophie et des propositions d’usage, à éprouver avec des personnes volontaires.
[Manifeste et textes](docs/philosophy/README.md)

### De l’écran à l’abandon · Création en cours
Une BD en préparation éditoriale et un jeu en développement. La version intégrale Ultra+ sera présentée lorsqu’elle sera prête. Aucun téléchargement final n’est annoncé ici.
[Présentation de l’écosystème](ECOSYSTEM_FR.md) · [Roadmap](docs/roadmap/README.md)

### Communauté · Participation ouverte
Proposer une correction, une idée d’usage ou un retour d’expérience sans acheter de token pour participer.
[Telegram](https://t.me/MTPOCCITANIE) · [Contribuer](CONTRIBUTING.md)

## Transparence : vérifier avant de croire

| Propriété | Référence |
|---|---|
| Réseau | Base — chain ID 8453 |
| Standard | ERC-20 |
| Décimales | 18 |
| Offre fixe créée au déploiement | 21 000 000 MTP |
| Contrat officiel | `0x50626097a780881d3dFf1Ff97579e6dAF965366B` |

Le contrôle du 22 septembre 2026 a reproduit le bytecode de création et le runtime intégralement. Les sources correspondantes ne définissent ni mint public après construction ni administration Ownable. Cette preuve de correspondance ne constitue pas un audit exhaustif de sécurité.

[Rapport reproductible](docs/preuves-contrat-2026-09-22/RAPPORT.md) · [Sources et résultats archivés](docs/preuves-contrat-2026-09-22/MTP-PREUVE-BYTECODE-2026-09-22.zip) · [Explorateur](https://basescan.org/address/0x50626097a780881d3dFf1Ff97579e6dAF965366B#code)

Les anciennes générations de contrat sont historiques. Une donation volontaire de 100 000 MTP est connue ; elle ne doit pas être présentée comme une anomalie. Les soldes et répartitions doivent toujours être datés et vérifiés.

## Où en sommes-nous ?

| Composant | Statut au 25 septembre 2026 |
|---|---|
| Token | STABLE — déployé |
| Site | BETA |
| MTP App / Monia | BETA |
| MTP Live | BETA |
| Marketplace | PROTOTYPE |
| Paiement intégré | PLANNED |
| Mode commerçant | PLANNED |
| Argent 0 | PROTOTYPE éditorial |
| Documentation | BETA |

Ces états décrivent les fonctions et documents, pas une promesse de calendrier ou de rendement.

## Roadmap : gagner en utilité

1. **De l’écran à l’abandon :** terminer les livrables créatifs et définir un premier usage volontaire.
2. **MTP App :** fiabiliser la version distribuée, ses liens et sa documentation.
3. **Marketplace :** tester les annonces, puis définir publication, modération et responsabilités.
4. **Montpellier :** expérimenter avec des volontaires, recueillir leurs retours.
5. **Occitanie :** étendre uniquement les usages qui ont fait leurs preuves.
6. **France :** adapter les parcours et la documentation aux participants.
7. **Monde :** ouvrir les usages et les langues selon la demande réelle.

Chaque phase dépend de résultats vérifiables, de ressources disponibles et d’une validation humaine. Aucun partenaire ou commerçant n’est déclaré acquis par cette roadmap.

## Participer et retrouver les sources

Une correction de documentation, un test mobile ou une traduction relue peut déjà aider. Décrire le problème, le résultat attendu et les preuves, puis proposer une issue ou une pull request. Ne pas publier de secret ni de vulnérabilité exploitable dans une discussion publique.

[Contribution](CONTRIBUTING.md) · [Sécurité](SECURITY.md) · [Historique](CHANGELOG.md) · [Sources web actuelles — branche master](https://github.com/jedi566666/MontpellierECU/tree/master)

Les sources web et la vitrine documentaire occupent actuellement deux branches distinctes. Le périmètre des licences est en clarification ; la présence publique d’un fichier ne suffit pas à attribuer les mêmes droits à la BD, aux logiciels et aux marques.

## Développement assisté par IA

ChatGPT, Codex et d’autres outils assistent le développement, les contrôles, les tests et la documentation. Mehdi Souissi conserve la direction du projet. Les décisions, validations, transactions blockchain et responsabilités restent humaines.

Merci à OpenAI et aux communautés des outils libres utilisés. Ces remerciements n’impliquent aucun partenariat officiel.

**Une identité. Une philosophie. Une source de vérité.**


## Conception du jeu

[De l’écran à l’abandon — architecture, tramway et monde ouvert Godot](docs/jeu/README.md). Trois dossiers révisés, avec les résultats historiques, les améliorations proposées et les critères de validation.
