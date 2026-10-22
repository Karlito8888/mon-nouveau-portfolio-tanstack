# AGENTS.md — Grimoire (mon-nouveau-portfolio-tanstack)

Static concept site for Grimoire, a fictional two-person creative web studio set in an
enchanted forest. Live at `https://grimoire.charmaweb.com`, presented as a side project on
`https://charmaweb.com/work/grimoire` and `https://charlesbourgault.com`. The folder and the
GitHub repository keep their historical names.

## What is NOT here

| What | Where |
|---|---|
| General working rules (verify before claiming, DRY/KISS/YAGNI, scope, docs ladder, mandatory tools, git, explicit agreement) | `~/.omp/agent/RULES.md` |
| The workstation, the code graphs, the workflows | `~/.omp/agent/AGENTS.md` |
| Durable project facts (versions, measured gate, debts, open items) | `~/.omp/agent/bank/Mon-Portfolio.md` |

## What exists

Seven static pages under `src/pages/`: `index` (circular menu around a wizard drawn by
fireflies), `about` (hat), `projects` (staff), `journey` (timeline), `contact` (demo form that
sends nothing), `credits` (licences) and `404`. No backend, no cookies, no analytics. One
`localStorage` key, `musicConsent`, remembers that the visitor turned the ambient sound on.

## Layout

- `src/site.ts`: every piece of copy (pages, nav, studio text, projects, journey, contact,
  credits) and the verbatim CodeBucks MIT licence. Edit copy here, never in a page.
- `src/layouts/Base.astro`: head (meta, Open Graph, icons, manifest), Madimi One via the Astro
  fonts API (`--font-display`), `<ClientRouter>` so the sound survives navigation, the painted
  background (`<Picture>` avif/webp, 480 to 1024 px), 15 CSS fireflies, the sound toggle, the
  home button on sub-pages, the concept footer, and the single `src/scripts/main` script.
  `build.format: "file"` leaves `.html` in `Astro.url.pathname`: `path` strips it before the
  home test and the canonical.
- `src/components/Icon.astro`: inline Lucide shapes by name (`IconName` in `site.ts`).
- `src/styles/global.css`: tokens, reset, glass, fireflies, circular menu (pure CSS: `--n`
  items, `--i` index, `--r` radius per breakpoint, counter-rotated links), scenes, editorial
  rows, journey timeline, contact form, reveal, reduced motion.
- `src/scripts/webgl-gate.ts`: starts a three.js scene only without `prefers-reduced-motion`,
  with WebGL 2, after `load` + idle; pauses it off-screen; swallows failures so the painted
  background stays; returns a handle with `dispose()`.
- `src/scripts/firefly-scene.ts`: loads `src/assets/points/<shape>.bin` (int16 xyz in [-1, 1]),
  scatters the points, gathers them on their targets in 2.4 s (0.8 s stagger), then turns and
  floats them. Additive gold-to-white dots on a radial canvas texture.
- `src/scripts/main.ts`: starts one scene per `astro:page-load` and disposes it on
  `astro:before-swap`; wires the persistent sound toggle once; answers the demo form.
- `src/assets/backgrounds/*.png`: the four painted forests (1024×576 sources).
- `src/assets/points/*.bin`: 10,000 (wizard), 3,000 (hat), 3,000 (staff) surface samples.
- `public/_headers`: security headers, immutable cache on `/_astro/*` and `/audio/*`.
- `public/audio/birds-ambient.mp3`: 70 s loop, 552 KB, `preload="none"`.

## Stack and gate

Astro 7, TypeScript 6 (`@astrojs/check` refuses TypeScript 7), `@astrojs/sitemap`, `sharp`,
`three` 0.186 (dynamic import, ~130 kB gzip, only when the scene can run). Never add
`@types/bun`: it breaks `astro check`. Bun only. Dev and preview on port 4340.

```
bun run check   # astro check && astro build
```

Pitfall: `astro preview` daemonizes (`astro preview stop` to end it) and serves `dist/`, so
rebuild before re-testing.

## Deployment

Push to `main` → `.github/workflows/deploy.yml` → `bun run check` → `wrangler deploy` → Worker
`grimoire` (static assets only) on custom domain `grimoire.charmaweb.com`, Cloudflare account
`charmaweb11@gmail.com`. Repository secret `CLOUDFLARE_API_TOKEN` (same token as CharmaWeb,
`charmaweb-setup-deploy`), variable `CLOUDFLARE_ACCOUNT_ID`.

## Rules for the 3D scene

- The point clouds are area-weighted surface samples of the CC BY models kept in git at
  `d13cf53:public/models/*.glb` (gltf-transform read, triangles with max y ≤ 0.5 dropped for the
  wizard to remove its pedestal, points centred and scaled to a half-extent of 1, int16). To
  regenerate them, restore that commit's `node_modules` and the method above.
- `DOT_PX` in `firefly-scene.ts` is the only size knob. Mobile (< 768 px) draws 60 % of the
  points at pixel ratio 1; desktop caps the ratio at 1.5.
- `prefers-reduced-motion: reduce` means no scene, no menu rotation, no fireflies, no reveal.

## Copy rules

English only. No em dash in user-facing text (full stop, colon or comma). The concept footer
("Grimoire is a fictional studio", "Built with Astro by CharmaWeb", link to `/credits`) and the
`/credits` page must stay: the models are CC BY 4.0 and the backgrounds and concept are MIT,
both require attribution.
