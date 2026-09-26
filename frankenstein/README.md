# Frankenstein : Chronique d'un pont agentique GLM-5 × Codex Windows

## Résumé

Ce répertoire documente l'expérience menée en septembre 2026 pour connecter des modèles AWS Bedrock (GLM-5, Kimi K3, GPT-OSS-120B) à Codex Windows Desktop via une architecture client-serveur sur localhost.

L'objectif : permettre à un modèle externe d'utiliser xec_command dans Codex pour agir réellement sur la machine Windows.

---

## Chronologie

### Frankenstein 1 — Les débuts (septembre 2026)

- **Modèle cible** : GLM-5 via AWS Bedrock
- **Architecture testée** : Responses API OpenAI
- **Problème majeur** : Responses API utilise un flux SSE inadapté à Bedrock
- **Échec** : esponse.completed ne parvient pas à synchroniser les tool calls avec Codex

**Leçons** :
- SSE (Server-Sent Events) est incompatible avec Bedrock InvokeModel
- L'API Responses nécessite unction_call / unction_call_output via call_id
- Codex s'attend à un flux esponse.completed qui n'existe pas dans Bedrock

### Frankenstein 2 — Tentative Converse

- **Architecture testée** : AWS Bedrock Converse API
- **Mécanisme** : 	oolUse / 	oolResult
- **Problème** : Bedrock impose une limite de 64 caractères sur les noms d'outils
- **Échec** : Les noms d'outils Codex dépassent cette limite

**Leçons** :
- Converse API est conçue pour le tool calling mais a des contraintes strictes
- 	oolUse / 	oolResult fonctionnent mais les noms doivent être raccourcis
- Besoin d'un proxy de normalisation des noms

### Frankenstein 3 — Proxy de normalisation

- **Architecture** : LiteLLM + proxy Python de normalisation des noms
- **Code principal** : D:\codex-aws-bridge\codex_tool_proxy.py
- **Mécanisme** :
  - Normalize les noms d'outils en aliases courts (max 27 caractères)
  - Maintient une correspondance short_to_long / long_to_short
  - Utilise SHA256 pour les collisions
- **Résultat** : Partiellement fonctionnel mais complexe à maintenir

**Leçons** :
- La normalisation marche mais la logique de 	ool_response est fragile
- Le passage par LiteLLM ajoute des couches

### GPT-OSS-120B — Gold Master

- **Pont Node.js** : C:\Users\msoui\codex-bedrock-bridge\bridge.js (port 4010)
- **Rôle** : Bridge léger qui filtre les namespaces sans toucher aux outils
- **Modèle configuré** : openai.gpt-oss-120b
- **Wire API** : esponses
- **Status** : ACTIF (Gold Master)

### Kimi K3 — Codeur spécialisé

- **Port** : 4001
- **Modèle** : global.moonshotai.kimi-k3
- **Rôle** : Codeur spécialisé pour tâches de programmation complexes
- **Status** : ACTIF

### GLM-5 V5 — Architecture finale

- **Port** : 4025
- **Découverte décisive** : GLM-5 supporte nativement le format Chat Completions avec 	ool_calls
- **Architecture** :
  - Codex envoie une requête Chat Completions
  - LiteLLM la transmet à Bedrock InvokeModel
  - GLM-5 retourne des 	ool_calls natifs avec call_id
  - Codex exécute xec_command et renvoie le résultat
  - La boucle agentique se poursuit

**Pourquoi V5 a abandonné Converse** :
- Chat Completions est plus simple et mieux supporté par Codex
- Pas de limitation de 64 caractères sur les noms d'outils
- Pas besoin de mapper 	oolUse vers unction_call
- Les 	ool_calls natifs sont fiables et prévisibles

---

## Architecture Actuelle

`
Codex Windows Desktop
    ↓ Responses API (wire_api = "responses")
    ↓
LiteLLM (D:\codex-aws-bridge, port 4000)
    ↓ Config: config.yaml
    ↓ Proxy Python: codex_tool_proxy.py (normalisation des noms)
    ↓
AWS Bedrock InvokeModel
    ↓ Chat Completions natif
    ↓ tool_calls natifs
GLM-5 V5 (port 4025)
    ↓ tool_call_id
    ↓
Codex → exec_command → résultat → poursuite du raisonnement
`

---

## Fichiers clés

| Fichier | Rôle |
|---------|------|
| `D:\codex-aws-bridge\codex_tool_proxy.py` | Proxy Python de normalisation des noms d'outils |
| `D:\codex-aws-bridge\config.yaml` | Configuration LiteLLM (modèles Bedrock) |
| `C:\Users\msoui\codex-bedrock-bridge\bridge.js` | Bridge Node.js pour GPT-OSS-120B (port 4010) |
| `C:\Users\msoui\.codex-frankenstein-v9\config.toml` | Configuration Codex pour GPT-OSS-120B |
| `C:\Users\msoui\.codex-glm5-final-v2\config.toml` | Configuration Codex pour GLM-5 V2 |
| `C:\Users\msoui\.codex-glm5-agent-v3\config.toml` | Configuration Codex pour GLM-5 V3 |

---

## Ports activement utilisés

| Port | Service | Modèle |
|------|---------|--------|
| 4001 | Kimi K3 | `global.moonshotai.kimi-k3` |
| 4010 | GPT-OSS-120B Gold Master | `openai.gpt-oss-120b` |
| 4021 | GLM-5 V1 (ancien) | |
| 4022 | GLM-5 V2 | |
| 4023 | GLM-5 V3 | |
| 4024 | Laboratoire V4 | |
| 4025 | GLM-5 V5 ACTIF | `zai.glm-5` |

---

## Concepts clés

### Responses API vs Chat Completions

- **Responses API** : Flux SSE, esponse.completed, unction_call/unction_call_output, call_id
- **Chat Completions** : Requête/réponse standard, 	ool_calls, 	ool_call_id

### Bedrock InvokeModel vs Converse

- **InvokeModel** : API générique, supporte Chat Completions natif pour certains modèles
- **Converse** : API structurée, 	oolUse/	oolResult, limitation 64 chars sur les noms

### Tool calling GLM-5

GLM-5 via Bedrock InvokeModel supporte nativement :
- Format Chat Completions
- 	ool_calls avec 	ool_call_id
- Résultats d'outils passés dans messages.role: "tool"

---

## Pourquoi ce projet

Cette expérience démontre qu'il est possible de :
1. Utiliser des modèles AWS Bedrock dans Codex Windows
2. Maintenir une boucle agentique complète avec exécution réelle de commandes
3. Contourner les limitations de l'API Converse en utilisant Chat Completions natif
4. Séparer les rôles entre modèles (codeur spécialisé vs agent généraliste)

---

## Liens

- AWS Bedrock : https://aws.amazon.com/bedrock/
- OpenAI Responses API : https://platform.openai.com/docs/api-reference/responses
- LiteLLM : https://github.com/BerriAI/litellm
- Codex CLI : https://github.com/openai/codex (open source)

---

## État

- Gold Master GPT-OSS-120B : ACTIF (port 4010)
- GLM-5 V5 : ACTIF (port 4025)
- Kimi K3 : ACTIF (port 4001)
- Documentation : En cours de publication sur GitHub

---

*Document généré automatiquement depuis l'inspection de l'infrastructure existante le 2026-09-26.*
