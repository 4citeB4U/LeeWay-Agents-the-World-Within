#!/usr/bin/env node
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
export declare class LeewaySkillsMCPServer {
    private server;
    private skills;
    private registryPath;
    constructor();
    /**
     * Load all skills from the registry
     */
    loadSkills(): Promise<void>;
    /**
     * Setup MCP handlers
     */
    private setupHandlers;
    /**
     * Execute a skill with given parameters
     */
    private executeSkill;
    private normalizeToolArgs;
    /**
     * Start the MCP server
     */
    start(): Promise<void>;
}
export declare function startLeewaySkillsMCPServer(): Promise<LeewaySkillsMCPServer>;
//# sourceMappingURL=index.d.ts.map