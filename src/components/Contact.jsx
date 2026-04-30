import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section style={{ padding: '80px 24px 60px', background: '#09090b' }} id="contact">
      <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: '#7c3aed',
              fontSize: '12px',
              marginBottom: '24px',
              letterSpacing: '0.12em',
            }}
          >
            04 — get in touch
          </p>

          <h2
            style={{
              color: '#fafafa',
              fontWeight: 700,
              fontSize: 'clamp(32px, 6vw, 56px)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              margin: '0 0 24px',
            }}
          >
            Let's build something
            <br />
            <span style={{ color: '#3f3f46' }}>together.</span>
          </h2>

          <p
            style={{
              color: '#71717a',
              fontSize: '17px',
              lineHeight: 1.7,
              maxWidth: '480px',
              margin: '0 auto 48px',
            }}
          >
            I'm open to new opportunities and interesting projects. My inbox is always open — whether
            you have a question or just want to say hi.
          </p>

          <motion.a
            href="mailto:sayandiph4@gmail.com"
            whileHover={{ y: -3 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '16px 32px',
              background: '#7c3aed',
              color: '#fff',
              fontWeight: 500,
              fontSize: '16px',
              borderRadius: '12px',
              textDecoration: 'none',
              marginBottom: '80px',
              transition: 'background 0.2s, box-shadow 0.2s',
              boxShadow: '0 0 0 rgba(124,58,237,0)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#6d28d9'
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(109,40,217,0.35)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#7c3aed'
              e.currentTarget.style.boxShadow = '0 0 0 rgba(124,58,237,0)'
            }}
          >
            <Mail size={18} />
            sayandiph4@gmail.com
            <ArrowUpRight size={16} style={{ opacity: 0.7 }} />
          </motion.a>

          {/* Footer */}
          <div
            style={{
              borderTop: '1px solid #18181b',
              paddingTop: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <span style={{ color: '#3f3f46', fontFamily: "'JetBrains Mono', monospace", fontSize: '12px' }}>
              © 2025 Sayandip Halder
            </span>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <a
                href="https://github.com/sayandip18"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#52525b', transition: 'color 0.2s', display: 'flex' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fafafa')}
                onMouseLeave={e => (e.currentTarget.style.color = '#52525b')}
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="https://linkedin.com/in/sayandip-halder"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#52525b', transition: 'color 0.2s', display: 'flex' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fafafa')}
                onMouseLeave={e => (e.currentTarget.style.color = '#52525b')}
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
