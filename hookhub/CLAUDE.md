# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Important: Next.js Version Warning

This project uses **Next.js 16.2.4** — a version with breaking changes relative to older training data. Before writing any Next.js-specific code, read the relevant guide in `node_modules/next/dist/docs/`. APIs, conventions, and file structure may differ from prior knowledge. Heed deprecation notices.

## Commands

All commands run from the `hookhub/` directory.

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm start        # Start production server (requires build first)
npm run lint     # Run ESLint
```

No test framework is currently configured.

## Architecture

**Stack:** Next.js 16.2.4, React 19, TypeScript 5 (strict), Tailwind CSS v4, PostCSS

**Routing:** Uses the App Router (`app/` directory), not the Pages Router. There is no `src/` wrapper — the `app/` directory sits at the project root.

**Styling:** Tailwind CSS v4 via the `@tailwindcss/postcss` PostCSS plugin. Global styles and CSS variables are in `app/globals.css`. Dark mode is supported via CSS variables.

**TypeScript:** Strict mode is enabled. Path alias `@/*` maps to the project root.

**Fonts:** Geist font family loaded via `next/font` in `app/layout.tsx`.
