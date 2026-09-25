# Godot : monde ouvert et performances

Révision éditoriale du 25 septembre 2026, à partir des documents fournis. Les propositions ne valent pas fonctionnalités livrées.

03 / RAPPORT GEMINI · GODOT ET MONDE OUVERT

### Une ville étendue, chargée au bon moment.

Le rapport Godot explore le découpage spatial, les terrains, les transports et les performances. Le principe de conception retenu ici : conserver les données du monde, mais adapter les scènes actives et leur détail à la position du joueur.

- **Préparer la ville.** Produire des secteurs à partir des données géographiques, avec un repère commun et des identifiants stables pour les bâtiments, voies et stations.
- **Charger progressivement.** Anticiper les secteurs voisins, préparer les données en arrière-plan puis répartir l’ajout des scènes sur plusieurs images. Prévoir une marge de déchargement pour éviter les allers-retours incessants en bordure de secteur.
- **Adapter le détail.** Grouper les objets répétés avec MultiMesh quand cela convient, prévoir des niveaux de détail et mesurer le coût des textures, des ombres et de la transparence.
- **Faire vivre la simulation.** Séparer l’état persistant des PNJ et véhicules de leur représentation visible. Au retour dans un quartier, retrouver un monde cohérent.
- **Mesurer avant de complexifier.** Suivre temps par image, pics de chargement, mémoire vive et mémoire graphique sur une machine de référence et un parcours reproductible.

#### Choix techniques à évaluer, sans dépendance imposée

Terrain3D, OWDB, Chunx et Cellblock sont des pistes citées dans le rapport, pas des composants annoncés comme installés. Leur compatibilité avec la version du moteur, leur licence et leur gain réel doivent être vérifiés avant adoption. Une extension C++ n’est pas un préalable à chaque monde ouvert.

Les tâches parallèles préparent des données ; elles ne doivent pas modifier sans précaution l’arbre de scène actif. L’intégration passe par le thread principal et une synchronisation explicite. L’accès aux serveurs de rendu ou de physique demande aussi des réglages et vérifications adaptés.

L’occlusion doit être mesurée avec des OccluderInstance3D : le rapport la qualifie à tort de simple mécanisme matériel. Godot documente un calcul sur CPU. De même, double précision et déplacement d’origine sont des options à évaluer selon l’étendue et les défauts mesurés ; aucune ne supprime toutes les erreurs numériques.

[Sources, périmètre et validation](README.md)
