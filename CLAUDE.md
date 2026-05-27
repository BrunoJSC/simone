@AGENTS.md

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **pnpm** (lockfile is `pnpm-lock.yaml`, `pnpm-workspace.yaml` is present even though this is a single app).

- `pnpm dev` — run Next.js dev server (http://localhost:3000)
- `pnpm build` — production build
- `pnpm start` — serve the production build
- `pnpm lint` — Biome check (lint + format diagnostics)
- `pnpm format` — Biome formatter, writes changes

There is no test runner configured.

## Stack pins (read before assuming APIs)

- **Next.js 16.2.4** with App Router and `reactCompiler: true` (see `next.config.ts`). Next 16 has breaking changes vs. earlier versions — consult `node_modules/next/dist/docs/` before writing route/handler/config code. Async APIs (params, searchParams, cookies, headers) follow the Next 16 conventions.
- **React 19.2.4** with the React Compiler (`babel-plugin-react-compiler@1.0.0`). Don't hand-roll `useMemo`/`useCallback` unless you have a reason the compiler can't see — the compiler memoizes by default.
- **Tailwind CSS v4** via `@tailwindcss/postcss`. There is no `tailwind.config.*`; theme is declared in CSS using `@theme inline` inside `src/app/globals.css`. CSS variables like `--color-foreground` map directly to utilities (`text-foreground`, `bg-background`, etc.).
- **Biome 2.2** for lint + format (replaces ESLint/Prettier). Config in `biome.json` enables `next` and `react` domains.
- **TypeScript 5**, strict, with `@/*` alias → `./src/*`.

## Architecture

Single-page biographical site. `src/app/page.tsx` composes the home page by stacking section components in order:

```
HeroSection → StorySection → HighlightsSection → TimelineSection → AtelierDetailsSection → GallerySection → FooterSection
```

Each section lives in `src/components/sections/` and is self-contained — there is no shared layout primitive beyond the global `Header` (mounted in `src/app/layout.tsx`) and the per-section `<section>` wrappers. To add or reorder content, edit `page.tsx` and the matching section file; don't introduce a new routing layer.

### Image pipeline

Images flow through a single place:

1. Files live under `public/images/<category>/` (`hero`, `about`, `atelier`, `gallery`, `branding`).
2. Paths and metadata are registered in `src/lib/image-config.ts` (`IMAGE_PATHS`, `IMAGE_QUALITY`, `IMAGE_SIZES`).
3. Sections import from that config and render through `src/components/ui/optimized-image.tsx`, which wraps `next/image` with a blur-up loader and error fallback.

`next.config.ts` restricts image output to `webp` and pins the allowed `deviceSizes`, `imageSizes`, and `qualities`. **If you pass a `quality` prop to `next/image` that isn't in that list, Next will reject it** — extend the array in `next.config.ts` rather than passing arbitrary numbers.

Quality is selected via the `quality` prop on `OptimizedImage` using keys from `IMAGE_QUALITY` (`hero` | `gallery` | `thumbnail` | `default`), not raw numbers.

### Fonts & theming

The Forum Google Font is loaded in `src/app/layout.tsx` and exposed as the `--font-forum` CSS variable / `font-forum` utility. Theme colors (`--background`, `--foreground`, `--muted`, `--accent`, `--border`) are defined in `globals.css` and intentionally identical in light and dark schemes — the site is light-only by design.

Custom animations (`fade-in`, `slide-up`, `slide-down`, `bounce-subtle`) and `.drop-cap` / `.scrollbar-hide` utilities are defined in `globals.css`. Prefer these over redefining keyframes inline.

### Language

User-facing copy is **Portuguese (Brazil)**. The root `<html lang="pt-BR">` is set in `layout.tsx`. Keep new content in PT-BR unless explicitly asked otherwise.

## Repo conventions

- `reorganize-images.ps1` is a one-shot helper for re-laying out `public/images/`. Don't run it casually — it moves files.
- Docs in PT-BR exist for project history: `README.md`, `GUIA_RAPIDO.md`, `IMAGE_ORGANIZATION.md`, `MELHORIAS_IMPLEMENTADAS.md`, `RESUMO_FINAL.md`. Treat them as informational, not authoritative API references.
