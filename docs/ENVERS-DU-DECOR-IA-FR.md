# L’envers du décor IA — Comment nous fabriquons nos projets

État documenté: 2026-09-27.

Des idées, des créations, quelques câbles récalcitrants. Et un humain qui garde le cap.

[Version illustrée](https://mtptoken.pages.dev/envers-du-decor-ia/) · [English](BEHIND-THE-AI-SCENES-EN.md)

## Ça roule. Et ça prend forme.

Tout commence avec une histoire à raconter et une ville à faire vivre. De l’écran à l’abandon devient une bande dessinée, puis un terrain de création dans Godot. À côté, Montpellier ECU développe ses outils numériques. Mehdi tient ensemble la direction artistique, les décisions de production et cette consigne très concrète : garder ce qui est beau et fonctionne, puis l’améliorer.

Au 27 septembre 2026, les cinq tomes Ultra Plus ont reçu leur V, soit 375 pages. Le jeu possède une Alpha 0.1 jouable, un export Windows identifié et une vidéo de gameplay de trente secondes. Monia dispose d’une bêta Windows portable documentée. Le portail MTP rassemble ses services et son catalogue communautaire. Voilà notre point de départ : des créations que l’on peut ouvrir, parcourir et regarder.

L’atelier a parfois l’allure d’une petite entreprise dont tous les employés parlent en même temps, et dont le directeur doit rappeler où se trouve le dossier. Bonne nouvelle : nous avons maintenant écrit l’adresse sur la porte.

## Quatre projets, une direction humaine.

La BD porte le récit autobiographique. Le manuscrit et les faits fournis par l’auteur gouvernent le contenu ; une invention séduisante ne devient pas un souvenir. Le jeu explore un Montpellier jouable, avec des exercices fictifs explicitement distingués de l’autobiographie. L’auteur décide du sens, des ambiances, des personnages et de ce qui mérite le V.

MTP App est abordé ici à travers les sources retrouvées de Monia et des interfaces du portail. MTP Token est le projet distinct de crypto-actif sur Base, accompagné d’un Wallet, d’un observatoire Live et d’un marché communautaire. Leur proximité éditoriale donne une identité commune ; elle ne prouve pas une connexion technique automatique entre toutes les applications.

Exemple essentiel : les euros, l’inventaire et l’économie du jeu sont des systèmes locaux fictifs. Un pont financier MTP/Godot appartient aux pistes de travail, pas à l’Alpha livrée. Nous pouvons raconter une grande famille sans prétendre que tous ses membres possèdent déjà les clés de la même voiture.

## Comment on en est arrivé là.

Les conversations servent d’abord à développer les idées, préparer les découpages, les références et les missions. Les documents deviennent progressivement plus structurés : quoi fabriquer, quelles sources respecter, quelles créations conserver et comment reconnaître un résultat utilisable. Le projet de recherche Montpellier produit notamment une bible de références pour les monuments et l’identité de la ville.

Le jeu conserve son premier parcours 2D, puis un prototype 3D fondé sur OpenStreetMap. L’intégration de bâtiments officiels, les harmonisations successives, la récupération du travail Kimi et l’Alpha construisent une continuité. On ne jette pas les anciens exports à chaque progrès. Côté BD, les reprises locales et les validations tome par tome conduisent aux cinq éditions Ultra Plus approuvées.

En parallèle, les expériences Frankenstein cherchent à relier des modèles aux outils du poste. Le PDF raconte cette aventure en phases 1, 2, 3 puis V5. Ce sont des repères narratifs de la reconstitution, pas une série de releases toutes établies par des archives. Le vrai progrès est très concret : les consignes arrivent mieux, les fichiers restent traçables et le travail peut reprendre sans réinventer le studio chaque matin.

## Notre méthode, du gros prompt au vrai fichier.

1. Mehdi formule une intention concrète : embellir un monument, corriger une page, finir une intégration. 2. L’agent relit le registre courant et les consignes de reprise. 3. Il inspecte les fichiers concernés avant de proposer une modification. 4. Il réalise un lot limité et réversible. 5. Le résultat est ouvert dans son environnement réel. 6. Le rapport indique les fichiers livrés et les vérifications effectuées. 7. Mehdi juge le résultat artistique et donne, lorsqu’il le souhaite, son V.

Le prompt utile contient le résultat attendu, les sources, les éléments verrouillés, le périmètre et les critères de sortie. « Fais-moi Montpellier en mieux » exprime une ambition. « Améliore ce belvédère en conservant son implantation officielle, puis montre une capture dans la scène » donne aussi une méthode. Le gros prompt devient une fiche de travail ; sa taille seule ne remplace pas une mission précise.

À la fin d’une passe, on distingue une proposition, un fichier créé, un élément intégré, un comportement vérifié et une validation du producteur. Cela permet de féliciter une vraie avancée au bon moment. Le V n’est pas distribué par un script : c’est le tampon de Mehdi, et le tampon reste au bureau du directeur.

## La mémoire de l’atelier tient dans des fichiers.

ETAT_PROJET.md raconte la situation courante ; VERSION_COURANTE.json identifie l’export ; 00_REPRISE_K3.md donne les priorités de reprise. Un rapport de passe complète cette mémoire avec les fichiers lus et modifiés, les preuves disponibles et la prochaine action utile. Le nouvel intervenant commence par ces documents, puis confronte leur contenu au disque.

Un chemin précis évite de travailler sur une ancienne copie. Une empreinte SHA-256 permet d’identifier exactement un PDF ou un pack. Elle ne dit pas si l’œuvre est belle : elle dit de quelle œuvre on parle. Un journal d’exécution raconte ce qui a eu lieu, avec ses erreurs éventuelles. Une capture montre le rendu. Ces pièces se complètent.

Les ateliers possèdent aussi des historiques de conversation et une mémoire partagée locale. Ils aident à transmettre le contexte, sans transformer automatiquement une ancienne réponse en fait acquis. Notre innovation la moins spectaculaire est donc aussi l’une des plus utiles : un petit fichier Markdown qui empêche cinq intelligences de chercher cinq versions différentes de la fontaine.

## Qui fait quoi dans cette joyeuse équipe ?

Mehdi est auteur, producteur, directeur créatif et testeur. ChatGPT accompagne la réflexion, la préparation des missions et la lecture critique. La recherche documentaire réunit les références. Qwen VL sert de poste de conseil visuel lorsque des images lui sont réellement transmises. Codex travaille avec les fichiers et les outils disponibles pour intégrer, corriger et préparer les livraisons.

Les rôles Kimi K3, GLM et Mistral apparaissent dans les travaux de développement, les essais de passerelles ou les missions de finition. MONSTRE fournit une interface permettant de sélectionner un profil et de lui transmettre une mission documentée. Il ne faut pas imaginer tous ces modèles en train de tourner ensemble en permanence : les passes sont choisies selon le besoin.

Deux postes Qwen Coder ont aussi été préparés : créateur Godot pour les scènes, formes et textures via les outils ; technicien pour l’intégration. Leur préparation ne constitue pas une campagne de production déjà éprouvée. Un intitulé de poste ne donne pas magiquement des mains à un modèle. Chez nous aussi, il faut lui fournir les outils et lui expliquer où ranger son travail.

## Parler, regarder, fabriquer, exécuter.

Un modèle texte peut rédiger un script. Un modèle vision peut analyser une image reçue. Un générateur d’images peut produire un bitmap. Un agent équipé d’outils peut enregistrer ce bitmap, modifier une scène et lancer une commande autorisée. Ce sont quatre capacités différentes, que notre chaîne assemble selon la tâche.

Le poste Qwen VL initial illustre bien cette distinction : il proposait des scènes et des matériaux dans la conversation, mais ne disposait pas des outils pour les écrire dans Godot. Ses propositions ont été conservées comme matière de travail. L’intégration a repris les éléments réellement présents, en contrôlant notamment la compatibilité des scripts et ressources Godot.

La formule « c’est créé » doit donc mener à un fichier ouvrable. Ce petit détour par l’Explorateur Windows a beaucoup de charme : il transforme une belle intention en objet de production. Et quand on veut juger un shader, le meilleur entretien d’embauche reste de le regarder sur le bâtiment.

## Frankenstein et MONSTRE : les câbles derrière le rideau.

Dans la configuration MONSTRE documentée, l’interface Python/Tkinter prépare le contexte puis lance Codex CLI en mode événements JSON. Le fournisseur dédié passe par un proxy local Responses sur le port 4001, puis LiteLLM sur 4002, avant le service Bedrock. Les profils sélectionnent le modèle. Le proxy adapte les formats de requêtes, de réponses et d’appels d’outils.

Un appel d’outil est une demande structurée : son nom, ses paramètres et son résultat doivent traverser la chaîne sans perdre leur sens. Les expériences ont porté sur les noms d’outils, les schémas compatibles et les événements SSE. Selon la route, une réponse peut être regroupée avant affichage : une interface qui bouge ne suffit pas à démontrer un véritable flux token par token.

MONSTRE archive le prompt, les références et leurs empreintes, les événements et la réponse. Son verrou de projet coordonne ses propres exécutions ; il ne bloque pas tous les éditeurs externes. Les modes de lecture ou d’écriture encadrent le travail. Aucun secret de configuration n’a besoin d’apparaître dans cette documentation publique. Le monstre a une fiche de poste ; son mot de passe reste au vestiaire.

## L’atelier AWS et l’atelier local.

L’Atelier AWS relie une interface à une boucle agent : le modèle demande une opération, l’outil lit ou modifie les fichiers autorisés, puis renvoie son résultat au modèle. Lecture, recherche, correctifs, commandes, PDF et images sont des opérations distinctes. GPT-OSS-120B, Qwen VL et Stable Image apparaissent dans les configurations documentées pour des rôles différents. Leur présence dans un menu ne signifie pas qu’une génération a été lancée.

L’Atelier Local s’appuie sur Ollama pour les petits modèles et sur stable-diffusion.cpp pour les images. La configuration retrouvée utilise notamment SD 1.5 et une GTX 1050 Ti, avec un format limité à 512 × 512 pour ce poste. Ces outils locaux ont leur utilité : préparer une texture, explorer une idée, éviter de recommencer un téléchargement. Ils ne sont pas présentés comme équivalents à tous les grands modèles.

La règle actuelle est zéro dépense supplémentaire. On cherche d’abord dans l’existant, puis on réutilise, transforme ou programme avec Godot et les outils installés. Un service cloud configuré conserve ses propres conditions de facturation ; aucun appel payant ni benchmark de modèles n’est nécessaire pour rédiger ce dossier. Le budget a découvert une compétence rare : dire « on l’a déjà, regarde dans le dossier ».

## Le jeu : une ville découpée pour devenir jouable.

Le projet actif est jeu-montpellier-arcade. Le menu world3d/start_menu.tscn conduit à la scène principale, puis aux systèmes du monde. Les bâtiments officiels proviennent des données CityGML déjà récupérées ; les apports OpenStreetMap complètent le territoire. Les conversions préparent une grille de secteurs de 200 mètres avec un manifeste et des fichiers de données. On réutilise cette préparation pour les modifications de code ordinaires.

Le registre technique recense 159 605 bâtiments, dont 157 186 officiels et 2 419 issus d’OSM, répartis dans 6 205 secteurs. Ces chiffres décrivent les données préparées, pas autant de bâtiments détaillés visibles simultanément. Le gestionnaire de chargement organise les secteurs, official_buildings.gd construit leur représentation, les matériaux sont partagés et les collisions proches reçoivent une attention particulière.

Le joueur utilise un CharacterBody3D, avec déplacement, course, saut, roulade et caméra articulée. Le tram jouable et le réseau de circulation de fond sont des systèmes distincts. La ligne 1 garde son identité : bleu et hirondelles blanches. Des passants, des animaux, des façades et les repères urbains composent déjà une ambiance. Montpellier obtient ses rues ; le processeur demande simplement à ne pas toutes les porter dans ses bras en même temps.

## De la scène Godot à l’Alpha que l’on ouvre.

L’Alpha 0.1 du 27 septembre conserve les données officielles et le travail récupéré, puis ajoute une première tranche architecturale : arches à deux niveaux, belvédère hexagonal du Peyrou, couronnement de la fontaine et guide accessible depuis le menu. Le terrain reste plat, les modèles continuent à s’enrichir et la fluidité demeure un chantier. Cette base jouable a déjà une identité ; la suite consiste à la faire grandir.

Une livraison associe l’exécutable Windows, son pack PCK, les empreintes et le registre courant. Le lanceur lit ce registre ; les versions précédentes sont conservées. Les 49 contrôles consignés pour l’Alpha couvrent le pack, le parcours intégré et le lancement. La vidéo complémentaire a donné lieu à 17 contrôles Alpha réussis. Ces vérifications techniques sont distinctes de la validation artistique du producteur.

La vidéo montre trente secondes du pack Alpha réel : marche, course, saut, roulade et observation du décor. L’original contient 900 images en 1920 × 1080, à 30 images par seconde, sans audio. La capture est guidée à pas fixe ; son débit vidéo ne mesure pas les FPS réels du jeu. Sur ce site, une copie allégée facilite la lecture. C’est une fenêtre sur le travail accompli, et une bonne raison de continuer à embellir la ville.

## La BD : du manuscrit à cinq tomes validés.

Le récit passe par le découpage, les planches, la composition, le lettrage et les éditions PDF. Chaque transformation doit conserver les faits et la continuité voulus par l’auteur. Les documents de référence servent à retrouver la version d’une planche, sa place dans la maquette et les éléments verrouillés. Les corrections locales portent notamment sur les cadres, les marges, le texte et certains détails ; elles évitent de régénérer inutilement les images et les visages.

La collection Ultra Plus approuvée comprend Les refuges (68 pages), La nuit derrière l’écran (65), La fissure (70), L’exil (77) et Le monde continue (95), soit 375 pages au total. Chaque tome possède sa validation. Le registre fait foi même si le nom historique de certains PDF contient encore « a-valider ». Le livre a passé son examen ; son nom de fichier a simplement oublié de mettre sa tenue de fête.

La maquette de référence et les versions de lecture antérieures restent conservées. Les validations des cinq tomes n’autorisent pas une nouvelle génération des visages ni une réécriture du vécu. Une prochaine amélioration respecte donc ce socle. Le résultat est une œuvre construite avec des outils, mais dirigée, relue et choisie par son auteur.

## Comment nous fabriquons et relisons une page.

On part d’une version identifiée, on conserve l’original, puis on limite la retouche à son objectif. Les scripts locaux assemblent ou corrigent les éléments ; le PDF est rendu en images afin d’inspecter ce que le lecteur verra. Des planches-contact donnent une vue d’ensemble ; les pages concernées sont ensuite regardées de près. Le lettrage est confronté au texte de référence.

L’OCR sert à repérer des anomalies possibles. Il n’est pas le correcteur littéraire final : un fond sombre, une bulle stylisée ou une police peuvent le tromper. Les comptes de pages, les cadres, les zones retouchées et les empreintes complètent la lecture humaine. Dans le contrôle documenté du tome II, 61 pages étaient inchangées et quatre avaient reçu des corrections locales : une passe ciblée peut améliorer un volume sans le refaire.

Le V se rapporte à un tome précis et à son fichier. Cela préserve l’œuvre entre deux sessions et évite les « petites améliorations » qui déplacent soudain le visage du héros. Pour les IA, la consigne est simple : si l’auteur aime déjà cette planche, votre meilleure idée peut être de ne pas y toucher.

## MTP App / Monia : un vrai client Windows.

Les sources retrouvées décrivent Monia 2.0, une bêta portable construite à partir de Monia 1.0. Electron fournit la fenêtre et le processus principal desktop-main.js ; preload.js délimite les échanges avec les pages locales. L’interface rassemble l’accueil, le Wallet, le marché, les messages, les services, le profil et les paramètres. Les actifs visuels historiques ont été conservés.

Le Wallet suit une adresse publique et génère localement son QR de réception. Les annonces, favoris, conversations et préférences sont enregistrés sur le poste. Les messages de cette version restent locaux. Les données résident dans le profil Windows : déplacer l’EXE ne déplace pas tout le carnet. L’export/import est prévu pour transporter les données entre postes.

Les services web s’ouvrent dans le navigateur système. Le client utilise l’isolation de contexte, un sandbox Electron, des échanges IPC limités et des restrictions de navigation. Le dossier de livraison du 22 septembre décrit le lancement du portable et les parcours du binaire compilé. Les URLs historiques du catalogue peuvent demander une actualisation : la documentation les distingue des routes actuelles du portail. Monia est le bureau d’accueil ; chaque service derrière la porte garde son propre fonctionnement.

## Le portail, le Wallet, Live et le token.

Le portail est généré à partir de modules JavaScript et de contenus éditoriaux. build.cjs compose les pages ; build-locales.cjs prépare les scripts localisés ; les couches communes ajoutent le design et la navigation ; seo-finalize.cjs prépare les métadonnées et le sitemap. Les fichiers produits dans site/ sont publiés sur Cloudflare Pages. Les sources reproductibles vivent dans website/portal sur GitHub.

Le token MTP est identifié par un contrat sur Base, distinct du code du site. Le Wallet public peut consulter une adresse et demander une connexion au portefeuille choisi par l’utilisateur ; il ne récupère pas sa phrase secrète. Live interroge des sources de marché et indique leur disponibilité. La beauté de l’interface ne doit jamais inventer un prix quand une source ne répond pas.

L’architecture sépare donc présentation, stockage local, lectures réseau et actions éventuelles du portefeuille. Le contrat, les sources de marché et les pages sont des composants différents. Cette rubrique décrit leur fabrication et renvoie à la documentation existante ; elle ne déclenche aucune opération financière. Le site a droit à des animations dorées. Le solde, lui, doit rester sobre et exact.

## Un marché communautaire sans serveur à entretenir.

Le marché prépare d’abord un brouillon sur l’appareil. L’utilisateur peut ensuite proposer son annonce dans une issue GitHub publique. Un responsable la relit et applique l’étiquette marketplace-approved. Le workflow reconstruit marketplace/catalog.json ; le site charge ce catalogue. Fermer la proposition ou retirer l’approbation permet de retirer l’annonce après traitement et renouvellement du cache.

Le navigateur ne reçoit aucun secret GitHub. Les photos sont jointes aux propositions ; les discussions se déroulent sur GitHub. Une modification d’annonce doit repasser par la modération. Le dernier catalogue reste disponible si une exécution échoue. Le fonctionnement est documenté dans le dépôt afin que la publication puisse être comprise et reprise.

Cette organisation apporte une vraie chaîne de publication avec modération. Elle ne réalise pas automatiquement le paiement, la livraison ou la certification du vendeur. « Sans serveur à administrer » signifie que nous utilisons des services existants, pas que les annonces voyagent par télépathie occitane.

## Le PDF de dix pages, enrichi chapitre par chapitre.

Pages 1–2 : l’ambition et les métiers. Ce dossier ajoute les réalisations actuelles, les quatre projets et leurs frontières. Page 3 : Frankenstein. Le schéma des passerelles précise la configuration documentée ; les noms des phases restent ceux d’un récit rétrospectif. Page 4 : la recherche Montpellier. Les références artistiques et les données géographiques ont des rôles complémentaires.

Pages 5–6 : Qwen et la mémoire Markdown. Nous explicitons la différence entre conseil visuel et écriture de fichiers, puis le contenu d’une bonne transmission. Page 7 : Codex et Godot. La vidéo de trente secondes est désormais un livrable identifié du pack Alpha. Page 8 : MONSTRE et Mistral. La mission de finition devient une boucle lisible : relire, inspecter, modifier un lot, ouvrir, vérifier et transmettre.

Pages 9–10 : l’équipe et la suite. La répartition des rôles décrit une méthode, pas un classement des modèles. Le terme « validé » est précisé : un contrôle technique confirme un comportement ; V reste la décision du producteur. Le PDF original est conservé intact. Ce complément explique comment ses idées se traduisent dans les projets, avec les avancées constatées depuis sa rédaction.

## Bêtisier : l’incident du « à ».

Archive souvenir datée du 16 septembre 2026 : Mehdi envoie « à ». ChatGPT répond par une répétition massive de la même lettre. Ce jour-là, le prompt était court. La réponse avait d’autres ambitions. La capture fournie conserve l’échange et son titre : « L’incident du “à” — Choupinou en boucle ».

Mehdi soupçonne un simple while ; la réponse suivante explique qu’elle ne peut pas établir la cause interne. Une répétition dégénérée pendant la génération est évoquée comme explication possible. Ce que nous pouvons observer est plus simple : la sortie se répète, devient inutilisable, puis l’échange reprend. Sans journaux internes, nous n’attribuons pas ce cas à une boucle de programme précise ni à une intention du modèle.

La leçon pratique tient en trois gestes : interrompre une sortie devenue répétitive, conserver un court exemple et reprendre la tâche avec un contexte clair. Pas besoin de donner davantage de travail à la touche A. Cet épisode rejoint notre bêtisier comme un souvenir de fabrication : on peut construire sérieusement et rire franchement des outils.

La capture originale contient aussi la barre latérale de conversations privées. Elle reste dans les archives personnelles ; cette page en raconte uniquement l’incident. L’illustration souvenir, elle, représente poétiquement l’aventure commune : livre, BD, jeu, MTP et Monia autour du même bureau. Ses coches sont des symboles, pas un registre de livraison.

## La suite : faire grandir ce qui est déjà là.

Pour le jeu, la prochaine valeur vient des retours de parcours, de la finition des monuments, de la cohérence visuelle et d’une meilleure fluidité. Pour la BD, les cinq tomes validés forment le socle à conserver. Pour Monia et le portail, la continuité des services, la clarté des états et la documentation rendent l’ensemble plus facile à utiliser et à reprendre.

Nous avons essayé des passerelles, changé des répartitions de rôles, récupéré des travaux, affiné des scènes et relu des pages. La méthode s’est construite en faisant. Ce qui relie ces expériences est une exigence positive : donner une forme visible aux idées de Mehdi, puis améliorer cette forme sans perdre son identité.

L’atelier n’a pas besoin d’une dixième IA pour annoncer que la neuvième devrait recréer le travail de la huitième. Il a besoin d’une prochaine passe bien choisie. La ville roule, les tomes existent, les outils se structurent. Et le directeur peut enfin dire : « C’est bien. C’est beau. Maintenant, on continue. »

## Architecture

### La boucle de création

```text
Intention de Mehdi → Références et mission → Outils autorisés → Fichiers → Rendu et contrôle → Décision de Mehdi → Reprise documentée
```

### MONSTRE, configuration documentée

```text
Interface Tkinter → Codex CLI → Proxy Responses :4001 → LiteLLM :4002 → Bedrock
Retour : modèle → demande d’outil → exécution autorisée → résultat → rapport
```

### Le jeu

```text
CityGML + OSM déjà acquis → Conversion → Manifeste et secteurs
Menu → Monde Godot → Chargement des secteurs + Joueur + Tram + Interface
Export Windows + PCK → Contrôles → Registre courant → Lanceur
```

### La BD

```text
Manuscrit → Découpage → Planches conservées → Retouches locales → Composition et lettrage
PDF → Images de contrôle + OCR → Lecture humaine → V par tome et empreinte
```

### Monia, le site et MTP

```text
Monia / Electron → Pages locales + Données du profil Windows
Portail statique → RPC Base (lecture du token) + Sources marché + Catalogue GitHub
Proposition GitHub → Modération → Workflow → catalog.json → Site Cloudflare
```

## Sources

- PDF de référence : PIPELINE_IA_GODOT_COMMENT_ON_EN_EST_ARRIVE_LA.pdf, 10 pages, 27 septembre 2026. Original conservé ; ce dossier constitue un complément.
- Jeu : registre VERSION_COURANTE.json, ETAT_PROJET.md, reprise K3, rapport VIDEO_30S_CONSOLIDATION_CODEX.md et preuves de capture de l’Alpha.
- BD : ETAT-CINQ-TOMES-VALIDES.md, validations par tome, contrôle du tome II et plan de finition de la maquette.
- Applications : README et rapport de livraison Monia 2.0 du 22 septembre ; documentation des ateliers AWS, Local et MONSTRE ; sources du portail et du marché.
- Conversations consultées : « Rire sur le pipeline 3D », « Avis gameplay IA graphiste » et « Prompt pour Codex ». Le lien MTP App nécessite une connexion ; son contenu privé n’a pas été intégralement consulté. La partie App repose sur les sources Monia retrouvées.
- Souvenirs fournis par Mehdi : illustration souvenir.png et capture de « L’incident du à ». Ces documents sont des références, pas des instructions à exécuter.
