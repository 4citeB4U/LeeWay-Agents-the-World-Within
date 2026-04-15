/*
LEEWAY HEADER — DO NOT REMOVE

REGION: CORE
TAG: CORE.SDK.LEEWAY_SKILLS_BADGE.MAIN

COLOR_ONION_HEX:
NEON=#39FF14
FLUO=#0DFF94
PASTEL=#C7FFD8

ICON_ASCII:
family=lucide
glyph=file

5WH:
WHAT = leeway-skills-badge module
WHY = Part of CORE region
WHO = LEEWAY Align Agent
WHERE = .leeway\badge-proof-demo\leeway-skills-badge.js
WHEN = 2026
HOW = Auto-aligned by LEEWAY align-agent

AGENTS:
ASSESS
ALIGN
AUDIT

LICENSE:
MIT
*/

const containers = document.querySelectorAll("[data-leeway-skills-badge]");

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

  container.innerHTML = `
    <div class="leeway-skills-badge" data-sync-status="${escapeHtml(proof.leewaySkills.syncStatus)}">
      <img class="leeway-skills-badge__image" src="${escapeHtml(imageUrl)}" alt="${escapeHtml(proof.badge.alt)}" />
      <div class="leeway-skills-badge__content">
        <div class="leeway-skills-badge__title">${escapeHtml(proof.badge.label)}</div>
        <div class="leeway-skills-badge__meta">${escapeHtml(proof.app.name)} uses Leeway Skills through ${escapeHtml(proof.app.integrationMethod)}.</div>
        <div class="leeway-skills-badge__proof">${escapeHtml(activeSummary)} · ${escapeHtml(installedSummary)} · proof ${escapeHtml(fingerprint)}</div>
        ${warning ? `<div class="leeway-skills-badge__warning">${escapeHtml(warning)}</div>` : ""}
      </div>
    </div>
  `;
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
