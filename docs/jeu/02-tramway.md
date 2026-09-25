# Tramway : conception et intégration

Révision éditoriale du 25 septembre 2026, à partir des documents fournis. Les propositions ne valent pas fonctionnalités livrées.

02 / RAPPORT GEMINI · TRAMWAY

### Le tram, un trajet à vivre.

Le rapport propose de s’inspirer des cinq lignes montpelliéraines, de leurs parcours et de leur identité visuelle. Notre progression de conception commence par une station et un trajet pilote : approcher la rame, voir son intérieur, monter, voyager et descendre. Le réseau complet reste une cible.

#### Un réseau de données

Relier lignes, arrêts, voyages et horaires avec un import GTFS daté. Convertir les coordonnées dans le même repère métrique que la ville ; contrôler le sens des voies, les branches, les correspondances et l’alignement avec les quais.

#### Une rame articulée

Définir la voie avec Path3D et Curve3D, puis guider les bogies avec PathFollow3D. Ajuster les caisses entre leurs points d’appui et vérifier les courbes serrées, les soufflets et le passage des quais.

#### Une circulation lisible

Prévoir les états circulation, freinage, arrêt, portes ouvertes, fermeture et attente de voie libre. Le voyage doit rester cohérent quand la rame traverse plusieurs secteurs du monde.

#### Corrections apportées au rapport et critères d’intégration

- **GTFS décrit un service planifié.** Les calendriers et exceptions doivent être lus ; les heures peuvent dépasser 24:00:00. La présence de shapes.txt doit être vérifiée dans le flux retenu. Sans tracé exploitable, l’import doit signaler une géométrie manquante.
- **Une ligne n’est pas toujours une boucle.** Le rebouclage automatique convient aux parcours cycliques ; les terminus, bifurcations et changements de sens demandent une logique propre.
- **Le freinage dépend de la vitesse.** Le seuil fixe de 60 mètres évoqué dans le rapport est un exemple à remplacer par une distance adaptée à la vitesse, à la décélération retenue et à une marge de sécurité dans la simulation.
- **Hors champ ne signifie pas arrêté.** Conserver l’état logique du trajet, les arrêts et l’occupation des voies. À proximité du joueur, rétablir la représentation 3D sans saut visible ; une vitesse constante ne suffit pas à reproduire les horaires.
- **Le détail suit le besoin.** Intérieur et passagers à proximité, silhouette simplifiée à distance. Les seuils de distance seront réglés après mesure.
- **Identité visuelle maîtrisée.** Prévoir une livrée originale ou des ressources autorisées et documentées avant publication des assets.

[Sources, périmètre et validation](README.md)
