# HookHub — MVP Spec

## 1. Overview

HookHub is a curated, browsable web directory of open-source **Claude Code hooks** hosted on GitHub. Users land on the homepage and immediately see a grid of hook cards; clicking a card opens the hook's GitHub repository in a new tab.

The goal is to make it easy for Claude Code users to discover community-built hooks without digging through scattered blog posts and README lists.

## 2. MVP Goals

**In scope**
- A single home page at `/`.
- Responsive grid of hook cards.
- Static, committed seed data (no backend, no database).
- Outbound links to the hook's GitHub repo.

**Out of scope (deferred to post-MVP)**
- Search, filtering, sorting.
- Submission form / PR template.
- Hook detail pages.
- User accounts, favorites, stars.
- Live GitHub star counts or auto-sync from upstream lists.
- Tagging by hook event (`PreToolUse`, `PostToolUse`, etc.).

## 3. Hook Data Model

```ts
type HookCategory =
  | "Formatting & Linting"
  | "Testing"
  | "Git & VCS"
  | "Notifications"
  | "Security & Policy"
  | "Observability"
  | "Productivity"
  | "Other";

type Hook = {
  id: string;            // stable slug, e.g. "auto-format-on-save"
  name: string;          // display name
  category: HookCategory;
  description: string;   // 1–2 sentence summary
  repoUrl: string;       // full GitHub URL
  author?: string;       // optional GitHub handle / org
};
```

## 4. Categories (MVP set)

A small, fixed set of use-case-oriented categories, chosen to be recognizable at a glance:

- `Formatting & Linting`
- `Testing`
- `Git & VCS`
- `Notifications`
- `Security & Policy`
- `Observability`
- `Productivity`
- `Other`

The lifecycle-event taxonomy (`PreToolUse`, `PostToolUse`, `Stop`, `UserPromptSubmit`, `SessionStart`, etc.) is intentionally **not** used as the primary browsing category — it is too low-level for a browsing UI. It may be added as a secondary tag post-MVP.

## 5. Data Source

- Seed data lives at `hookhub/data/hooks.json` as a committed array of `Hook` objects (~6–12 entries to start).
- Loaded at build/render time via a **server component**. No client-side fetching, no API routes, no `.env` config.
- Initial seed content should be drawn from well-known community collections, e.g.:
  - `pascalporedda/awesome-claude-code`
  - `disler/claude-code-hooks-mastery`
  - `hesreallyhim/awesome-claude-code`
  - `rohitg00/awesome-claude-code-toolkit`
  - `varun86/awesome-claude-code-sounds`

## 6. Pages & Routes

- `/` — home page. Contains `SiteHeader` + `HookGrid`.
- No other routes in MVP.

## 7. Components

Live under `hookhub/app/` (App Router) and/or `hookhub/components/`:

- **`SiteHeader`** — minimal top bar with "HookHub" title and a one-line tagline.
- **`HookGrid`** — responsive Tailwind grid: 1 col on mobile, 2 cols at `md`, 3 cols at `lg`+. Receives `hooks: Hook[]` and renders one `HookCard` per entry.
- **`HookCard`** — renders one hook: name, category chip, description, and a "View on GitHub" link. The entire card is a clickable link that opens `repoUrl` in a new tab (`target="_blank"`, `rel="noopener noreferrer"`). Must be keyboard-focusable.

## 8. Styling

- Use the existing Tailwind v4 setup in [app/globals.css](../app/globals.css).
- Respect existing dark-mode CSS variables (`--background`, `--foreground`).
- No additional styling libraries.

## 9. Non-Goals

Explicitly excluded from MVP, restated so the implementer resists scope creep:

- No search box, no category filter UI.
- No submission flow.
- No per-hook detail route.
- No authentication.
- No network requests at runtime.
- No hook event-type tags.

## 10. Success Criteria

- `npm run dev` → visiting `/` renders the grid populated from `data/hooks.json`.
- Each card is keyboard-focusable and opens the correct GitHub repo in a new tab.
- Layout is responsive and readable at 375px, 768px, and 1280px widths.
- `npm run lint` and `npm run build` complete without errors.

## 11. Future Work

Not part of MVP, listed for context:

- Search and category filtering.
- Submission PR template or issue form.
- Auto-sync seed data from a curated upstream repo.
- Live GitHub star counts via the GitHub API.
- Hook lifecycle-event tags (`PreToolUse`, etc.) as a secondary filter.
- Dark-mode toggle.
- Per-hook detail pages with README preview.

## 12. Stack Reference

Tech stack is already established (see root [CLAUDE.md](../CLAUDE.md)):
Next.js 16.2.4 (App Router), React 19, TypeScript 5 (strict), Tailwind CSS v4, Geist fonts. No `src/` wrapper. No test framework.
