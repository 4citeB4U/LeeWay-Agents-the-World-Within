# AIskills Directory Setup

## Installation & Configuration

### What You Have

Your `c:\Tools\AIskills` directory now contains:

```
AIskills/
├── skills/                  # 19 core skills across 13 categories
├── scripts/
│   ├── sync-skills.ps1     # Manage and validate skills
│   └── skills-registry.json # Searchable skill index
├── config/
│   ├── skills-config.json  # Global configuration
│   └── .skillsignore       # Exclude patterns
├── documents/
│   ├── USAGE.md            # How to use skills
│   └── EXTENDING.md        # How to add skills
├── README.md               # Main documentation
└── STRUCTURE.md            # Directory structure
```

## Quick Configuration

### Windows PowerShell Setup

1. **Navigate to directory:**

   ```powershell
   cd c:\Tools\AIskills
   ```

2. **Test the sync script:**

   ```powershell
   .\scripts\sync-skills.ps1 -Action Status
   ```

3. **List all skills:**

   ```powershell
   .\scripts\sync-skills.ps1 -Action List
   ```

4. **Validate all skills:**
   ```powershell
   .\scripts\sync-skills.ps1 -Action Validate
   ```

### Configure for Codex/Claude

Add this to your LLM configuration:

```json
{
  "skillPaths": ["c:\\Tools\\AIskills\\skills"],
  "registryPath": "c:\\Tools\\AIskills\\scripts\\skills-registry.json",
  "configPath": "c:\\Tools\\AIskills\\config\\skills-config.json"
}
```

### Configure for VS Code Copilot

1. Add to `.vscode/settings.json`:

   ```json
   {
     "github.copilot.skillPaths": [
       "${workspaceFolder}/.agents/skills",
       "c:\\Tools\\AIskills\\skills"
     ]
   }
   ```

2. Or set environment variable:
   ```powershell
   $env:CODEX_SKILLS_PATH = "c:\Tools\AIskills\skills"
   ```

### Configure for Custom LLMs

Create `skills.env`:

```
SKILLS_ROOT=c:\Tools\AIskills\skills
REGISTRY_PATH=c:\Tools\AIskills\scripts\skills-registry.json
CONFIG_PATH=c:\Tools\AIskills\config\skills-config.json
SKILLS_ENABLED=true
CACHE_ENABLED=true
```

## Next Steps

### 1. Explore Skills

```powershell
# View complete directory
.\scripts\sync-skills.ps1 -Action List

# Export as CSV report
$registry = Get-Content scripts\skills-registry.json | ConvertFrom-Json
$registry.skills | Select-Object name, category, tags -First 5 | Format-Table
```

### 2. Point Your LLM

Configure your LLM system to use:

- **Skills Directory**: `c:\Tools\AIskills\skills`
- **Registry**: `c:\Tools\AIskills\scripts\skills-registry.json`
- **Config**: `c:\Tools\AIskills\config\skills-config.json`

### 3. Use Skills in Prompts

```
I need to generate a TypeScript API client.
Use the typescript-codegen skill to create type-safe code
with error handling and proper exports.
```

### 4. Add More Skills

See [EXTENDING.md](EXTENDING.md) for how to add new skills to the directory.

### 5. Keep Updated

Periodically validate and clean up:

```powershell
# Monthly validation
.\scripts\sync-skills.ps1 -Action Validate

# Quarterly cleanup
.\scripts\sync-skills.ps1 -Action Clean
```

## Features Available

### ✅ Implemented

- [x] 19 core skills across 13 categories
- [x] Organized directory structure
- [x] SKILL.md specification compliance
- [x] Skills registry (JSON)
- [x] Configuration system
- [x] PowerShell sync/validation script
- [x] Tag-based search system
- [x] Version management
- [x] Enable/disable mechanism
- [x] Comprehensive documentation

### 🔜 Ready for Extension

- [ ] Additional skills from public sources
- [ ] CI/CD integration for automated updates
- [ ] Web UI for browsing skills
- [ ] Telemetry and usage tracking
- [ ] Skill rating/feedback system
- [ ] Auto-generation of documentation

### 📝 To Add

If you want to further extend:

1. **Add more skills** (see EXTENDING.md)
2. **Create skill categories** (web components, ML frameworks, etc.)
3. **Set up auto-sync** from GitHub repositories
4. **Build a web dashboard** for skill discovery
5. **Integrate with CI/CD** for automated updates

## Troubleshooting

### Issue: Skills not discovered

```powershell
# Validate all skills
.\scripts\sync-skills.ps1 -Action Validate

# Check for errors
$results = .\scripts\sync-skills.ps1 -Action Validate -Verbose
$results | Where-Object { -not $_.valid }
```

### Issue: Registry is outdated

```powershell
# Re-scan directory
.\scripts\sync-skills.ps1 -Action Update

# Or regenerate from scratch
Remove-Item scripts\skills-registry.json
# (sync script will recreate it)
```

### Issue: Skill validation fails

Check SKILL.md requirements:

- File name exactly `SKILL.md` (case-sensitive)
- Contains all required sections
- Has tags section
- Is readable markdown

### Issue: Tag not found

Ensure tag is:

- Lowercase
- Hyphenated (not spaces)
- 3-10 tags total
- Related to the skill

## Maintenance Schedule

### Weekly

- Validate skills: `.\scripts\sync-skills.ps1 -Action Validate`

### Monthly

- List all skills: `.\scripts\sync-skills.ps1 -Action List`
- Export reports: `.\scripts\sync-skills.ps1 -Action Export`

### Quarterly

- Clean old logs: `.\scripts\sync-skills.ps1 -Action Clean`
- Review and update skills as needed
- Check for new public skill repositories

### Annually

- Archive old backups
- Review category structure
- Consolidate or split categories if needed
- Update version numbers

## Integration Examples

### GitHub Actions

Sync skills daily:

```yaml
name: Sync Skills
on:
  schedule:
    - cron: "0 2 * * *"

jobs:
  sync:
    runs-on: windows-latest
    steps:
      - uses: actions/checkout@v2
      - name: Sync skills
        run: .\scripts\sync-skills.ps1 -Action Validate
```

### Custom Script

Auto-update from repositories:

```powershell
$sources = @(
  "https://github.com/anthropics/anthropic-sdk-python",
  "https://github.com/microsoft/agent-framework",
  "https://github.com/awesome-copilot/skills"
)

foreach ($source in $sources) {
  # Clone and extract skills
  # Update registry
  # Validate
}
```

## Performance Tips

1. **Use registry caching** (enabled by default)
2. **Limit skills in prompts** to relevant categories
3. **Use tags** for efficient discovery
4. **Order skills** by frequency of use
5. **Disable unused skills** to reduce noise

## Security Notes

- Skills are read-only to LLMs by default
- SKILL.md files contain no executable code
- Config files are plain JSON (no code execution)
- No network calls by default
- All tools are static file operations

## Statistics

Currently available:

| Category        | Skills |
| --------------- | ------ |
| Code Generation | 2      |
| Code Analysis   | 2      |
| Data Analysis   | 1      |
| DevOps          | 2      |
| Web Development | 2      |
| Debugging       | 2      |
| Testing         | 2      |
| AI/ML           | 2      |
| Security        | 1      |
| Documentation   | 1      |
| Architecture    | 1      |
| Git Workflow    | 1      |
| **Total**       | **19** |

## Next: Learn How to Use

👉 Read [USAGE.md](USAGE.md) to learn how to use skills in your prompts.

## Next: Extend the Directory

👉 Read [EXTENDING.md](EXTENDING.md) to add new skills.

---

**Setup Complete!** Your LLM skills directory is ready to use. 🚀

