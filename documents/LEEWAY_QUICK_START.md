# 🚀 Leeway Standards Quick Start Checklist

**Leeway Skills Leeway Compliance Setup & Operational Guide**

---

## ✅ Phase 1: Verify Installation (5 minutes)

- [ ] Navigate to Leeway Skills root directory
- [ ] Run verification script:
  ```powershell
  node scripts/verify-leeway-setup.js
  ```
- [ ] Check all items say "✅ passed"
- [ ] Note any issues if in "Issues to Address"

**Expected Result**: "Status: READY FOR DEPLOYMENT"

---

## ✅ Phase 2: Initialize Leeway (2 minutes)

- [ ] Run initialization:
  ```powershell
  node scripts/init-leeway.js
  ```
- [ ] Verify output shows:
  - ✓ Leeway configuration loaded
  - ✓ Skills directory scanned
  - ✓ Compliance monitoring active
- [ ] Check for any warnings about missing headers

**Expected Result**: Green status box with monitoring active

---

## ✅ Phase 3: Run Compliance Audit (3 minutes)

- [ ] Check current compliance score:
  ```powershell
  node scripts/leeway-agents/compliance-monitor.js
  ```
- [ ] Review the report for:
  - Compliance score (target: 85+)
  - Number of compliant skills
  - Any violations or warnings
- [ ] Note recommendations if score < 85

**Expected Result**: Compliance score 85+ with green status

---

## ✅ Phase 4: Fix Any Issues (5-10 minutes if needed)

**If missing headers:**

```powershell
# Preview what will change (dry run)
$env:DRY_RUN = 'true'
node scripts/leeway-agents/header-injector.js

# Apply changes if satisfied
node scripts/leeway-agents/header-injector.js
```

**If other issues:**

- Review report from compliance monitor
- Refer to `documents/LEEWAY_STANDARDS_COMPLIANCE.md`
- Make manual fixes as needed

**Verify again:**

```powershell
node scripts/leeway-agents/compliance-monitor.js
```

**Expected Result**: Score 85+, all violations resolved

---

## ✅ Phase 5: Schedule Automated Monitoring (Windows)

- [ ] Open PowerShell as Administrator
- [ ] Run this command:
  ```powershell
  $trigger = New-ScheduledTaskTrigger -RepetitionInterval (New-TimeSpan -Hours 1) -At "00:00"
  $action = New-ScheduledTaskAction -Execute "node" -Argument "scripts/leeway-agents/compliance-monitor.js" -WorkingDirectory "c:\Tools\Leeway-Skills"
  Register-ScheduledTask -TaskName "Leeway-Skills-Compliance" -Trigger $trigger -Action $action -Force
  ```
- [ ] Verify task appears in Task Scheduler
- [ ] Right-click task → Properties → Triggers → confirm 1 hour interval

**Alternative (cron on Linux/Mac)**:

```bash
# Add to crontab: 0 * * * * cd /path/to/Leeway-Skills && node scripts/leeway-agents/compliance-monitor.js
crontab -e
# Add line and save
```

**Expected Result**: Task created, will run hourly

---

## ✅ Phase 6: Read Documentation (Reference)

Keep for reference:

- [ ] **Quick Questions?** → `documents/LEEWAY_INTEGRATION_GUIDE.md`
  - How to add new skills
  - How to fix compliance issues
  - Common tasks

- [ ] **Detailed Reference?** → `documents/LEEWAY_STANDARDS_COMPLIANCE.md`
  - Header format specification
  - Policy definitions
  - Complete troubleshooting
  - Monitoring details

- [ ] **Overview** → `LEEWAY_IMPLEMENTATION_SUMMARY.md` (this file)
  - What was implemented
  - How to use
  - Quick reference

---

## 📌 Day-to-Day Operations

### Check Compliance (Daily)

```powershell
node scripts/leeway-agents/compliance-monitor.js
```

- Look at Compliance Score
- Check for any failed skills
- Each report saved to `.leeway/reports/`

### Add a New Skill

1. Create folder: `skills/{category}/{skill-name}/`
2. Create `SKILL.md` with Leeway header (see guide)
3. Run `node scripts/leeway-agents/compliance-monitor.js`
4. Should see score 85+

### Fix Compliance Issues

```powershell
# See what's wrong:
node scripts/leeway-agents/compliance-monitor.js

# Auto-fix missing headers:
node scripts/leeway-agents/header-injector.js

# Verify it worked:
node scripts/leeway-agents/compliance-monitor.js
```

---

## 🎯 What to Check Each Week

| Task              | Command                  | Frequency         |
| ----------------- | ------------------------ | ----------------- |
| Audit compliance  | `compliance-monitor.js`  | Daily (automated) |
| Add new skills    | Manual                   | As needed         |
| Review reports    | Check `.leeway/reports/` | Weekly            |
| Update docs       | See guides               | As needed         |
| Verify automation | Check Task Scheduler     | Weekly            |

---

## 🔒 Leeway Policies Active Right Now

✅ **ENFORCED** (blocks if violated):

- NO_SECRETS_IN_CODE → blocks passwords, API keys
- HEADERS_REQUIRED → blocks files without Leeway headers
- TAGS_REQUIRED → blocks missing REGION/TAG
- NO_CIRCULAR_DEPS → blocks circular imports

⚠️ **WARNINGS** (monitored, doesn't block):

- NAMING_CONVENTIONS → checks kebab-case names
- DOCUMENTATION_COVERAGE → checks 80% min docs

---

## 💡 Pro Tips

**Tip 1**: Check `.leeway/reports/` to see audit history

```powershell
ls -la .leeway/reports/
```

**Tip 2**: Dry-run header injector before applying

```powershell
$env:DRY_RUN = 'true'
node scripts/leeway-agents/header-injector.js
```

**Tip 3**: Run init-leeway.js on every startup to ensure monitoring is active

```powershell
# Add to your startup script or terminal profile
node scripts/init-leeway.js
```

**Tip 4**: Keep `.leeway/` in git (except runtime artifacts)

- Track: `.leeway/config.json`
- Ignore: `.leeway/reports/`, `.leeway/metrics/`

**Tip 5**: Review compliance score trend over time

```powershell
cat .leeway/metrics/compliance-score-history.json
```

---

## ⚡ Quick Reference Commands

```powershell
# Verify everything is set up
node scripts/verify-leeway-setup.js

# Initialize Leeway (run on startup)
node scripts/init-leeway.js

# Check compliance (main command used daily)
node scripts/leeway-agents/compliance-monitor.js

# Fix missing headers
node scripts/leeway-agents/header-injector.js

# View recent audit reports
ls .leeway/reports/ | tail -5

# View compliance history
cat .leeway/metrics/compliance-score-history.json
```

---

## 🆘 Quick Troubleshooting

| Issue                      | Quick Fix                                       |
| -------------------------- | ----------------------------------------------- |
| "Leeway config not found"  | `node scripts/init-leeway.js`                   |
| "Compliance score too low" | `node scripts/leeway-agents/header-injector.js` |
| "Missing SKILL.md"         | Create `skills/{category}/{name}/SKILL.md`      |
| "Secrets detected"         | Remove hardcoded passwords, use env vars        |
| "Task not running"         | Check Windows Task Scheduler or cron setup      |

---

## 📞 Need More Help?

1. **For integration details**: Read `documents/LEEWAY_INTEGRATION_GUIDE.md`
2. **For compliance specs**: Read `documents/LEEWAY_STANDARDS_COMPLIANCE.md`
3. **For troubleshooting**: See both guides' troubleshooting sections
4. **For configuration**: Edit `.leeway/config.json` and re-run `init-leeway.js`

---

## ✅ Final Checklist

Before declaring "Leeway Standards Ready":

- [ ] All verification checks passed
- [ ] Compliance score 85+
- [ ] No violations reported
- [ ] Automated monitoring scheduled
- [ ] Documentation reviewed
- [ ] Team briefed on daily operations

**Status**: 🎉 Ready for Production!

---

**Last Updated**: March 15, 2026  
**Framework**: Leeway SDK 1.0.0  
**Status**: ✅ Active & Monitoring

