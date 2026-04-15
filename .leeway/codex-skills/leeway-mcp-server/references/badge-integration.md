# Leeway Skills Badge Integration

## Purpose

Use the existing `agentbage.png.png` image as a visible trust mark that another application is actively using Leeway Skills.

The badge bundle does three things:

1. Copies the badge image into the target application
2. Generates a proof manifest from `scripts/skills-registry.json`
3. Generates embeddable HTML, CSS, and JavaScript for rendering the badge inside another app

## Generated Files

Running the installer creates these files in your target folder:

- `assets/leeway-skills-agent-badge.png`
- `leeway-skills-proof.json`
- `leeway-skills-badge.js`
- `leeway-skills-badge.css`
- `leeway-skills-badge.html`

## Install Into Another App

From [mcp-server](c:/Tools/AIskills/mcp-server):

```powershell
npm run build
node dist/install-badge-proof.js --target ..\some-app\public\leeway-proof --app-name "My App" --integration-method mcp-server
```

You can also use positional arguments if `npm run` strips flags in PowerShell:

```powershell
npm run badge:install -- ..\some-app\public\leeway-proof "My App" mcp-server
```

## Embed In The App

Drop this where you want the badge rendered:

```html
<link rel="stylesheet" href="/leeway-proof/leeway-skills-badge.css" />
<div
  data-leeway-skills-badge
  data-leeway-proof-url="/leeway-proof/leeway-skills-proof.json"
></div>
<script type="module" src="/leeway-proof/leeway-skills-badge.js"></script>
```

## What The Proof Shows

The generated `leeway-skills-proof.json` records:

- App name
- Integration method
- Active skill count from the registry
- Installed skill count from the local library
- SHA-256 fingerprint of the registry
- SHA-256 fingerprint of the badge image
- Verification status and warnings

This means the badge is not just decorative. It is backed by a manifest generated from the actual Leeway Skills assets in this workspace.

## Current Demo Output

A verified demo bundle has already been generated at:

- [badge-proof-demo](c:/Tools/AIskills/.leeway/badge-proof-demo)

The current proof shows:

- `44` active skills exposed through the registry
- `51` installed skills present in the local library

That mismatch is reported in the proof manifest so the badge stays honest about what the connected app is actively using.
