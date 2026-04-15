# Leeway Agent Skills NPM SDK

## Purpose

The root package now ships the **full Leeway Agent Skills application** as an installable npm SDK.

Package name:

```text
@agentlee5/agent-skills
```

That package includes:

- The packaged skill library in `skills/`
- The workflows and supporting docs in `documents/`
- The governance and compliance scripts in `scripts/`
- The Leeway Standards toolkit in `LeeWay-Standards/`
- The prebuilt MCP server in `mcp-server/dist/`
- The source files for the MCP server in `mcp-server/src/`
- The badge asset `agentbage.png.png`
- The Leeway runtime config in `.leeway/config.json`

## Install

```powershell
npm install @agentlee5/agent-skills
```

## CLI Commands

```powershell
leeway-agent-skills info
leeway-agent-skills paths --json
leeway-agent-skills extract .\leeway-agent-skills-app
leeway-agent-skills-mcp
leeway-agent-skills-badge .\public "My App" mcp-server
leeway-standards doctor
```

## JavaScript Usage

```js
import {
  getPackageSummary,
  getPackagedPaths,
  installLeewaySkillsBadgeBundle,
  startLeewaySkillsMCPServer,
  extractLeewayApplication,
} from "@agentlee5/agent-skills";

const summary = await getPackageSummary();
console.log(summary.activeSkills);

await installLeewaySkillsBadgeBundle({
  targetDir: "./public/leeway",
  appName: "My App",
  integrationMethod: "mcp-server",
});
```

## Notes

- `npm install` now brings down the full packaged application bundle.
- `leeway-agent-skills extract` can materialize that bundle into a standalone directory if you want a writable local copy outside `node_modules`.
- The MCP server and badge tooling are ready immediately after install because the package ships the built `mcp-server/dist/` output.
