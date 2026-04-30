import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from './icons'

const sideProjects = [
  {
    title: 'PyData/Sparse — GSoC 2021',
    org: 'Python Software Foundation',
    description:
      'Contributed to PyData/Sparse under the Python Software Foundation during Google Summer of Code 2021. Designed and implemented from scratch an ndarray-compatible Python API enabling seamless integration with NumPy-like workflows. The library is positioned to become the de-facto sparse array implementation in the Python ecosystem, replacing scipy.sparse.',
    tech: ['Python', 'NumPy', 'Open Source'],
    github: 'https://github.com/pydata/sparse',
  },
  {
    title: 'Modal Stack Manager',
    org: 'Personal',
    description:
      'A React library implementing a stack-based data structure to manage sequential modal components. Uses React Context API to provide a clean, composable interface for orchestrating complex multi-step user flows with modals — push to open, pop to close, with full state isolation per layer.',
    tech: ['React', 'TypeScript', 'Context API'],
    github: 'https://github.com/sayandip18',
  },
]

function SideProjectCard({ project, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: 'rgba(24,24,27,0.5)',
        border: '1px solid #27272a',
        borderRadius: '14px',
        padding: '28px',
        transition: 'all 0.25s ease',
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
      {/* Card header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            background: 'rgba(109,40,217,0.12)',
            border: '1px solid rgba(109,40,217,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "'JetBrains Mono', monospace",
            color: '#a78bfa',
            fontSize: '13px',
            fontWeight: 500,
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#52525b', transition: 'color 0.2s', display: 'flex' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fafafa')}
              onMouseLeave={e => (e.currentTarget.style.color = '#52525b')}
              aria-label="GitHub"
            >
              <GithubIcon size={17} />
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#52525b', transition: 'color 0.2s', display: 'flex' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fafafa')}
              onMouseLeave={e => (e.currentTarget.style.color = '#52525b')}
              aria-label="Live link"
            >
              <ExternalLink size={17} />
            </a>
          )}
        </div>
      </div>

      <h3 style={{ color: '#fafafa', fontWeight: 600, fontSize: '16px', margin: '0 0 6px', letterSpacing: '-0.01em' }}>
        {project.title}
      </h3>

      {project.org && (
        <p
          style={{
            color: '#a78bfa',
            fontSize: '12px',
            fontFamily: "'JetBrains Mono', monospace",
            margin: '0 0 14px',
            letterSpacing: '0.04em',
          }}
        >
          {project.org}
        </p>
      )}

      <p style={{ color: '#71717a', fontSize: '14px', lineHeight: 1.7, margin: '0 0 24px', flex: 1 }}>
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

export default function SideProjects() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true })

  return (
    <section style={{ padding: '80px 24px', background: 'rgba(9,9,11,0.8)' }} id="side-projects">
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
            03 — side projects
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
            What I tinker with
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '16px' }}>
          {sideProjects.map((project, i) => (
            <SideProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
