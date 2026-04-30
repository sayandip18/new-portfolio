# Portfolio — CLAUDE.md

## Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Inline styles (no CSS modules or Tailwind classes used at runtime), Tailwind v4 available
- **Animation**: Framer Motion (`motion`, `useInView`)
- **Icons**: Lucide React + custom SVG icons in `src/components/icons.jsx`
- **Language**: JavaScript (JSX), no TypeScript

## Project structure

```
src/
  App.jsx              # Root layout — renders all sections in order
  components/
    Header.jsx         # Sticky nav
    Hero.jsx           # Landing / intro section
    Resume.jsx         # Resume download section
    Projects.jsx       # Featured projects (section 01)
    Experience.jsx     # Work experience + education (section 02)
    SideProjects.jsx   # Personal / open-source projects (section 03)
    Contact.jsx        # Contact section
    icons.jsx          # Custom SVG icon components
  App.css
  index.css
public/
  resume.pdf
```

## Dev commands

```bash
npm run dev      # Start dev server (localhost:5173)
npm run build    # Production build
npm run lint     # ESLint
npm run preview  # Preview production build
```

## Conventions

- All layout and visual styling is done with inline `style` props, not Tailwind classes.
- Hover effects are applied via `onMouseEnter`/`onMouseLeave` directly on the element.
- Section numbers (01, 02, 03…) are displayed as monospace labels above each section heading.
- `useInView` with `once: true` drives all scroll-triggered entrance animations.
- Data (experiences, projects, etc.) is defined as plain arrays at the top of each component file.
