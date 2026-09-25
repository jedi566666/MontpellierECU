# Le marché MTP — catalogue sans serveur à administrer

Le site statique Cloudflare lit `catalog.json` depuis la branche main du dépôt public. Aucun secret GitHub n’est envoyé au navigateur. Aucun abonnement supplémentaire ni base de données payante n’est utilisé.

## Proposer une annonce

1. Préparer l’annonce sur https://mtptoken.pages.dev/echanges/ et l’enregistrer sur l’appareil.
2. Dans sa fiche, choisir « Proposer à la communauté », copier le texte puis ouvrir GitHub.
3. Se connecter à un compte GitHub, coller le texte dans la proposition et joindre ses photos (4 maximum).
4. Envoyer la proposition publique. L’étiquette `marketplace-pending` ne vaut pas publication.

## Modérer et publier

Un responsable du dépôt relit le texte, les photos, la catégorie et le prix, puis applique `marketplace-approved`. Le workflow `Publish approved marketplace listings` reconstruit le catalogue. L’annonce apparaît après le traitement et le renouvellement des caches, en quelques minutes. Fermer la proposition ou retirer l’étiquette la retire du catalogue après le même délai.

Modifier une annonce validée ou la rouvrir retire son approbation automatiquement : relire puis réappliquer l’étiquette. Si un workflow échoue, son statut est visible dans Actions ; le dernier catalogue reste servi. Ne pas publier de contenu sensible : le dépôt et son historique sont publics.

Les échanges se font dans les commentaires de la proposition GitHub. Aucun paiement, panier, livraison ou commission automatique n’est activé. L’approbation d’une annonce ne certifie pas son vendeur ni sa disponibilité.

## Coût et limites

Le dépôt doit rester public et utiliser les exécuteurs standards GitHub Actions. Leur usage est gratuit dans les dépôts publics selon https://docs.github.com/en/billing/concepts/product-billing/github-actions . Les conditions des hébergeurs restent applicables. Le site reste dépendant de GitHub et Cloudflare : « sans serveur » signifie sans serveur propre à administrer, pas sans service distant.

Les images sont des pièces jointes GitHub. Les brouillons et favoris restent locaux. L’import conserve les annonces existantes et ignore les identifiants déjà présents. Les exemples du site sont séparés des annonces publiques.

Préférence du créateur : ne plus utiliser Metricool (25 septembre 2026).
