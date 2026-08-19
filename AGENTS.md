# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## CRITICAL RULES

### 1. Documentation-First Development

**BEFORE executing any significant task, you MUST consult official documentation. No improvisation allowed.**

### 2. Netlify Hosting (MANDATORY)

**This project is deployed on Netlify.** All deployment configurations must follow Netlify best practices.

- Use `@netlify/vite-plugin-tanstack-start` for TanStack Start integration
- Configuration in `netlify.toml` at project root
- Build command: `vite build`
- Publish directory: `dist/client`

### 3. Mobile-First Responsive Design (IMPERATIVE)

**100% responsive design using mobile-first approach. NO EXCEPTIONS.**

- **All CSS must start with mobile styles** (base styles)
- **Use `min-width` media queries** to add complexity for larger screens
- **Breakpoints:**
  - `sm`: 640px+ (small tablets)
  - `md`: 768px+ (tablets)
  - `lg`: 1024px+ (laptops)
  - `xl`: 1280px+ (desktops)
  - `2xl`: 1536px+ (large screens)
- **Test on mobile FIRST**, then progressively enhance for larger screens
- **Touch-friendly**: minimum 44x44px tap targets
- **Fluid typography**: use `clamp()` for responsive font sizes

### Mandatory Workflow

1. **Priority 1 - Archon MCP** (always try first):
   ```
   mcp__archon__rag_get_available_sources()  # Get source IDs
   mcp__archon__rag_search_knowledge_base(query="...", source_id="...")
   mcp__archon__rag_read_full_page(page_id="...")
   ```

2. **Priority 2 - Web Search** (if not in Archon):
   - Use WebSearch tool for official docs not indexed in Archon
   - Always target official documentation sites

### Documentation Sources in Archon

| Technology | Source ID | Use For |
|------------|-----------|---------|
| TanStack | `dc4cf3168627a5c8` | Router, Query, Start |
| React | `62371402a593220c` | Hooks, Compiler, Patterns |
| Vite | `22832de63c03f570` | Build config, plugins |
| Netlify | `ff945e33f7b06496` | Deployment, functions, config |
| Supabase | `9c5f534e51ee9237` | If backend needed |

### What Requires Documentation Lookup

- Any TanStack Router/Start API usage
- React 19 / React Compiler specifics
- Three.js / @react-three/fiber APIs
- Framer Motion animation APIs
- Bun-specific configurations
- Netlify deployment configurations
- Responsive design patterns
- Any unfamiliar API or pattern

### Forbidden

- Guessing API signatures or configurations
- Using outdated patterns from memory
- Implementing without verifying current best practices

---

## Project Overview

This is a creative portfolio website inspired by the Next.js-Creative-Portfolio-Website project, rebuilt with modern 2026 technologies.

### Source Project Reference

**Original project to follow 100%:**
```
/home/charles/Bureau/Next.js-Creative-Portfolio-Website-main
```

Always refer to this project for:
- Component structure and logic
- Animation implementations
- 3D model integrations
- Styling patterns and design system
- Feature specifications

### Technology Migration

| Original | This Project |
|----------|--------------|
| Next.js | TanStack Router + TanStack Start |
| npm | Bun |
| Next.js Image | Native lazy loading + sharp |

**Core Stack:**
- **TanStack Router** - Type-safe file-based routing
- **TanStack Start** - Full-stack React framework (SSR/SSG)
- **React 19** with React Compiler
- **Three.js** + @react-three/fiber + @react-three/drei
- **Framer Motion** - Animations and transitions
- **CSS** - Custom properties + utility classes (no Tailwind)
- **Bun** - Runtime, package manager, bundler

## Commands

```bash
# Install dependencies
bun install

# Development server
bun dev

# Build for production
bun run build

# Preview production build
bun run preview

# Type checking
bun run typecheck

# Linting
bun run lint
```

## Architecture

### Routing Structure (TanStack Router)

```
src/routes/
├── __root.tsx          # Root layout (Navigation, FireFlies, Sound)
├── index.tsx           # Home page with Wizard 3D model
├── _subpages.tsx       # Layout for sub-pages (HomeBtn)
├── _subpages/
│   ├── about.tsx       # About page with HatModel
│   ├── projects.tsx    # Projects page with StaffModel
│   └── contact.tsx     # Contact form
```

### Component Organization

```
src/
├── components/
│   ├── models/         # Three.js GLB model components
│   │   ├── Wizard.tsx
│   │   ├── HatModel.tsx
│   │   └── Staff.tsx
│   ├── navigation/     # Circular rotating menu
│   ├── about/          # About page stat cards
│   ├── projects/       # Project cards
│   ├── contact/        # Form with validation
│   ├── RenderModel.tsx # Three.js Canvas wrapper
│   ├── FireFliesBackground.tsx
│   ├── HomeBtn.tsx
│   └── Sound.tsx
├── hooks/
│   └── useScreenSize.ts
├── data/
│   └── index.ts        # Static data (projects, navigation)
├── styles/
│   └── globals.css     # CSS custom properties + utilities
└── routes/             # TanStack Router pages
```

### Three.js Integration Pattern

All 3D models follow this pattern:
```tsx
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { memo, useRef } from 'react'

export const Model = memo(function Model(props) {
  const { scene } = useGLTF('/models/model.glb')
  const ref = useRef()

  useFrame((state) => {
    // Animation logic using state.clock.elapsedTime
  })

  return <primitive ref={ref} object={scene} {...props} />
})

useGLTF.preload('/models/model.glb')
```

### Animation Patterns (Framer Motion)

**Staggered container:**
```tsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
}
```

**Viewport-triggered:**
```tsx
<motion.div
  initial={{ scale: 0 }}
  whileInView={{ scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
/>
```

## Design System

### CSS Custom Properties

```css
:root {
  --background: rgb(27, 27, 27);
  --foreground: rgb(225, 225, 225);
  --muted: rgb(115, 115, 115);
  --accent: rgb(254, 254, 91);  /* Yellow #FEFE5B */
}
```

### Glass Morphism Effect

```css
.glass {
  background: rgba(27, 27, 27, 0.2);
  border: 1px solid rgba(254, 254, 91, 0.3);
  backdrop-filter: blur(6px);
}
```

## Key Features to Implement

1. **Home**: Full-screen Wizard 3D model + circular rotating navigation (8 items)
2. **About**: HatModel + stat cards grid + GitHub stats integration
3. **Projects**: StaffModel + staggered project cards with hover effects
4. **Contact**: Form validation (react-hook-form) + EmailJS integration
5. **Global**: Fireflies particle background + audio toggle with consent

## 3D Models

Located in `public/models/`:
- `wizard-transformed.glb` - Home page (floating animation)
- `hat-transformed.glb` - About page (continuous rotation)
- `staff-transformed.glb` - Projects page (continuous rotation)

## Environment Variables

```
PUBLIC_SERVICE_ID=       # EmailJS service ID
PUBLIC_TEMPLATE_ID=      # EmailJS template ID
PUBLIC_PUBLIC_KEY=       # EmailJS public key
PUBLIC_GITHUB_STATS_URL= # GitHub stats API
```

## React Compiler

This project uses React Compiler (babel plugin). Memoization (useMemo, useCallback, memo) is handled automatically except for:
- Three.js model components (keep explicit memo for useFrame optimization)
- Components with refs passed to useFrame

## MCP Integration

This project has local skills in `.claude/skills/` for:
- **Archon**: Documentation search (React, TanStack, Three.js docs)
- **Serena**: Semantic code analysis and refactoring

---

## Context Engineering Workflow

This project uses **Context Engineering** - a systematic approach that provides comprehensive documentation, examples, and validation loops for AI-assisted development.

### Session Start Protocol

1. **Review** `PLANNING.md` for architecture overview
2. **Check** `TASK.md` for current work items
3. **Update** `TASK.md` immediately upon task completion

### Feature Implementation Workflow

```
1. Write feature request in INITIAL.md
2. Run: /generate-prp INITIAL.md
3. Review generated PRP in PRPs/[feature].md
4. Run: /execute-prp PRPs/[feature].md
5. Update TASK.md with completion status
```

### Key Files

| File | Purpose |
|------|---------|
| `PLANNING.md` | Architecture, tech stack, design system |
| `TASK.md` | Current tasks, queue, session log |
| `INITIAL.md` | Feature request template |
| `PRPs/` | Generated implementation blueprints |
| `examples/` | Code patterns to follow |

### Validation Gates

Every implementation must pass:
1. **Syntax & Types:** `bun run typecheck && bun run lint`
2. **Tests:** `bun test` (when applicable)
3. **Visual:** Manual verification in browser

### Anti-Patterns (NEVER DO)

- Skip documentation consultation
- Implement without a PRP for complex features
- Ignore TypeScript errors
- Use patterns not from source project or official docs
- Use Tailwind (pure CSS only)
- Use npm (Bun only)
- Guess API signatures
- Write desktop-first CSS (always mobile-first)
- Use `max-width` media queries (use `min-width` only)
- Ignore touch targets (min 44x44px)
- Deploy without testing on mobile viewport
