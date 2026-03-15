# Leeway Skills Quick Reference Card

## 🎯 Available Skills by Category

### Code Generation

- `typescript-codegen` - Type-safe TypeScript/JavaScript
- `python-codegen` - Pythonic code with type hints

### Code Analysis

- `static-analysis` - Code quality & anti-patterns
- `refactoring` - Code restructuring

### Data Analysis

- `pandas-analysis` - Data science & statistics

### DevOps

- `dockerfile-creation` - Docker containers
- `kubernetes-deployment` - K8s manifests

### Web Development

- `react-development` - React with hooks
- `css-styling` - Responsive CSS & layout

### Debugging

- `javascript-debugging` - Browser/Node.js debugging
- `python-debugging` - pdb & profiling

### Testing

- `unit-testing` - Jest, Pytest, mocking
- `integration-testing` - API & integration tests

### AI/ML

- `llm-prompting` - Prompt engineering
- `ml-model-development` - scikit-learn, TensorFlow

### Security

- `code-security` - Vulnerability detection

### Documentation

- `api-documentation` - OpenAPI, Swagger

### Architecture

- `system-design` - System design & patterns

### Git Workflow

- `git-collaboration` - Git workflows

---

## 🚀 Common Commands

```powershell
# Navigate to directory
cd c:\Tools\AIskills

# View all skills
.\scripts\sync-skills.ps1 -Action List

# Validate all skills
.\scripts\sync-skills.ps1 -Action Validate

# Export as JSON
.\scripts\sync-skills.ps1 -Action Export

# Check status
.\scripts\sync-skills.ps1 -Action Status

# Clean old logs
.\scripts\sync-skills.ps1 -Action Clean
```

---

## 📝 Using Skills in Prompts

### Basic Format

```
Use the {skill-name} skill to {task}
```

### Examples

```
Use typescript-codegen to generate a type-safe API client.

Use react-development to create a component with proper hooks.

Use unit-testing to write Jest tests for this function.

Use dockerfile-creation to containerize this Node app.

Use static-analysis to find code quality issues.
```

---

## 🔍 Search by Tag

### By Language

- `typescript`, `javascript` → TypeScript skills
- `python` → Python skills
- `docker`, `kubernetes` → DevOps skills

### By Domain

- `testing` → Testing skills
- `devops` → Infrastructure skills
- `web`, `frontend` → Web development
- `security` → Security skills
- `ai`, `llm` → AI/ML skills

### By Tool

- `react` → React skill
- `jest` → Jest/testing
- `docker` → Docker skill
- `kubernetes` → K8s skill

---

## 📁 Directory Structure

```
c:\Tools\Leeway-Skills/
├── skills/                  # All skill definitions
│   ├── code-generation/
│   ├── code-analysis/
│   ├── data-analysis/
│   ├── devops/
│   ├── web-development/
│   ├── debugging/
│   ├── testing/
│   ├── ai-ml/
│   ├── security/
│   ├── documentation/
│   ├── architecture/
│   └── git-workflow/
├── scripts/
│   ├── sync-skills.ps1      # Management script
│   └── skills-registry.json # Skill index
├── config/
│   ├── skills-config.json   # Configuration
│   └── .skillsignore        # Exclude patterns
└── documents/
    ├── USAGE.md             # How to use
    ├── SETUP.md             # Setup guide
    └── EXTENDING.md         # Add skills
```

---

## ⚡ Quick Start (5 min)

1. **Navigate:**

   ```powershell
   cd c:\Tools\Leeway-Skills
   ```

2. **Verify:**

   ```powershell
   .\scripts\sync-skills.ps1 -Action Validate
   ```

3. **Use in prompt:**
   ```
   Use typescript-codegen to generate a FastAPI API client.
   ```

---

## 📖 Documentation

- **Overview** → README.md
- **Details** → STRUCTURE.md
- **Setup** → documents/SETUP.md
- **Usage** → documents/USAGE.md
- **Extend** → documents/EXTENDING.md
- **Summary** → SETUP_SUMMARY.md

---

## 🎓 Learning Path

1. Read README.md (5 min)
2. Run `sync-skills.ps1 -Action List` (1 min)
3. Read documents/USAGE.md (5 min)
4. Try using a skill (5 min)
5. Read documents/EXTENDING.md (10 min)
6. Add a custom skill (10 min)

**Total**: ~30 minutes to proficiency

---

## 🔧 Configuration

Add to your LLM config:

```json
{
  "skillPaths": ["c:\\Tools\\Leeway-Skills\\skills"]
}
```

Or set environment variable:

```powershell
$env:CODEX_SKILLS_PATH = "c:\Tools\Leeway-Skills\skills"
```

---

## ✨ Features

✅ 19 core skills
✅ 13 categories
✅ Searchable registry
✅ Tag-based discovery
✅ Management scripts
✅ Full documentation
✅ Extensible framework
✅ Configuration system

---

## 📊 Quick Stats

| Metric              | Count |
| ------------------- | ----- |
| Total Skills        | 19    |
| Categories          | 13    |
| Languages Supported | 3     |
| Documentation Files | 6     |
| Tags Available      | 40+   |

---

## 🆘 Troubleshooting

**Skill not found?**

```powershell
.\scripts\sync-skills.ps1 -Action Validate
```

**Registry outdated?**

```powershell
.\scripts\sync-skills.ps1 -Action Status
```

**Detailed help?**
See documents/SETUP.md or documents/USAGE.md

---

## 🌐 Registry Path

```
c:\Tools\Leeway-Skills\scripts\skills-registry.json
```

Open in editor to view all skills with metadata.

---

## 📌 Important Files

| File                 | Purpose            |
| -------------------- | ------------------ |
| README.md            | Main documentation |
| STRUCTURE.md         | Detailed structure |
| SETUP_SUMMARY.md     | Setup overview     |
| skills-registry.json | Skill index        |
| sync-skills.ps1      | Management tool    |
| skills-config.json   | Configuration      |

---

**Status:** ✅ Ready to Use  
**Version:** 1.0.0  
**Created:** 2026-03-15

Keep this card handy for quick reference!

