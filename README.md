# LeeWay Agent Skills

[![GitHub](https://img.shields.io/badge/GitHub-LeeWay--Agent--Skills-181717?logo=github)](https://github.com/4citeB4U/LeeWay-Agent-Skills)
[![npm](https://img.shields.io/badge/npm-@leeway%2Fagent--skills-CB3837?logo=npm&logoColor=white)](https://www.npmjs.com/package/@leeway/agent-skills)
[![Node](https://img.shields.io/badge/Node-18%2B-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![MCP](https://img.shields.io/badge/MCP-ready-0A7EA4)](mcp-server/README.md)

> The developer-facing skill system for agentic engineering.
>
> LeeWay Agent Skills gives developers, AI engineers, platform teams, and product builders a practical way to turn LLM capability into an operating layer: reusable skill modules, callable MCP tools, workflow orchestration, governance automation, and proof-backed integration assets.

## Why This Project Exists

Most AI tooling stops at prompting. LeeWay Agent Skills is built for teams that need more than a clever demo. It packages structured execution knowledge, workflow composition, MCP delivery, and compliance controls into one repository so agentic systems can be deployed with more consistency, more speed, and less operational guesswork.

If you are building internal copilots, engineering assistants, AI-enabled products, platform tooling, or multi-agent systems, this project is designed to help you move from experimentation to repeatable delivery.

## What You Get

| Area | What it delivers |
| --- | --- |
| Skill Library | 51 installed skill modules across 27 categories for engineering, QA, AI, security, architecture, workflow composition, and more |
| MCP Runtime | 44 active MCP-exposed tools today through the packaged skills registry |
| Workflow Layer | 50+ documented workflow patterns and acquisition plans for orchestration at scale |
| Standards and Governance | Leeway Standards integration for headers, compliance scanning, remediation, and operational guardrails |
| NPM Distribution | Installable package and CLI surface via `@leeway/agent-skills` |
| Integration Proof | Badge bundle generator to visibly prove another application is powered by LeeWay Agent Skills |

## Built For

- Developers building faster with structured AI capabilities instead of ad hoc prompting
- Engineering organizations that want reusable agent skills with governance built in
- AI product teams shipping assistants, copilots, internal platforms, or MCP servers
- Agencies, consultants, and platform teams who need proof-backed AI integration assets
- Multi-agent and workflow builders who need a growing skill and orchestration layer

## Product Positioning

LeeWay Agent Skills is not just a prompt collection and not just a documentation dump. It is a packaged capability layer for agentic software systems.

It combines:

- A reusable skill library
- A callable MCP tool surface
- Workflow composition strategy
- Governance and compliance automation
- Badge-driven proof of integration
- A distribution model that works through GitHub and npm

That combination makes it useful both as an engineering asset and as a platform story you can deploy, demonstrate, and sell internally or externally.

## Quick Start

### Install From npm

```powershell
npm install @leeway/agent-skills
```

```powershell
leeway-agent-skills info
leeway-agent-skills-mcp
leeway-agent-skills-badge .\public\leeway-proof "My App" mcp-server
```

Compatibility aliases are also included:

```powershell
leeway-skills info
leeway-skills-mcp
```

### Clone The Repository

```powershell
git clone https://github.com/4citeB4U/LeeWay-Agent-Skills.git
cd LeeWay-Agent-Skills
npm --prefix mcp-server install
npm --prefix mcp-server run build
node .\bin\leeway-skills.js info
```

### Run The MCP Server

```powershell
node .\bin\leeway-skills.js mcp
```

### Generate A Proof-Backed Badge Bundle

```powershell
node .\bin\leeway-skills.js badge .\public\leeway-proof "My App" mcp-server
```

## How Developers Use It

| Use case | What LeeWay Agent Skills adds |
| --- | --- |
| Internal engineering copilots | Reusable skill modules, clearer execution prompts, and callable tools |
| CI and delivery automation | Workflow composition patterns for diagnosis, recovery, validation, and release handling |
| Code generation and review | Structured expertise across TypeScript, Python, testing, architecture, and security |
| Security and compliance | Standards checks, header enforcement, secret scanning, and remediation helpers |
| Productized AI platforms | Badge proof bundles and npm distribution for integration into other apps |

## Architecture At A Glance

```text
Skills -> Workflows -> MCP Tools -> Agents -> Governance -> Proof
```

```text
LeeWay Agent Skills
  |- skills/                 reusable capability modules
  |- mcp-server/             packaged Model Context Protocol server
  |- LeeWay-Standards/       governance, scanning, and repair tooling
  |- scripts/                automation and registry utilities
  |- documents/              strategy, planning, architecture, and rollout docs
  |- bin/                    package-level developer CLIs
  `- sdk/                    importable runtime helpers and path utilities
```

## Core Capabilities

### Skill Library

The `skills/` tree contains the actual operating knowledge for the system. These skills cover code generation, debugging, testing, infrastructure, AI/ML, architecture, security, research, workflow composition, and more.

### MCP Server

The packaged MCP server exposes the active skill registry as callable tools so LLMs and agent frameworks can interact with the system as runtime capabilities instead of static reference text.

Start here: [mcp-server/README.md](mcp-server/README.md)

### Workflow Strategy

LeeWay Agent Skills includes workflow planning and orchestration strategy for higher-order execution, including pre-composed bundles for CI recovery, reporting, coordination, analysis, and agent collaboration.

Start here: [documents/LEEWAY_WORKFLOWS_STRATEGIC_PLAN.md](documents/LEEWAY_WORKFLOWS_STRATEGIC_PLAN.md)

### Governance And Standards

The project integrates Leeway Standards so teams can add headers, scan compliance posture, and improve consistency across files, agents, and automation pipelines.

Start here: [documents/LEEWAY_STANDARDS_COMPLIANCE.md](documents/LEEWAY_STANDARDS_COMPLIANCE.md)

### Badge And Proof Integration

If another application uses LeeWay Agent Skills, the badge tooling can generate visible proof files and embeddable assets so usage is not hidden or hand-wavy.

Start here: [documents/LEEWAY_BADGE_INTEGRATION.md](documents/LEEWAY_BADGE_INTEGRATION.md)

## Repository Guide

| Path | Purpose |
| --- | --- |
| `README.md` | Project overview, positioning, and developer onboarding |
| `package.json` | Root npm package for `@leeway/agent-skills` |
| `skills/` | Installed skill library |
| `mcp-server/` | MCP runtime source and packaged build output |
| `LeeWay-Standards/` | Governance toolkit and CLI |
| `scripts/` | Registry, compliance, bootstrap, and workflow tooling |
| `documents/` | Strategic, technical, and operational documentation |
| `sdk/` | Importable helpers for packaged consumers |
| `bin/` | CLI entrypoints for package users |

## Documentation Map

- [NPM SDK Guide](documents/LEEWAY_NPM_SDK.md)
- [MCP Architecture](documents/MCP_ARCHITECTURE.md)
- [Agent Lee Integration](documents/AGENT_LEE_INTEGRATION.md)
- [Leeway Standards Compliance](documents/LEEWAY_STANDARDS_COMPLIANCE.md)
- [Workflow Strategic Plan](documents/LEEWAY_WORKFLOWS_STRATEGIC_PLAN.md)
- [Skill Acquisition Executive Summary](documents/SKILL_ACQUISITION_EXECUTIVE_SUMMARY.md)

## Current Status

| Signal | Status |
| --- | --- |
| Repository path | `C:\Tools\LeeWay-AgentSkills` |
| Package name | `@leeway/agent-skills` |
| Installed skill modules | 51 |
| Installed categories | 27 |
| Active MCP tools in registry | 44 |
| Workflow roadmap | 50+ documented patterns |
| Expansion roadmap | 250+ target skill acquisition plan |

## Roadmap

- Sync the active registry to fully reflect all installed skills
- Publish and stabilize the npm package lifecycle
- Expand toward the 250+ skill acquisition roadmap
- Add more production-ready workflow bundles and integration examples
- Strengthen productized deployment stories for internal AI platforms and external SaaS products

## Why It Matters For Engineering Leaders

LeeWay Agent Skills gives technical teams a cleaner answer to a hard problem: how do you make AI behavior more reusable, inspectable, composable, and governable?

This repository answers that with a system developers can actually adopt:

- installable
- inspectable
- documentable
- extensible
- compatible with MCP
- aligned with governance

That makes it easier to turn AI from a fragile experiment into an engineering capability.

## Contributing

Contributions should preserve the structure of the skill system, keep non-README markdown inside `documents/`, and maintain compatibility with the Leeway Standards governance model.

## License

MIT. See [LICENSE](LICENSE).
