> Notes de travail historiques, pas un état actuel des services. Les noms de modèles et mesures ci-dessous sont conservés du brouillon ; aucun protocole de benchmark ni résultat brut ne les accompagne. Ces chiffres ne constituent pas un comparatif validé. Voir [la reconstitution corrigée](../frankenstein/README-corrige.md).

# Manipulations IA : Expérimentations techniques

## Contexte
Intégration de modèles AWS Bedrock (GLM-5, Kimi K3, GPT-OSS-120B) dans **Codex Windows** pour créer une boucle agentique *Ingénieur IA → Codeur IA → Validation humaine*.
**Objectif** : Automatiser la génération de code avec exécution réelle de commandes (`exec_command`).

---

## Architecture Frankenstein
```mermaid
graph TD
    A[Ingénieur IA\n(GLM-5 V5)] -->|Prompts/consignes| B[Codeur IA\n(Kimi K3/GPT-OSS-120B)]
    B -->|Code généré| C[Validation Humaine]
    C -->|Feedback| A
```
| Rôle                | Modèle       | Plateforme          | Port  | Statut      |
|---------------------|--------------|---------------------|-------|-------------|
| Ingénieur IA        | GLM-5 V5     | AWS Bedrock         | 4025  | **Actif**   |
| Codeur spécialisé   | Kimi K3      | Moonshot            | 4001  | **Actif**   |
| Gold Master         | GPT-OSS-120B | Bridge Node.js      | 4010  | **Actif**   |

---

## Ports utilisés
| Port  | Service        | Modèle       | Rôle                          |
|-------|----------------|--------------|-------------------------------|
| 4000  | LiteLLM        | Tous         | Proxy de normalisation        |
| 4001  | Kimi K3        | kimi-k3    | Codeur spécialisé             |
| 4010  | Bridge Node.js | GPT-OSS-120B | Gold Master                   |
| 4025  | GLM-5 V5       | zai.glm-5  | Ingénieur IA (production)     |

---

## Leçons apprises
- **Réussites** : GLM-5 V5 + `tool_calls` natifs = stabilité.
- **Échecs** : Astra abandonné (hallucinations), Converse API limitée (64 chars).

---

## Fichiers clés
| Fichier                                      | Rôle                                  |
|----------------------------------------------|---------------------------------------|
| D:/codex-aws-bridge/codex_tool_proxy.py    | Proxy de normalisation des noms       |
| C:/Users/msoui/.codex-glm5-final-v2/config.toml | Config GLM-5 V5                  |
| C:/Users/msoui/codex-bedrock-bridge/bridge.js | Bridge Node.js (GPT-OSS-120B)    |
