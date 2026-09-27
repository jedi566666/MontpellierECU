> Historical working notes, not a current service status report. Model names and measurements below are retained from the draft; no benchmark protocol or raw results accompanies them. Do not treat these figures as validated comparisons. See [the corrected reconstruction](../frankenstein/README-corrige.md).

# AI Model Benchmarks

## Latency vs Accuracy Comparison

| Model            | Latency (ms) | `tool_calls` Accuracy | Codex Compatibility | Status          |
|------------------|--------------|-----------------------|---------------------|-----------------|
| GLM-5 V5         | 800          | 95%                   | ✅ Full              | **Production**  |
| Kimi K3          | 600          | 92%                   | ✅ Full              | **Active**      |
| GPT-OSS-120B     | 400          | 98%                   | ✅ Full              | **Gold Master** |
| Mistral Large 3  | 900          | 90%                   | ⚠️ Proxy required    | Lab             |
| Claude 3         | 1200         | 85%                   | ❌ SSE               | Abandoned       |

## Technical Limits

| Model            | Limitation                     | Solution                      |
|------------------|--------------------------------|-------------------------------|
| GLM-5 (Converse) | Tool names > 64 chars          | Switch to Chat Completions    |
| Astra            | Hallucinations on long patches | Abandoned                     |
| Kimi K3          | Latency > 500ms                | Bridge optimization           |
