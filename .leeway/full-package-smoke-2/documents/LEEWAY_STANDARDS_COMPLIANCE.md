# Leeway Standards Compliance for Leeway Skills

**A Leeway Industries Initiative**  
_By Leonard Jerome Lee_

**Status**: ✅ **ACTIVE COMPLIANCE MONITORING**  
**Latest Audit**: March 15, 2026  
**Compliance Score**: 85+  
**Framework Version**: Leeway SDK 1.0.0

---

## 📋 Overview

Leeway Skills is fully integrated with the **Leeway Standards** compliance and governance framework. All skills, agents, and project files conform to Leeway's requirements for:

- **Mandatory Code Governance** (enforced)
  - No secrets in code
  - Leeway headers on all tracked files
  - Valid tags and regions
  - No circular dependencies

- **Quality Standards** (monitored)
  - Naming conventions
  - Documentation coverage
  - Metadata completeness

---

## 🔍 Leeway Compliance Structure

### Configuration

**Location**: `.leeway/config.json`

Key settings:

- **Minimum Compliance Score**: 85/100
- **Enforced Policies**: NO_SECRETS_IN_CODE, HEADERS_REQUIRED, TAGS_REQUIRED, NO_CIRCULAR_DEPS
- **Root Directory**: `skills/` (all SKILL.md files)
- **Monitoring**: Enabled (continuous)

### Active Compliance Agents

| Agent                 | Purpose                                      | Schedule   | Status       |
| --------------------- | -------------------------------------------- | ---------- | ------------ |
| **ComplianceMonitor** | Scans all skills for Leeway compliance       | Hourly     | ✅ Active    |
| **HeaderInjector**    | Adds/updates Leeway headers                  | On-demand  | ✅ Available |
| **SkillValidator**    | Validates metadata and tags                  | Per-commit | ✅ Active    |
| **AutonomyAuditor**   | Checks agent patterns and memory integration | Weekly     | ✅ Active    |

---

## 🎯 Leeway Header Format

Every SKILL.md file must start with a **Leeway Header**:

```markdown
/\*
LEEWAY HEADER — DO NOT REMOVE

REGION: AI.AGENT.CATEGORY
TAG: AI.AGENT.CATEGORY.SKILL_NAME

COLOR_ONION_HEX:
NEON=#39FF14
FLUO=#0DFF94
PASTEL=#C7FFD8

ICON_ASCII:
family=lucide
glyph=zap

5WH:
WHAT = One-line description
WHY = Why this skill exists
WHO = Who created/maintains it
WHERE = File location
WHEN = Year/version
HOW = How it works in brief

AGENTS:
ASSESS
AUDIT

LICENSE:
MIT
\*/
```

### Header Components Explained

**REGION**: Hierarchical namespace

- Format: `AI.CATEGORY.SUBCATEGORY` or `DEV.CATEGORY`
- Examples: `AI.AGENT.AUTONOMY`, `DEV.CODEGEN`

**TAG**: Unique identifier for this specific skill

- Format: `REGION.SKILL_NAME_UPPERCASE`
- Example: `AI.AGENT.AUTONOMY.FULL_STACK_DELIVERY`

**COLOR_ONION_HEX**: Visual identity in Leeway UI

- NEON: Bright accent color (primary)
- FLUO: Fluorescent accent (secondary)
- PASTEL: Soft background (optional)

**ICON_ASCII**: Lucide icon reference

- `family=lucide` (all Leeway Skills use this)
- `glyph=zap`, `glyph=bot`, `glyph=check-circle`, etc.

**5WH**: Concise documentation

- **WHAT**: What does this do?
- **WHY**: Why does it matter?
- **WHO**: Who made/maintains it?
- **WHERE**: File path
- **WHEN**: Year/season
- **HOW**: Implementation approach

**AGENTS**: Which Leeway agents govern this

- `ASSESS` (validates correctness)
- `AUDIT` (checks compliance)
- `ENFORCE` (prevents violations)

---

## 📊 Compliance Policies

### Enforced (Violations → Non-Compliant)

#### NO_SECRETS_IN_CODE

**Blocks**: Passwords, API keys, private keys, tokens hardcoded in files

Detection patterns:

```
password\s*[=:]
secret\s*[=:]
apikey|api_key|private_key\s*[=:]
token\s*[=:]
-----BEGIN ... -----END (certificate blocks)
```

**Fix**: Use environment variables, config files, or secure vaults.

#### HEADERS_REQUIRED

**Blocks**: SKILL.md files without valid Leeway headers

**Fix**: Run `node scripts/leeway-agents/header-injector.js` to auto-inject

#### TAGS_REQUIRED

**Blocks**: Files without REGION and TAG in Leeway header

**Fix**: Ensure header includes both REGION and TAG fields

#### NO_CIRCULAR_DEPS

**Blocks**: Circular dependencies between skills

**Fix**: Refactor skill dependencies to form a DAG

---

### Warnings (Does Not Block)

#### NAMING_CONVENTIONS

- Skills: kebab-case (e.g., `full-stack-delivery`)
- Categories: kebab-case (e.g., `agent-autonomy`)
- Regions: UPPER_SNAKE_CASE (e.g., `AI_AGENT_AUTONOMY`)

#### DOCUMENTATION_COVERAGE

- Minimum 80% documentation coverage expected
- All capabilities must be described
- Error paths should be documented

---

## ✅ Running Compliance Checks

### Check Compliance Score

```powershell
# Run compliance monitor (detailed report)
node scripts/leeway-agents/compliance-monitor.js

# Output includes:
# - Compliance Score (0-100)
# - Per-skill validation results
# - Policy violations
# - Remediation recommendations
```

### Auto-Inject Headers (Dry Run)

```powershell
# Preview what would be changed
$env:DRY_RUN = 'true'
node scripts/leeway-agents/header-injector.js

# Output shows which skills would get headers
```

### Auto-Inject Headers (Apply)

```powershell
# Actually inject headers into SKILL.md files
node scripts/leeway-agents/header-injector.js

# Output shows which skills were updated
```

### Continuous Monitoring

Compliance is monitored automatically:

- **Hourly**: ComplianceMonitor scans all skills
- **Per-skill-update**: SkillValidator checks metadata
- **Weekly**: AutonomyAuditor validates agent patterns
- **Reports**: Saved to `.leeway/reports/`

---

## 🗂️ Category-to-REGION Mapping

Leeway Skills categories map to Leeway REGION hierarchy:

| Category             | REGION                 | Neon    | Fluo    |
| -------------------- | ---------------------- | ------- | ------- |
| agent-autonomy       | AI.AGENT.AUTONOMY      | #39FF14 | #0DFF94 |
| agent-orchestration  | AI.AGENT.ORCHESTRATION | #FF00FF | #FF1493 |
| agent-patterns       | AI.AGENT.PATTERNS      | #00FFFF | #00CED1 |
| self-optimization    | AI.OPTIMIZATION        | #FFD700 | #FFA500 |
| quality-assurance    | AI.QA                  | #32CD32 | #00FF00 |
| workflow-composition | AI.WORKFLOW            | #FF6347 | #FF7F50 |
| tool-integration     | AI.TOOLS               | #9370DB | #9932CC |
| rag-knowledge        | AI.RAG                 | #20B2AA | #23D8D8 |
| prompt-optimization  | AI.PROMPTS             | #FF69B4 | #FFB6C1 |
| code-generation      | DEV.CODEGEN            | #39FF14 | #0DFF94 |
| code-analysis        | DEV.ANALYSIS           | #FF1493 | #FF69B4 |
| testing              | DEV.QA                 | #00FF00 | #32CD32 |
| security             | DEV.SECURITY           | #FF0000 | #DC143C |
| devops               | DEV.DEVOPS             | #FF8C00 | #FFA500 |

---

## 🚀 Maintaining Compliance

### When Adding a New Skill

1. **Create skill directory** with SKILL.md
2. **Add Leeway header** (use header-injector or manual)
3. **Map category** to correct REGION
4. **Add metadata**: name, version, tags, description
5. **Run compliance check**: `node scripts/leeway-agents/compliance-monitor.js`
6. **Verify** score is 85+

### When Updating Skills

1. **Keep header intact** (required by Leeway)
2. **Update TAG** if renaming skill
3. **Update year** in WHEN field
4. **Run validation** before committing
5. **Check** no secrets were accidentally added

### When Working with Agent Patterns

All autonomy agents must:

- Implement `describe()` method
- Return structured `{ agent, status, timestamp, durationMs, result }`
- Respect rootDir and options
- Never throw silently (always return error status)
- Update compliance logs

---

## 📈 Compliance Metrics

Tracked metrics (in `.leeway/metrics/`):

- **Compliance Score Over Time**: trend graph
- **Policy Violations**: by type and severity
- **Header Coverage**: % of skills with valid headers
- **Documentation Coverage**: % of capabilities documented
- **Agent Execution**: timing and success rates
- **Audit Trail**: all compliance events

---

## 🔗 Leeway Standards Reference

- **Leeway SDK Documentation**: [docs.leeway.io](https://docs.leeway.io)
- **Header Specification**: `.leeway/config.json` (this project)
- **Example Agent**: `LeeWay-Standards/examples/example-agent.js`
- **Policy Definitions**: `.leeway/config.json` > `policies.*`

---

## 📝 Compliance Checklist

Before marking a skill as "complete":

- [ ] SKILL.md has valid Leeway header
- [ ] REGION and TAG are correct for category
- [ ] No secrets in code or examples
- [ ] All capabilities have descriptions
- [ ] Use cases and techniques documented
- [ ] Error handling explained
- [ ] No circular dependencies
- [ ] Naming follows conventions
- [ ] ComplianceMonitor reports GREEN
- [ ] No warnings flagged

---

## 🛠️ Troubleshooting

### "Compliance Score Too Low"

→ Run `node scripts/leeway-agents/header-injector.js` to add missing headers

### "Missing SKILL.md in Directory"

→ Check skill path matches: `skills/{category}/{skillname}/SKILL.md`

### "Secrets Detected"

→ Review content for hardcoded passwords/keys; move to environment variables

### "No TAG or REGION in Header"

→ Ensure 5WH section exists in header comment block

### "Circular Dependency Warning"

→ Check skill requirements; refactor to remove circular imports

---

## 📞 Support

For compliance issues:

1. Check `.leeway/reports/` for last audit
2. Run `compliance-monitor.js` for detailed findings
3. Review this documentation for remediation
4. Use `header-injector.js` for automated fixes

**Status Dashboard**: All compliance agents running ✅

Last Updated: March 15, 2026

