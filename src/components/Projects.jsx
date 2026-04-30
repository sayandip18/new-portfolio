import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const projects = [
  {
    title: 'AI-Powered Chat App',
    description:
      "A context-aware chat application built around CoverPin's business logic. The React frontend acts as a client-side state machine driving a multi-turn tool-call loop. The backend is a NestJS injectable service wrapping OpenAI's Responses API, persisting conversation state in PostgreSQL.",
    tech: ['React', 'NestJS', 'OpenAI', 'PostgreSQL', 'TypeScript'],
  },
  {
    title: 'RBAC Backend System',
    description:
      'A complete Role-Based Access Control backend system enforcing workspace-level resource restrictions. Strengthened enterprise readiness, accelerated deal closures, and supported large-scale onboarding of customers with hundreds of entities and locations.',
    tech: ['NestJS', 'PostgreSQL', 'TypeScript', 'REST API'],
  },
  {
    title: 'License Management Module',
    description:
      'End-to-end scalable license management system enabling customers to create business licenses, manage license versions, and map them to entities and locations. Directly contributed to onboarding new enterprise customers onto the platform.',
    tech: ['Next.js', 'NestJS', 'PostgreSQL', 'TypeScript'],
  },
  {
    title: 'Locations Module',
    description:
      'Full-stack Locations module allowing companies to register operational locations critical for determining applicable federal, state, and local regulations. Onboarded hundreds of locations and generated new revenue streams.',
    tech: ['Next.js', 'NestJS', 'PostgreSQL', 'TypeScript'],
  },
  {
    title: 'Modal Stack Manager',
    description:
      'A React library implementing a stack-based data structure to manage sequential modal components. Uses React Context API to provide a clean, composable interface for orchestrating complex multi-step user flows — push to open, pop to close, with full state isolation per layer.',
    tech: ['React', 'TypeScript', 'Context API'],
  },
]

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{
        background: 'rgba(24,24,27,0.5)',
        border: '1px solid #27272a',
        borderRadius: '14px',
        padding: '28px',
        transition: 'all 0.25s ease',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = '#3f3f46'
        e.currentTarget.style.background = 'rgba(24,24,27,0.9)'
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = '#27272a'
        e.currentTarget.style.background = 'rgba(24,24,27,0.5)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: '#3f3f46',
            fontSize: '11px',
            letterSpacing: '0.1em',
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <h3
        style={{
          color: '#fafafa',
          fontWeight: 600,
          fontSize: '17px',
          margin: '0 0 12px',
          letterSpacing: '-0.01em',
        }}
      >
        {project.title}
      </h3>

      <p style={{ color: '#71717a', fontSize: '14px', lineHeight: 1.7, margin: '0 0 24px' }}>
        {project.description}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {project.tech.map(t => (
          <span
            key={t}
            style={{
              padding: '3px 10px',
              background: '#18181b',
              border: '1px solid #27272a',
              color: '#71717a',
              fontSize: '11px',
              fontFamily: "'JetBrains Mono', monospace",
              borderRadius: '4px',
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true })

  return (
    <section style={{ padding: '80px 24px', background: 'rgba(9,9,11,0.8)' }} id="projects">
      <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '56px' }}
        >
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: '#7c3aed',
              fontSize: '12px',
              marginBottom: '12px',
              letterSpacing: '0.12em',
            }}
          >
            01 — projects
          </p>
          <h2
            style={{
              color: '#fafafa',
              fontWeight: 700,
              fontSize: 'clamp(28px, 5vw, 40px)',
              letterSpacing: '-0.02em',
              margin: 0,
            }}
          >
            Things I've built
          </h2>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))',
            gap: '16px',
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
