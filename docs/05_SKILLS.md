# 🧬 Pillar 5: Skills & Orchestration

## 1. Skill Atoms (SKILL.md)
A **Skill** is the smallest unit of agentic capability. It consists of a Markdown instruction file and (optionally) a backing Node.js or Python tool.

### Structure of a Skill:
- **`SKILL.md`**: Instructions for the LLM on how to use the skill.
- **`metadata.json`**: Machine-readable tags and categories.
- **`scripts/`**: Actual code executed by the `ExecutionEngine`.

## 2. Current Skill Inventory
The current system contains ~44-52 verified skills across several domains:
- **Core (8)**: Memory Management, Decision Scoring, Intent Routing.
- **Technical (12)**: JavaScript Codegen, Python Scripting, SQL Optimization.
- **Communication (6)**: Gmail Sending, Google Voice Answering, SMS Management.
- **Automation (10)**: Browser Navigation, File System Indexing, Deployment Monitoring.

## 3. Workflow Orchestration
A **Workflow** is a sequence of Skills designed to achieve a complex goal (e.g., "Write, Test, and Deploy a web service").
- **Coordinators**: The `AZRCoordinator` manages the multi-step "handshake" between different agents.
- **The "Hive Mind"**: A simulated layer that allows multiple agents (Nova, Atlas, Echo) to chime in during a single task execution for better oversight.

## 4. How to Create a New Skill
1.  **Define Goal**: What should the agent be able to do?
2.  **Create Folder**: `standalone-agent-runtime/skills/[domain]/[skill-name]/`
3.  **Add SKILL.md**: Follow the **5W+H** standard.
4.  **Register**: Add the skill to the `agent-config.yaml` registry.
5.  **Test**: Run `node scripts/init-leeway.js` to verify the skill is recognized.
