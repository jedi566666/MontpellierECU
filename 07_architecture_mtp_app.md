# ARCHITECTURE MTP APP

## Principes de conception Non-custodial, simplifiée

### L'illusion de la simplicité

La simplification n'est pas une question d'interface. C'est une question d'architecture. Si le backend est complexe, l'interface ne peut pas真正ement simple.

**MTP App est conçue selon deux principes non-négociables :**
1. **Non-custodial** : Vous êtes le seul propriétaire de vos clés.
2. **Simplifiée** : Pas de jargon, pas de configurations complexes, pas de risque.

### Les 5 principes d'architecture MTP

#### 1. Le Portefeuille est sur l'appareil (pas dans le cloud)

Toutes les clés privées sont stockées uniquement sur le téléphone. Aucune copie n'est faite sur les serveurs MTP. Pas de sauvegarde cloud. Pas de sauvegarde Google Drive.

**Pourquoi ?**
- Si les serveurs sont piratés, vos clés sont en sécurité.
- Personne d'autre ne peut déplacer vos fonds.
- Vous êtes vraiment propriétaire.

**Conséquence :**
- Si vous perdez votre téléphone, vous perdez vos clés.
- Si vous réinstallez l'app sans sauvegarde, vous perdez vos clés.
- **C'est pourquoi la sauvegarde de la phrase de récupération est CRITIQUE.**

#### 2.La phase 1 n'existe pas

La plupart des apps crypto demandent à l'utilisateur :
- « Créez une phrase de 12 mots »
- « Notez-la sur papier »
- « Confirmez-la »
- « Attendez 24 heures pour la vérification »

**MTP App ne fait pas ça.**

La phrase de récupération est générée, affichée, et **immédiatement cryptée avec votre mot de passe**. Vous ne la voyez qu'une seule fois, mais elle est sauvegardée localement sur le téléphone.

**Avantage :** Vous ne pouvez pas perdre votre phrase de récupération (elle est chiffrée avec votre mot de passe).
**Risque :** Si vous oubliez votre mot de passe, vous perdez l'accès à la sauvegarde.

#### 3. Pas de wallet backup service

Some apps propose "backup en cloud". MTP App ne le fait pas.

**Raison :** Un backup en cloud, même chiffré, est une porte d'entrée pour les attaques.

**Solution alternative :**
- Sauvegarde manuelle de la phrase de récupération sur papier (recommandé)
- Sauvegarde locale cryptée sur le téléphone (optionnel)

#### 4. Les transactions sont primitives

- Reçu : QR code → scan → confirmation → fin.
- Envoyé : Adress → montant → confirmation → fin.

Aucune option avancée (gas fee personnalisable, données hexadécimales, etc.).

Pourquoi complexity si on veut juste payer un café ?

#### 5. L'auditabilité est ouverte

Le code de MTP App est open source. N'importe qui peut auditer le code. Aucune fonctionnalité mystérieuse. Aucun code secret.

### L'interface utilisateur

#### La page d'accueil
- Solde MTP
- Bouton « Recevoir » (QR code)
- Bouton «Envoyer» (texte)
- Historique récent

#### L'écran « Recevoir »
- QR code de votre adresse
- Votre adresse texte (clicable)
- Bouton «Copier»
- Aucune autre information technique

#### L'écran « Envoyer »
- Entrée « Adress » (copier/coller ou scanner QR code)
- Entrée « Montant » (simple)
- Bouton «Confirmer» (une seule fois)
- **Pas de confirmation deuxième facteur pour les montants < 50 €**

Pourquoi ? Parce que la sécurité n'est pas une obfuscation. Les grandes transactions nécessitent plus de sécurité.

### La sécurité par défaut

- Mot de passe obligatoire (6 chiffres minimum)
- Touch ID/Face ID (optionnel, mais recommandé)
- Session auto-logout après 5 minutes d'inactivité
- Aucune connexion HTTPS vers des serveurs non audités
- Aucune publicité, aucun tracking, aucune analyse

### Le code source

Open source sur GitHub. Tout le monde peut voir :
- Comment les clés sont générées
- Comment les transactions sont signées
- Comment les données sont stockées
- Quelles API sont appelées (et pourquoi)

### L'évolution Future

**2026 :** version 1.0 — basique, mais robuste
**2027 :** version 2.0 — multi-token support, sans complexifier l'interface
**2028 :** version 3.0 — interface tactile avancée, sans changer les principes

---

### Principe directeur

**Simplicité = clarté + transparence + non-custodial.**

Pas de compromis. Pas d'excuses. Pas de jargon.

L'objectif : un utilisateur lambda, sans connaissances techniques, peut utiliser MTP App sans rien casser — et sans avoir peur.
