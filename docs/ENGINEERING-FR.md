# Dans les rouages du jeu et de MATRIX

Architecture Godot, données urbaines, agents, passerelles AWS et preuves de livraison. Édition technique illustrée.

2026-09-30 · Mehdi Souissi / Codex

[Web](https://mtptoken.pages.dev/ia/technique/) · [PDF](https://mtptoken.pages.dev/assets/engineering/fr.pdf) · [Archives](https://mtptoken.pages.dev/ia/archives/)

## 01 · Ce qui existe, ce qui reste à construire

De l’écran à l’abandon est un jeu Godot en développement, conduit par Mehdi Souissi à partir de son univers autobiographique. MATRIX est l’atelier local qui organise des assistants autour des fichiers; Frankenstein désigne les expériences de passerelles entre clients, modèles et outils. Ce sont trois couches différentes : création, orchestration et transport des requêtes.

Au 30 septembre 2026, VERSION_COURANTE.json désigne V1-20260930, validée « V » par Mehdi. Le registre rapporte 44 contrôles réussis : 26 sur interactions, missions et transports, 18 sur histoire et modes. Ces résultats concernent ce pack précis. Ils ne valident ni les modifications ultérieures des agents, ni une V1.2.

Le terrain reste plat, les façades stylisées, le réseau de tram partiel et l’histoire principalement textuelle. Le vol panoramique est fictif; les MTP du jeu sont une simulation locale. Aucun débit de compte ni paiement blockchain ne découle de ces interactions. Les performances ne sont pas certifiées.

![Capture conservée dans les preuves V1 du 30 septembre 2026 : place de la Comédie. Image du jeu, sans retouche de rendu.](../website/portal/static/assets/engineering/v1-ville.png)

*Capture conservée dans les preuves V1 du 30 septembre 2026 : place de la Comédie. Image du jeu, sans retouche de rendu.*

## 02 · De l’intention à une mécanique testable

La conception commence par la source : manuscrit, décisions de Mehdi, documents de reprise et état livré. Un fait autobiographique manquant reste manquant. Un PNJ anonyme de décor ou un exercice de conduite peut servir le jeu sans devenir un nouvel épisode présenté comme vécu. Cette séparation doit survivre aux prompts, aux dialogues et aux fiches de mission.

Une demande devient un contrat observable : situation de départ, action du joueur, changement d’état, feedback et critère de réussite. Pour un banc, par exemple, on vérifie l’approche, l’interaction, la posture, la sortie et le retour des commandes. « Ajouter une interaction immersive » ne décrit aucun de ces cas.

La méthode de production est un lot ciblé : lire le système existant, modifier le minimum cohérent, tester le parcours concerné, consigner les limites. Le volume de texte d’un agent n’entre pas dans le critère d’acceptation. Le banc doit asseoir le personnage; le rapport peut rester debout.

```text
SOURCE → player action → state transition → visible feedback
       → targeted check → evidence → producer validation
```

![Preuve visuelle V1 : interaction avec un banc. Une capture illustre un état; elle ne prouve pas tous les parcours possibles.](../website/portal/static/assets/engineering/v1-banc.png)

*Preuve visuelle V1 : interaction avec un banc. Une capture illustre un état; elle ne prouve pas tous les parcours possibles.*

## 03 · Architecture Godot et responsabilité des fichiers

Le projet de référence se trouve dans jeu-montpellier-arcade. project.godot démarre sur world3d/start_menu.tscn; brand_menu.gd conduit vers le monde principal world3d/main.tscn. world.gd coordonne le monde. Les fichiers .tscn décrivent les scènes et ressources, les .gd portent la logique et les .gdshader les traitements graphiques. Les anciens prototypes sont conservés, pas automatiquement promus en sources courantes.

Les noms official_buildings.gd, prototype_sector_stream_manager.gd et map_sector.gd matérialisent la séparation entre données de bâtiments, choix des secteurs et fabrication locale du décor. Une scène peut référencer un script correct syntaxiquement mais incompatible avec ses propriétés. L’inspection d’un seul fichier ne suffit donc pas à valider le projet.

La copie commune de continuation est travail-matrix-v1.1 dans la configuration Godot de MATRIX. Le registre de livraison conserve encore un champ matrix_workspace vers travail-matrix-v1 : ce décalage est signalé, pas silencieusement transformé en preuve. La référence livrée reste livraison-v1-20260930.

```text
project.godot
└─ world3d/start_menu.tscn
   └─ brand_menu.gd → world3d/main.tscn
      ├─ world.gd
      ├─ prototype_sector_stream_manager.gd
      ├─ map_sector.gd
      └─ official_buildings.gd → data/official/manifest.json
```

## 04 · Une ville issue de données, pas d’une promesse

Le manifeste officiel inspecté annonce 157 186 bâtiments et 6 205 secteurs pour le jeu de données Montpellier Métropole Bâtiments 3D 2020. Ces nombres décrivent le corpus converti, pas le nombre d’objets affichés simultanément ni le nombre de bâtiments visitables. Le manifeste conserve l’URL source, une empreinte SHA-256 de l’archive, les bornes, l’origine et les informations de licence ODbL-1.0.

La provenance déclare EPSG:2154 / NGF-IGN69. Le mode vertical soustrait ZMIN bâtiment par bâtiment pour rester compatible avec un monde plat : il ne reconstruit pas le relief. Le manifeste contient aussi scale_x ≈ 80 603,46 et scale_z = −111 320 autour d’une origine longitude/latitude. Ces paramètres appartiennent à cette conversion; ce ne sont pas une recette universelle de projection géodésique.

official_buildings.gd vérifie la signature binaire 0x3146424f et signale les secteurs absents ou tronqués. Les données déjà converties sont réutilisées pour les corrections de code. Télécharger et recalculer toute la ville pour changer un bouton serait un excellent moyen de chauffer le PC sans améliorer le bouton.

```text
manifest
  dataset / source_url / archive_sha256 / license
  origin_lon_lat / bounds / vertical_mode
  sectors[key] → converted sector data

Data provenance ≠ visual accuracy ≠ gameplay coverage
```

## 05 · Streaming, maillages et budget de frame

Le chargement par secteurs évite de traiter le corpus entier comme une scène monolithique. Le chargeur officiel possède un cache indexé par clé et une opération d’éviction. Les coûts à distinguer sont la lecture, le décodage, la création des maillages, les collisions et l’ajout dans la scène. Déplacer seulement la lecture en arrière-plan ne supprime pas les à-coups de création de ressources.

Pour améliorer cette chaîne, le protocole proposé est de mesurer chaque phase sur le même trajet, avec cache froid puis chaud. On consigne le temps de frame médian, les percentiles élevés, la mémoire et les chargements. À 60 images/s, le budget théorique est 16,67 ms par image; ce chiffre est une cible mathématique, aucunement une mesure de cette V1.

Le culling, les niveaux de détail et l’instanciation sont des pistes documentées par Godot [R2]. Leur efficacité dépend des matériaux, des objets et du renderer. Nous ne présentons pas MultiMesh, une occlusion parfaite ou un streaming asynchrone complet comme livrés faute de preuve dans cette revue.

```text
Proposed measurement record / Fiche de mesure proposée
route, build_hash, renderer, resolution, cache_state
read_ms, decode_ms, mesh_ms, collision_ms, attach_ms
frame_p50_ms, frame_p95_ms, frame_p99_ms, peak_memory_mb
```

## 06 · Direction visuelle : cohérence avant accumulation

La qualité visuelle ne se résume pas au nombre d’assets. Dans cette ville stylisée, le joueur doit reconnaître les volumes, lire les surfaces praticables et distinguer une interaction du décor. Les matériaux, l’échelle des ouvertures, la lumière et la lisibilité de l’interface doivent être évalués depuis la caméra de jeu. Les captures jointes montrent le rendu existant, y compris ses limites.

La consigne artistique du tram est précise : bleu aux hirondelles blanches, ligne 1 TaM. Une amélioration technique doit préserver cette décision. Le PDF historique intitulé BETA 3 CLAQUE VISUELLE est un catalogue de ressources et de pistes Godot; son nom ne constitue pas une validation de Bêta 3 ni une liste d’extensions installées.

Avec un budget supplémentaire de 0 €, on part des ressources présentes, des fonctions natives et du code local. Une ressource gratuite peut imposer attribution, partage ou contraintes de redistribution. Sa licence et sa version se vérifient avant intégration; le mot « gratuit » n’est pas un importeur de licences.

![Capture V1 : commerce et interface. Le dossier n’invente pas de rendu photoréaliste à partir de cette image.](../website/portal/static/assets/engineering/v1-commerce.png)

*Capture V1 : commerce et interface. Le dossier n’invente pas de rendu photoréaliste à partir de cette image.*

## 07 · MATRIX : de la console au poste de coordination

Les captures historiques montrent une console de lancement puis une interface de conversation. Le programme actuel matrix_pro.py utilise Tkinter, des tâches de fond et une file d’événements pour coordonner l’affichage avec les échanges réseau. L’interface rassemble projet actif, spécialistes, conversations, flux et outils. Le site public documente cet atelier Windows; il ne fournit pas un terminal ouvert vers le poste.

Les rôles attribués aux modèles sont des consignes de travail : codeur, intégrateur, auditeur, lecteur de documents. Un intitulé ne prouve pas une compétence mesurée. Le logiciel doit encore observer les appels d’outils, les fichiers et les résultats. Le thème vert fait MATRIX; ce sont les journaux qui font la traçabilité.

aws_chat.py gère la conversation et ses appels; mission_chain.py gère le relais; file_tools.py contrôle les opérations sur fichiers; loop_guard.py détecte les répétitions; godot_gate.py sépare une demande de test de son exécution. Cette séparation permet de diagnostiquer un problème sans confondre interface, réseau et moteur du jeu.

![Archive locale MATRIX : première interface de console. Les règles d’autorisation affichées appartiennent à cette étape historique.](../website/portal/static/assets/engineering/matrix-console.png)

*Archive locale MATRIX : première interface de console. Les règles d’autorisation affichées appartiennent à cette étape historique.*

## 08 · Relais séquentiel et mémoire commune

Pour le jeu, les spécialistes passent successivement sur une copie commune. Ils peuvent lire le résultat précédent sans lancer des écritures concurrentes sur le même script. Le mode de comparaison d’avis est distinct. Sélectionner plusieurs agents ne signifie donc pas nécessairement plusieurs développeurs écrivant simultanément dans world.gd.

mission_chain.py persiste un état de mission et les passages de relais. Une recommandation de successeur est filtrée par les alias connus; à défaut, l’ordre de sélection s’applique. L’écriture d’état passe par un fichier temporaire puis un remplacement. La mémoire coordination/mehdi.md est protégée par verrou Windows lors des ajouts.

La mémoire commune n’est pas une mémoire infinie : au-delà de 22 000 caractères, la construction de contexte conserve un début de 4 000 et une fin de 18 000 caractères. Une décision cruciale enfouie au milieu peut donc manquer au prochain appel. D’où l’intérêt de documents de reprise courts, du registre de version et de critères d’acceptation explicites.

```text
selected agents → mission state → agent A → evidence
                                → agent B → evidence
                                → relay complete
                                → local Godot checks

response received ≠ change integrated ≠ release delivered
```

## 09 · Écrire un fichier sans écraser le travail précédent

read_file retourne le texte et son SHA-256. Pour remplacer un fichier existant, write_file exige expected_sha256; pour créer un fichier absent, le marqueur est NEW. Les outils patch_file et patch_lines ciblent un passage ou des lignes. Un patch textuel ambigu ou absent est refusé, avec sauvegarde avant remplacement.

Ce mécanisme détecte une lecture devenue périmée : si B a modifié le fichier après la lecture de A, A doit relire et réconcilier. L’empreinte n’évalue pas la justesse du code. Elle garantit seulement que le contenu attendu correspond au contenu contrôlé au moment de l’opération.

Les chemins absolus sont contrôlés avant et après résolution; seules les racines autorisées sur D: sont utilisables. Les répertoires système, d’authentification et la référence V1 sont protégés. Il s’agit de garde-fous applicatifs, pas d’une preuve de confinement du système d’exploitation. La lecture texte est paginée par 300 lignes, avec plafond de 2 Mo.

```text
// Illustrative tool exchange; no real credential
read_file({path: "D:/allowed/example.gd"})
  → {content: "...", sha256: "<observed hash>"}
patch_file({
  path: "D:/allowed/example.gd",
  expected_sha256: "<observed hash>",
  old_text: "exact old passage",
  new_text: "reviewable replacement"
})
  → written + backup + new hash, or explicit refusal
```

## 10 · AWS, LiteLLM et les routes réelles

MATRIX dispose de routes via une passerelle locale et de routes supplémentaires passant par l’adaptateur LiteLLM. extra_models.py lit un catalogue d’alias, remplace l’alias par target et transmet aws_region_name. Le code inspecté fixe num_retries=0 et timeout=120 sur cet adaptateur. Cela décrit cet appel, pas une limite universelle de toutes les couches réseau.

Un nom dans une liste, un identifiant provider et une réponse du modèle sont trois choses différentes. Le catalogue local exporté dans ce dossier conserve nom, cible, région et portée du test. Les essais consignés pour plusieurs routes sont de courtes complétions texte, sans outils ni fichiers. Ils ne démontrent donc pas la capacité à développer le jeu.

L’entrée locale « GPT-6 Astra » est marquée invocation_tested=false et access_denied_403. Nous la publions comme configuration locale non validée, pas comme preuve qu’un tel modèle est disponible sur AWS. Les noms et disponibilités des fournisseurs doivent être vérifiés dans leurs catalogues officiels. Aucune invocation payante n’a été nécessaire pour préparer cette publication.

```text
MATRIX alias
  ├─ local gateway → provider adapter → AWS API
  └─ extra_models.py → LiteLLM completion
       target + region + messages + tool schemas
       → stream chunks → MATRIX events

UI label is not a provider attestation.
```

## 11 · Tool calling : le protocole compte autant que le prompt

Dans le fonctionnement client de MATRIX, le modèle propose un appel d’outil et le programme local l’exécute. Il faut préserver l’identifiant, les arguments et le résultat dans l’historique. AWS décrit ce principe dans sa documentation d’outils [R1]; le support exact dépend de l’API et du modèle. Une réponse textuelle correcte ne garantit pas un cycle d’outils compatible.

Les archives GLM décrivent un défaut d’adaptation entre Responses, Chat Completions et Converse : un résultat d’outil ne correspondait plus à un appel valide dans la séquence envoyée. Le bridge V5 associait function_call à tool_calls et function_call_output à un message de rôle tool portant tool_call_id. Le contrat structurel devait être réparé avant d’évaluer le modèle.

Pour un flux, on accumule les fragments d’arguments jusqu’à obtenir une charge complète, puis on valide le schéma avant exécution. On ne déclenche pas une écriture à chaque fragment affiché. L’exemple ci-dessous explique la correspondance; ce n’est pas une configuration prête à coller dans tous les providers.

```text
Responses                     Chat Completions
function_call                 assistant.tool_calls[]
  call_id: "call_17"             id: "call_17"
  name: "read_file"              function.name
  arguments: "{...}"             function.arguments

function_call_output          role: "tool"
  call_id: "call_17"             tool_call_id: "call_17"
  output: "{...}"                content: "{...}"
```

## 12 · Frankenstein : les pannes qui ont structuré l’atelier

Les documents Kimi et Mistral conservent les premières routes locales, notamment les ports 4001 et 4002. Ce sont des repères historiques, pas des ports à ouvrir sur Internet. Les incidents incluent une clé locale incohérente, des noms d’outils MCP refusés et des différences de syntaxe entre shells. Un test minimal permettait de séparer connexion, texte et outils.

L’archive GPT-OSS raconte l’isolation d’un bridge sur 4010 après des difficultés de routage. Un microtest avait comptabilisé des tokens sans produire de texte utile. Cela prouvait une activité d’inférence, pas un livrable. La chronique GLM conserve des variantes successives de bridges jusqu’à 4025 : ce journal explique une démarche de diagnostic, sans certifier leur utilisation actuelle.

La règle utile : modifier une couche à la fois, conserver la requête minimale, l’erreur et le résultat. HTTP 400 oriente vers le format ou les paramètres; 403 vers l’accès; 429 vers les limites ou la disponibilité. Aucun de ces codes, seul, ne démontre que l’agent « ne veut pas travailler ».

```text
Diagnostic ladder / Échelle de diagnostic
1. local process listening
2. correct configured route
3. minimal text response
4. one read-only tool round trip
5. controlled file change + observed hash
6. project import + targeted gameplay check
```

## 13 · Mesurer la contribution, arrêter les boucles

Une passe doit être décrite par des preuves : outils exécutés, fichiers créés ou modifiés, empreintes, résultats de tests et limites. « J’ai terminé » est une déclaration. Un SHA-256 établit l’identité d’un fichier, pas sa qualité. Un import réussi établit davantage, mais ne remplace pas le test de l’interaction ni l’exécution du pack livré.

loop_guard.py arrête quatre répétitions d’une même phrase longue normalisée, trois échecs identiques pour un outil et un chemin, ou cinq lectures identiques avec le même résultat sans écriture. Il garde une fenêtre de 24 000 caractères. Une écriture signalée réinitialise ses compteurs. Ce sont des heuristiques déterministes, susceptibles de faux positifs, pas une mesure d’intelligence.

Le bon recadrage donne une tâche finie et vérifiable, puis exige la preuve attendue. Les agents bloqués par un provider sont séparés des agents qui ne produisent qu’un plan. Le bouton historique « Auditer les mythos » garde son humour; le rapport doit garder ses preuves.

```text
Evidence ladder / Niveaux de preuve
0 claim
1 observed tool result
2 changed file + hash
3 successful import
4 targeted behaviour verified
5 exported package checked
6 producer validation of that exact package
```

## 14 · Godot automatique : demande, file, exécution, résultat

Mehdi a autorisé les contrôles locaux Godot sans nouvelle approbation à chaque appel. Dans la configuration inspectée, godot-access.json active import et smoke sur travail-matrix-v1.1 après la fin du relais. godot_gate.py enregistre les demandes; godot_authorized_worker.py les prend en charge en arrière-plan et consigne le résultat.

La déduplication évite de répéter inutilement un même mode dans un lot. Le contrôle import utilise --editor --quit; le démarrage court utilise --quit-after 120. Ce dernier argument compte des itérations, pas 120 secondes. Le worker applique séparément son délai maximal. Les options CLI sont documentées par Godot [R3].

« En file automatique » ne veut pas dire « réussi ». Il faut lire le journal final, les erreurs de scripts, le code retour et les éventuels délais dépassés. Cette autorisation ne transforme pas automatiquement les tests en export, publication ou nouvelle livraison. La file du moteur n’a pas besoin de prendre un abonnement à un modèle pour compiler un script.

```text
request → deduplicate → wait for relay → claim job
        → run local Godot → log + result → shared notice

queued / running / passed / failed / timed out

Example CLI pattern (adapt paths; not an export):
Godot.exe --headless --path <working-copy> --editor --quit
Godot.exe --headless --path <working-copy> --quit-after 120
```

## 15 · Exporter, tester et nommer une livraison

Une livraison doit relier sources, artefacts, tests et registre. Le .exe démarre le runtime; le .pck contient les ressources du jeu. Tester les sources puis envoyer un vieux pack créerait un faux lien de confiance. On conserve donc le chemin et l’empreinte des deux artefacts effectivement livrés.

Le registre V1 indique un pack de 826 546 456 octets et les empreintes reproduites ci-dessous. Cette documentation les cite depuis le registre; elle ne prétend pas avoir relancé les 44 contrôles pendant sa rédaction. Les anciennes livraisons sont conservées. À la prochaine livraison vérifiée, état, registre, reprise et lanceur devront être mis à jour ensemble.

Un smoke test réduit le risque de démarrage cassé, sans couvrir sauvegardes, collisions, longue session ou performance. Une capture du vol panoramique prouve un affichage à cet instant, pas un aéroport complet. Ces limites rendent le rapport exploitable : elles disent précisément quoi tester ensuite.

```text
V1-20260930 · SHA-256 (release registry)
PCK
3963c6b91ab4db67f637fbb388fee62fee544677150f56377fddba5d22142b5b
EXE
62e5c76b560e3b09670f3603d670ae02610850d9dc3a8e1a7710b75dbfd9e5aa
```

![Preuve V1 : vol panoramique fictif. Ce mode ne constitue pas une simulation aéronautique complète.](../website/portal/static/assets/engineering/v1-vol.png)

*Preuve V1 : vol panoramique fictif. Ce mode ne constitue pas une simulation aéronautique complète.*

## 16 · Documents, stockage et budget

Les outils de lecture extraient localement le texte des PDF; les scans passent par OCR local. Le résultat OCR peut déformer du code, des noms et des chiffres : relire la page d’origine pour une décision critique. Un texte extrait transmis à un modèle quitte ensuite le poste vers le fournisseur appelé. Extraction locale et traitement intégralement local ne sont pas synonymes.

Les historiques, flux et sauvegardes doivent avoir une politique de conservation. Une migration vers D: se vérifie par copie complète, empreintes et contrôle de la destination avant de retirer l’original. Les journaux actifs et bases ouvertes réclament un traitement distinct. Une jonction peut préserver un ancien chemin, mais elle ne change pas les contrôles d’accès du programme.

La contrainte du projet est 0 € supplémentaire : réutiliser les données, outils installés et ressources compatibles. Un modèle cloud peut rester facturable même si un outil local est gratuit. Éviter les relances aveugles, les relectures massives et les longs flux sans progrès économise aussi du temps de diagnostic.

```text
Document → local extraction/OCR → bounded text
         → selected provider only when called

Archive → public copy → sensitive-value redaction
        → page count + SHA-256 → downloadable manifest
```

## 17 · Publier une documentation reproductible

Le site est généré depuis website/portal dans MontpellierECU. Les fichiers statiques sont copiés vers site/, puis les modules produisent les pages et le sitemap. Cette édition ajoute une source éditoriale bilingue commune, un rendu web, un rendu PDF et une bibliothèque d’archives. Les changements de texte peuvent ainsi être relus dans Git plutôt que seulement dans un PDF binaire.

Les neuf documents fournis restent des archives datées. Le manifeste public donne nom d’origine, nom publié, pagination et empreinte de la copie publiée. Lorsqu’une valeur d’authentification est masquée, la copie est explicitement signalée comme expurgée; les originaux locaux sont conservés. Les bordures dorées mettent les captures en page sans maquiller le rendu du jeu.

Le contrôle de publication porte sur les liens FR/EN, les téléchargements, les pages mobiles, les erreurs navigateur et les empreintes des PDF servis. Le push Git et le déploiement Cloudflare sont deux opérations séparées : le succès de l’une ne prouve pas celui de l’autre.

```text
engineering-data.cjs
  ├─ web pages FR / EN
  ├─ Markdown docs FR / EN
  └─ print renderer → technical PDFs FR / EN

static/assets/ia-archives/ + manifest.json
  → build → local verification → Git → Cloudflare
  → remote download verification
```

## 18 · Suite du travail et limites de cette étude

La prochaine amélioration du jeu doit partir de la copie commune, choisir une anomalie reproductible, produire une correction et vérifier le comportement. Pour le rendu : mesurer avant d’optimiser. Pour l’histoire : revenir aux faits. Pour MATRIX : garder le protocole d’outils, les états et les preuves cohérents. Pour une V1.2 : attendre un pack testé et une validation explicite.

Cette étude est une lecture technique datée des fichiers locaux et des archives, accompagnée de références officielles. Elle n’est ni un benchmark comparatif des modèles, ni un audit de sécurité exhaustif, ni une reproduction complète de l’infrastructure privée. Les extraits de protocole sont pédagogiques; les captures historiques peuvent montrer des comportements remplacés depuis.

La publication rend la méthode vérifiable : fichiers cités, instantané de leurs empreintes, catalogue local limité aux champs publics et limites déclarées. Le producteur garde la direction créative. Les agents gagnent leur place par des changements utiles et vérifiés. Le café, lui, n’a toujours pas de fonction tool_call.

![Archive MATRIX du 29 septembre 2026 : interface de conversation et journal d’activité. Les propositions affichées ne constituent pas une preuve de réalisation.](../website/portal/static/assets/engineering/matrix-conversation.png)

*Archive MATRIX du 29 septembre 2026 : interface de conversation et journal d’activité. Les propositions affichées ne constituent pas une preuve de réalisation.*

## References / Références

- [R1 — Amazon Bedrock · Tool use](https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html)
- [R2 — Godot · Optimizing 3D performance](https://docs.godotengine.org/en/stable/tutorials/performance/optimizing_3d_performance.html)
- [R3 — Godot · Command line tutorial](https://docs.godotengine.org/en/stable/tutorials/editor/command_line_tutorial.html)
- [R4 — LiteLLM · Bedrock provider](https://docs.litellm.ai/docs/providers/bedrock)
- [D1 — Montpellier Métropole · Bâtiments 3D 2020 (archive source / source archive)](https://data.montpellier3m.fr/sites/default/files/ressources/MMM_MMM_Bat3D.zip)

[Model routes / Routes des modèles](../website/portal/static/assets/engineering/model-routes.json) · [Source hashes / Empreintes](../website/portal/static/assets/engineering/source-snapshot.json)
