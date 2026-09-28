# Gratia's Portfolio

A bilingual personal portfolio built with React, TypeScript, Vite, and Plasma UI. It presents Gratia's profile, education, career experience, skills, and contact information in Traditional Chinese and English.

## Features

- Shared Plasma UI scene with native glass refraction, highlights, dispersion, and fusion effects.
- Responsive hero, navigation, education, career, skills, and contact sections.
- One-click language switch with localized content and document language updates.
- Pre-rendered English (`/`) and Traditional Chinese (`/zh/`) pages with URL-based language switching.
- Keyboard-accessible navigation and mobile menu, including Escape-to-close behavior.
- Reduced-motion support and responsive layouts for desktop and mobile.
- Image, JavaScript, and build-output budgets plus Lighthouse CI checks for both language routes.

## Requirements

- Node.js 24 (Node.js 22 or newer is supported by the package engine constraint)
- npm

## Development

```sh
npm ci
npm run dev
```

## Build and preview

```sh
npm run typecheck
npm run build
npm run preview
```

`npm run build` runs the TypeScript check, creates the production bundle, pre-renders both language routes, and checks the configured asset budgets. The output is written to `dist/`.

`npm run performance:ci` runs Lighthouse CI against the English and Traditional Chinese routes using the fixed desktop profile configured in `lighthouserc.cjs`.

## Project layout

```text
src/
  App.tsx                 # App composition and language state
  content.ts              # Typed bilingual copy and portfolio data
  entry-server.tsx        # Static-render entry used during production builds
  glass/GlassScene.tsx    # Shared PlasmaProvider and glass background
  page/                   # Navigation and content sections
  styles.css              # Responsive page and glass presentation
  main.tsx                # React entry point
scripts/
  prerender.mjs                   # Emits the / and /zh/ HTML pages
  check-performance-budget.mjs   # Checks built asset budgets
.github/workflows/
  deploy-pages.yml        # GitHub Pages build and deploy workflow
```

## GitHub Pages

In repository **Settings → Pages**, set **Build and deployment → Source** to **GitHub Actions**. Pull requests targeting `main` run the build, asset-budget checks, and Lighthouse CI without publishing. Pushes to `main` (and manual workflow runs) build and publish `dist/`. The deploy job checks the Pages source setting and reports a configuration error if it changes.

## License

The project is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International. See [LICENSE](LICENSE) for details.

`src/parallax-bg.webp` is excluded from that license and is provided only for display within this repository and website. It must not be reused.
