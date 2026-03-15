#!/usr/bin/env node
interface CreateProofOptions {
    appName?: string;
    appVersion?: string;
    appUrl?: string;
    integrationMethod?: string;
    badgeLabel?: string;
    badgeAssetPath?: string;
    registryPath?: string;
    skillsRoot?: string;
    badgeSourcePath?: string;
}
export interface InstallBadgeBundleOptions extends CreateProofOptions {
    targetDir: string;
    assetDirName?: string;
    badgeFileName?: string;
}
export interface LeewaySkillsProof {
    proofVersion: string;
    generatedAt: string;
    app: {
        name: string;
        version?: string;
        url?: string;
        integrationMethod: string;
    };
    leewaySkills: {
        registryVersion: string;
        governanceFramework: string;
        activeSkills: number;
        activeCategories: number;
        installedSkills: number;
        installedCategories: number;
        registryPath: string;
        registrySha256: string;
        mcpServerVersion: string;
        syncStatus: "aligned" | "partial";
    };
    badge: {
        label: string;
        alt: string;
        sourceFile: string;
        assetPath: string;
        badgeSha256: string;
    };
    verification: {
        status: "verified";
        statement: string;
        warnings: string[];
    };
}
export interface BadgeBundleInstallResult {
    targetDir: string;
    files: {
        proof: string;
        script: string;
        style: string;
        snippet: string;
        badge: string;
    };
    proof: LeewaySkillsProof;
}
export declare function createLeewaySkillsProof(options?: CreateProofOptions): Promise<LeewaySkillsProof>;
export declare function installLeewaySkillsBadgeBundle(options: InstallBadgeBundleOptions): Promise<BadgeBundleInstallResult>;
export {};
//# sourceMappingURL=badge-proof.d.ts.map