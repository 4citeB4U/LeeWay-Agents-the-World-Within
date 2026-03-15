# How to Use Your Skills Directory

## Quick Start

### 1. Point Your LLM to the Skills Directory

Set the skills discovery path in your LLM configuration:

```json
{
  "skillPaths": ["c:\\Tools\\AIskills\\skills", "~/.agents/skills"]
}
```

### 2. List Available Skills

```powershell
cd c:\Tools\AIskills
.\scripts\sync-skills.ps1 -Action List
```

### 3. Validate Skills

```powershell
.\scripts\sync-skills.ps1 -Action Validate
```

## Using Skills in Prompts

### Method 1: Explicit Skill Request

```
I need to generate a TypeScript API.
Use the typescript-codegen skill to create production-ready code.
```

### Method 2: Category-Based Request

```
Generate a React component with proper hooks.
Use the web-development skills for modern patterns.
```

### Method 3: Tag-Based Discovery

```
I need to write tests for this code.
Search for skills tagged with 'testing' and 'typescript'.
```

## Examples by Category

### Code Generation

**Creating TypeScript code**:

```
Use typescript-codegen skill to generate a strongly-typed
API client with proper error handling.
```

**Creating Python modules**:

```
Use python-codegen skill to create a FastAPI application
with async/await patterns and Pydantic models.
```

### Code Analysis

**Finding issues in code**:

```
Review this code using the static-analysis skill.
Identify code smells, complexity issues, and potential problems.
```

**Improving code**:

```
Use the refactoring skill to reduce duplication and
improve readability of this function.
```

### Data Analysis

**Analyzing data**:

```
Use the pandas-analysis skill to load, clean, and analyze
this CSV file. Generate visualizations.
```

### DevOps

**Creating Docker containers**:

```
Use dockerfile-creation skill to create a multi-stage Dockerfile
for a Node.js application with proper security.
```

**Kubernetes deployment**:

```
Use kubernetes-deployment skill to create YAML manifests
for a scalable microservice with health checks.
```

### Web Development

**Building React apps**:

```
Use react-development skill to create a component with
useState, useEffect, and proper performance optimization.
```

**Styling**:

```
Use css-styling skill to create a responsive layout with
Flexbox/Grid and accessibility compliance.
```

### Testing

**Unit tests**:

```
Use unit-testing skill to write comprehensive Jest tests
for this TypeScript function with mocking.
```

**Integration tests**:

```
Use integration-testing skill to create API tests that verify
database interactions and error handling.
```

### Debugging

**JavaScript debugging**:

```
I get unexpected behavior. Use javascript-debugging skill
to help step through the code with breakpoints.
```

**Python debugging**:

```
This Python function returns wrong values. Use python-debugging
skill to trace execution with pdb.
```

### AI/ML

**Prompt engineering**:

```
Use llm-prompting skill to improve this prompt's reliability
and structure with chain-of-thought reasoning.
```

**Machine learning**:

```
Use ml-model-development skill to build a classification model
with scikit-learn, including preprocessing and evaluation.
```

### Security

**Finding vulnerabilities**:

```
Use code-security skill to review this code for OWASP Top 10
vulnerabilities and suggest fixes.
```

### Documentation

**API docs**:

```
Use api-documentation skill to create an OpenAPI spec and
interactive documentation for this REST API.
```

### Architecture

**System design**:

```
Use system-design skill to design a scalable architecture
for a distributed microservice application.
```

### Git Workflow

**Collaboration**:

```
Use git-collaboration skill to set up a Git Flow workflow
with proper branching and review processes.
```

## Skill Registry

Check what skills are available:

```powershell
# View all skills
Get-Content scripts\skills-registry.json | ConvertFrom-Json |
  ForEach-Object { $_.skills } |
  Format-Table name, category, @{n='tags'; e={$_.tags -join ','}}

# Search by tag
$registry = Get-Content scripts\skills-registry.json | ConvertFrom-Json
$registry.skills | Where-Object { $_.tags -contains 'testing' }
```

## Exporting Skills

### As JSON

```powershell
.\scripts\sync-skills.ps1 -Action Export
```

### As CSV Report

```powershell
$registry = Get-Content scripts\skills-registry.json | ConvertFrom-Json
$registry.skills | Select-Object name, category, version |
  Export-Csv skills-report.csv
```

## Integration with Different LLMs

### Copilot (VS Code)

Add to VS Code settings:

```json
{
  "github.copilot.skillPaths": [
    "${workspaceFolder}/.agents/skills",
    "c:\\Tools\\AIskills\\skills"
  ]
}
```

### Claude API

Include in system prompt:

```
Available skills directory: c:\Tools\AIskills\skills

You have access to these skill categories:
- code-generation
- code-analysis
- testing
- devops
... (list all categories)

When performing tasks, mention which skill you're using.
```

### Custom LLM

Create a configuration file:

```json
{
  "skillsRoot": "c:\\Tools\\AIskills\\skills",
  "registryPath": "c:\\Tools\\AIskills\\scripts\\skills-registry.json",
  "cacheEnabled": true,
  "cacheDuration": 3600,
  "autoLoadCategories": true
}
```

## Advanced Usage

### Chaining Skills

```
1. First, use code-analysis skill to identify issues
2. Then use refactoring skill to fix them
3. Finally use unit-testing skill to verify changes
```

### Skill Parameters

Most skills accept parameters:

```
Use typescript-codegen skill with:
- strict type checking
- async/await patterns
- error handling
- proper exports
```

### Custom Skill Workflows

Create combinations:

```
Data Pipeline:
1. Use pandas-analysis for data exploration
2. Use ml-model-development for model building
3. Use api-documentation for deployment docs
```

## Troubleshooting

### Skill Not Found

```powershell
# Validate skills
.\scripts\sync-skills.ps1 -Action Validate

# Check registry is up to date
.\scripts\sync-skills.ps1 -Action Status
```

### Missing Capabilities

Some skills may not be discoverable if:

- SKILL.md is invalid
- Skill is disabled in config
- Directory structure is wrong

Solution: Run validation and check logs.

### Performance

If skills loading is slow:

- Use `-Action List` to test discovery
- Check cache status in config
- Validate no circular dependencies

## Maintenance

### Regular Checks

```powershell
# Monthly validation
.\scripts\sync-skills.ps1 -Action Validate

# Quarterly cleanup
.\scripts\sync-skills.ps1 -Action Clean

# Update registry
Get-ChildItem skills -Recurse -Filter "SKILL.md" | Measure-Object
```

### Updating Skills

To update a skill:

1. Edit the SKILL.md file
2. Update version in registry
3. Run validation
4. Test with LLM

## Shortcuts

Create PowerShell aliases for common operations:

```powershell
# Add to your PowerShell profile
Set-Alias validate-skills 'c:\Tools\AIskills\scripts\sync-skills.ps1 -Action Validate'
Set-Alias list-skills 'c:\Tools\AIskills\scripts\sync-skills.ps1 -Action List'
Set-Alias export-skills 'c:\Tools\AIskills\scripts\sync-skills.ps1 -Action Export'
```

Then use: `list-skills`, `validate-skills`, etc.

---

**Pro Tip**: Keep the registry open in your editor for quick reference of available skills!

