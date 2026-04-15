# 🚀 Pillar 6: Operations & Master Runbook

## 1. Environment Readiness (The Primitives)
The system requires Node.js, Python 3.10+, and a local Llama.cpp binary to run.

### Required Environment Variables (.env):
- `LEEWAY_SIGNATURE`: Your unique Sovereign Identifier.
- `LOCAL_INFERENCE_URL`: `http://localhost:8321` (default).
- `RTC_SIGNALING_URL`: Optional Edge SFU endpoint.
- `STORAGE_ROOT`: Defaults to `%USERPROFILE%/.leeway/`.

## 2. CLI Commands (The Master List)
- **Initialize**: `node scripts/init-leeway.js`
  - Validates skills, directories, and compliance headers.
- **Run Engine**: `node standalone-agent-runtime/src/main.ts`
  - Starts the SQLite store, RTC adapters, and the execution loop.
- **Deploy**: `node scripts/deploy-agent-lee.js`
  - Packages the agent for Production/Distribution.
- **Audit**: `node scripts/verify-leeway-setup.js`
  - Full-system compliance scan.
- **Inject Headers**: `node scripts/leeway-agents/header-injector.js`
  - (Admin Only) Repairs missing 5W+H headers.

## 3. Deployment & Scaling
The system is built as a **Local-Only PWA** with a desktop bridge.
- **Edge Deployment**: Can be run as a "Sovereign Node" on small edge devices.
- **Mobile Integration**: Connect your phone to the desktop via **LeeWay Edge RTC** for remote voice/vision control.

## 4. Troubleshooting
- **Inference Slowdown**: Check context size in `inference-client.js` (Default is 1024; increase with caution).
- **Compliance Failure**: Check the logs in `.leeway/logs/governance.log`. This usually means a missing 5W+H header.
- **Persistence Error**: Verify the write-permissions of the `%USERPROFILE%/.leeway/` directory.
