# Leeway Standards Integration Guide

**Leeway Skills is now a Leeway-governed application** with continuous compliance monitoring.

---

## 🚀 Quick Start – Leeway Integration

### 1. Initialize Leeway Monitoring (First Time)

```powershell
# Run the bootstrap script to initialize Leeway
node scripts/init-leeway.js

# Output will show:
# ✓ Leeway configuration loaded
# ✓ Skills directory scanned
# ✓ Compliance monitoring active
```

### 2. Run Compliance Audit

```powershell
# Check current compliance score
node scripts/leeway-agents/compliance-monitor.js

# Returns:
# - Compliance Score (0-100)
# - Per-skill validation results
# - Policy violations (if any)
# - Remediation recommendations
```

### 3. Fix Any Compliance Issues

```powershell
# Auto-inject Leeway headers to all skills (validate first)
$env:DRY_RUN = 'true'
node scripts/leeway-agents/header-injector.js

# If happy with changes, apply them:
node scripts/leeway-agents/header-injector.js

# Output shows which skills were updated
```

### 4. Verify Compliance (Optional)

```powershell
# Run full audit again to confirm
node scripts/leeway-agents/compliance-monitor.js

# Should see Compliance Score >= 85
```

---

## 🔧 Configuration

### .leeway/config.json

Controls all Leeway compliance behavior:

```json
{
  "version": "2.0.0",
  "compliance": {
    "minimumScore": 85,
    "blockOnFail": false,
    "enforcedPolicies": [
      "NO_SECRETS_IN_CODE",
      "HEADERS_REQUIRED",
      "TAGS_REQUIRED",
      "NO_CIRCULAR_DEPS"
    ]
  },
  "agents": {
    "compliance-monitor": {
      "enabled": true,
      "interval": 3600000
    },
    "skill-validator": {
      "enabled": true,
      "checkHeaders": true,
      "checkTags": true
    }
  }
}
```

**Key Settings**:

- `minimumScore`: Target compliance (default: 85/100)
- `blockOnFail`: Stop on violations (default: false = warn only)
- `interval`: Monitoring frequency in ms (default: 1 hour)

---

## 📝 Adding New Skills with Leeway Compliance

### Manual Process

1. **Create skill directory**:

   ```
   skills/{category}/{skill-name}/
   └── SKILL.md
   ```

2. **Add Leeway header to SKILL.md**:

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
   WHAT = Brief description
   WHY = Why this matters
   WHO = Creator/maintainer
   WHERE = skills/{category}/{skill-name}/SKILL.md
   WHEN = 2026
   HOW = How it works

   AGENTS:
   ASSESS
   AUDIT

   LICENSE:
   MIT
   \*/

   # Your Skill Name

   ...
   ```

3. **Verify compliance**:
   ```powershell
   node scripts/leeway-agents/compliance-monitor.js
   ```

### Automated Process

Use the header injector to add headers to all new skills at once:

```powershell
# Dry run (preview changes)
$env:DRY_RUN = 'true'
node scripts/leeway-agents/header-injector.js

# Apply changes
node scripts/leeway-agents/header-injector.js
```

---

## 🎨 Leeway Header Reference

### REGION Mapping (Leeway Skills)

```
AI.AGENT.AUTONOMY          → Agent autonomy & self-optimization
AI.AGENT.ORCHESTRATION     → Multi-agent coordination
AI.AGENT.PATTERNS          → Agent design patterns
AI.OPTIMIZATION            → Performance & self-profiling
AI.QA                      → Quality assurance & validation
AI.WORKFLOW                → Workflow composition & orchestration
AI.TOOLS                   → Tool integration & creation
AI.RAG                     → Knowledge retrieval & synthesis
AI.PROMPTS                 → Prompt engineering & optimization
DEV.CODEGEN                → Code generation
DEV.ANALYSIS               → Code analysis & refactoring
DEV.QA                     → Testing & quality assurance
DEV.SECURITY               → Security & vulnerability handling
DEV.DEVOPS                 → DevOps & infrastructure
```

### COLOR_ONION_HEX (Neon/Fluo Pairs)

```
Agent autonomy:    NEON=#39FF14 FLUO=#0DFF94 (Green)
Orchestration:     NEON=#FF00FF FLUO=#FF1493 (Magenta)
Patterns:          NEON=#00FFFF FLUO=#00CED1 (Cyan)
Optimization:      NEON=#FFD700 FLUO=#FFA500 (Gold)
QA:                NEON=#32CD32 FLUO=#00FF00 (Lime)
Workflow:          NEON=#FF6347 FLUO=#FF7F50 (Orange-Red)
Tools:             NEON=#9370DB FLUO=#9932CC (Purple)
RAG:               NEON=#20B2AA FLUO=#23D8D8 (Teal)
Prompts:           NEON=#FF69B4 FLUO=#FFB6C1 (Pink)
```

### Valid ICON_ASCII Glyphs

```
family=lucide (all Leeway Skills)

Common glyphs:
glyph=bot           → Agent
glyph=zap           → Energy/executability
glyph=check-circle  → Validation
glyph=settings      → Configuration
glyph=book-open     → Documentation
glyph=code          → Code skills
glyph=shield        → Security
glyph=database      → Data/Storage
glyph=brain         → Intelligence/Learning
glyph=workflow      → Orchestration
```

---

## 🔐 Compliance Policies

### Enforced (Block)

| Policy                 | Detection                              | Fix                   |
| ---------------------- | -------------------------------------- | --------------------- |
| **NO_SECRETS_IN_CODE** | `password`, `secret`, `apikey`, tokens | Use env vars          |
| **HEADERS_REQUIRED**   | Missing LEEWAY HEADER block            | Run header-injector   |
| **TAGS_REQUIRED**      | Missing REGION or TAG                  | Add to header         |
| **NO_CIRCULAR_DEPS**   | Circular skill imports                 | Refactor dependencies |

### Warnings (Don't Block)

| Policy                     | Check                | Guidance         |
| -------------------------- | -------------------- | ---------------- |
| **NAMING_CONVENTIONS**     | Skills in kebab-case | Rename if needed |
| **DOCUMENTATION_COVERAGE** | Min 80% doc coverage | Add descriptions |

---

## 📊 Monitoring & Reporting

### Automatic Monitoring

Compliance is monitored continuously:

- **Hourly**: `ComplianceMonitor` scans all skills
- **Per-skill**: `SkillValidator` on updates
- **Weekly**: `AutonomyAuditor` checks agent patterns
- **On-demand**: Run any agent manually

### Reports Location

```
.leeway/
├── reports/
│   ├── audit-{timestamp}.json
│   ├── compliance-{timestamp}.json
│   └── metrics-{timestamp}.json
├── metrics/
│   └── compliance-score-history.json
└── config.json
```

### Reading Reports

**Compliance Report Format**:

```json
{
  "timestamp": "2026-03-15T12:00:00Z",
  "status": "COMPLIANT",
  "score": 92,
  "summary": {
    "totalSkills": 45,
    "compliant": 44,
    "nonCompliant": 1,
    "warnings": 0
  },
  "failedSkills": [...],
  "recommendations": [...]
}
```

---

## 🛠️ Common Tasks

### Check if Skill is Compliant

```powershell
node scripts/leeway-agents/compliance-monitor.js | grep "skill-name"

# Look for skill in "passed" section (good)
# or "failed" section (needs fixing)
```

### Add Header to Single Skill

```powershell
# Manually edit the SKILL.md file, or
# Use header-injector which does all at once
node scripts/leeway-agents/header-injector.js
```

### Update Leeway Configuration

```powershell
# Edit .leeway/config.json
# Then validate:
node scripts/init-leeway.js
```

### Schedule Automatic Monitoring

#### Windows Task Scheduler

```powershell
# Create scheduled task for hourly compliance checks
$trigger = New-ScheduledTaskTrigger -RepetitionInterval (New-TimeSpan -Hours 1) -At "00:00"
$action = New-ScheduledTaskAction -Execute "node" -Argument "scripts/leeway-agents/compliance-monitor.js" -WorkingDirectory "c:\Tools\Leeway-Skills"
  Register-ScheduledTask -TaskName "Leeway-Skills-Compliance" -Trigger $trigger -Action $action
```

#### Cron (Linux/Mac)

```bash
# Run compliance check hourly
0 * * * * cd /path/to/Leeway-Skills && node scripts/leeway-agents/compliance-monitor.js
```

---

## 🚨 Troubleshooting

### "Compliance Score Below 85"

```powershell
# See what's failing
node scripts/leeway-agents/compliance-monitor.js

# Usually: missing headers
# Fix:
node scripts/leeway-agents/header-injector.js

# Verify
node scripts/leeway-agents/compliance-monitor.js
```

### "Cannot Find .leeway/config.json"

```powershell
# Re-initialize:
node scripts/init-leeway.js

# This creates .leeway/config.json
```

### "Secret Detected in SKILL.md"

```powershell
# Find the issue:
grep -i "password\|secret\|apikey\|token" skills/**/*.md

# Remove hardcoded secrets
# Use environment variables instead
# Example: ${env.API_KEY} or process.env.API_KEY
```

### "Circular Dependency Warning"

- Check if Skill A imports Skill B and Skill B imports Skill A
- Refactor to remove the circle
- Verify with: `compliance-monitor.js`

---

## 📚 Full Documentation

For more details, see:

- `documents/LEEWAY_STANDARDS_COMPLIANCE.md` — Complete compliance guide
- `.leeway/config.json` — All configuration options
- `LeeWay-Standards/README.md` — Leeway framework documentation

---

## ✅ Compliance Checklist

Before deploying changes:

- [ ] Run `init-leeway.js` to verify setup
- [ ] Run `compliance-monitor.js` to check score
- [ ] All SKILL.md files have Leeway headers
- [ ] Score is 85+ (or blockOnFail = false)
- [ ] No secrets detected
- [ ] No circular dependencies
- [ ] Tags follow REGION.TAG format
- [ ] Documentation is complete

---

## 📞 Need Help?

1. **Check compliance report**: `.leeway/reports/`
2. **Run diagnostic**: `node scripts/init-leeway.js`
3. **Fix headers**: `node scripts/leeway-agents/header-injector.js`
4. **Read docs**: `documents/LEEWAY_STANDARDS_COMPLIANCE.md`

**Status**: ✅ Leeway Standards integrated and monitoring

