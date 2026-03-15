# How to Extend Your Skills Directory

## Adding New Skills

### Step 1: Choose the Right Category

First, determine which category your skill belongs to:

- **code-generation**: Code scaffolding and generation
- **code-analysis**: Code review, quality, refactoring
- **data-analysis**: Data science, statistics, visualization
- **devops**: Containerization, orchestration, deployment
- **web-development**: Frontend, UI, styling
- **debugging**: Finding and fixing issues
- **testing**: Test frameworks, test generation
- **ai-ml**: LLM, machine learning, AI
- **security**: Vulnerabilities, secure practices
- **documentation**: Docs, API specs, guides
- **architecture**: System design, patterns, scalability
- **git-workflow**: Version control, collaboration

Don't see a category? ➜ Create a new one ([see below](#adding-new-categories))

### Step 2: Create the Skill Directory

Create a new directory with a descriptive, hyphenated name:

```
skills/{category}/{skill-name}/
```

Example:

```
skills/code-analysis/performance-optimization/
```

### Step 3: Create SKILL.md

Inside your skill directory, create `SKILL.md`:

```markdown
# Performance Optimization

**Expert in**: Identifying and eliminating performance bottlenecks in code and systems.

## Capabilities

- Identify slow algorithms (Big O analysis)
- Find Memory leaks and inefficient data structures
- Optimize database queries
- Reduce bundle sizes
- Enable caching strategies
- Parallelize operations
- Profile code execution
- Optimize N+1 query problems

## Use this skill when:

- Application performance is slow
- Need to optimize for production
- Scaling challenges
- User experience issues
- Resource constraints
- Load testing failures

## Key techniques

- Profiling with DevTools and performance tools
- Big O notation and complexity analysis
- Caching strategies (Redis, browser cache)
- Database indexing and query optimization
- Code splitting and lazy loading
- Algorithmic improvements
- Memory management

## Tags

`performance` `optimization` `profiling` `scaling` `efficiency`
```

### Step 4: Update skills-registry.json

Add your skill to `scripts/skills-registry.json`:

```json
{
  "name": "Performance Optimization",
  "category": "code-analysis",
  "path": "skills/code-analysis/performance-optimization",
  "version": "1.0.0",
  "tags": ["performance", "optimization", "profiling", "scaling", "efficiency"],
  "description": "Identifying and eliminating performance bottlenecks in code and systems.",
  "capabilities": [
    "Identify slow algorithms",
    "Find memory leaks",
    "Optimize database queries",
    "Reduce bundle sizes"
  ],
  "dependency": null,
  "enabled": true,
  "source": "internal"
}
```

### Step 5: Validate

Run the sync script to validate:

```powershell
cd c:\Tools\AIskills
.\scripts\sync-skills.ps1 -Action Validate
```

Expected output:

```
✓ performance-optimization
Validation complete: X valid, 0 invalid
```

## Skill Documentation Guidelines

### Title

Use a clear, action-oriented title:

- ✓ "Performance Optimization"
- ✓ "Vue Component Development"
- ✗ "Vue"
- ✗ "Performance"

### Expert In Section

One line describing what the skill handles:

```
**Expert in**: Identifying and fixing memory leaks in Python applications.
```

### Capabilities

List 4-8 specific things it can do:

- Use action verbs (identify, create, optimize, analyze)
- Be specific and concrete
- Avoid generic statements

### Use This Skill When

List 3-5 scenarios where the skill applies:

- Problem-focused scenarios
- Task-oriented use cases
- Real-world situations

### Key Techniques

List 3-10 approaches or patterns:

- Implementation patterns
- Tools and methods
- Best practices
- Algorithm names

### Tags

Use 3-10 tags covering:

- **Language/Platform**: javascript, python, java
- **Domain**: web, devops, performance
- **Tool**: react, jest, docker
- **Methodology**: tdd, agile, bdd
- **Level**: beginner, intermediate, expert

## Creating a New Category

### Step 1: Create Directory

```
skills/{new-category}/
```

Example: `skills/mobile-development/`

### Step 2: Add First Skill

Create your first skill in this category:

```
skills/mobile-development/react-native-development/SKILL.md
```

### Step 3: Update Category Registry

Add to the `categories` array in `skills-registry.json`:

```json
{
  "name": "mobile-development",
  "displayName": "Mobile Development",
  "description": "Skills for iOS, Android, and cross-platform development",
  "skillCount": 1,
  "enabled": true
}
```

### Step 4: Update Main Registry

Update `totalSkills` and `categories` count at top of `skills-registry.json`

### Step 5: Document

Update `README.md` Categories section:

```markdown
### Mobile Development

- **React Native**: Cross-platform development
```

## Example: Adding a New Skill

### Real Example: "Electron App Development"

**1. Create directory:**

```
skills/web-development/electron-app-development/
```

**2. Create SKILL.md:**

```markdown
# Electron App Development

**Expert in**: Building desktop applications with web technologies using Electron.

## Capabilities

- Create Electron main and renderer processes
- Handle inter-process communication (IPC)
- Implement native menus and window management
- Package and distribute electron apps
- Integrate with native modules
- Handle auto-updates
- Optimize app performance
- Create installer packages

## Use this skill when:

- Building cross-platform desktop apps
- Creating desktop versions of web apps
- Need native OS integration
- Distributing software to end users
- Creating productivity tools
- Building IDE-like applications

## Key techniques

- Main process and renderer process separation
- IPC for process communication
- Electron Builder for packaging
- Asar archives for app distribution
- Native modules with node-gyp
- Code signing for macOS/Windows
- Auto-update with electron-updater

## Tags

`electron` `desktop` `web-technologies` `electron-builder` `cross-platform`
```

**3. Add to Registry:**

```json
{
  "name": "Electron App Development",
  "category": "web-development",
  "path": "skills/web-development/electron-app-development",
  "version": "1.0.0",
  "tags": ["electron", "desktop", "web-technologies", "cross-platform"],
  "description": "Building desktop applications with web technologies using Electron."
  ...
}
```

**4. Validate:**

```powershell
.\scripts\sync-skills.ps1 -Action Validate
```

**5. List to verify:**

```powershell
.\scripts\sync-skills.ps1 -Action List
```

## Tagging Strategy

### Required Tags (pick from these):

**Languages/Platforms:**

- typescript, javascript, python, java, csharp, ruby, go, rust

**Domains:**

- web, mobile, desktop, devops, data, ai, security, architecture

**Tools/Frameworks:**

- react, angular, vue, fastapi, django, jest, pytest, docker, kubernetes

**Methodologies:**

- agile, tdd, bdd, ddd, functional, oop

**Difficulty Levels:**

- beginner, intermediate, expert

**Custom Tags:**

- performance, testing, refactoring, debugging, etc.

### Example Tag Sets:

- React skill: `react` `javascript` `web` `frontend` `hooks`
- Docker skill: `docker` `devops` `containerization` `ci-cd` `security`
- ML skill: `machine-learning` `python` `ai` `scikit-learn` `data-science`

## Best Practices

### 1. Keep It Focused

One primary purpose per skill. Don't combine unrelated concepts.

**Good:**

- "React Development" (components, hooks, state)
- "Docker Optimization" (image size, performance)

**Bad:**

- "Web Development" (too broad)
- "Everything JavaScript" (unfocused)

### 2. Be Specific

Use concrete terms, not generic ones.

**Good:**

- "Elasticsearch Query Optimization"
- "GraphQL Schema Design"
- "Async/Await Pattern Implementation"

**Bad:**

- "Database"
- "Type Systems"
- "Data Structures"

### 3. Document With Examples

While SKILL.md doesn't need code examples, make capabilities concrete:

**Good:**

- "Create type-safe API clients with proper error handling"
- "Implement Redis caching for database queries"

**Bad:**

- "Handle code generation"
- "Optimize systems"

### 4. Use Consistent Formatting

- Titles: Title Case
- Tags: lowercase, hyphenated
- Sections: Bold headers with ##
- Lists: Bullet points with hyphens

### 5. Version Properly

Use semantic versioning:

- `1.0.0` - First release
- `1.1.0` - New features, backwards compatible
- `2.0.0` - Breaking changes
- Update `version` in registry when you make changes

## Skill Dependencies (Optional)

If your skill depends on another:

```json
{
  "name": "Advanced React",
  "dependency": "React Development",
  ...
}
```

This helps LLMs understand prerequisites.

## Disabling Skills

Without deleting, disable a skill:

```json
{
  "name": "Legacy Skill",
  "enabled": false,
  ...
}
```

Disabled skills won't be discovered but remain available.

## Updating Existing Skills

1. Edit the `SKILL.md` file
2. Update `version` in registry
3. Note what changed:
   ```json
   "version": "1.1.0"  // was 1.0.0
   ```
4. Run validation
5. Test with LLM

## Testing Your Skills

After adding a skill:

1. **Validate structure:**

   ```powershell
   .\scripts\sync-skills.ps1 -Action Validate
   ```

2. **List to verify it appears:**

   ```powershell
   .\scripts\sync-skills.ps1 -Action List
   ```

3. **Export and check JSON:**

   ```powershell
   .\scripts\sync-skills.ps1 -Action Export
   ```

4. **Test with LLM:**
   - Point LLM to skills directory
   - Reference the skill by name
   - Verify it's discovered and used

## Common Mistakes to Avoid

❌ **Missing SKILL.md**: Skill won't be discovered

- Fix: Create SKILL.md in skill directory

❌ **Missing registry entry**: Skill won't be searchable

- Fix: Add entry to skills-registry.json

❌ **Wrong file name**: Must be exactly `SKILL.md`

- Fix: Rename `Skill.md` → `SKILL.md`

❌ **Incomplete SKILL.md**: Validation will fail

- Fix: Include all required sections

❌ **Non-English tags**: May not be discovered

- Fix: Use English descriptive tags

❌ **Too many tags**: 10+ tags is excessive

- Fix: Keep to 3-10 most relevant tags

❌ **Empty capabilities list**: Not helpful

- Fix: List concrete capabilities

## Folder Structure Checklist

When adding a new skill, ensure:

```
✓ Directory name is lowercase, hyphenated
✓ SKILL.md exists in the directory
✓ SKILL.md has all required sections
✓ Title matches skill name
✓ Capabilities list is 4+ items
✓ Use cases list is 3+ items
✓ Techniques list is 3+ items
✓ Tags are 3-10 items
✓ Registry entry created
✓ Version is set (typically 1.0.0)
✓ Validation passes
✓ Enabled is true
```

---

**Remember**: Skills should be discoverable, useful, and specific. Each skill helps an LLM understand its expertise and when to use it.

