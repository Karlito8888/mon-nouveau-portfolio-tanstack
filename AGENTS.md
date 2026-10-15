# AGENTS.md — mon-portfolio

Consignes pour tout agent de code travaillant dans ce dépôt. **Fait autorité sur le code.**

**Le projet en une phrase :** portfolio personnel créatif — TanStack Start (SSR) + Three.js /
React Three Fiber pour les modèles 3D, déployé sur Netlify.

## Ce qui n'est PAS ici

| Quoi | Où |
|---|---|
| Règles de travail générales — vérifier avant d'affirmer, DRY/KISS/YAGNI, périmètre, échelle de doc officielle, outils obligatoires, git, accord explicite | `~/.omp/agent/RULES.md` |
| Le poste, les graphes de code, les workflows | `~/.omp/agent/AGENTS.md` |
| Faits durables du projet — versions, gate mesuré, dettes, points ouverts | `~/.omp/agent/bank/Mon-Portfolio.md` |

## Deux clones locaux, un seul distant

Ce dossier est l'un de **deux clones locaux** pointant vers le même distant GitHub
(`Karlito8888/mon-nouveau-portfolio-tanstack`). Lequel des deux fait foi, et le détail des
commits qui divergent entre eux, vit dans la fiche de bank — ne pas le redéduire ici.

## Stack

TanStack Router `^1.147.3` · TanStack Start `^1.149.2` · React `^19.2.3` · Vite+ `1.2.0`
(`vite-plus`: Vite 8 through the `vite` → `@voidzero-dev/vite-plus-core` alias, Vitest 5, Oxlint,
Oxfmt) · TypeScript `^5.9.3` · Three.js `^0.177.0` + `@react-three/fiber` `^9.5.0` +
`@react-three/drei` `^10.7.7` · Framer Motion `^12.26.2` · React Compiler
(`babel-plugin-react-compiler`, branché dans `vite.config.ts`) · Bun (runtime, paquets).

## Commandes (`package.json`)

- `bun run dev` — `vp dev --port 3000`
- `bun run build` — `vp build`
- `bun run preview` — `vp preview`
- `bun run typecheck` — `tsc --noEmit`
- `bun run lint` — `vp lint src/` (Oxlint; rules live in the `lint` block of `vite.config.ts`,
  translated from the former ESLint `js` + `typescript-eslint` recommended config)
- `bun run test` — `vp test run`
- `bun run gate` — `typecheck && lint && test`, le gate du projet
- `vp check` — format + lint + type-check in one pass; see the formatter trap below

## ⚠️ Gate structurellement rouge

**`src/` contains no test file** (`*.test.*` / `*.spec.*`): `vp test run` exits 1 on "No test
files found". `vite.config.ts` has a `test` block holding only `clearMocks: false` (Vitest 4
compatibility written by `vp migrate`): no `environment: 'jsdom'`, no `setupFiles`, although
`jsdom` and `@testing-library/*` are devDependencies. The first test adds them.

## Layout `src/`

- `routes/` — TanStack Router file-based : `__root.tsx` (layout racine : nav, fireflies, son),
  `index.tsx` (accueil, modèle Wizard), `_subpages.tsx` (layout des sous-pages, bouton retour),
  `_subpages/{about,contact,projects,resume}.tsx`.
- `components/` — un dossier par feature : `about/`, `contact/`, `navigation/`, `models/`,
  `projects/`, `resume/`, `scenes/` ; plus `FireFliesBackground.tsx`, `HomeBtn.tsx`, `Sound.tsx`
  à plat.
- `components/models/` — composants GLB Three.js (`Wizard`, `HatModel`, `Staff`) : pattern
  `useGLTF` + `useFrame` + `memo` explicite, `useGLTF.preload` en fin de fichier.
- `components/scenes/SceneManager.tsx` — décide quelle scène 3D est montée selon la route.
- `data/index.ts` — données statiques (items de nav, projets…).
- `hooks/useScreenSize.ts`.
- `styles/globals.css` — custom properties CSS, pas de Tailwind.

## Déploiement Netlify (`netlify.toml`)

- `build.command = "bun run build"`, `publish = "dist/client"`, `NODE_VERSION = "22"` fixé.
- `@netlify/vite-plugin-tanstack-start` gère l'intégration SSR côté build, pas de config manuelle
  de functions.
- Headers de cache `immutable, max-age=31536000` sur `/assets/*`, `/models/*`, `/background/*`,
  `/audio/*`, `*.woff2`.
- Headers de sécurité globaux sur `/*` : `X-Frame-Options: DENY`, `X-Content-Type-Options:
  nosniff`, `X-XSS-Protection`, `Referrer-Policy: strict-origin-when-cross-origin`.

## Conventions observées

- JSDoc et contenu UI **en anglais** (ex. `data/index.ts`, toasts de `Form.tsx`).
- Double quotes + points-virgules, `interface` pour les props/types de données (pas `type`).
- Imports externes puis internes ; alias `@/` → `src/` (`tsconfig.json` `paths` +
  `vite-tsconfig-paths`).
- **React Compiler actif** : pas de `useMemo`/`useCallback` manuel en général — **sauf** dans les
  composants Three.js (`components/models/`), où `memo` explicite et `useMemo` restent
  nécessaires pour `useFrame` (vérifié dans `Wizard.tsx`). Ne pas « nettoyer » ces memo.

## Variables d'environnement (`.env.example`, jamais de valeur)

`VITE_GITHUB_STATS_URL`, `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`,
`VITE_EMAILJS_PUBLIC_KEY`.

## Pièges propres à ce dépôt

- **The formatter is Oxfmt (`vp fmt`), and the code was never formatted with it**: Oxfmt's
  default line width is 100 where the code follows Prettier's 80, so `vp check` reports
  22 files (`src/`, `examples/`, the `.md` docs, `netlify.toml`) and stops there. `vp check
  --fix` would rewrite them all; it is a deliberate style commit, never a side effect of
  another change. `prettier` is installed nowhere.
- `.env` n'existe que dans **une** des deux copies locales (voir fiche de bank) : ne jamais
  supposer sa présence, le lire avant d'en dépendre.
- Le gate ne peut pas passer en l'état (voir plus haut) : `bun run gate` échoue tant qu'un
  premier test n'existe pas.
