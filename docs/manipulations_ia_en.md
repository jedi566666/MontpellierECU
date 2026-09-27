> Historical working notes, not a current service status report. Model names and measurements below are retained from the draft; no benchmark protocol or raw results accompanies them. Do not treat these figures as validated comparisons. See [the corrected reconstruction](../frankenstein/README-corrige.md).

# AI Manipulations: Technical Experiments

## Context
Integration of AWS Bedrock models (GLM-5, Kimi K3, GPT-OSS-120B) into **Codex Windows** to create an **agentic loop**: *AI Engineer → AI Coder → Human Validation*.
**Goal**: Automate code generation with real command execution (`exec_command`).

---

## Frankenstein Architecture
```mermaid
graph TD
    A[AI Engineer\n(GLM-5 V5)] -->|Prompts/instructions| B[AI Coder\n(Kimi K3/GPT-OSS-120B)]
    B -->|Generated code| C[Human Validation]
    C -->|Feedback| A
```
| Role               | Model         | Platform            | Port  | Status       |
|--------------------|---------------|---------------------|-------|--------------|
| AI Engineer        | GLM-5 V5      | AWS Bedrock         | 4025  | **Active**   |
| Specialized Coder  | Kimi K3       | Moonshot            | 4001  | **Active**   |
| Gold Master        | GPT-OSS-120B  | Node.js Bridge      | 4010  | **Active**   |

---

## Tested Models
| Model            | Latency (ms) | `tool_calls` Accuracy | Codex Compatibility | Status          |
|------------------|--------------|-----------------------|---------------------|-----------------|
| GLM-5 V5         | 800          | 95%                   | ✅ Full              | **Production**  |
| Kimi K3          | 600          | 92%                   | ✅ Full              | **Active**      |
| GPT-OSS-120B     | 400          | 98%                   | ✅ Full              | **Gold Master** |

**Key Issue**: 64-character limit on tool names (AWS Converse).
**Solution**: Native Chat Completions (GLM-5 V5) + LiteLLM Proxy.

---

## Technical Challenges & Solutions

### 1. Tool Calling
- **Problem**: Incompatibility between Codex's `exec_command` and Bedrock's `tool_calls`.
- **Solution**: Native `tool_calls` with `tool_call_id` (GLM-5 V5).

### 2. Tool Name Length (>64 chars)
```python
# D:/codex-aws-bridge/codex_tool_proxy.py
def normalize_tool_name(long_name):
    import hashlib
    return hashlib.sha256(long_name.encode()).hexdigest()[:27]
```
---

## Ports in Use
| Port  | Service        | Model         | Role                          |
|-------|----------------|---------------|-------------------------------|
| 4000  | LiteLLM        | All           | Normalization proxy           |
| 4001  | Kimi K3        | kimi-k3     | Specialized coder             |
| 4010  | Node.js Bridge | GPT-OSS-120B  | Gold Master                   |
| 4025  | GLM-5 V5       | zai.glm-5   | AI Engineer (production)      |

---

## Key Takeaways
- **Successes**: GLM-5 V5 + native `tool_calls` = stability.
- **Failures**: Astra (hallucinations), Converse API (64-char limit).

---

## Key Files
| File                                      | Role                              |
|-------------------------------------------|-----------------------------------|
| D:/codex-aws-bridge/codex_tool_proxy.py | Tool name normalization proxy    |
| C:/Users/msoui/.codex-glm5-final-v2/config.toml | GLM-5 V5 config           |
| C:/Users/msoui/codex-bedrock-bridge/bridge.js | Node.js bridge (GPT-OSS-120B) |
