# Rapport de maintenance externe MATRIX

Date de l’audit : 2 octobre 2026  
Dépôt examiné : `jedi566666/MontpellierECU`  
Branche : `copilot/maintenance-externe-matrix`

## État récupéré

- `git status` était propre à l’ouverture : aucune modification suivie, non suivie ou indexée.
- `git diff` était vide. Aucun changement de travail interrompu attribuable à Codex n’a été trouvé dans cette copie.
- HEAD était `abf47c5` (« Record verified public engineering dossier deployment »), après `b6e8c17` (« Publish bilingual game and MATRIX engineering dossier with PDF archives »).
- Le dépôt contient le site et les documents du projet, pas les sources exécutables de MATRIX ni le projet Godot. Les sources telles que `matrix_pro.py`, `aws_chat.py`, `file_tools.py` et `godot_gate.py` ne figurent ici que dans les descriptions et empreintes publiées.
- Documents MATRIX consultés : `docs/ENGINEERING-FR.md` et `docs/ENGINEERING-EN.md` (30 septembre), `docs/PUBLICATION-IA-2026-09-30.md`, `docs/MATRIX-PRO-FR.md`, et les instantanés `website/portal/static/assets/engineering/model-routes.json` et `source-snapshot.json`. Ces documents décrivent des instantanés locaux, pas la disponibilité actuelle des services ni l’état des sources privées.

## Fichiers modifiés

- `MATRIX_EXTERNAL_MAINTENANCE_REPORT.md` — ce rapport d’audit et de limites.
- Aucun code MATRIX, jeu Godot, réglage provider ou permission n’a pu être modifié dans ce dépôt.

## GitHub

Le catalogue local archivé ne contient pas d’intégration GitHub Models vérifiable. Il rapporte des essais de modèles via AWS Bedrock, dont Claude Haiku 4.5 le 28 septembre; ce n’est pas une preuve d’appel GitHub. Le test GitHub Haiku signalé dans la demande n’a pas pu être reproduit ni confirmé depuis cette copie.

Les rôles souhaités pour GPT-5.4, GPT-5.3-Codex, Claude Sonnet 5, Kimi K3 et Claude Haiku 4.5 ne sont donc ni configurés ni validés ici. Aucun appel, benchmark ou coût GitHub n’a été déclenché.

## Azure

La version déployée, le SKU et l’état `Succeeded` de DeepSeek-V4-Flash au 23 avril 2026 sont des informations fournies dans la demande; elles ne sont pas corroborées par les fichiers du dépôt. Aucun accès authentifié à MATRIX ou Azure n’est disponible ici : connexion minimale, déploiements, modèles, SKU et facturation n’ont pas été inspectés.

Le gestionnaire de déploiement humainement approuvé et les blocages de SKU/coût demandés ne sont pas présents dans les sources disponibles. Aucun déploiement, test Azure ni coût cloud n’a été déclenché. Qwen3-VL sur H100 et son prix mentionné dans la demande n’ont pas été vérifiés; aucun statut de sécurité tarifaire n’est affirmé.

## Audio

Aucune intégration exécutable Azure Speech, GPT Realtime 2.1 ou GPT Realtime 2.1 mini n’est incluse dans le dépôt. Les rôles et l’affichage « vert + souligné » ne peuvent donc pas être ajoutés ou testés ici.

## Productivity Monitor

Le moniteur et sa logique de statuts ne sont pas dans cette copie. Les statuts `READY`, `RUNNING`, `SUCCESS`, `PARTIAL`, `EMPTY`, `TIMEOUT`, `ERROR`, `BLOCKED`, `UNAVAILABLE`, `SKIPPED` et `CANCELLED`, l’exigence de test minimal pour `READY`, ainsi que la sélection « TOUS » limitée aux agents prêts restent non vérifiés.

Aucun agent MATRIX n’a été appelé pendant cet audit. Aucun agent non appelé n’a été marqué en échec. La sélection secondaire/manuelle de Gemini et le relais Vercel vers un `SOURCE_PACK_READY` suivi d’un autre agent prêt ne peuvent pas être confirmés dans les sources disponibles.

## Sécurité Control Plane / Worker Plane

Les documents archivés décrivent des chemins autorisés et des répertoires protégés, mais précisent que ces garde-fous applicatifs ne prouvent pas un confinement au niveau du système d’exploitation. Ils ne démontrent pas la nouvelle frontière Control Plane / Worker Plane demandée.

La protection en lecture seule de MATRIX, l’écriture uniquement dans les espaces autorisés, le refus `DENIED_CONTROL_PLANE_WRITE` avec journalisation et l’autorisation de maintenance externe ne sont pas présents sous forme de code testable dans ce dépôt. Aucun worker n’a tenté d’écrire dans MATRIX; le refus et son journal n’ont donc pas été testés.

## Tests et coûts cloud déclenchés

- Tests demandés (GitHub, Azure, audio, sélection « TOUS », statuts limites, sécurité Control Plane et régression Godot) : **non exécutés**, car les exécutables et données de test concernés ne sont pas dans cette copie.
- Les scripts du portail ne valident pas ces fonctions MATRIX. Aucun test de portail n’a été lancé pour ce rapport documentaire.
- `website/portal/package.json` déclare `npm test` comme `node test.cjs`, mais `website/portal/test.cjs` est absent. Les scripts `verify-*.cjs` présents vérifient des pages du portail, pas MATRIX ou Godot.
- Appels de modèles, appels Azure, déploiements et transactions : **aucun**.
- Coûts cloud déclenchés par cet audit : **0**.

## Blocages restants

Fournir la copie autorisée des sources MATRIX et du projet Godot, les tests pertinents et un accès de test authentifié aux fournisseurs est nécessaire pour reprendre l’implémentation et établir les preuves demandées. Aucun état `READY`, `BLOCKED` ou coût cloud ne doit être déduit de cet audit documentaire seul.

Les validations `DENIED_CONTROL_PLANE_WRITE` et `Godot` n’ayant pas été exécutées, les conclusions **CONTROL PLANE PROTECTED** et **WORKER PLANE ISOLATED** ne peuvent pas être déclarées.
