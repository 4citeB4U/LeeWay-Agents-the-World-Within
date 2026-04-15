# 🧠 Pillar 4: Sovereign Intelligence & Memory

## 1. Local-First Inference
The `LeewayInferenceClient.js` avoids all cloud-based vendor dependencies. All reasoning is performed via a **Local Llama** instance.

### Settings (`inference-client.js`):
- **Server**: `http://localhost:8321` (default port).
- **Context Size**: `1024` tokens.
- **Offloading**: Running on CPU by default.
- **GGUF Path**: The system points to a local `.gguf` file stored in the `E:\ollama-models` (or `bin/models/`) folder.

## 2. The Persona Engine
Agent Lee's "identity" is a **Dialect-based Persona Engine**.
- **The Reality**: This is a text-templating system that transforms standard LLM outputs into "LeeWay" dialect.
- **Skins**: NYC Boast, Chi Swag, South Drawl, and Poetic Storyteller.
- **The Loop**: LLM Generates Text → Persona Engine applies "Sprinkle We" + "Slang-Injection" → The final "Sovereign Response" is returned.

## 3. Sovereign Memory (L7 Storage)
Persistence is handled at the **L7 Application Layer** via the `sovereign-memory.json` file.
- **Structure**: A flat JSON database.
- **Management**: Written to synchronously during each task completion.
- **Location**: `%USERPROFILE%/.leeway/sovereign-memory.json`.

## 4. The Critical Reviewer (Guard Corps)
Before an action is taken, the **Critique Layer** (Guard Corps) scans the prompt for safety.
- **Logic**: Simple regex-based string matching (`remove`, `delete`, `reset`, `bypass`).
- **The Gate**: A "Hard Reject" if high-risk commands are detected.
- **The Future**: This will be upgraded to an LLM-based semantic risk classifier as context sizes grow.

## 5. Vision and Multimodality
The **VisionAgent** (managed via `qwen2.5vl:3b`) provides the agents with "Eyes."
- **Source**: Taking real-time screenshots of the host desktop or browser.
- **Capability**: Identifies UI elements (buttons, forms, text) to help the agent plan its next action.
