# Deployment Reference

## Production URLs

- Vercel alias: `https://lindong-live.vercel.app`
- Custom domain target: `https://lindong.live`
- GitHub repo: `https://github.com/lindong28/lindong-live`

## Build

```bash
npm install
npm run lint
npm run build
```

## Deploy

```bash
npx vercel@latest deploy --prod --yes
```

The Vercel project is linked locally through `.vercel/project.json`, which is ignored by git.

## DNS

Vercel has `lindong.live` added to the `lindong-live` project. The registrar DNS still needs to point the apex domain at Vercel:

```text
Type: A
Name: lindong.live
Value: 76.76.21.21
```

Before DNS is updated, `lindong.live` can still serve the Squarespace placeholder. Use `dig +short lindong.live A` and `curl -sI https://lindong.live` to verify propagation.
