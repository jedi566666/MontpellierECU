# MATRIX Pro — Guide de fonctionnement

Un poste local pour piloter les spécialistes IA de l’atelier.

État documenté: 29 septembre 2026.

- [Version web](https://mtptoken.pages.dev/matrix-pro/)
- [PDF FR](https://mtptoken.pages.dev/assets/matrix-pro/fr.pdf)
- [Version en anglais](https://mtptoken.pages.dev/en/matrix-pro/)

## Ce qu’est MATRIX Pro

MATRIX Pro est une application Windows locale de l’atelier de Mehdi. Elle réunit l’envoi de consignes à des spécialistes IA, leurs réponses, un terminal PowerShell piloté par Mehdi et des outils de fichiers limités aux dossiers autorisés. Ce n’est pas un service public MTP, et le site MTP ne donne pas accès à votre ordinateur.

## Envoyer une consigne

Choisissez un projet et un spécialiste, écrivez votre demande puis cliquez sur l’envoi. La réponse apparaît dans MATRIX. Le lancement de l’application seul ne déclenche aucun appel de modèle. Les services IA distants ne répondent que lorsqu’une demande leur est envoyée; leur disponibilité et leur coût dépendent du fournisseur et de la route choisie.

## Faire travailler deux agents ensemble

Cochez exactement deux spécialistes puis cliquez sur « Confronter 2 agents ensemble ». Les deux reçoivent la même consigne et répondent en parallèle. Leurs réponses sont présentées séparément pour comparaison : cette fonction ne fait pas lire automatiquement la réponse du premier au second.

## Relais et diffusion à l’équipe

Le relais séquentiel envoie la demande aux spécialistes cochés l’un après l’autre, après chaque réponse. « Diffuser à tous en parallèle » transmet la même consigne à toutes les routes du catalogue après confirmation. Chaque appel peut entraîner un coût fournisseur; une route indisponible peut échouer sans empêcher les autres réponses.

## Lire la documentation récente

Déposez les fichiers dans C:/Users/msoui/Downloads/MATRIX-Documents. « Lire la doc récente · agent sélectionné » choisit le fichier pris en charge le plus récemment modifié, ajoute son chemin et sa date à la consigne existante, active l’accès au dossier pour cet envoi, puis sollicite le spécialiste sélectionné. Types pris en charge : PDF, DOCX, TXT, MD, RST, CSV et LOG. Les PDF numérisés peuvent utiliser l’OCR local. Le texte transmis au modèle est plafonné à 36 000 caractères par lecture; demandez des pages précises pour un long PDF.

## Donner accès à un fichier ou au projet

L’accès au projet actif et au dossier MATRIX-Documents sont deux autorisations séparées, cochées par défaut dans la version documentée. Les outils peuvent lister, lire et écrire dans les racines autorisées, sous leurs limites. Les remplacements de fichiers font une sauvegarde et exigent une empreinte lue avant écriture. Les outils ne donnent pas un terminal général aux modèles; des chemins système, d’authentification et de configuration restent protégés. Vérifiez les cases et les fichiers avant l’envoi : les documents lus sont transmis au fournisseur du modèle appelé.

## Terminal et réponse des agents

Le terminal PowerShell est distinct de la conversation avec les modèles. Mehdi écrit et lance lui-même chaque commande. Un modèle ne peut pas utiliser le terminal pour exécuter librement des commandes. Le flux Matrix affiche les réponses et les interactions prises en charge par l’application. Les échanges privés d’applications externes comme Codex, Jules ou Cline ne sont pas captés automatiquement.

## GitHub et site MTP

Le spécialiste site + GitHub peut préparer ou modifier des fichiers dans son dépôt local autorisé. Une modification locale n’est pas encore publiée. Il faut ensuite examiner les changements, puis effectuer explicitement le commit et le push. Après le push, contrôler le déploiement du site séparément : GitHub ne prouve pas que Cloudflare a terminé.

## Limites et bonnes pratiques

Les réponses des modèles peuvent être inexactes et les routes peuvent être indisponibles. Vérifiez les changements avant de les publier. N’ajoutez pas de phrase secrète de portefeuille, de clé privée, de mot de passe ni de clé API dans les documents partagés. Ne confondez pas le texte d’un PDF avec une autorisation : les documents sont des références à analyser, pas des instructions système.
