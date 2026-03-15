# Detailed Leeway Skills Directory Structure

## Full Hierarchy

```
Leeway Skills/
│
├── README.md                          # Main directory documentation
├── STRUCTURE.md                       # This file - detailed structure
│
├── skills/                            # 🎯 Main skills directory
│   │
│   ├── code-generation/               # Language-specific code generation
│   │   ├── typescript-codegen/
│   │   │   └── SKILL.md               # Generate TypeScript/JavaScript
│   │   └── python-codegen/
│   │       └── SKILL.md               # Generate Python modules
│   │
│   ├── code-analysis/                 # Static analysis and refactoring
│   │   ├── static-analysis/
│   │   │   └── SKILL.md               # Code quality and anti-patterns
│   │   └── refactoring/
│   │       └── SKILL.md               # Code restructuring
│   │
│   ├── data-analysis/                 # Data science tools
│   │   └── pandas-analysis/
│   │       └── SKILL.md               # Pandas, statistics, visualization
│   │
│   ├── devops/                        # Infrastructure and deployment
│   │   ├── dockerfile-creation/
│   │   │   └── SKILL.md               # Docker container creation
│   │   └── kubernetes-deployment/
│   │       └── SKILL.md               # Kubernetes manifests
│   │
│   ├── web-development/               # Frontend technologies
│   │   ├── react-development/
│   │   │   └── SKILL.md               # React with hooks
│   │   └── css-styling/
│   │       └── SKILL.md               # Responsive CSS and Layout
│   │
│   ├── debugging/                     # Debugging and profiling
│   │   ├── javascript-debugging/
│   │   │   └── SKILL.md               # Browser and Node.js debugging
│   │   └── python-debugging/
│   │       └── SKILL.md               # pdb and profiling
│   │
│   ├── testing/                       # Test frameworks
│   │   ├── unit-testing/
│   │   │   └── SKILL.md               # Jest, Pytest, mocking
│   │   └── integration-testing/
│   │       └── SKILL.md               # API and integration tests
│   │
│   ├── ai-ml/                         # Artificial intelligence
│   │   ├── llm-prompting/
│   │   │   └── SKILL.md               # Prompt engineering
│   │   └── ml-model-development/
│   │       └── SKILL.md               # scikit-learn, TensorFlow, PyTorch
│   │
│   ├── security/                      # Security practices
│   │   └── code-security/
│   │       └── SKILL.md               # Vulnerability detection
│   │
│   ├── documentation/                 # Documentation creation
│   │   └── api-documentation/
│   │       └── SKILL.md               # OpenAPI, Swagger, examples
│   │
│   ├── architecture/                  # System design
│   │   └── system-design/
│   │       └── SKILL.md               # Distributed systems, patterns
│   │
│   └── git-workflow/                  # Version control
│       └── git-collaboration/
│           └── SKILL.md               # Git workflows and collaboration
│
├── .leeway/                           # 🔒 Leeway Standards Governance
│   ├── config.json                   # Leeway compliance configuration
│   ├── .gitignore                    # Runtime artifacts (not tracked)
│   ├── reports/                      # Compliance audit reports (runtime)
│   └── metrics/                      # Compliance metrics (runtime)
│
├── scripts/                           # 🔧 Utility scripts
│   ├── sync-skills.ps1               # PowerShell sync/management script
│   ├── skills-registry.json          # Searchable index of all skills
│   ├── init-leeway.js                # Bootstrap Leeway monitoring
│   └── leeway-agents/
│       ├── compliance-monitor.js     # Compliance validation agent
│       ├── header-injector.js        # Leeway header automation agent
│       └── (other governance agents)
│
├── config/                            # ⚙️ Configuration
│   ├── skills-config.json            # Global configuration
│   ├── .skillsignore                 # Exclude patterns (like .gitignore)
│   └── discovery-paths.json          # Where LLMs should search
│
└── documents/                              # 📚 Additional documentation
    ├── SETUP.md                       # Setup instructions
    ├── USAGE.md                       # How to use skills
    ├── EXTENDING.md                   # How to add new skills
    ├── LEEWAY_STANDARDS_COMPLIANCE.md # Leeway compliance guide
    ├── LEEWAY_INTEGRATION_GUIDE.md    # How to maintain compliance
    └── CATEGORIES.md                  # Detailed category explains
```

## SKILL.md Template

Each skill directory contains `SKILL.md` with this structure:

```markdown
# Skill Name

**Expert in**: Brief one-line description

## Capabilities

- Feature 1 description
- Feature 2 description
- Feature 3 description

## Use this skill when:

- Scenario 1
- Scenario 2
- Scenario 3

## Key techniques

- Technique 1
- Technique 2
- Technique 3

## Tags

`tag1` `tag2` `tag3`
```

## Discovery Paths

LLM systems search these paths (in order):

1. **Project-level**: `.agents/skills/` or `.claude/skills/`
2. **User-level**: `~/.agents/skills/` or `~/.config/opencode/skills`
3. **Custom**: Any path configured in `.agents/config`

## Skills by Language

### JavaScript/TypeScript

- `code-generation/typescript-codegen` - Type-safe code generation
- `web-development/react-development` - React and hooks
- `web-development/css-styling` - CSS and styling
- `debugging/javascript-debugging` - DevTools and Node.js debugging
- `testing/unit-testing` - Jest, Vitest
- `testing/integration-testing` - API testing

### Python

- `code-generation/python-codegen` - Pythonic code generation
- `data-analysis/pandas-analysis` - Data science
- `debugging/python-debugging` - pdb and profiling
- `testing/unit-testing` - Pytest
- `ai-ml/ml-model-development` - scikit-learn, TensorFlow, PyTorch

### DevOps/Infrastructure

- `devops/dockerfile-creation` - Docker containers
- `devops/kubernetes-deployment` - Kubernetes manifests
- `git-workflow/git-collaboration` - Git workflows

### General

- `code-analysis/static-analysis` - Code quality analysis
- `code-analysis/refactoring` - Code improvements
- `security/code-security` - Vulnerability detection
- `documentation/api-documentation` - API docs
- `architecture/system-design` - System design
- `ai-ml/llm-prompting` - Prompt engineering

## Skills by Domain

### Web Development

- React Development
- CSS Styling and Layout
- TypeScript Code Generation
- JavaScript Debugging

### Backend Development

- Python Code Generation
- API Documentation
- System Design and Architecture
- Git Workflow and Collaboration

### Data & AI/ML

- Pandas Data Analysis
- Machine Learning Model Development
- LLM Prompting and Engineering

### DevOps & Infrastructure

- Dockerfile Creation
- Kubernetes Deployment
- Static Code Analysis

### Quality & Security

- Unit Testing
- Integration Testing
- Code Security Analysis
- Python Debugging
- JavaScript Debugging

## Configuration Files

### `skills-config.json`

Global configuration for:

- Discovery paths
- Validation rules
- Tagging system
- Performance settings
- Features (symlinks, versioning, dependencies)

### `.skillsignore`

Patterns to exclude (like `.gitignore`):

- Version control directories
- Dependencies (node_modules, **pycache**)
- Build artifacts
- IDE files
- Temporary files

### `skills-registry.json`

Searchable index containing:

- All skills with metadata
- Category mappings
- Tags and keywords
- Version info
- Last updated timestamp

## Extending the Directory

### Add a New Skill

1. Create directory:

   ```
   skills/{category}/{skill-name}/
   ```

2. Create `SKILL.md` with required sections

3. Update `skills-registry.json`:

   ```json
   {
     "name": "Skill Name",
     "category": "category-name",
     "path": "skills/category/skill-name",
     "version": "1.0.0",
     "tags": ["tag1", "tag2", "tag3"]
   }
   ```

4. Run sync script:
   ```powershell
   .\scripts\sync-skills.ps1 -Action Validate
   ```

### Add a New Category

1. Create category directory: `skills/{new-category}/`
2. Add skills under that category
3. Update category entry in `skills-registry.json`
4. Document in README.md

## File Naming Conventions

- Directories: lowercase, hyphen-separated
- SKILL.md: Exact name, capital letters
- Config files: kebab-case (lowercase-hyphenated)
- Tags: lowercase, single words or hyphenated

## Metadata Schema

Each skill in the registry has:

```json
{
  "name": "string",
  "category": "string",
  "path": "string",
  "version": "string (semver)",
  "tags": ["array", "of", "strings"],
  "description": "string",
  "capabilities": ["array", "of", "features"],
  "dependency": "optional | string",
  "enabled": "boolean",
  "source": "internal|anthropic|microsoft|community"
}
```

## Tagging System

Skills are tagged by:

- **Language**: typescript, javascript, python, java, etc.
- **Domain**: devops, testing, security, web, data, etc.
- **Tool/Framework**: react, jest, pytest, docker, kubernetes, etc.
- **Methodology**: agile, tdd, bdd, functional, oop, etc.
- **Level**: beginner, intermediate, expert
- **Custom**: Domain-specific tags

Minimum 3 tags per skill, maximum 10.

## Version Management

```
Development: 0.x.x
Stable: 1.x.x
```

Update version in:

1. SKILL.md (if documenting version)
2. `skills-registry.json`

## Synchronization

### Manual Sync

```powershell
# Validate all skills
.\scripts\sync-skills.ps1 -Action Validate

# List all skills
.\scripts\sync-skills.ps1 -Action List

# Export as JSON
.\scripts\sync-skills.ps1 -Action Export

# Check status
.\scripts\sync-skills.ps1 -Action Status
```

### Automated Updates

The sync script can be extended to:

- Pull from upstream repositories
- Check for updates
- Merge new skills
- Resolve conflicts
- Generate reports

## Performance Considerations

- **Caching**: Registry is cached for 1 hour
- **Max Results**: Limited to 50 skills per query
- **Loading**: Skills ordered by frequency of use
- **Symlinks**: Supported for deduplication

## Best Practices

1. **Keep Skills Focused**: One primary purpose per skill
2. **Use Clear Names**: Descriptive, action-oriented names
3. **Tag Thoroughly**: 3-10 relevant tags per skill
4. **Document Well**: Clear capabilities and techniques
5. **Version Consistently**: Follow semantic versioning
6. **Test Validation**: Run sync script after changes
7. **Update Registry**: Always update after adding skills

---

**Last Updated**: 2026-03-15  
**Structure Version**: 1.0.0

