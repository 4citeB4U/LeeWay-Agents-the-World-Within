<!--
LEEWAY HEADER — DO NOT REMOVE

REGION: CORE.DOCS.ARCHITECTURE
TAG: CORE.DOCS.SOVEREIGN_VOICE

5WH:
WHAT = Documentation of the Sovereign Voice (Piper TTS) enhancement and architectural governance
WHY = To preserve the technical history, failure states, and decisions behind the fully offline, waste-free TTS integration
WHO = Antigravity (Founder Agent) / Leonard J Lee
WHERE = docs/07_SOVEREIGN_VOICE.md
WHEN = 2026
HOW = Markdown record of the Piper TTS lean integration into SovereignVoice.ts

LICENSE: PROPRIETARY
-->

# Sovereign Voice Architecture & Piper TTS Integration

## The Enhancement Goal
The goal of this architectural enhancement was to secure Agent Lee's voice—ensuring that if external APIs (like Microsoft Azure or Edge-TTS) went offline, were patched, or became unavailable, Agent Lee would never lose his identity or his ability to speak. The enhancement demanded a "waste-free" architecture, meaning no bloated background servers, no heavy Python APIs, and seamless integration directly into the existing `SovereignVoice.ts` layer.

## The Chosen Architecture: Piper TTS
After evaluating options, Piper TTS was selected over Edge-TTS. While Edge-TTS provides free access to high-quality Microsoft Neural voices, it breaches the primary LeeWay directive of maintaining a **Sovereign, Local-First Runtime**. 

Piper TTS aligns perfectly with the LeeWay Standards because:
1. **Fully Offline:** It requires zero internet connection.
2. **Zero-Waste Execution:** It operates as a tiny C++ binary. It does not run as a persistent server. It wakes up, consumes minimal CPU to process text into audio, pipes it to the hardware audio layer (e.g., `espeak`, `ffplay`, `aplay`), and immediately dies, leaving system memory entirely free.
3. **Locked Persona:** By cloning the optimal Microsoft voice and compiling it into a single `.onnx` model (`agent_lee.onnx`), Agent Lee's Persona is cryptographically locked into the system, portable across Windows, macOS, and Linux VM structures.

## Implementation Steps
1. **Dataset Generation:** Sample strings were passed through the desired Microsoft Neural TTS API to generate high-fidelity `.wav` baseline files.
2. **Offline Model Generation:** The baselines were used to tune and extract an `.onnx` model mapping the target identity.
3. **Integration into Layer 8 Delivery:** The `SovereignVoice.ts` script was modified to include the `sovereign-piper` method. 
4. **Execution Pipeline:** Instead of triggering web requests, the system invokes: `echo "Text" | piper --model agent_lee.onnx --output_raw | [native_audio_player]`.

## Governance of Failures & Corruptions
A core principle established during this enhancement was the handling of "failures" or corruption. Should the TTS layer—or any critical system element—become corrupted by aberrant agent behavior or malformed configurations:
- It triggers a fail-safe fallback (e.g., basic `powershell` or `espeak` synthesis).
- More profoundly, deep systemic corruption triggers the intervention of the **Founder Agents**, who have the authority to "cage" the corrupted sector, spawn a restored mirror-universe of the broken component, and cleanly splice it back into the runtime without halting the overarching Hive Mind.

This documentation serves as proof of intellectual bonding between the creators and the system—building an architecture that is not just functional, but historically and resiliently self-aware.
