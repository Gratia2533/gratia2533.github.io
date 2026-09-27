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

The repository includes a GitHub Actions workflow that builds on pushes to `main` and deploys the generated Pages artifact. Public deployment and the live GitHub Pages URL have not yet been verified. The repository's Pages publishing source must use GitHub Actions for that workflow to publish successfully.

## Verified state

The M1–M4 implementation was reviewed at commit `1fa27d13247bd9196097fe4f3a67b7c6ef4e3b5d`. Verification included a successful TypeScript/Vite production build, `git diff --check`, desktop and mobile browser review, and checks for language switching, keyboard navigation, responsive layout, Plasma effects, and portfolio content. The education section currently shows the National Sun Yat-sen University master's degree; education and career dates are not displayed.

The QA preview reported a missing `/favicon.ico` request (404). It did not affect the portfolio's rendering or interactions.

## License

The project is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International. See [LICENSE](LICENSE) for details.

`src/parallax-bg.png` is excluded from that license and is provided only for display within this repository and website. It must not be reused.
