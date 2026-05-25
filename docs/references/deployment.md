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

GitHub auto-deploy is connected for `lindong28/lindong-live`. Pushing to `main` triggers a production deployment in Vercel.

## DNS

Vercel has `lindong.live` added to the `lindong-live` project. The registrar DNS points the apex domain at Vercel:

```text
Type: A
Name: @
Value: 76.76.21.21
```

Use these commands to verify DNS and origin:

```bash
dig +short lindong.live A
NO_PROXY=lindong.live curl -sI https://lindong.live
```

`NO_PROXY` is important in local shells that have `HTTP_PROXY` / `HTTPS_PROXY` set; the local proxy can serve a stale Squarespace response even after public DNS points to Vercel.
