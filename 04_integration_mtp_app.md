# INTÉGRATION ARGENT 0 DANS MTP APP

## Architecture et interface pour l'Argent 0

### Architecture non-custodial

**Principe : vous êtes le seul propriétaire de vos clés.**

- Toutes les clés privées sont stockées uniquement sur l'appareil (Android/iOS).
- Aucune copie n'est faite sur les serveurs MTP.
- Aucun service de sauvegarde cloud n'est proposé (sécurité non-négociable).
- La phrase de récupération est générée une seule fois, chiffrée localement avec le mot de passe utilisateur.

**Pourquoi ?**
- Si les serveurs sont piratés, vos fonds restent intacts.
- Personne d'autre ne peut déplacer vos fonds.
- Vous êtes vraiment propriétaire.

**Conséquence :** L'utilisateur est responsable de la sauvegarde de sa phrase de récupération (sur papier). L'app fournit des outils pour l'aider à le faire en toute sécurité.

---

### Fonctionnalités centrées sur les usages d'Argent 0

#### 1. Wallet (portefeuille)

- Interface simplifiée : un solde, un bouton « Recevoir », un bouton « Envoyer ».
- QR code pour recevoir MTP (scan par l'app).
- Adress texte pour copier/coller.
- Historique des transactions (trié par date).
- Aucune option avancée (gas fee personnalisable, données hexadécimales, etc.).

#### 2. Marketplace locale

- Intégration native avec la marketplace décentralisée.
- Filtrage par catégorie (objets, services, temps, réparations, compétences, savoirs, créations).
- Visualisation des vendeurs locaux (tri par distance).
- Paiement direct en MTP à chaque transaction.

#### 3. Paiement QR Code

- Génération d'un QR code permanent pour les commerçants.
- Scan par les clients pour payer instantanément.
- Confirmation immédiate dans l'app.
- Pas de jargon technique.
- Pas de frais cachés.

#### 4. MTP Live

- Interface spéciale pour les créateurs « De l'écran à l'abandon ».
- QR code dédié pour les dons.
- Suivi des dons reçus en temps réel.
- Extraction des(stats fiscales si nécessaire).
- Aucun intermédiaire entre le donateur et le créateur.

---

### Interface simplifiée, jargon crypto évité

**Principe : une interfaceaccessible à tous, même aux non-techs.**

- Pas de mots comme « clé privée », « hash », « transaction », « blockchain » dans les écrans principaux.
- Utilisation de termes familiers : « Recevoir », « Envoyer », « Don ».
- Explications simplement placées dans des modals ou des infobulles.
- Tutoriels visuels (vidéos de 2 minutes) pour chaque fonctionnalité.

**Exemples :**
- Écran « Recevoir » : « Scannez ce QR code pour m'envoyer des MTP ».
- Écran « Envoyer » : « Saisissez l'adresse ou scannez le QR code du destinataire ».
- Écran « Don » : « Faites un don direct à ce créateur ».

---

### Guide UX pour particuliers

#### Écran d'accueil (solde + 2 boutons principaux)

```
┌─────────────────────────┐
│    MTP APP             │
├─────────────────────────┤
│                         │
│  Solde : 25 MTP         │
│  (~50 €)                │
│                         │
│  [ Recevoir ] [ Envoyer│]│
│                         │
│  Historique récent :    │
│  − 5 MTP → Boulangerie │
│  − 10 MTP ← Ami         │
│  − 2 MTP → Créateur X   │
└─────────────────────────┘
```

#### Écran « Recevoir »

```
┌─────────────────────────┐
│    Recevoir MTP        │
├─────────────────────────┤
│                         │
│   [ QR Code ]           │
│                         │
│  Votre adresse :        │
│  0x1234...ABCD          │
│  [ Copier ]             │
│                         │
│  Scannez ce QR code     │
│  pour me envoyer MTP    │
└─────────────────────────┘
```

#### Écran « Envoyer »

```
┌─────────────────────────┐
│   _envoyer MTP         │
├─────────────────────────┤
│  Destinataire :         │
│  [0x1234...ABCD_______] │
│                         │
│  Montant :              │
│  [5 __ MTP]             │
│                         │
│  [ Envoyer ]            │
└─────────────────────────┘
```

---

### Sécurité par défaut

- Mot de passe obligatoire (6 chiffres minimum).
- Touch ID/Face ID (optionnel, mais recommandé).
- Session auto-logout après 5 minutes d'inactivité.
- Aucune connexion HTTPS vers des serveurs non audités.
- Aucune publicité, aucun tracking, aucune analyse.

---

### Conclusion

**MTP App n'est pas une app crypto comme les autres.**

Elle est conçue pour :
1. **Respecter l'architecture non-custodial** (votre argent, vos clés).
2. **Simplifier l'interface** (pas de jargon, pas de complexité).
3. **Encourager les usages d'Argent 0** (circulation, don, échange, réparation).
4. **Sécuriser sans complexifier** (mot de passe, biométrie, auto-logout).

**L'objectif : un utilisateur lambda, sans connaissances techniques, peut utiliser MTP App sans rien casser — et sans avoir peur.**

*(C'est ce que nous appelons Argent 0 en pratique.)*
