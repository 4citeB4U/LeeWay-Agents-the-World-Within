# ⚖️ Pillar 2: LeeWay Standards & Governance

## The Compliance Mandate
To ensure the integrity of the Sovereign state, all files, agents, and skills within the LeeWay ecosystem MUST adhere to the **Sovereign Governance Framework**.

## 1. The 5W+H Header
Every `.js`, `.ts`, `.py`, and `.md` file must lead with a 5W+H header. This ensures that any "Sovereign Auditor" agent can instantly verify the source and purpose of the code.

```javascript
/* 
LEEWAY HEADER — DO NOT REMOVE
REGION: [e.g., AI.ORCHESTRATION]
TAG: [e.g., CORE.RUNTIME.MAIN]

5WH:
WHAT = Short description of the file's function
WHY = The architectural rationale
WHO = The LeeWay Creator
WHERE = Full file path
WHEN = Creation/Update timestamp
HOW = The methodology used (e.g., Node.js execution)
*/
```

## 2. Branding & Attribution
The `GovernanceGate` enforces branding as a security measure. If a skill or core component is missing the "LEEWAY" or "SOVEREIGN" identifier in its metadata, the system may refuse to execute the operation.

## 3. The Guard Corps (Security)
The system uses a **Critique Layer** (formerly known as the Guard Corps) to filter destructive commands.
- **Forbidden Actions**: Commands containing "remove," "delete," "purge," or "wipe" are intercepted.
- **Heuristic Check**: Every prompt is scanned for risk before being sent to the LLM.

## 4. Alignment Tools
Developers must use the following tools to maintain compliance:
- `node scripts/verify-leeway-setup.js`: Scans the repo for missing headers.
- `node scripts/leeway-agents/header-injector.js`: Automatically repairs files missing the compliance block.

## 5. Licensing Sovereignty
The system operates on an "Operational License."
- **Trial Period**: New deployments have a hardcoded 30-day "Architectural Integrity" window.
- **Extension**: Once the integrity window expires, the system requires a "Sovereign Key" to maintain access to advanced execution adapters.
