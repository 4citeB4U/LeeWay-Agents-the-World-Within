# 🏛️ Pillar 1: Sovereign Architecture

## Core Philosophy
The Leeway Agent ecosystem is built on the principle of **Technical Sovereignty**. This means all intelligence, memory, and orchestration reside locally on the user's hardware.

## System Topology
The application is divided into three distinct but unified layers:

### 1. The Sovereign Spine (`standalone-agent-runtime`)
The "Body" of the system. This provides the execution environment where agents interact with the host OS and the web.
- **Execution Engine**: A step-based processor that converts goals into actions.
- **Adapters**: The interface layer (Desktop, Browser, Communication).
- **Environment Inspector**: Detects hardware capabilities (CPU/GPU/Storage).

### 2. The Governance Layer (`LeeWay-Standards`)
The "Soul" of the system. This enforces compliance across all code and skills.
- **Standards**: Every file must contain the `5W+H` header.
- **Governance Gate**: A logic layer that restricts execution based on branding requirements and licensing status.
- **Alignment Tools**: Scripts (`leeway-align`) that ensure all agents are operating within the framework's boundaries.

### 3. The Integration SDK (`sdk/`)
The "Connective Tissue." This allows any third-party developer to wrap their application in the Leeway Runtime, granting it immediate "agentic" capabilities.

---

## The Request Lifecycle (The Execution Spine)
1.  **Ingestion**: An intent is received (via Chat, RTC, or API).
2.  **Routing**: The `AZRCoordinator` classifies the intent and selects the appropriate Agent/Skill.
3.  **Governance Check**: The `GovernanceGate` verifies that the skill is compliant and the system is in a valid execution state.
4.  **Execution**: The `ExecutionEngine` calls the relevant **Adapter** (e.g., `BrowserAdapter.click`).
5.  **Learning**: The result is recorded in the `sovereign-memory.json`.

---

## Data Privacy & Sovereignty
- **Inference**: Handled locally via `llama-server` (Ollama compatible).
- **Persistence**: Flat-file JSON and SQLite databases stored at `~/.leeway/`.
- **Cloud Dependency**: Zero. The system only connects to external servers for optional signaling (RTC) or explicit web-automation tasks.
