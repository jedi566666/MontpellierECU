# Frankenstein : Ponts agentiques GLM-5 × GPT-OSS × Codex Windows

## Avertissement

Ce document présente une **reconstitution technique** basée sur l'inspection de l'infrastructure active en septembre 2026. Les appellations "Frankenstein 1/2/3" sont des **phases logiques reconstruites pour la documentation**, et non des releases historiquement identifiées dans les sources.

---

## Architecture observée (septembre 2026)

### Ports actifs

| Port | Service | Modèle | Protocole |
|------|---------|--------|-----------|
| 4001 | codex_tool_proxy | Kimi K3 | responses |
| 4010 | gptoss_bridge | GPT-OSS-120B | responses |
| 4025 | glm5_agent_v5 | GLM-5 V5 | (à vérifier) |

### Processus confirmés

`
Port 4001: uvicorn codex_tool_proxy:app--host 127.0.0.1 --port 4001
Port 4010: uvicorn gptoss_bridge:app --host 127.0.0.1 --port 4010
Port 4025: uvicorn glm5_agent_v5:app --host 127.0.0.1 --port 4025
`

**Preuve** : Commandes extraites via Get-CimInstance Win32_Process.

---

## Fichiers clés

| Fichier | Port | Role observé |
|---------|------|---------------|
| D:\codex-aws-bridge\codex_tool_proxy.py | 4001 | Normalisation noms d'outils (Kimi K3) |
| C:\Users\msoui\codex-bedrock-bridge\bridge.js | (inactif) | Bridge Node.js codé pour 4010, mais non exécuté |
| D:\codex-aws-bridge\config.yaml | 4000 | Configuration LiteLLM |
| C:\Users\msoui\.codex-frankenstein-v9\config.toml | — | Config Codex pour GPT-OSS-120 |

**Preuve** : Inspection processus actifs + contenu fichiers.

---

## Protocoles confirmés

- **GPT-OSS-120B** : wire_api = "responses" (confirmé dans config TOML)
- **Kimi K3** : wire_api = "responses" (confirmé dans config TOML)

### Incertain

- **GLM-5 V5** : Protocole exact non déterminé par inspection
- **bridge.js** : Rôle historique inconnu (fichier existe mais pas de processus actif)

---

## Problèmes documentés

### Logs Kimi K3 (25/09/2026)

`
TOOLMAP: normalisation d'outils longs
POST /v1/responses → 400 Bad Request
`

**Preuve** : D:\codex-aws-bridge\k3-namespace-proxy-out.log

### Sauvegardes chronologiques

`
24/09: codex_tool_proxy.before-route-fix.py
24/09: codex_tool_proxy.frontier-20260925-143347.bak.py
25/09: codex_tool_proxy.before-gptoss-20260926-160352.py
26/09: codex_tool_proxy.before-gptoss-20260926-160408.py
26/09: codex_tool_proxy.py (version actuelle)
`

**Preuve** : Liste fichiers dans D:\codex-aws-bridge.

---

## Ce qui n'est PAS prouvé

1. **Existence de "Frankenstein 1/2/3" comme releases** — Non documenté dans les sources
2. **Causes précises des échecs SSE/Converse** — Pas de logs ou documentation trouvée
3. **Chronologie exacte Responses → Chat Completions** — Non documentée
4. **Rôle de bridge.js dans l'architecture active** — Fichier existe mais inactif

---

## Ressources

- PDFs dans C:\Users\msoui\Downloads\ (contenu non vérifié dans cette session) :
  - FRANKENSTEIN_Premium_Codex_AWS_GPTOSS120B.pdf
  - GLM5_Codex_Windows_Frankenstein_Historique_ILLUSTRE_26-09-2026.pdf
  - RECAP_PROJET_FRANKENSTEIN_GLM5_CODEX_LUXE.pdf

---

*Document basé sur l'inspection factuelle de l'infrastructure le 26/09/2026. Les affirmations non sourcées sont explicitement signalées comme incertaines.*
