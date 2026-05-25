# Architecture

## 概览

`lindong.live` 是一个静态导出的 Next.js App Router 单页个人网站。页面内容硬编码在 React 组件中，不依赖 CMS、数据库或服务端 API。

## 关键文件

- `app/layout.tsx`：全局 HTML 结构、中文 metadata、Open Graph、Twitter card、viewport 配置。
- `app/page.tsx`：单页入口，组合 5 个 section。
- `app/globals.css`：Tailwind CSS v4 入口、暗色主题变量、全局背景网格。
- `components/Hero.tsx`：首屏、tagline、CSS 首字头像、主要外链。
- `components/Timeline.tsx`：经历时间线。
- `components/CurrentWork.tsx`：当前方向卡片。
- `components/Projects.tsx`：作品链接。
- `components/Contact.tsx`：联系渠道。
- `next.config.ts`：`output: "export"` 静态导出。
- `vercel.json`：显式声明 Vercel 使用 Next.js framework preset 和 `npm run build`。

## 部署模型

构建命令为 `npm run build`。Next.js 根据 `output: "export"` 生成静态内容，Vercel 通过 Next.js framework preset 发布到 `lindong-live.vercel.app` 和自定义域名 `lindong.live`。
