# Benchmarks des modèles IA

## Comparatif Latence vs Précision

| Modèle          | Latence (ms) | Précision 	ool_calls | Compatibilité Codex | Statut          |
|-----------------|--------------|------------------------|---------------------|-----------------|
| GLM-5 V5        | 800          | 95%                    | ✅ Full             | **Production**  |
| Kimi K3         | 600          | 92%                    | ✅ Full             | **Actif**       |
| GPT-OSS-120B    | 400          | 98%                    | ✅ Full             | **Gold Master** |
| Mistral Large 3 | 900          | 90%                    | ⚠️ Proxy requis     | Laboratoire     |
| Claude 3        | 1200         | 85%                    | ❌ SSE              | Abandonné       |

## Limites techniques

| Modèle          | Limite rencontrée               | Solution adoptée               |
|-----------------|---------------------------------|--------------------------------|
| GLM-5 (Converse) | Noms d'outils > 64 caractères   | Passage à Chat Completions     |
| Astra           | Hallucinations sur patches longs| Abandon                        |
| Kimi K3         | Latence > 500ms                 | Optimisation du bridge         |
