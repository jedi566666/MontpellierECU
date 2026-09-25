# Architecture Frankenstein

Révision éditoriale du 25 septembre 2026, à partir des documents fournis. Les propositions ne valent pas fonctionnalités livrées.

01 / ARCHITECTURE FRANKENSTEIN · VERSION ÉDITORIALE AMÉLIORÉE

### Plusieurs outils, une direction humaine.

« Frankenstein » désigne un atelier expérimental qui assemble recherche, ingénierie, exécution et mémoire de projet. Son intérêt se mesure au résultat jouable et à la facilité de reprendre le travail. L’auteur conserve la direction artistique et narrative.

- **Rechercher** — Gemini documente le terrain et les solutions possibles.
- **Concevoir** — Codex transforme les sources en décisions et tâches limitées.
- **Construire** — L’agent d’exécution modifie une version identifiée du projet.
- **Éprouver** — Tests ciblés, lancement du jeu et contrôle visuel humain.
- **Valider** — L’auteur retient une version et les limites sont consignées.

#### Les rôles décrits dans l’expérimentation

**Gemini Deep Research**
Recherche documentaire sur Montpellier, les tramways et les choix techniques. Chaque donnée utile doit garder sa source.

**Codex Windows / OpenAI**
Lecture des rapports, arbitrages d’architecture et intégration. Le PDF désigne sa configuration historique par « GPT-5 Astra » ; ce libellé rapporte la session décrite et ne constitue pas une recommandation de modèle actuel.

**Codex CLI / K3 via AWS**
Exécution de tâches de code et tests dans la configuration expérimentée. Les capacités d’images ne sont pas présumées à partir du seul nom du modèle.

**ChatGPT et mémoire du projet**
Aide à la coordination et au diagnostic. Les décisions durables sont consignées dans les fichiers versionnés du projet.

**Mehdi Souissi**
Direction, choix de gameplay, jugement du rendu et validation finale.

#### Ce que nous améliorons dans la méthode

- **Un responsable par modification.** Définir le périmètre de chaque tâche ; isoler les travaux simultanés dans des branches ou copies de travail et relire les différences avant intégration.
- **Des configurations séparées et explicites.** Documenter fournisseur, profil et capacités testées ; éviter qu’un réglage global destiné au CLI change involontairement l’environnement Desktop.
- **Une mémoire vérifiable.** Chaque livraison associe version du code, version de Godot, sources des données, licences, résultat des contrôles et limites connues.
- **Une boucle courte.** Construire, tester le changement, rejouer le parcours concerné, puis construire à nouveau. Élargir les contrôles si une régression ou une modification structurante le justifie.

#### Résultats historiques et échecs utiles

La note du 25 septembre rapporte CityTest à **31/31** et TrafficTest à **15/15**. Elle cite environ 341 000 éléments OSM traités, une conversion autour de 23 000 bâtiments et 7 800 routes, puis un chargement comptant 36 055 bâtiments et 13 126 rues. Ces compteurs correspondent à des étapes différentes : ils ne sont ni additionnés ni assimilés à une mesure de fluidité.

Ces résultats sont rapportés par le document fourni, sans nouvelle exécution des tests du jeu lors de cette mise à jour du site. Une incompatibilité d’images dans la session K3 et un conflit de configuration entre CLI et Desktop ont conduit à mieux séparer les capacités et les environnements. Le correctif ponctuel décrit dans le PDF n’est pas une procédure universelle d’installation.

[Sources, périmètre et validation](README.md)
