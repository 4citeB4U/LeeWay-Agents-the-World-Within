# LeeWay Agent Skills

Use LeeWay standards by default for any code, script, config, or skill changes in this repo.

## Default Rules

- Treat `documents/LEEWAY_STANDARDS_COMPLIANCE.md` and `LeeWay-Standards/README.md` as the authoritative standards references.
- Preserve existing LeeWay headers and add compatible headers to new tracked `.js`, `.ts`, `.py`, and `SKILL.md` files when the repo policy requires them.
- Keep `REGION` and `TAG` metadata valid and avoid hardcoded secrets in code.
- Prefer the closest domain skill under `skills/` when the task clearly matches a local Leeway skill.
- After meaningful standards-related changes, run `node scripts/verify-leeway-setup.js`. Use `node scripts/leeway-agents/header-injector.js` only when headers need repair or insertion.

## Codex Skills

- Export native Codex skills with `node scripts/export-codex-skills.js`.
- Install them into the active Codex profile with `node scripts/export-codex-skills.js --install --overwrite`.
- Use `leeway-agent-skills-platform` when the task is about the whole application instead of one domain skill.
- Use the installed `leeway-standards` skill alongside the domain skill when editing code in Leeway-governed repos.
