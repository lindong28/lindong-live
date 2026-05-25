# General Issues

## [improvement] Codex agent repeatedly attempts interactive CLI commands requiring TTY

- **Created**: 2026-05-24 22:50
- **Type**: improvement
- **Description**: During a Next.js website build + Vercel deploy task, the codex backend agent repeatedly tried CLI commands that require interactive TTY input (`vercel project add`, `vercel link --yes`, `vercel project protection disable --sso`). Each attempt hung until killed. The agent recovered by finding non-interactive alternatives or workarounds, but wasted ~5 minutes across 3+ occurrences. A skill or pre-check that detects "this command needs TTY" and routes to a non-interactive alternative would eliminate this pattern.
- **Occurrences**:
  - 2026-05-24 22:28 | session `019e5d78-b9a6-7c50-97d2-46f928805ee8` | backend `codex` | `vercel project add`, `vercel link --yes`, `vercel project protection disable --sso` all hung on interactive prompts, had to be killed

## [improvement] Agent guesses external service config instead of checking docs first

- **Created**: 2026-05-24 22:50
- **Type**: improvement
- **Description**: When configuring vercel.json for a Next.js static export, the codex agent first wrote `outputDirectory: "out"` (wrong — Vercel's Next.js adapter expects `.next`), then corrected to `framework: "nextjs"`. This resulted in two wasted commits and a failed deploy. The agent should have checked Vercel docs (or used context7) before writing the config. This violates the "external-system facts named from memory, not traced to a grep/read/docs lookup" principle.
- **Occurrences**:
  - 2026-05-24 22:37 | session `019e5d78-b9a6-7c50-97d2-46f928805ee8` | backend `codex` | vercel.json written with wrong outputDirectory, fixed in next commit

## [improvement] Agent stops all work when one task hits auth boundary instead of continuing independent tasks

- **Created**: 2026-05-24 23:26
- **Type**: improvement
- **Description**: Given 4 independent tasks (DNS, Vercel GitHub connect, avatar, screenshots), the codex agent stopped ALL work when task 2 hit a GitHub password confirmation page (legitimate auth boundary). Tasks 3 and 4 (avatar replacement, screenshots) had no dependency on task 2 and could have continued. This violates plan-execution-principles §0.4 ("verify 已拆分：已把 executor 能独立验证的子部分做完"). The agent should triage blocked vs independent tasks and continue non-blocked work before stopping.
- **Occurrences**:
  - 2026-05-24 23:02 | session `019e5db2-fe61-7963-a96c-ab3f4509200e` | backend `codex` | Stopped at GitHub "Confirm access" page; avatar + screenshots not started despite being independent
