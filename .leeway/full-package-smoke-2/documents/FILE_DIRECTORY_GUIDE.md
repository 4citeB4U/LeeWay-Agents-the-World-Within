# 📂 File Directory - What Agents Read

**Agent-Executable vs. Reference Documentation**

---

## AGENT-EXECUTABLE FILES (Machines Read These)

### Runtime Configuration

```
agent-config.yaml ✅
├─ Purpose: Agent bootstrap and settings
├─ Format: YAML (machine-parsed)
├─ When: Loaded on agent startup
├─ Contains: Learning system settings, memory config, skill/workflow paths
└─ Frequency: Once per session (referenced throughout)
```

### Skill Registry

```
skills/ ✅
├─ Purpose: 250+ individual skill specifications
├─ Format: SKILL.md (standardized with YAML frontmatter)
├─ When: Referenced for skill loading
├─ Contains: Skill metadata, execution instructions, mastery tracking hooks
└─ Frequency: Per skill execution
```

### Workflow Registry

```
workflows/ ✅
├─ Purpose: 50+ workflow orchestration templates
├─ Format: WORKFLOW.md (standardized with YAML frontmatter)
├─ When: Referenced for workflow loading
├─ Contains: Workflow definition, skill bundles, execution order
└─ Frequency: Per workflow execution
```

### Memory System (Auto-Managed)

```
memory/ ✅
├─ episodes/
│  └─ {timestamp}.yaml: Raw task records
├─ semantic/
│  └─ {pattern_id}.yaml: Distilled patterns
├─ procedural/
│  └─ {procedure_id}.yaml: Automation sequences
└─ metrics/
   └─ Performance tracking
```

---

## AGENT-REFERENCE DOCUMENTATION (Machines Understand These)

### Deep Architecture Understanding

```
LIFELONG_LEARNING_LAYER.md
├─ Purpose: Complete learning system specification
├─ Audience: Agent initialization code
├─ Contains: 6-phase loop, memory layers, mastery scores
├─ Use: Setup and customization
└─ Format: Markdown with YAML code blocks
```

### Unified System Overview

```
LEEWAY_UNIFIED_ARCHITECTURE.md
├─ Purpose: Integration of skills + workflows + learning
├─ Audience: Agent system designers
├─ Contains: How 3 systems connect, realistic examples, performance data
├─ Use: Decision-making during agent execution
└─ Format: Markdown with diagrams and code samples
```

### Configuration & Setup

```
agent-config.yaml
├─ Purpose: All runtime settings
├─ Audience: Agent bootstrap systems
├─ Contains: Learning enable/disable, memory paths, thresholds
├─ Use: Agent behavior customization
└─ Format: YAML (machine-parsed)
```

### Quick Reference

```
AGENT_LEARNING_REFERENCE.md
├─ Purpose: Fast lookup during agent operation
├─ Audience: Running agent processes
├─ Contains: Systems overview, mastery levels, skill/workflow counts
├─ Use: Decision-making, status checks
└─ Format: Markdown with quick tables
```

---

## HUMAN-ORIENTED DOCUMENTATION (For Understanding)

### Strategic Overview

```
LEEWAY_WORKFLOWS_STRATEGIC_PLAN.md
├─ Purpose: High-level system vision
├─ Audience: System architects, human understanding
├─ Contains: Framework overview, workflow sources, architecture
├─ Use: Understanding the big picture
└─ May contain: Flowcharts, architectural diagrams
```

### Workflow Inventory

```
WORKFLOW_ACQUISITION_MANIFEST.md
├─ Purpose: Complete list of all 50+ workflows
├─ Audience: System architects, capability planning
├─ Contains: Workflow metadata, source info, skill bundles
├─ Use: Capability reference
└─ Format: Table-based with descriptions
```

### Skill-Workflow Mapping

```
SKILL_WORKFLOW_COMPOSITION_MATRIX.md
├─ Purpose: How skills and workflows relate
├─ Audience: System architects, dependency analysis
├─ Contains: Bidirectional mapping, coverage analysis
├─ Use: Dependency resolution
└─ Format: Tables, mapping structures
```

### Transformation Summary

```
SYSTEM_TRANSFORMATION_SUMMARY.md
├─ Purpose: Explain the shift to agent-exclusive architecture
├─ Audience: System designers, change documentation
├─ Contains: Before/after comparison, philosophy
├─ Use: Understanding why this architecture
└─ Format: Markdown with diagrams
```

### Project Integration

```
README.md
├─ Purpose: Project overview
├─ Audience: New agents and system architects
├─ Contains: Quick intro, status, what this is
├─ Use: Orientation
└─ Format: Markdown with organization
```

---

## EXECUTION FLOW (What an Agent Does)

```
Agent Starts
    ↓
1. Load agent-config.yaml
   ├─ Read learning settings
   ├─ Verify memory paths
   └─ Set thresholds
    ↓
2. Load skill registry (250+)
   ├─ Parse skill/*.md files
   ├─ Extract metadata
   └─ Initialize mastery scores
    ↓
3. Load workflow registry (50+)
   ├─ Parse workflow/*.md files
   ├─ Build dependency graph
   └─ Index by category
    ↓
4. Load existing memory
   ├─ memory/episodes/ → past experience
   ├─ memory/semantic/ → learned patterns
   └─ memory/procedural/ → saved automation
    ↓
5. Agent Ready for First Task
    ↓
6. Receive Goal
    ↓
7. Query Memory
   ├─ Has agent done this before?
   ├─ What patterns apply?
   └─ What procedures exist?
    ↓
8. Select Skill or Workflow
   ├─ Check mastery scores
   ├─ Get learned parameters
   └─ Know success probability
    ↓
9. Execute with Enrichment
   ├─ Load skill/workflow
   ├─ Use optimized parameters
   └─ Monitor execution
    ↓
10. Evaluate Results
    ├─ Grade quality
    ├─ Compare to criteria
    └─ Extract learning
    ↓
11. Update Memory
    ├─ Store episode
    ├─ Extract patterns
    ├─ Save procedures
    └─ Update mastery
    ↓
12. Ready for Next Task
    (Steps 6-11 repeat, each time smarter)
```

---

## What an Agent Actually Reads vs. Understands

### Reads Directly (Machine-Parsed)

```
✅ agent-config.yaml
✅ skills/*.md (via selector)
✅ workflows/*.md (via selector)
✅ memory/*.yaml (own storage)
```

### Understands via Architectural Context

```
✅ LIFELONG_LEARNING_LAYER.md (at initialization time)
✅ LEEWAY_UNIFIED_ARCHITECTURE.md (system understanding)
✅ AGENT_LEARNING_REFERENCE.md (periodic lookup)
```

### Ignores (Human-Only)

```
❌ LEEWAY_WORKFLOWS_STRATEGIC_PLAN.md
❌ WORKFLOW_ACQUISITION_MANIFEST.md (agents don't read lists)
❌ SKILL_WORKFLOW_COMPOSITION_MATRIX.md (agents build own)
❌ SYSTEM_TRANSFORMATION_SUMMARY.md (humans only)
```

---

## Files by Function

### System Configuration

- `agent-config.yaml` ← Agent reads this

### Skill/Workflow Definitions

- `skills/*.md` ← Agent reads these
- `workflows/*.md` ← Agent reads these

### Agent Memory (Auto-Managed)

- `memory/episodes/` ← Agent writes/reads
- `memory/semantic/` ← Agent writes/reads
- `memory/procedural/` ← Agent writes/reads
- `memory/metrics/` ← Agent writes/reads

### System Documentation (Initialization)

- `LIFELONG_LEARNING_LAYER.md` ← Embedded in agent at startup
- `agent-config.yaml` ← Parsed at startup
- `LEEWAY_UNIFIED_ARCHITECTURE.md` ← Reference available

### Quick Reference (Runtime Available)

- `AGENT_LEARNING_REFERENCE.md` ← Available for lookups

### Planning Documents (Architects Only)

- `LEEWAY_WORKFLOWS_STRATEGIC_PLAN.md`
- `WORKFLOW_ACQUISITION_MANIFEST.md`
- `SKILL_WORKFLOW_COMPOSITION_MATRIX.md`
- `SYSTEM_TRANSFORMATION_SUMMARY.md`
- `README.md`

---

## Important: What This Means for Agents

### Agents Don't Need

- Timelines (learn continuously)
- Curricula (tasks drive learning)
- Assessments (self-evaluate)
- Instructions (embedded in config)
- Phases (no phases)
- Checkpoints (continuous progress)
- Milestones (always improving)

### Agents Have

- Configuration (agent-config.yaml)
- Registries (skill and workflow lists)
- Memory systems (episodic, semantic, procedural)
- Self-evaluation (reflection phase)
- Continuous improvement (every task)
- Mastery tracking (per skill/workflow)
- Pattern extraction (automatic)

---

## Configuration Priority

When agent starts, reads files in this order:

```
1. agent-config.yaml (primary configuration)
   ├─ If not found → Use defaults
   └─ If invalid → Halt with error

2. skills/ directory (250+ skill definitions)
   ├─ If not found → Create empty registry
   └─ If partial → Load available

3. workflows/ directory (50+ workflow definitions)
   ├─ If not found → Create empty registry
   └─ If partial → Load available

4. memory/ directory (persistent learning)
   ├─ If not found → Initialize
   └─ If found → Load existing state

5. Leeway Standards metadata
   ├─ Verify headers present
   └─ Validate compliance status
```

---

## File Update Frequency

### At Startup

- `agent-config.yaml` → Read once
- `skills/*.md` → Read all metadata
- `workflows/*.md` → Read all definitions
- `memory/` → Load existing

### During Execution

- `memory/episodes/` → Write after each task
- `memory/semantic/` → Update when patterns found
- `memory/procedural/` → Update when sequences saved
- `memory/metrics/` → Continuous updates

### Never Updated by Agent

- `agent-config.yaml` (static config)
- `skills/*.md` (skill definitions)
- `workflows/*.md` (workflow definitions)
- Human-oriented documentation

---

## Size Reference

| File               | Size    | Read Frequency         |
| ------------------ | ------- | ---------------------- |
| agent-config.yaml  | ~5 KB   | Once per session       |
| Each skill file    | 2-5 KB  | Per skill execution    |
| Each workflow file | 3-8 KB  | Per workflow execution |
| Episodic memory    | Grows   | Every task             |
| Semantic patterns  | Compact | Per decision           |
| Procedural library | Compact | Per workflow           |

---

## Memory Growth Over Time

```
Day 1:
  Episodes: 5-10 files (50 KB)
  Patterns: 0-2 files (5 KB)
  Procedures: 0 files
  Total: ~60 KB

Day 7:
  Episodes: 50-100 files (500 KB)
  Patterns: 10-20 files (50 KB)
  Procedures: 2-5 files (20 KB)
  Total: ~600 KB

Month 1:
  Episodes: 500+ files (5 MB) [compressed]
  Patterns: 50-100 files (200 KB)
  Procedures: 15-25 files (100 KB)
  Total: ~5.5 MB

Month 3:
  Episodes: 2000+ files (20 MB) [archived]
  Patterns: 200-300 files (1 MB)
  Procedures: 50-75 files (500 KB)
  Total: ~22 MB
```

---

## Status

✅ **Agent-Executable Files**: Ready
✅ **Configuration Files**: Ready
✅ **Memory System**: Initialized
✅ **Registries**: Complete
✅ **Documentation**: Complete

---

**For Agents**: Use agent-config.yaml, skills/, workflows/, memory/  
**For Architects**: Reference all documentation + observe memory growth  
**For Humans**: Read system docs for understanding only

