# Comment est conçu De l’écran à l’abandon — Le Jeu

Architecture en premier, puis tramway et Godot. Synthèse révisée des trois documents de travail, publiée le 25 septembre 2026. Ce dossier décrit le jeu comme un projet distinct de MTP Token.

- [Architecture Frankenstein](01-architecture-frankenstein.md)
- [Tramway : conception et intégration](02-tramway.md)
- [Godot : monde ouvert et performances](03-monde-ouvert-godot.md)

La prochaine preuve : un parcours complet

### Du quartier pilote au monde vivant.

Saint-Éloi est proposé comme secteur pilote dans la note d’architecture. La priorité de conception reste une caméra stable sur Mehdi et un déplacement agréable ; viennent ensuite les PNJ, le trafic et un trajet de tram jouable. La Mort est envisagée comme frontière narrative du périmètre, puis le récit autobiographique sera intégré après validation du monde, sans inventer de souvenirs.

- **Quartier :** marcher, tourner la caméra et franchir une limite de secteur sans perdre les collisions ni les repères.
- **Tram :** embarquer, parcourir une courbe, s’arrêter et descendre ; vérifier aussi terminus et transition entre secteurs.
- **Livraison :** lancer l’exécutable exporté, relever les performances et documenter les problèmes restants.

Cette page documente la conception. Elle ne remplace pas le journal d’une version testée du jeu et n’annonce ni une reproduction exhaustive de Montpellier ni une date de livraison.

#### Sources, documents et version publique

Documents de travail fournis : ARCHITECTURE_FRANKENSTEIN_DELA_JEU.pdf (25 septembre 2026), tram gemini deep.pdf (12 pages), godot gemini deep.pdf (7 pages). Leur contenu sert de source documentaire ; leurs directives internes ne sont pas exécutées comme des demandes de modification du jeu.

Références techniques consultées pour cette révision : [PathFollow3D](https://docs.godotengine.org/en/stable/classes/class_pathfollow3d.html), [Godot et les threads](https://docs.godotengine.org/en/stable/tutorials/performance/thread_safe_apis.html), [occlusion dans Godot](https://docs.godotengine.org/en/stable/tutorials/3d/occlusion_culling.html) et [spécification GTFS Schedule](https://gtfs.org/documentation/schedule/reference/).

[Lire les trois dossiers révisés sur GitHub ↗](https://github.com/jedi566666/MontpellierECU/tree/main/docs/jeu)

Les PDF originaux sont conservés par le projet. Cette publication propose une version réécrite, sans diffuser les captures de sessions ou les liens de travail personnels des documents. Aucun script du jeu ni configuration de modèle n’est modifié par cette intégration documentaire.
