#!/usr/bin/env node

/*
LEEWAY HEADER — DO NOT REMOVE

REGION: LEEWAY.SKILLS.MCP
TAG: LEEWAY.SKILLS.MCP.SERVER

COLOR_ONION_HEX:
NEON=#39FF14
FLUO=#0DFF94
PASTEL=#C7FFD8

ICON_ASCII:
family=lucide
glyph=server

5WH:
WHAT = Leeway Skills MCP Server - Exposes all Leeway Skills as callable MCP tools
WHY = Enables Agent Lee and other LLMs to use skills as first-class tools via MCP protocol
WHO = Leeway Industries (By Leonard Jerome Lee)
WHERE = mcp-server/src/index.ts
WHEN = 2026
HOW = Node.js MCP server that reads skill definitions and exposes them as callable tools

AGENTS:
SERVE
EXECUTE
INTROSPECT

LICENSE:
MIT
*/

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
    CallToolRequestSchema,
    ListToolsRequestSchema,
    Tool
} from "@modelcontextprotocol/sdk/types.js";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * SkillsTool - Maps a Leeway Skill to an MCP Tool
 */
export interface SkillsTool {
  name: string;
  category: string;
  description: string;
  capabilities: string[];
  tags: string[];
  skillPath: string;
  version: string;
}

export interface SkillRegistryEntry {
  name: string;
  category: string;
  path: string;
  version?: string;
  tags?: string[];
  description: string;
  capabilities?: string[];
  enabled?: boolean;
}

export interface SkillRegistry {
  skills?: SkillRegistryEntry[];
}

export interface ToolCallArguments {
  instruction: string;
  context?: Record<string, unknown>;
  options?: Record<string, unknown>;
}

/**
 * LeewaySkillsMCPServer - Main MCP server implementation
 *
 * Provides:
 * - Tool listing (all available skills)
 * - Tool invocation (execute skill logic)
 * - Tool introspection (get skill metadata)
 */
export class LeewaySkillsMCPServer {
  private server: Server;
  private skills: Map<string, SkillsTool> = new Map();
  private registryPath: string;

  constructor() {
    this.registryPath = path.resolve(
      __dirname,
      "../../scripts/skills-registry.json",
    );

    this.server = new Server(
      {
        name: "leeway-skills-mcp",
        version: "1.0.0",
      },
      {
        capabilities: {
          tools: {},
        },
      },
    );

    this.setupHandlers();
  }

  /**
   * Load all skills from the registry
   */
  async loadSkills(): Promise<void> {
    try {
      const registryContent = await fs.readFile(this.registryPath, "utf-8");
      const registry = JSON.parse(registryContent) as SkillRegistry;

      if (registry.skills && Array.isArray(registry.skills)) {
        registry.skills.forEach((skill) => {
          if (skill.enabled) {
            const skillId = skill.name.toLowerCase().replace(/\s+/g, "-");

            this.skills.set(skillId, {
              name: skill.name,
              category: skill.category,
              description: skill.description,
              capabilities: skill.capabilities || [],
              tags: skill.tags || [],
              skillPath: skill.path,
              version: skill.version || "1.0.0",
            });
          }
        });
      }

      console.error(
        `[Leeway Skills MCP] Loaded ${this.skills.size} skills from registry`,
      );
    } catch (error) {
      console.error(
        `[Leeway Skills MCP] Error loading skills registry:`,
        error,
      );
    }
  }

  /**
   * Setup MCP handlers
   */
  private setupHandlers(): void {
    /**
     * Handle tool listing
     */
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      const tools: Tool[] = [];

      for (const [skillId, skill] of this.skills) {
        tools.push({
          name: skillId,
          description: `${skill.description}\n\nCategory: ${skill.category}\nCapabilities: ${skill.capabilities.join(", ")}`,
          inputSchema: {
            type: "object",
            properties: {
              instruction: {
                type: "string",
                description: `Detailed instruction for applying the ${skill.name} skill`,
              },
              context: {
                type: "object",
                description: "Additional context or code to analyze/generate",
                properties: {
                  code: { type: "string" },
                  files: { type: "array", items: { type: "string" } },
                  requirements: { type: "string" },
                  framework: { type: "string" },
                  language: { type: "string" },
                },
              },
              options: {
                type: "object",
                description: "Skill-specific options and parameters",
                additionalProperties: true,
              },
            },
            required: ["instruction"],
          },
        });
      }

      return { tools };
    });

    /**
     * Handle tool execution
     */
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const toolName = request.params.name;
      const skill = this.skills.get(toolName);

      if (!skill) {
        return {
          content: [
            {
              type: "text" as const,
              text: `Error: Skill "${toolName}" not found. Available skills: ${Array.from(this.skills.keys()).join(", ")}`,
            },
          ],
          isError: true,
        };
      }

      try {
        const result = await this.executeSkill(
          skill,
          this.normalizeToolArgs(request.params.arguments),
        );

        return {
          content: [
            {
              type: "text" as const,
              text: result,
            },
          ],
        };
      } catch (error) {
        return {
          content: [
            {
              type: "text" as const,
              text: `Error executing skill "${toolName}": ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        };
      }
    });
  }

  /**
   * Execute a skill with given parameters
   */
  private async executeSkill(
    skill: SkillsTool,
    args: ToolCallArguments,
  ): Promise<string> {
    const { instruction, context = {}, options = {} } = args;

    // Try to load the skill SKILL.md file for detailed instructions
    let skillInstructions = "";
    try {
      const skillPath = path.resolve(
        __dirname,
        `../../${skill.skillPath}/SKILL.md`,
      );
      skillInstructions = await fs.readFile(skillPath, "utf-8");
    } catch {
      skillInstructions = `# ${skill.name}\n\n${skill.description}\n\nCapabilities: ${skill.capabilities.join(", ")}`;
    }

    // Build the skill execution prompt
    const executionPrompt = `
Executing the "${skill.name}" skill from Leeway Skills.

SKILL DOCUMENTATION:
${skillInstructions}

USER INSTRUCTION:
${instruction}

CONTEXT PROVIDED:
${JSON.stringify(context, null, 2)}

OPTIONS:
${JSON.stringify(options, null, 2)}

Please execute this skill instruction using the skill's expertise and capabilities. 
Provide structured, actionable output that can be directly used.
Reference specific techniques from the skill documentation when applicable.
`;

    return executionPrompt;
  }

  private normalizeToolArgs(args: Record<string, unknown> | undefined): ToolCallArguments {
    const instruction =
      typeof args?.instruction === "string" ? args.instruction : "";
    const context =
      args?.context && typeof args.context === "object"
        ? (args.context as Record<string, unknown>)
        : {};
    const options =
      args?.options && typeof args.options === "object"
        ? (args.options as Record<string, unknown>)
        : {};

    return { instruction, context, options };
  }

  /**
   * Start the MCP server
   */
  async start(): Promise<void> {
    await this.loadSkills();

    // Connect transport
    const transport = new StdioServerTransport();
    await this.server.connect(transport);

    console.error("[Leeway Skills MCP] Server started successfully");
    console.error(`[Leeway Skills MCP] Serving ${this.skills.size} skills`);
    console.error("[Leeway Skills MCP] Ready to accept tool calls from LLMs");
  }
}

export async function startLeewaySkillsMCPServer(): Promise<LeewaySkillsMCPServer> {
  const server = new LeewaySkillsMCPServer();
  await server.start();
  return server;
}

function isDirectExecution(): boolean {
  if (!process.argv[1]) {
    return false;
  }

  return import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href;
}

/**
 * Main entry point
 */
async function main(): Promise<void> {
  await startLeewaySkillsMCPServer();

  // Handle graceful shutdown
  process.on("SIGINT", () => {
    console.error("[Leeway Skills MCP] Shutting down gracefully...");
    process.exit(0);
  });
}

if (isDirectExecution()) {
  main().catch((error) => {
    console.error("[Leeway Skills MCP] Fatal error:", error);
    process.exit(1);
  });
}
