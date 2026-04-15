#!/usr/bin/env node

/*
LEEWAY HEADER — DO NOT REMOVE

REGION: LEEWAY.SKILLS.BADGE
TAG: LEEWAY.SKILLS.BADGE.INSTALLER

COLOR_ONION_HEX:
NEON=#39FF14
FLUO=#0DFF94
PASTEL=#C7FFD8

ICON_ASCII:
family=lucide
glyph=package-plus

5WH:
WHAT = CLI installer for the Leeway Skills badge proof bundle
WHY = Makes it easy to drop a verified Leeway Skills badge into another application
WHO = Leeway Industries (By Leonard Jerome Lee)
WHERE = mcp-server/src/install-badge-proof.ts
WHEN = 2026
HOW = Parses CLI arguments, installs the badge bundle, and prints the integration output paths

AGENTS:
EXECUTE

LICENSE:
MIT
*/

import path from "path";
import {
  installLeewaySkillsBadgeBundle,
  type InstallBadgeBundleOptions,
} from "./badge-proof.js";

function getArg(flag: string): string | undefined {
  const index = process.argv.indexOf(flag);
  if (index === -1) {
    return undefined;
  }

  return process.argv[index + 1];
}

function hasFlag(flag: string): boolean {
  return process.argv.includes(flag);
}

function getPositionalArgs(): string[] {
  const rawArgs = process.argv.slice(2);
  const positional: string[] = [];

  for (let index = 0; index < rawArgs.length; index += 1) {
    const arg = rawArgs[index];
    if (arg.startsWith("--")) {
      if (arg !== "--help") {
        index += 1;
      }
      continue;
    }

    positional.push(arg);
  }

  return positional;
}

function printHelp(): void {
  console.log(`Leeway Skills Badge Proof Installer

Usage:
  node dist/install-badge-proof.js --target <dir> [options]

Options:
  --target <dir>             Directory to receive the badge bundle
  --app-name <name>          Application name shown in the badge proof
  --app-version <version>    Application version stored in the proof manifest
  --app-url <url>            Application URL stored in the proof manifest
  --integration-method <id>  Integration method label, default: mcp-server
  --asset-dir <name>         Asset subdirectory name, default: assets
  --badge-file <name>        Output badge filename, default: leeway-skills-agent-badge.png
  --help                     Show this help output
`);
}

async function main(): Promise<void> {
  if (hasFlag("--help")) {
    printHelp();
    return;
  }

  const positionalArgs = getPositionalArgs();
  const targetArg = getArg("--target") ?? positionalArgs[0];
  if (!targetArg) {
    throw new Error("Missing required --target argument");
  }

  const options: InstallBadgeBundleOptions = {
    targetDir: targetArg,
    appName: getArg("--app-name") ?? positionalArgs[1],
    appVersion: getArg("--app-version"),
    appUrl: getArg("--app-url"),
    integrationMethod:
      getArg("--integration-method") ?? positionalArgs[2],
    assetDirName: getArg("--asset-dir"),
    badgeFileName: getArg("--badge-file"),
  };

  const result = await installLeewaySkillsBadgeBundle(options);

  console.log("[Leeway Skills Badge] Bundle installed");
  console.log(`  Target: ${result.targetDir}`);
  console.log(`  Proof: ${result.files.proof}`);
  console.log(`  Script: ${result.files.script}`);
  console.log(`  Style: ${result.files.style}`);
  console.log(`  Snippet: ${result.files.snippet}`);
  console.log(`  Badge: ${result.files.badge}`);
  console.log(
    `  Active Skills: ${result.proof.leewaySkills.activeSkills} | Installed Skills: ${result.proof.leewaySkills.installedSkills}`,
  );
  console.log(
    `  Snippet Preview: ${path.join(result.targetDir, "leeway-skills-badge.html")}`,
  );
}

main().catch((error) => {
  console.error("[Leeway Skills Badge] Fatal error:", error);
  process.exit(1);
});
