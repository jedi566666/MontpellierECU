# Mise à jour du site avec la section « Manipulations IA »

## Étapes pour intégrer la documentation

### 1. Générer le site (MkDocs)
`ash
# Se placer à la racine du dépôt
cd C:\Users\msoui\Documents\ChatGPT\MTP ECU

# Installer les dépendances (si ce n'est pas déjà fait)
pip install mkdocs mkdocs-material

# Générer le site
mkdocs build

# Servir localement pour prévisualiser
mkdocs serve
`

### 2. Mettre à jour la navigation
Modifier mkdocs.yml pour ajouter la section :
`yaml
nav:
  - Accueil: index.md
  - Manipulations IA: docs/MANIPULATIONS_IA.md
  - Benchmarks: docs/benchmarks_models.md
`

### 3. Lier depuis la page d'accueil
Ajouter un lien dans README.md (ou index.md) :
`markdown
## 🤖 [Manipulations IA : Expérimentations techniques](docs/MANIPULATIONS_IA.md)
Notre exploration des modèles AWS Bedrock, Codex, et Frankenstein pour construire une architecture agentique.
`

### 4. Pousser les changements
`ash
git add docs/MANIPULATIONS_IA.md docs/benchmarks_models.md mkdocs.yml
if (Test-Path README.md) { git add README.md }
git commit -m "feat: ajout de la section Manipulations IA"
git push origin main
`

---

## Fichiers modifiés

| Fichier                     | Modification                          |
|-----------------------------|---------------------------------------|
| docs/MANIPULATIONS_IA.md  | Création de la rubrique               |
| docs/benchmarks_models.md | Création des benchmarks               |
| mkdocs.yml                | Ajout des nouvelles pages dans la nav |
| README.md                | Ajout d'un lien vers la doc           |