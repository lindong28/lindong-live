# General Issues

## [open] Codex agent repeatedly attempts interactive CLI commands requiring TTY

- **Type**: improvement
- **Priority**: medium
- **Created**: 2026-05-24 22:50
- **Description**: During a Next.js website build + Vercel deploy task, the codex backend agent repeatedly tried CLI commands that require interactive TTY input (`vercel project add`, `vercel link --yes`, `vercel project protection disable --sso`). Each attempt hung until killed. The agent recovered by finding non-interactive alternatives or workarounds, but wasted ~5 minutes across 3+ occurrences. A skill or pre-check that detects "this command needs TTY" and routes to a non-interactive alternative would eliminate this pattern.
- **Occurrences**:
  - 2026-05-24 22:28 | session `019e5d78-b9a6-7c50-97d2-46f928805ee8` | backend `codex` | `vercel project add`, `vercel link --yes`, `vercel project protection disable --sso` all hung on interactive prompts, had to be killed

## [open] Agent guesses external service config instead of checking docs first

- **Type**: improvement
- **Priority**: high
- **Created**: 2026-05-24 22:50
- **Description**: When configuring vercel.json for a Next.js static export, the codex agent first wrote `outputDirectory: "out"` (wrong — Vercel's Next.js adapter expects `.next`), then corrected to `framework: "nextjs"`. This resulted in two wasted commits and a failed deploy. The agent should have checked Vercel docs (or used context7) before writing the config. This violates the "external-system facts named from memory, not traced to a grep/read/docs lookup" principle.
- **Occurrences**:
  - 2026-05-24 22:37 | session `019e5d78-b9a6-7c50-97d2-46f928805ee8` | backend `codex` | vercel.json written with wrong outputDirectory, fixed in next commit

## [open] Agent stops all work when one task hits auth boundary instead of continuing independent tasks

- **Type**: improvement
- **Priority**: high
- **Created**: 2026-05-24 23:26
- **Description**: Given 4 independent tasks (DNS, Vercel GitHub connect, avatar, screenshots), the codex agent stopped ALL work when task 2 hit a GitHub password confirmation page (legitimate auth boundary). Tasks 3 and 4 (avatar replacement, screenshots) had no dependency on task 2 and could have continued. This violates plan-execution-principles §0.4 ("verify 已拆分：已把 executor 能独立验证的子部分做完"). The agent should triage blocked vs independent tasks and continue non-blocked work before stopping.
- **Occurrences**:
  - 2026-05-24 23:02 | session `019e5db2-fe61-7963-a96c-ab3f4509200e` | backend `codex` | Stopped at GitHub "Confirm access" page; avatar + screenshots not started despite being independent

## [open] Agent auto-injects ad-hoc task into unrelated existing long-task plan/state/journal files

- **Type**: improvement
- **Priority**: medium
- **Created**: 2026-05-29 00:05
- **Description**: During an ad-hoc supervise task (DNS fix + registrar transfer), the codex agent discovered `plans/20260524-personal-website/plan.md` + `state.md` + `journal.md` in the repo (an unrelated long-task from 4 days ago) and, without being told the current task belongs to that plan, automatically applied long-task-protocol — appending new "TASK-012" entries and ISSUE-00X items to `state.md` and writing progress lines to `journal.md`. The spawn-prompt only described an ad-hoc infrastructure task (fix DNS + initiate registrar transfer). Mitigated by `plans/` being in `.gitignore` (no commit pollution), but pollutes the long-task's own state of record and confuses future readers of that plan. The agent should treat `plan.md` + `state.md` + `journal.md` as long-task-protocol scope **only when the spawn-prompt explicitly references a plan path**, not just because the files exist in the repo.
- **Possible fix**: update `~/.claude/references/long-task-protocol.md` with explicit guard "do not append to state.md / journal.md unless the current spawn-prompt or user instruction names this plan path"; or have codex echo the intent ("I see plan.md — am I working on it?") and let the caller block.
- **Occurrences**:
  - 2026-05-29 06:36 UTC | session `019e7272-279d-77e1-a012-7525f592f815` | backend `codex` | spawn-prompt was a DNS/registrar infrastructure task; codex auto-read existing `plans/20260524-personal-website/state.md` and appended new task entries + issue entries to it, treating ad-hoc work as a continuation of the 4-day-old website build long-task

## [open] Reusable "Cloudflare dashboard via authenticated session" skill missing

- **Type**: feature
- **Priority**: low
- **Created**: 2026-05-29 00:05
- **Description**: Many ops tasks need Cloudflare DNS / zone changes but the environment has no `CLOUDFLARE_API_TOKEN` (common for personal projects). The reliable workaround is: open `https://dash.cloudflare.com` in a CDP-attached browser already signed in via Google SSO, then `agent-browser eval` `fetch('/api/v4/...', {credentials:'include'})` — this borrows the dashboard's session cookie + CSRF and gives full API access. Codex re-derived this pattern from scratch this session (6+ navigation steps to find the zone, then trial-and-error fetches to find correct endpoints). A SKILL.md capturing the pattern (find zone id → list dns_records → POST/PUT/PATCH/DELETE with credentials:include) would eliminate the rediscovery cost for any future Cloudflare ops task.
- **Possible fix**: add a `cloudflare-dashboard-api` skill with the navigate + zone-discovery + fetch pattern + auth caveats (Google SSO re-prompt for sensitive ops like registrar transfer / unlock).
- **Occurrences**:
  - 2026-05-29 06:36 UTC | session `019e7272-279d-77e1-a012-7525f592f815` | backend `codex` | No `CLOUDFLARE_API_TOKEN` available; codex spent ~6 navigation steps + 2 eval-based discovery fetches before landing on the `/api/v4/zones/<id>/dns_records` pattern. Task succeeded but redundantly.
