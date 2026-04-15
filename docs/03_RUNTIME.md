# ⚙️ Pillar 3: Runtime & Developer SDK

## 1. The Execution Engine
The `ExecutionEngine.ts` is the central heart of the agentic workspace. It handles synchronous, step-based execution of Skills.

### Key Logic:
1.  **Validation**: Every skill is checked against a "Sovereign Schema."
2.  **Snapshot**: Before any risky action, the current state of the engine is serialized to the `runtime.db` (SQLite).
3.  **Handoff**: If a skill requires the browser (e.g., `gmail.send_email`), the engine hands the context to the **BrowserAdapter**.

## 2. Adapters (Sovereign Hands)
Adapters translate between abstract Agent goals and real-world system actions.
- **BrowserAdapter**: Puppeteer-based web automation.
- **DesktopAdapter**: OS-level commands (Vulcan).
- **CommunicationAdapter**: Google Voice/Gmail scrapers.
- **RTCAdapter**: Real-time telemetry to the Mobile PWA.

## 3. The Developer SDK
The SDK located in `sdk/` is designed to "Materialize" the Leeway runtime into any third-party project.

### How to Integrate:
1.  **Requirement**: Target project must be Node.js/TypeScript based.
2.  **Integration Script**: `node sdk/application-installer.js --target ./your-project`
3.  **Result**: The installer will:
    - Inject the `.leewayrc` into the root.
    - Setup the `mcp-server` symlinks.
    - Wire the `AgentLeeCreatorsStudio` into the UI.

## 4. MCP Server Architecture
The runtime exposes a **Model Context Protocol (MCP)** server on `localhost:3000`. This allows any external LLM (like Claude or GPT-4) to "call" the local Sovereign skills as tools.
- **Planner MCP**: For task breakdown.
- **Memory MCP**: For persistent long-term recall.
- **Registry MCP**: For searching available Skills.
