import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { GithubIcon, LinkedinIcon } from './icons'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'rgba(9,9,11,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(39,39,42,0.6)' : '1px solid transparent',
      }}
    >
      <div
        style={{
          maxWidth: '1024px',
          margin: '0 auto',
          padding: '20px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: '#a78bfa',
            fontSize: '13px',
            fontWeight: 500,
            letterSpacing: '0.08em',
          }}
        >
          sayandip.dev
        </span>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <a
            href="https://github.com/sayandip18"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            style={{ color: '#71717a', transition: 'color 0.2s', display: 'flex' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#fafafa')}
            onMouseLeave={e => (e.currentTarget.style.color = '#71717a')}
          >
            <GithubIcon size={20} />
          </a>
          <a
            href="https://linkedin.com/in/sayandip-halder"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{ color: '#71717a', transition: 'color 0.2s', display: 'flex' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#fafafa')}
            onMouseLeave={e => (e.currentTarget.style.color = '#71717a')}
          >
            <LinkedinIcon size={20} />
          </a>
        </div>
      </div>
    </motion.header>
  )
}
