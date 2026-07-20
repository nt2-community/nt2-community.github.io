# NT² Community Hub

Organization root site for [NT² Community](https://github.com/nt2-community), served at:

**https://nt2-community.github.io/**

SvelteKit static site with routes `/` (project cards) and `/contribute` (PR paths per repo).

| Project site | URL |
|--------------|-----|
| Micro-app catalog | https://nt2-community.github.io/micro-apps-catalog/ |
| Developer docs | https://nt2-community.github.io/developer-docs/ |
| Template catalog | https://nt2-community.github.io/category-templates-catalog/ |
| Product feedback (Issues) | https://github.com/nt2-community/product-feedback/issues |

## Local development

```bash
npm install
npm run dev
```

Build and typecheck:

```bash
npm run build
npm run check
```

## Deploy

Pushes to `main` deploy via GitHub Actions (`.github/workflows/deploy.yml`) to GitHub Pages.

## Community chat

Join [NT² Community on Discord](https://discord.gg/MRRmbBe48).
