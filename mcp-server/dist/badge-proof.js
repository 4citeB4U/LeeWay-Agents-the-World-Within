#!/usr/bin/env node
/*
LEEWAY HEADER — DO NOT REMOVE

REGION: LEEWAY.SKILLS.BADGE
TAG: LEEWAY.SKILLS.BADGE.PROOF_BUNDLE

COLOR_ONION_HEX:
NEON=#39FF14
FLUO=#0DFF94
PASTEL=#C7FFD8

ICON_ASCII:
family=lucide
glyph=badge-check

5WH:
WHAT = Leeway Skills badge proof bundle generator
WHY = Allows other applications to visibly prove they are integrated with Leeway Skills
WHO = Leeway Industries (By Leonard Jerome Lee)
WHERE = mcp-server/src/badge-proof.ts
WHEN = 2026
HOW = Reads the Leeway registry, scans installed skills, copies the badge asset, and emits an embeddable proof bundle

AGENTS:
EXECUTE
INTROSPECT

LICENSE:
MIT
*/
import { createHash } from "crypto";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PACKAGE_ROOT = path.resolve(__dirname, "..");
const WORKSPACE_ROOT = path.resolve(PACKAGE_ROOT, "..");
const DEFAULT_REGISTRY_PATH = path.join(WORKSPACE_ROOT, "scripts", "skills-registry.json");
const DEFAULT_SKILLS_ROOT = path.join(WORKSPACE_ROOT, "skills");
const DEFAULT_BADGE_SOURCE_PATH = path.join(WORKSPACE_ROOT, "agentbage.png.png");
const DEFAULT_BADGE_FILE_NAME = "leeway-skills-agent-badge.png";
const DEFAULT_PROOF_FILE_NAME = "leeway-skills-proof.json";
const DEFAULT_SCRIPT_FILE_NAME = "leeway-skills-badge.js";
const DEFAULT_STYLE_FILE_NAME = "leeway-skills-badge.css";
const DEFAULT_SNIPPET_FILE_NAME = "leeway-skills-badge.html";
const DEFAULT_ASSET_DIR_NAME = "assets";
export async function createLeewaySkillsProof(options = {}) {
    const registryPath = path.resolve(options.registryPath ?? DEFAULT_REGISTRY_PATH);
    const skillsRoot = path.resolve(options.skillsRoot ?? DEFAULT_SKILLS_ROOT);
    const badgeSourcePath = path.resolve(options.badgeSourcePath ?? DEFAULT_BADGE_SOURCE_PATH);
    const [registryText, badgeBuffer, installedStats, packageVersion] = await Promise.all([
        fs.readFile(registryPath, "utf-8"),
        fs.readFile(badgeSourcePath),
        scanInstalledSkills(skillsRoot),
        loadPackageVersion(),
    ]);
    const registry = JSON.parse(registryText);
    const activeSkills = registry.totalSkills ?? 0;
    const activeCategories = registry.totalCategories ?? registry.categories?.length ?? 0;
    const registrySha256 = hashContent(registryText);
    const badgeSha256 = hashContent(badgeBuffer);
    const integrationMethod = options.integrationMethod ?? "mcp-server";
    const appName = options.appName ?? "Connected Application";
    const badgeLabel = options.badgeLabel ?? "Powered by Leeway Skills";
    const syncStatus = installedStats.installedSkills === activeSkills &&
        installedStats.installedCategories === activeCategories
        ? "aligned"
        : "partial";
    const warnings = syncStatus === "aligned"
        ? []
        : [
            `Registry exposes ${activeSkills} skills across ${activeCategories} categories while ${installedStats.installedSkills} skills across ${installedStats.installedCategories} categories are installed locally.`,
        ];
    return {
        proofVersion: "1.0.0",
        generatedAt: new Date().toISOString(),
        app: {
            name: appName,
            version: options.appVersion,
            url: options.appUrl,
            integrationMethod,
        },
        leewaySkills: {
            registryVersion: registry.version ?? "unknown",
            governanceFramework: registry.metadata?.governance?.framework ?? "Leeway Standards",
            activeSkills,
            activeCategories,
            installedSkills: installedStats.installedSkills,
            installedCategories: installedStats.installedCategories,
            registryPath,
            registrySha256,
            mcpServerVersion: packageVersion,
            syncStatus,
        },
        badge: {
            label: badgeLabel,
            alt: `${badgeLabel} badge`,
            sourceFile: path.basename(badgeSourcePath),
            assetPath: options.badgeAssetPath ??
                `./${DEFAULT_ASSET_DIR_NAME}/${DEFAULT_BADGE_FILE_NAME}`,
            badgeSha256,
        },
        verification: {
            status: "verified",
            statement: `${appName} is verified as using Leeway Skills through ${integrationMethod}.`,
            warnings,
        },
    };
}
export async function installLeewaySkillsBadgeBundle(options) {
    const targetDir = path.resolve(options.targetDir);
    const assetDirName = options.assetDirName ?? DEFAULT_ASSET_DIR_NAME;
    const badgeFileName = options.badgeFileName ?? DEFAULT_BADGE_FILE_NAME;
    const assetsDir = path.join(targetDir, assetDirName);
    const badgeTargetPath = path.join(assetsDir, badgeFileName);
    const proofPublicPath = `./${DEFAULT_PROOF_FILE_NAME}`;
    const badgeAssetPath = `./${toPosixPath(assetDirName)}/${badgeFileName}`;
    await fs.mkdir(assetsDir, { recursive: true });
    await fs.copyFile(path.resolve(options.badgeSourcePath ?? DEFAULT_BADGE_SOURCE_PATH), badgeTargetPath);
    const proof = await createLeewaySkillsProof({
        ...options,
        badgeAssetPath,
    });
    const proofPath = path.join(targetDir, DEFAULT_PROOF_FILE_NAME);
    const scriptPath = path.join(targetDir, DEFAULT_SCRIPT_FILE_NAME);
    const stylePath = path.join(targetDir, DEFAULT_STYLE_FILE_NAME);
    const snippetPath = path.join(targetDir, DEFAULT_SNIPPET_FILE_NAME);
    await Promise.all([
        fs.writeFile(proofPath, JSON.stringify(proof, null, 2), "utf-8"),
        fs.writeFile(scriptPath, createBadgeRuntimeScript(), "utf-8"),
        fs.writeFile(stylePath, createBadgeStyles(), "utf-8"),
        fs.writeFile(snippetPath, createBadgeSnippet({
            proofPublicPath,
            scriptFileName: DEFAULT_SCRIPT_FILE_NAME,
            styleFileName: DEFAULT_STYLE_FILE_NAME,
        }), "utf-8"),
    ]);
    return {
        targetDir,
        files: {
            proof: proofPath,
            script: scriptPath,
            style: stylePath,
            snippet: snippetPath,
            badge: badgeTargetPath,
        },
        proof,
    };
}
async function scanInstalledSkills(skillsRoot) {
    const categoryEntries = await fs.readdir(skillsRoot, { withFileTypes: true });
    let installedSkills = 0;
    let installedCategories = 0;
    for (const category of categoryEntries) {
        if (!category.isDirectory()) {
            continue;
        }
        installedCategories += 1;
        const categoryPath = path.join(skillsRoot, category.name);
        const skillEntries = await fs.readdir(categoryPath, { withFileTypes: true });
        for (const skill of skillEntries) {
            if (!skill.isDirectory()) {
                continue;
            }
            const skillMdPath = path.join(categoryPath, skill.name, "SKILL.md");
            try {
                await fs.access(skillMdPath);
                installedSkills += 1;
            }
            catch {
                // Skip directories that are not actual skills.
            }
        }
    }
    return { installedSkills, installedCategories };
}
async function loadPackageVersion() {
    const packageJsonPath = path.join(PACKAGE_ROOT, "package.json");
    const content = await fs.readFile(packageJsonPath, "utf-8");
    const pkg = JSON.parse(content);
    return pkg.version ?? "unknown";
}
function hashContent(content) {
    return createHash("sha256").update(content).digest("hex");
}
function toPosixPath(value) {
    return value.replace(/\\/g, "/").replace(/^\.\/+/, "");
}
function createBadgeStyles() {
    return `:root {
  --leeway-badge-bg: linear-gradient(135deg, #07111b 0%, #0f2538 55%, #133451 100%);
  --leeway-badge-border: rgba(13, 255, 148, 0.35);
  --leeway-badge-text: #f5fbff;
  --leeway-badge-muted: #9dc4d1;
  --leeway-badge-highlight: #39ff14;
}

.leeway-skills-badge {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  min-width: 280px;
  max-width: 560px;
  padding: 12px 16px;
  border: 1px solid var(--leeway-badge-border);
  border-radius: 18px;
  background: var(--leeway-badge-bg);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.28);
  color: var(--leeway-badge-text);
  font-family: "Segoe UI", "Helvetica Neue", Arial, sans-serif;
}

.leeway-skills-badge__image {
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 14px;
  flex: 0 0 auto;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.25);
}

.leeway-skills-badge__content {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

.leeway-skills-badge__title {
  font-size: 0.98rem;
  font-weight: 700;
  letter-spacing: 0.01em;
}

.leeway-skills-badge__meta,
.leeway-skills-badge__proof,
.leeway-skills-badge__warning {
  font-size: 0.82rem;
  line-height: 1.35;
}

.leeway-skills-badge__meta {
  color: var(--leeway-badge-muted);
}

.leeway-skills-badge__proof {
  color: var(--leeway-badge-highlight);
}

.leeway-skills-badge__warning {
  color: #ffdca8;
}
`;
}
function createBadgeSnippet(options) {
    return `<link rel="stylesheet" href="./${options.styleFileName}" />
<div data-leeway-skills-badge data-leeway-proof-url="${options.proofPublicPath}"></div>
<script type="module" src="./${options.scriptFileName}"></script>
`;
}
function createBadgeRuntimeScript() {
    return `const containers = document.querySelectorAll("[data-leeway-skills-badge]");

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderBadge(container, proof, proofUrl) {
  const imageUrl = new URL(proof.badge.assetPath, new URL(proofUrl, window.location.href)).toString();
  const activeSummary = proof.leewaySkills.activeSkills + " active skills across " + proof.leewaySkills.activeCategories + " categories";
  const installedSummary = proof.leewaySkills.installedSkills + " installed in the local Leeway library";
  const fingerprint = proof.leewaySkills.registrySha256.slice(0, 12);
  const warning = proof.verification.warnings[0];

  container.dataset.leewayProof = proof.verification.status;
  container.dataset.leewaySkills = String(proof.leewaySkills.activeSkills);

  container.innerHTML = \`
    <div class="leeway-skills-badge" data-sync-status="\${escapeHtml(proof.leewaySkills.syncStatus)}">
      <img class="leeway-skills-badge__image" src="\${escapeHtml(imageUrl)}" alt="\${escapeHtml(proof.badge.alt)}" />
      <div class="leeway-skills-badge__content">
        <div class="leeway-skills-badge__title">\${escapeHtml(proof.badge.label)}</div>
        <div class="leeway-skills-badge__meta">\${escapeHtml(proof.app.name)} uses Leeway Skills through \${escapeHtml(proof.app.integrationMethod)}.</div>
        <div class="leeway-skills-badge__proof">\${escapeHtml(activeSummary)} · \${escapeHtml(installedSummary)} · proof \${escapeHtml(fingerprint)}</div>
        \${warning ? \`<div class="leeway-skills-badge__warning">\${escapeHtml(warning)}</div>\` : ""}
      </div>
    </div>
  \`;
}

async function mountBadge(container) {
  const proofUrl = container.dataset.leewayProofUrl || "./leeway-skills-proof.json";

  try {
    const response = await fetch(proofUrl);
    if (!response.ok) {
      throw new Error("Unable to load Leeway Skills proof file");
    }

    const proof = await response.json();
    if (!proof || proof.verification?.status !== "verified") {
      throw new Error("Leeway Skills proof is missing or not verified");
    }

    renderBadge(container, proof, proofUrl);
  } catch (error) {
    container.dataset.leewayProof = "missing";
    console.error("[Leeway Skills Badge]", error);
  }
}

containers.forEach((container) => {
  void mountBadge(container);
});
`;
}
//# sourceMappingURL=badge-proof.js.map