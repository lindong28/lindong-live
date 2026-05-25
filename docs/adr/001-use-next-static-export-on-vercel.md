# ADR 001: Use Next Static Export On Vercel

## Status

Accepted

## Context

网站是内容固定的单页个人主页，不需要 SSR、API route、数据库或 CMS。目标是部署简单、加载快、维护成本低。

## Decision

使用 Next.js App Router + Tailwind CSS，并在 `next.config.ts` 中启用 `output: "export"`。Vercel 项目通过 `vercel.json` 显式设置 `"framework": "nextjs"`，避免手动创建项目时 framework detection 为空导致部署 404。

## Consequences

- 构建产物可静态托管，性能和缓存路径简单。
- 不能使用依赖服务端运行时的 Next.js 功能。
- Vercel framework preset 仍应保持为 Next.js；不要把 `outputDirectory` 设为 `out`，否则 Vercel Next adapter 会寻找错误的 manifest。
