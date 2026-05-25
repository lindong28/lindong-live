# lindong.live

林东的单页个人网站，面向潜在投资人、合作伙伴和技术社区同行，展示个人定位、经历、当前方向、公开作品与联系方式。

## 技术栈

- Next.js App Router
- Tailwind CSS
- 静态导出：`output: "export"`
- Vercel 托管

## 本地开发

```bash
npm install
npm run dev
```

开发服务器默认运行在 `http://localhost:3000`。

## 构建与静态预览

```bash
npm run lint
npm run build
npx serve@14.2.6 out -l 4173
```

`npm run build` 会生成 `out/` 静态目录，用于 Vercel 部署和本地静态预览。

## 部署

生产部署目标：

- GitHub：`lindong28/lindong-live`
- Vercel：生产环境静态部署
- 自定义域名：`lindong.live`

Squarespace DNS 需要把 apex 域名 `lindong.live` 的 A 记录指向 `76.76.21.21`。DNS 生效前，可先使用 Vercel 自动分配的 `*.vercel.app` 地址验证页面。

