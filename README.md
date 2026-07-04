# nt2-community.github.io

Organization root site for [NT² Community](https://github.com/nt2-community), served at:

**https://nt2-community.github.io/**

Project sites under the same domain (for example [`/micro-apps-catalog/`](https://nt2-community.github.io/micro-apps-catalog/)) are deployed from their own repositories.

## Community chat

Join the NT² Community on [Discord](https://discord.com/channels/1510213303576563712/1510213304159834175).

## Local preview

Any static file server works, for example:

```bash
npx serve .
```

Open http://localhost:3000 (paths like `/micro-apps-catalog/` will not resolve locally unless you proxy or use the deployed site).

## Deploy

Pushes to `main` deploy via GitHub Actions (`.github/workflows/deploy.yml`) to GitHub Pages.
