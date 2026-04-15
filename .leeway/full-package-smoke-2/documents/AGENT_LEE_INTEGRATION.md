# Agent Lee Integration Guide

**Connect Agent Lee to Leeway Skills via MCP**

## Quick Start (5 minutes)

### Step 1: Start the MCP Server

```powershell
cd c:\Tools\Leeway-Skills\mcp-server
npm install       # First time only
npm run build     # Build TypeScript
npm start         # Start the server
```

Expected output:

```
[Leeway Skills MCP] Loaded 44 skills from registry
[Leeway Skills MCP] Server started successfully
[Leeway Skills MCP] Serving 44 skills
[Leeway Skills MCP] Ready to accept tool calls from LLMs
```

Keep this running in a terminal window.

### Step 2: Configure Agent Lee

Add to your Agent Lee configuration file (e.g., `.agent.json` or `config.yaml`):

```json
{
  "version": "1.0.0",
  "agent": {
    "name": "Agent Lee",
    "model": "claude-3-opus-20240229",
    "creator": "Leonard Jerome Lee"
  },
  "mcp": {
    "enabled": true,
    "servers": [
      {
        "name": "leeway-skills",
        "description": "Leeway Skills MCP Server - 44 AI skills as tools",
        "command": "node",
        "args": ["c:\\Tools\\Leeway-Skills\\mcp-server\\dist\\index.js"],
        "env": {
          "LEEWAY_SKILLS_PATH": "c:\\Tools\\Leeway-Skills"
        }
      }
    ]
  },
  "capabilities": {
    "tools": {
      "enabled": true,
      "discover": true,
      "execute": true,
      "chain": true
    },
    "skills": {
      "enabled": true,
      "skillLibrary": "leeway-skills"
    }
  },
  "instructions": "You are Agent Lee, powered by Leeway Skills. You have access to 44 professional AI skills as tools. Use the appropriate skill for each task.",
  "tools": {
    "mcpServers": ["leeway-skills"],
    "autoDiscover": true,
    "caching": {
      "enabled": true,
      "ttl": 3600
    }
  }
}
```

### Step 3: Use Skills in Agent Lee Prompts

```
Agent Lee, use the typescript-codegen skill to generate a type-safe REST API client.

Agent Lee, apply the llm-prompting skill to improve this prompt:
"Create a user management system"

Agent Lee, help me debug this Python code using the python-debugging skill.
```

### Step 4: Agent Lee Responds with Skill Results

Agent Lee now:

- ✅ Discovers available skills via MCP
- ✅ Calls the appropriate skill
- ✅ Integrates skill results into responses
- ✅ Can chain multiple skills together
- ✅ Can pass skills to other agents

---

## Detailed Configuration

### Full Agent Lee Config Example

```yaml
# agent-lee-config.yaml
version: "1.0.0"
name: "Agent Lee"
description: "Advanced AI Agent with Leeway Skills Integration"
creator: "Leonard Jerome Lee"
organization: "Leeway Industries"

# AI Model Configuration
ai:
  provider: "anthropic"
  model: "claude-3-opus-20240229"
  maxTokens: 4096
  temperature: 0.7

# MCP Server Configuration
mcp:
  enabled: true
  stdio: true
  servers:
    - name: "leeway-skills"
      description: "Enterprise skills library via MCP"
      command: "node"
      args:
        - "c:\\Tools\\Leeway-Skills\\mcp-server\\dist\\index.js"
      env:
        LEEWAY_SKILLS_PATH: "c:\\Tools\\Leeway-Skills"
      autostart: true
      restartPolicy: "on-failure"

# Tool Configuration
tools:
  mcp:
    enabled: true
    autoDiscover: true
    toolCache:
      enabled: true
      ttl: 3600

  leeway:
    skillLibrary: "leeway-skills"
    autoLoad: true
    categories:
      - "code-generation"
      - "code-analysis"
      - "agent-patterns"
      - "ai-ml"
      - "testing"
      - "devops"

# Agent Behavior
behavior:
  skillPreference: "Use Leeway Skills for all applicable tasks"
  chaining:
    enabled: true
    maxDepth: 5
  execution:
    timeout: 30000
    retries: 2

# Memory & Context
memory:
  enabled: true
  skillHistory: true
  executionLogs: true
  loggingPath: ".leeway/logs"

# Instructions for Agent Lee
instructions: |
  You are Agent Lee, an advanced autonomous agent created by Leonard Jerome Lee.

  You have access to the Leeway Skills library with 44 professional skills as tools.
  These skills cover:
  - Code generation (TypeScript, Python, Full-stack)
  - Code analysis and refactoring
  - AI/ML expertise (LLM prompting, ML models)
  - Agent patterns and orchestration
  - Testing and debugging
  - DevOps and infrastructure
  - Database design
  - And 18 more domains

  When a user asks for something:
  1. Identify the most relevant skill(s)
  2. Call the skill with appropriate context
  3. Integrate the result into your response
  4. If needed, chain multiple skills
  5. Explain what you did and why

  Always prefer Leeway Skills over generic responses. They provide expert-level guidance.
```

### Agent Lee Custom Initialization

Create `agent-lee-init.js`:

```javascript
import AgentLee from "@leeway/agent-lee";
import MCPClient from "@modelcontextprotocol/sdk/client/index.js";

// Initialize Agent Lee
const agentLee = new AgentLee({
  name: "Agent Lee",
  creator: "Leonard Jerome Lee",
  model: "claude-3-opus-20240229",
});

// Connect to Leeway Skills MCP Server
const mcpClient = new MCPClient({
  serverCommand: "node",
  serverArgs: ["c:\\Tools\\Leeway-Skills\\mcp-server\\dist\\index.js"],
});

await mcpClient.connect();
const leewaySkills = await mcpClient.listTools();

// Inject Leeway Skills as tools into Agent Lee
agentLee.setTools(leewaySkills);

// Now Agent Lee has access to all Leeway Skills
console.log(`Agent Lee initialized with ${leewaySkills.length} skills`);

// Example usage
const result = await agentLee.process(
  "Generate a TypeScript API client using the typescript-codegen skill",
);
console.log(result);
```

---

## Skill Usage Examples

### Example 1: Code Generation

**Prompt**:

```
Use the typescript-codegen skill to create a REST API client for a User management service.
Include proper error handling and async/await patterns.
```

**Agent Lee Response**:

```
I'll use the typescript-codegen skill to create a robust API client.

[Calling: typescript-codegen]
- Instruction: Create REST API client for User management
- Context: Framework=axios, Patterns=async/await, Services=User management
- Options: includeErrorHandling=true, includeTypes=true

Generated result:
```

export class UserAPIClient {
private baseURL = "/api/users";

async getUser(id: string): Promise<User> { ... }
async createUser(data: UserInput): Promise<User> { ... }
async deleteUser(id: string): Promise<void> { ... }
}

```

Agent Lee: This client uses the typescript-codegen skill's best practices for type safety and async patterns.
```

### Example 2: Agent Orchestration

**Prompt**:

```
I need to build a multi-agent system. Use the agent-orchestration skill to show me the architecture.
Then apply the agent-autonomy-patterns skill to add decision-making capabilities.
```

**Agent Lee Response**:

```
I'll use two Leeway Skills to build your multi-agent system.

[Calling: agent-orchestration]
Result: Multi-agent architecture with:
- Coordinator agent
- Worker agents
- Message queue
- State management

[Calling: agent-autonomy-patterns]
Result: Added autonomous capabilities:
- Goal-setting
- Decision-making
- Self-reflection
- Adaptive learning

Combined result: Your system now has orchestrated multi-agents with autonomous decision-making.
```

### Example 3: Skill Chaining

**Prompt**:

```
Generate TypeScript code, then analyze it for issues, then create tests for it.
```

**Agent Lee Response**:

```
I'll chain three Leeway Skills together:

[1] typescript-codegen → Generated API client code
[2] static-analysis → Found 3 potential issues
    • Error handling not comprehensive
    • Missing input validation
    • Type safety could be improved
[3] unit-testing → Created comprehensive test suite
    • 15 unit tests
    • 3 integration tests
    • Mock implementations

Final result: Production-ready typed code with full test coverage.
```

---

## Advanced Features

### Multi-Agent Skill Sharing

**Agent Lee sharing skills with other agents:**

```javascript
// Agent Lee discovers all Leeway Skills
const availableSkills = await agentLee.discoverTools();

// Agent Lee shares skills with Agent Alice
await agentAlice.receiveTools(...availableSkills);

// Agent Alice can now use any Leeway Skill
const result = await agentAlice.useTool("llm-prompting", {
  instruction: "Improve this prompt for clarity",
  context: { originalPrompt: userInput },
});
```

### Skill Composition

**Creating complex workflows:**

```javascript
const workflow = agentLee.createWorkflow([
  {
    name: "code-generation",
    skill: "typescript-codegen",
    input: { instruction: "Create API types" },
  },
  {
    name: "architecture-review",
    skill: "system-design-architecture",
    input: { instruction: "Review the architecture" },
    dependsOn: ["code-generation"],
  },
  {
    name: "create-tests",
    skill: "unit-testing",
    input: { instruction: "Create tests" },
    dependsOn: ["code-generation"],
  },
]);

const result = await workflow.execute();
```

### Conditional Skill Selection

**Agent Lee choosing skills dynamically:**

```javascript
const taskDescription = "Optimize this Python code";

// Agent Lee analyzes the task
const bestSkill = await agentLee.selectSkill(taskDescription);
// Result: "performance-optimization" skill

// Execute the selected skill
const result = await agentLee.executeTool(bestSkill, {
  instruction: taskDescription,
});
```

---

## Troubleshooting

### Agent Lee Can't Find MCP Server

**Problem**:

```
Error: Could not connect to MCP server
```

**Solution**:

1. Ensure MCP server is running
2. Check command path is correct in config
3. Verify Node.js is installed and in PATH
4. Check server logs for startup errors

### Skills Not Appearing in Agent Lee

**Problem**:

```
0 tools available
```

**Solution**:

1. Verify registry file exists: `ls c:\Tools\Leeway-Skills\scripts\skills-registry.json`
2. Check registry JSON is valid: `cat registry.json | jq .`
3. Ensure skills have `"enabled": true` in registry
4. Restart Agent Lee after making config changes

### Skill Execution Timeout

**Problem**: Agent Lee hangs when calling skills

**Solution**:

1. Increase timeout in config: `execution: { timeout: 60000 }`
2. Check skill is not waiting for input
3. Monitor MCP server logs for errors
4. Check system resources (CPU, memory)

---

## Performance Optimization

### Skill Caching

```json
{
  "tools": {
    "skillCache": {
      "enabled": true,
      "ttl": 3600,
      "maxSize": 100
    }
  }
}
```

### Parallel Skill Execution

```javascript
// Execute multiple skills in parallel
const results = await Promise.all([
  agentLee.useTool("typescript-codegen", params1),
  agentLee.useTool("unit-testing", params2),
  agentLee.useTool("static-analysis", params3),
]);
```

### Skill Pool

```javascript
// Maintain pool of skill instances for concurrent usage
const skillPool = agentLee.createSkillPool({
  poolSize: 5,
  skillName: "typescript-codegen",
});
```

---

## Monitoring & Logging

### Enable Detailed Logging

```json
{
  "logging": {
    "level": "debug",
    "format": "json",
    "outputs": ["console", ".leeway/logs/agent-lee.log"]
  }
}
```

### Monitor Skill Usage

```javascript
// Track skill execution
agentLee.on("skill-executed", (event) => {
  console.log(`Skill: ${event.skillName}`);
  console.log(`Duration: ${event.duration}ms`);
  console.log(`Success: ${event.success}`);
});
```

---

## Best Practices

1. ✅ **Always specify the skill name explicitly** - Don't rely on auto-detection
2. ✅ **Provide rich context** - Include code, requirements, framework info
3. ✅ **Validate skill output** - Don't blindly use generated results
4. ✅ **Log skill usage** - Enable execution logging for audits
5. ✅ **Monitor performance** - Track skill execution times
6. ✅ **Chain strategically** - Limit chaining depth to 3-5 skills
7. ✅ **Handle errors gracefully** - Plan for skill execution failures

---

## Support

For issues or questions:

- Check MCP server logs: `mcp-server/logs/`
- Review skill documentation: `skills/{category}/{skill}/SKILL.md`
- Read Leeway Standards: `documents/LEEWAY_STANDARDS_COMPLIANCE.md`

---

**Status**: ✅ Ready to Use  
**Organization**: Leeway Industries | By Leonard Jerome Lee  
**Last Updated**: March 15, 2026

