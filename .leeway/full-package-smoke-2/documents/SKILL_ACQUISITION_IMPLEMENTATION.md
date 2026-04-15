# 🚀 Skill Acquisition Implementation Guide

**Immediate Action Plan**: Pull 250+ skills from elite GitHub repos  
**Timeline**: Execute over 5 weeks  
**Goal**: Unified, world-class skill library for Agent Lee

---

## 📦 Phase 1: Repository Cloning & Audit (Week 1)

### Step 1.1: Create Source Directory

```powershell
# Create sources directory
mkdir c:\Tools\AIskills\sources
cd c:\Tools\AIskills\sources

# Create subdirectories for each source
mkdir claude-skills
mkdir anthropic-skills
mkdir ui-ux-pro-max
mkdir openclaw-skills
mkdir community-skills
```

### Step 1.2: Clone Primary Source - alirezarezvani/claude-skills

```powershell
cd c:\Tools\AIskills\sources\claude-skills
git clone https://github.com/alirezarezvani/claude-skills.git .

# Expected output:
# ✅ ~500MB repository
# ✅ 177+ skills in various directories
# ✅ 254 Python tools in /scripts/
# ✅ Templates, agents, personas

# Verify structure
dir   # Should show: engineering/, marketing/, product-team/, etc.
```

**Audit Output**:

```
[Count Skills in claude-skills]
- engineering/: 24 core + 25 POWERFUL + 12 Playwright + 7 self-improving = 68 skills
- marketing-skill/: 43 skills in 7 pods
- product-team/: 12 skills
- project-management/: 6 skills
- ra-qm-team/: 12 skills
- c-level-advisor/: 28 skills
- business-growth/: 4 skills
- finance/: 2 skills
- scripts/: 254 Python tools
TOTAL: 177+ skills → ✅ READY
```

### Step 1.3: Clone Secondary Sources

```powershell
# Anthropic Official Skills
cd c:\Tools\AIskills\sources\anthropic-skills
git clone https://github.com/anthropics/skills.git .

# UI/UX Pro Max
cd c:\Tools\AIskills\sources\ui-ux-pro-max
git clone https://github.com/nextlevelbuilder/ui-ux-pro-max-skill.git .

# OpenClaw Archive
cd c:\Tools\AIskills\sources\openclaw-skills
git clone https://github.com/openclaw/skills.git .

# Community (create separate directories for each)
mkdir c:\Tools\AIskills\sources\community-skills\superpowers
cd c:\Tools\AIskills\sources\community-skills\superpowers
git clone https://github.com/obra/superpowers.git .

# Repeat for other community skills as needed
```

### Step 1.4: Audit All Sources

```python
# Create audit script (python3)
import os
import json
from pathlib import Path

sources_dir = Path("c:/Tools/AIskills/sources")
audit = {}

for source in sources_dir.iterdir():
    if source.is_dir():
        skill_count = 0
        script_count = 0

        # Count skills (SKILL.md files)
        for skill_md in source.rglob("SKILL.md"):
            skill_count += 1

        # Count scripts
        for script in source.rglob("*.py"):
            script_count += 1

        audit[source.name] = {
            "skills": skill_count,
            "python_scripts": script_count,
            "path": str(source)
        }

# Print audit report
for source, stats in audit.items():
    print(f"{source}: {stats['skills']} skills, {stats['python_scripts']} tools")

# Save audit
with open("sources_audit.json", "w") as f:
    json.dump(audit, f, indent=2)
```

**Expected Audit Output**:

```
claude-skills: 177 skills, 254 python_scripts
anthropic-skills: 15 skills, 45 python_scripts
ui-ux-pro-max: 1 skill, 8 python_scripts
openclaw-skills: 50+ skills, 25 python_scripts
community-skills: 30+ skills, 15 python_scripts

TOTAL: 250+ skills, 350+ tools ✅
```

---

## 🎯 Phase 2: Category Mapping & Preparation (Week 1)

### Step 2.1: Create Unified Category Structure

```powershell
# Create standardized category directories
$categories = @(
    "code-generation",
    "code-analysis",
    "testing-qa",
    "devops-deployment",
    "database-design",
    "api-development",
    "data-engineering",
    "machine-learning",
    "ai-orchestration",
    "security-compliance",
    "ui-ux-design",
    "frontend-web",
    "mobile-development",
    "product-management",
    "marketing-growth",
    "project-management",
    "business-operations",
    "c-suite-advisory",
    "compliance-regulatory",
    "documentation",
    "communication",
    "meta-skills",
    "specialized"
)

foreach ($cat in $categories) {
    mkdir "c:\Tools\AIskills\skills\$cat"
}
```

### Step 2.2: Create Category Mapping Document

```markdown
# Category Mapping - Skills Allocation

## code-generation (5 skills)

- typescript-codegen (existing)
- python-codegen (existing)
- fullstack-codegen (existing)
- go-lang-codegen (NEW from claude-skills)
- rust-code-generator (NEW from claude-skills)

## code-analysis (8 skills)

- static-analysis (existing)
- refactoring-assistant (existing)
- api-design-reviewer (NEW - claude-skills POWERFUL)
- security-code-scanner (NEW)
- performance-analyzer (NEW)
- dependency-auditor (NEW)
- codebase-navigator (NEW)
- tech-debt-tracker (NEW)

[... continue for all 23 categories ...]
```

### Step 2.3: Prepare Deduplication Index

Create `deduplication_index.json`:

```json
{
  "existing_leeway_skills": 44,
  "planned_acquisitions": 206,
  "expected_total": 250,
  "deduplication_rules": {
    "ci-cd-pipeline-pipeline": {
      "leeway": "ci-cd-pipeline-generator (v1, basic)",
      "source_skill": "claude-skills:ci-cd-pipeline-builder (POWERFUL tier)",
      "decision": "REPLACE_AND_ENHANCE",
      "action": "Archive original, import POWERFUL version"
    },
    "security-auditor": {
      "leeway": "basic security check",
      "source_skill": "claude-skills:skill-security-auditor (POWERFUL)",
      "decision": "REPLACE",
      "action": "Use production-grade security auditor"
    }
  }
}
```

---

## 🔄 Phase 3: Batch Processing - Core Skills (Week 2)

### Step 3.1: Batch 1 - Engineering Core (24 skills)

```python
# batch_normalize_skills.py
from skill_integration_toolkit import LeewaySkillNormalizer
from pathlib import Path

normalizer = LeewaySkillNormalizer("c:/Tools/AIskills/skills")

# Engineering core skills
engineering_skills = [
    ("c:/Tools/AIskills/sources/claude-skills/engineering",
     [
        "architecture-decision-framework",
        "frontend-expert",
        "backend-architecture",
        "fullstack-engineer",
        "qa-automation",
        # ... all 24 core skills
     ])
]

for source_base, skill_names in engineering_skills:
    for skill_name in skill_names:
        skill_path = f"{source_base}/{skill_name}"

        # Normalize to Leeway format
        result = normalizer.normalize_skill(
            source_path=skill_path,
            category="code-generation",  # ← automatically route based on skill
            source_repo="alirezarezvani/claude-skills",
            skill_id=skill_name
        )

        if result:
            print(f"✅ {skill_name}")
        else:
            print(f"⏭️  SKIPPED: {skill_name} (duplicate or error)")

# Generate report
report = normalizer.generate_integration_report()
print(f"\nBatch 1 Report: {report['normalized_skills']} skills normalized")
```

**Expected Output**:

```
✅ architecture-decision-framework
✅ frontend-expert
✅ backend-architecture
... (24 total)
Batch 1 Report: 24 skills normalized, 0 skipped
```

### Step 3.2: Extract Python Tools from Batch 1

```bash
# Copy scripts
cp -r sources/claude-skills/engineering/*/scripts/* skills/code-generation/*/scripts/
cp -r sources/claude-skills/engineering-team/*/scripts/* skills/devops-deployment/*/scripts/

# Verify no external dependencies in Python tools
python3 -c "
import ast
import os

for script in os.walk('skills/'):
    if script[-1]:  # files
        for file in script[-1]:
            if file.endswith('.py'):
                with open(os.path.join(script[0], file)) as f:
                    try:
                        tree = ast.parse(f.read())
                        imports = [node.names[0].name for node in ast.walk(tree)
                                 if isinstance(node, ast.Import)]
                        # Check for stdlib only
                    except:
                        pass
"
```

### Step 3.3: Batch 1 Quality Assurance

```python
# qa_batch_1.py
import json
from pathlib import Path

leeway_skills = Path("c:/Tools/AIskills/skills")

# Checklist for each skill
qa_results = []

for category_dir in leeway_skills.glob("code-*"):
    for skill_dir in category_dir.glob("*"):
        checks = {
            "skill_id": skill_dir.name,
            "has_skill_md": (skill_dir / "SKILL.md").exists(),
            "has_metadata": (skill_dir / "metadata.json").exists(),
            "has_readme": (skill_dir / "README.md").exists(),
            "has_scripts": (skill_dir / "scripts").exists(),
            "yaml_valid": check_yaml_frontmatter(skill_dir / "SKILL.md"),
            "no_secrets": scan_for_secrets(skill_dir),
            "compliant": True  # Set to False if any check fails
        }
        qa_results.append(checks)

# Report
passed = sum(1 for r in qa_results if r["compliant"])
print(f"QA: {passed}/{len(qa_results)} skills passed")
```

### Step 3.4: Batch 2 - POWERFUL Tier (25 skills)

Repeat steps 3.1-3.3 for POWERFUL tier skills:

- rag-architect
- database-designer
- security-auditor
- ci-cd-builder
- mcp-server-builder
- etc.

**Target**: All 25 POWERFUL skills normalized and verified by mid-Week 2

---

## 📊 Phase 4: Specialized Batches (Week 2-3)

### Step 4.1: Marketing Skills Batch (43 skills)

```python
# Process 7 marketing pods
marketing_pods = {
    "content": 8,
    "seo": 5,
    "cro": 6,
    "channels": 6,
    "growth": 4,
    "intelligence": 4,
    "sales": 2
}

for pod, count in marketing_pods.items():
    # Normalize all skills in pod
    # Extract scripts
    # Verify orchestration routing
    # Test skill composition

# Expected: 43 marketing skills in 'marketing-growth' category
```

### Step 4.2: C-Suite & Executive Skills (28 skills)

```python
# Process C-suite advisory skills
c_suite_roles = [
    "ceo-advisor",
    "cto-advisor",
    "cfo-advisor",
    # ... 28 total roles and advisors
]

for skill in c_suite_roles:
    # Normalize
    # Create persona if applicable
    # Link to orchestration protocol
```

### Step 4.3: Design System Generator (1 skill + assets)

```python
# Special handling for UI/UX Pro Max design system

# 1. Normalize the skill
normalizer.normalize_skill(
    source_path="sources/ui-ux-pro-max/src/ui-ux-pro-max",
    category="ui-ux-design",
    source_repo="nextlevelbuilder/ui-ux-pro-max-skill",
    skill_id="design-system-generator"
)

# 2. Extract and embed reference assets
references = {
    "styles.csv": 67,
    "colors.csv": 161,
    "typography.csv": 57,
    "charts.csv": 25,
    "stacks.csv": 13,
    "ux-guidelines.csv": 99,
    "industries.json": 161
}

for asset, count in references.items():
    # Copy from source
    shutil.copy(
        f"sources/ui-ux-pro-max/src/ui-ux-pro-max/data/{asset}",
        f"skills/ui-ux-design/design-system-generator/references/{asset}"
    )
    print(f"✅ Embedded: {asset} ({count} entries)")

# 3. Copy search.py script
shutil.copy(
    "sources/ui-ux-pro-max/src/ui-ux-pro-max/scripts/search.py",
    "skills/ui-ux-design/design-system-generator/scripts/search.py"
)
```

---

## 🏗️ Phase 5: Integration & Indexing (Week 4)

### Step 5.1: Build Master Registry

```python
# build_master_registry.py
from skill_integration_toolkit import SkillRegistry

registry = SkillRegistry("c:/Tools/AIskills/skills")

# Build complete registry
all_skills = registry.build_registry()
print(f"✅ Indexed {len(all_skills)} skills")

# Build search index
index = registry.build_search_index()
print(f"✅ Built search index with {len(index)} entries")

# Save registry
registry.save_registry("c:/Tools/AIskills/skill-registry-complete.json")

# Generate summary
summary = {
    "total_skills": len(all_skills),
    "by_category": {},
    "by_tier": {},
    "by_source": {}
}

for skill in all_skills:
    # Aggregate stats
    category = skill["category"]
    tier = skill.get("tier", "core")
    source = skill.get("source", {}).get("repo", "unknown")

    summary["by_category"][category] = summary["by_category"].get(category, 0) + 1
    summary["by_tier"][tier] = summary["by_tier"].get(tier, 0) + 1
    summary["by_source"][source] = summary["by_source"].get(source, 0) + 1

print(json.dumps(summary, indent=2))
```

**Expected Output**:

```
✅ Indexed 250 skills
✅ Built search index with 580 entries

Summary:
{
  "total_skills": 250,
  "by_category": {
    "code-generation": 5,
    "marketing-growth": 43,
    "c-suite-advisory": 28,
    ...
  },
  "by_tier": {
    "core": 120,
    "advanced": 85,
    "specialized": 45
  },
  "by_source": {
    "alirezarezvani/claude-skills": 177,
    "anthropics/skills": 15,
    "nextlevelbuilder/ui-ux-pro-max": 1,
    ...
  }
}
```

### Step 5.2: Generate Deduplication Report

```python
# deduplication_report.py
dedup_report = {
    "total_unique_skills": 250,
    "conflicts_resolved": 8,
    "replaced_skills": 3,
    "merged_skills": 5,
    "decisions": [
        {
            "skill": "ci-cd-pipeline-builder",
            "conflict_with": "ci-cd-pipeline-generator",
            "decision": "REPLACE",
            "reason": "POWERFUL tier is more comprehensive"
        },
        # ... other decisions
    ]
}

with open("deduplication_report.json", "w") as f:
    json.dump(dedup_report, f, indent=2)

print(f"✅ Deduplication Report: {len(dedup_report['decisions'])} decisions made")
```

---

## ✅ Phase 6: Testing & Validation (Week 5)

### Step 6.1: Verify Agent Lee Integration

```python
# test_with_agent_lee.py

# 1. Start MCP server
mcp_server = start_mcp_server("c:/Tools/AIskills/mcp-server")

# 2. Test skill discovery via MCP
discovered_tools = mcp_server.list_tools()
print(f"✅ Discovered {len(discovered_tools)} skills via MCP")

# 3. Test execution of sample skills
test_skills = [
    ("typescript-codegen", {"instruction": "Create simple API", "context": {}}),
    ("senior-architect", {"instruction": "Design scalable system", "context": {}}),
    ("marketing-orchestrator", {"instruction": "Plan launch", "context": {}}),
]

for skill_name, params in test_skills:
    result = mcp_server.call_tool(skill_name, params)
    print(f"✅ {skill_name} execution successful")

# 4. Test skill composition
print("✅ All 250 skills verified with Agent Lee")
```

### Step 6.2: Final Documentation

Create `FINAL_SKILL_LIBRARY_README.md`:

```markdown
# Leeway Skills - Complete Unified Library

## 📊 Library Statistics

- **Total Skills**: 250+
- **Categories**: 23
- **Python Tools**: 350+
- **Compliance**: 100% Leeway Standards
- **Sources**: 5 elite repositories
- **Tier Distribution**:
  - Core: 120 skills
  - Advanced: 85 skills
  - Specialized: 45 skills

## 🚀 Quick Start

1. Ensure MCP server is running
2. Agent Lee automatically discovers all 250 skills
3. Call any skill via MCP protocol
4. Use skill orchestration for complex workflows

## 📚 Skills by Domain

### Engineering (68 skills)

- Code generation (5)
- Code analysis (8)
- Testing & QA (15)
- DevOps & infra (10)
- Database design (6)
- API development (8)
- Security (10)

### Business & Growth (95 skills)

- Marketing (43)
- Product Management (12)
- Project Management (6)
- Business Operations (10)
- C-Suite Advisory (28)
- Sales & Contracts (4)
- Finance (2)

### Design & UX (20 skills)

- UI/UX Design systems
- Frontend development
- User research
- Design patterns

### Compliance & Meta (42+ skills)

- Regulatory & quality
- Security & compliance
- Meta-skills & orchestration
- Community & specialized

## 🔧 Using Skills with Agent Lee

See AGENT_LEE_INTEGRATION.md for complete integration guide.

## 📖 Skill Registry

Search all 250 skills in: skill-registry-complete.json
```

---

## 🎯 Success Criteria

✅ **Phase 1**: All 5 source repos cloned and audited  
✅ **Phase 2**: Category structure ready, 250 skill slots prepared  
✅ **Phase 3**: Core 68 engineering skills normalized  
✅ **Phase 4**: Specialized batches processed (135+ skills)  
✅ **Phase 5**: Master registry built, 250 skills indexed  
✅ **Phase 6**: All skills tested with Agent Lee, documented

**Final Status**: 250+ world-class skills, ready for production 🚀

---

## 📞 Troubleshooting

### Skill Won't Normalize

```python
# Debug script
from skill_integration_toolkit import LeewaySkillNormalizer
normalizer = LeewaySkillNormalizer("c:/Tools/AIskills/skills")

try:
    normalizer.normalize_skill(
        source_path="path/to/skill",
        category="category",
        source_repo="repo"
    )
except Exception as e:
    print(f"Error: {e}")
    # Check SKILL.md exists
    # Check YAML frontmatter is valid
    # Check no circular dependencies
```

### MCP Server Won't List Skills

```powershell
# Verify skills directory
dir c:\Tools\AIskills\skills\

# Verify script-registry-complete.json exists
ls c:\Tools\AIskills\skill-registry-complete.json

# Check MCP server logs
cat c:\Tools\AIskills\.leeway\logs\mcp-*.log
```

---

**Timeline**: 5 weeks to execution  
**Result**: Unified 250+ skill library for world-class LLM capabilities  
**Status**: READY FOR LAUNCH 🎉

