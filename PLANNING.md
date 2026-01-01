# Project Planning & Architecture

> This document describes the overall architecture and planning for the portfolio project.
> **REVIEW THIS AT THE START OF EACH SESSION.**

---

## Project Vision

A creative portfolio website that replicates the Next.js-Creative-Portfolio-Website using modern 2026 technologies.

**Source Project:**
```
/home/charles/Bureau/Next.js-Creative-Portfolio-Website-main
```

---

## Technology Stack

| Category | Technology | Documentation |
|----------|------------|---------------|
| Framework | TanStack Start + Router | Archon: `dc4cf3168627a5c8` |
| UI Library | React 19 + Compiler | Archon: `62371402a593220c` |
| Build Tool | Vite (via TanStack Start) | Archon: `22832de63c03f570` |
| Hosting | Netlify | Archon: `ff945e33f7b06496` |
| 3D Graphics | Three.js + R3F + Drei | Web search |
| Animations | Framer Motion | Web search |
| Styling | CSS Custom Properties (Mobile-First) | - |
| Runtime | Bun | Web search |

---

## Architecture Overview

```
Mon-Portfolio/
├── src/
│   ├── routes/                 # TanStack Router file-based routing
│   │   ├── __root.tsx          # Root layout (FireFlies, Sound)
│   │   ├── index.tsx           # Home page (Navigation, Wizard)
│   │   ├── _subpages.tsx       # Sub-pages layout (HomeBtn)
│   │   └── _subpages/
│   │       ├── about.tsx       # About page (HatModel, Stats)
│   │       ├── projects.tsx    # Projects page (Staff, Cards)
│   │       └── contact.tsx     # Contact form
│   ├── components/
│   │   ├── models/             # Three.js 3D models
│   │   │   ├── Wizard.tsx      # Home page model
│   │   │   ├── HatModel.tsx    # About page model
│   │   │   └── Staff.tsx       # Projects page model
│   │   ├── navigation/         # Circular menu ✅
│   │   │   ├── Navigation.tsx
│   │   │   └── NavButton.tsx
│   │   ├── about/              # About section
│   │   │   ├── AboutDetails.tsx
│   │   │   └── ItemLayout.tsx
│   │   ├── projects/           # Projects section
│   │   │   ├── ProjectList.tsx
│   │   │   └── ProjectLayout.tsx
│   │   ├── contact/            # Contact form
│   │   │   └── Form.tsx
│   │   ├── RenderModel.tsx     # Three.js Canvas wrapper
│   │   ├── FireFliesBackground.tsx
│   │   ├── HomeBtn.tsx
│   │   └── Sound.tsx
│   ├── hooks/
│   │   └── useScreenSize.ts    # ✅
│   ├── data/
│   │   └── index.ts            # ✅ navItems, projectsData
│   └── styles/
│       └── globals.css         # ✅ CSS design system
├── public/
│   ├── models/                 # ✅ GLB 3D model files
│   ├── background/             # Background images (to copy)
│   └── audio/                  # Audio files (to copy)
├── netlify.toml                # ✅ Netlify config
├── PRPs/                       # Product Requirements Prompts
├── examples/                   # Code pattern examples
└── .claude/                    # Claude Code configuration
```

---

## Design System

### Colors (CSS Custom Properties)
```css
--background: rgb(27, 27, 27);    /* Dark background */
--foreground: rgb(225, 225, 225); /* Light text */
--muted: rgb(115, 115, 115);      /* Gray accent */
--accent: rgb(254, 254, 91);      /* Yellow #FEFE5B */
```

### Effects
- Glass morphism with backdrop blur
- Smooth transitions (0.3s-0.5s)
- Staggered animations for lists

### Responsive (Mobile-First)
- `sm`: 640px+ | `md`: 768px+ | `lg`: 1024px+ | `xl`: 1280px+
- Always use `min-width` media queries
- Fluid typography with `clamp()`

---

## COMPLETE TASK LIST (Ordered by Dependencies)

### Phase 1: Foundation ✅ COMPLETED
| # | Task | Status | Dependencies |
|---|------|--------|--------------|
| 1 | Project setup (TanStack Start + Bun) | ✅ | - |
| 2 | Netlify configuration | ✅ | 1 |
| 3 | Global CSS (design system, mobile-first) | ✅ | 1 |
| 4 | Root layout (__root.tsx) | ✅ | 3 |
| 5 | Copy 3D models | ✅ | 1 |
| 6 | Data structures (navItems, projectsData) | ✅ | 1 |
| 7 | useScreenSize hook | ✅ | 1 |
| 8 | Navigation component (circular menu) | ✅ | 6, 7 |

### Phase 2: Core Components ✅
| # | Task | Status | Dependencies |
|---|------|--------|--------------|
| 9 | FireFliesBackground component | ✅ | 3 |
| 10 | RenderModel component (Three.js Canvas) | ✅ | 1 |
| 11 | Wizard model component | ✅ | 10 |
| 12 | Home page integration | ✅ | 8, 9, 10, 11 |

### Phase 3: Sub-pages Infrastructure ✅
| # | Task | Status | Dependencies |
|---|------|--------|--------------|
| 13 | HomeBtn component | ✅ | 3 |
| 14 | _subpages layout route | ✅ | 13 |
| 15 | Copy background images | ✅ | 1 |
| 16 | Copy audio files | ✅ | 1 |

### Phase 4: About Page ✅
| # | Task | Status | Dependencies |
|---|------|--------|--------------|
| 17 | HatModel component | ✅ | 10 |
| 18 | ItemLayout component | ✅ | 3 |
| 19 | AboutDetails component | ✅ | 18 |
| 20 | About page route | ✅ | 14, 15, 17, 19 |

### Phase 5: Projects Page ✅
| # | Task | Status | Dependencies |
|---|------|--------|--------------|
| 21 | Staff model component | ✅ | 10 |
| 22 | ProjectLayout component | ✅ | 3 |
| 23 | ProjectList component | ✅ | 22 |
| 24 | Projects page route | ✅ | 14, 15, 21, 23 |

### Phase 6: Contact Page ✅
| # | Task | Status | Dependencies |
|---|------|--------|--------------|
| 25 | Contact Form component (react-hook-form) | ✅ | 3 |
| 26 | EmailJS integration | ✅ | 25 |
| 27 | Contact page route | ✅ | 14, 15, 25 |

### Phase 7: Polish ✅
| # | Task | Status | Dependencies |
|---|------|--------|--------------|
| 28 | Sound component (modal + audio) | ✅ | 3, 16 |
| 29 | Sound integration in root | ✅ | 28 |
| 30 | Responsive testing all pages | ✅ | 20, 24, 27 |
| 31 | Performance optimization | ✅ | 30 |
| 32 | Final Netlify deployment | ✅ | 31 |

**Live URL:** https://charles-portfolio-2026.netlify.app

---

## Source Project Component Mapping

| Source Component | Target Component | Notes |
|------------------|------------------|-------|
| `navigation/index.jsx` | `navigation/Navigation.tsx` | ✅ Done |
| `navigation/NavButton.jsx` | `navigation/NavButton.tsx` | ✅ Done |
| `FireFliesBackground.jsx` | `FireFliesBackground.tsx` | Particles animation |
| `RenderModel.jsx` | `RenderModel.tsx` | R3F Canvas wrapper |
| `models/Wizard.jsx` | `models/Wizard.tsx` | useGLTF + useFrame |
| `models/HatModel.jsx` | `models/HatModel.tsx` | useGLTF + rotation |
| `models/Staff.jsx` | `models/Staff.tsx` | useGLTF + rotation |
| `HomeBtn.jsx` | `HomeBtn.tsx` | Motion Link home |
| `Sound.jsx` | `Sound.tsx` | Audio + consent modal |
| `about/index.jsx` | `about/AboutDetails.tsx` | Grid stats layout |
| `about/ItemLayout.jsx` | `about/ItemLayout.tsx` | Glass card wrapper |
| `projects/index.jsx` | `projects/ProjectList.tsx` | Stagger container |
| `projects/ProjectLayout.jsx` | `projects/ProjectLayout.tsx` | Project card |
| `contact/Form.jsx` | `contact/Form.tsx` | react-hook-form |

---

## Assets to Copy from Source

### Already Copied ✅
- `public/models/wizard-transformed.glb`
- `public/models/hat-transformed.glb`
- `public/models/staff-transformed.glb`

### To Copy
```bash
# Background images
cp /home/charles/Bureau/Next.js-Creative-Portfolio-Website-main/public/background/*.png public/background/

# Audio files
cp /home/charles/Bureau/Next.js-Creative-Portfolio-Website-main/public/audio/*.mp3 public/audio/
```

---

## Key Patterns

### Three.js Model Pattern
```tsx
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { memo, useRef } from 'react'

export const Model = memo(function Model(props) {
  const { scene } = useGLTF('/models/model.glb')
  const ref = useRef()
  useFrame((state) => { /* animation */ })
  return <primitive ref={ref} object={scene} {...props} />
})
useGLTF.preload('/models/model.glb')
```

### Framer Motion Stagger Pattern
```tsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 }
  }
}
const item = {
  hidden: { scale: 0 },
  show: { scale: 1 }
}
```

### Mobile-First CSS Pattern
```css
/* Mobile base */
.element { padding: 1rem; }

/* Tablet+ */
@media (min-width: 768px) {
  .element { padding: 2rem; }
}
```

---

## Documentation Protocol

**ALWAYS consult before implementing:**

1. **Archon MCP** (Priority 1)
   - TanStack: `dc4cf3168627a5c8`
   - React: `62371402a593220c`
   - Vite: `22832de63c03f570`
   - Netlify: `ff945e33f7b06496`

2. **Web Search** (Priority 2)
   - Three.js, Framer Motion, Bun

3. **Source Project**
   - `/home/charles/Bureau/Next.js-Creative-Portfolio-Website-main`

---

## Session Notes

### 2026-01-01
- Project initialized with TanStack Start + Bun
- Netlify + mobile-first configuration added
- Navigation component implemented with Framer Motion stagger
- Created comprehensive task list (32 tasks in 7 phases)
