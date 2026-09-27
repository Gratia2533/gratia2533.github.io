# Gratia's Portfolio

A bilingual personal portfolio built with React, TypeScript, Vite, and Plasma UI. It presents Gratia's profile, education, career experience, skills, and contact information in Traditional Chinese and English.

## Features

- Shared Plasma UI scene with native glass refraction, highlights, dispersion, and fusion effects.
- Responsive hero, navigation, education, career, skills, and contact sections.
- One-click language switch with localized content and document language updates.
- Keyboard-accessible navigation and mobile menu, including Escape-to-close behavior.
- Reduced-motion support and responsive layouts for desktop and mobile.

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

`npm run build` runs the TypeScript check and creates the production site in `dist/`.

## Project layout

```text
src/
  App.tsx                 # App composition and language state
  content.ts              # Typed bilingual copy and portfolio data
  glass/GlassScene.tsx    # Shared PlasmaProvider and glass background
  page/                   # Navigation and content sections
  styles.css              # Responsive page and glass presentation
  main.tsx                # React entry point
.github/workflows/
  deploy-pages.yml        # GitHub Pages build and deploy workflow
```

## GitHub Pages

In repository **Settings → Pages**, set **Build and deployment → Source** to **GitHub Actions**. Pushes to `main` trigger `deploy-pages.yml`, which builds the site and publishes `dist/`. The deploy job checks this setting and reports a configuration error if it changes.

## License

The project is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International. See [LICENSE](LICENSE) for details.

`src/parallax-bg.png` is excluded from that license and is provided only for display within this repository and website. It must not be reused.
