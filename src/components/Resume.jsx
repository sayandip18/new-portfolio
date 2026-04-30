import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FileText, ArrowRight } from 'lucide-react'

export default function Resume() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section style={{ padding: '0 24px 80px' }}>
      <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            background: 'linear-gradient(135deg, rgba(109,40,217,0.08) 0%, rgba(24,24,27,0.5) 100%)',
            border: '1px solid rgba(109,40,217,0.2)',
            borderRadius: '16px',
            padding: '28px 32px',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'rgba(109,40,217,0.15)',
                border: '1px solid rgba(109,40,217,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <FileText color="#a78bfa" size={22} />
            </div>
            <div>
              <h3 style={{ color: '#fafafa', fontWeight: 600, fontSize: '16px', margin: '0 0 4px' }}>
                Resume
              </h3>
              <p style={{ color: '#71717a', fontSize: '14px', margin: 0 }}>
                Full stack engineering · 4+ years · TypeScript, React, NestJS, PostgreSQL
              </p>
            </div>
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 22px',
              background: '#7c3aed',
              color: '#fff',
              fontWeight: 500,
              fontSize: '14px',
              borderRadius: '8px',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#6d28d9'; e.currentTarget.style.gap = '12px'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#7c3aed'; e.currentTarget.style.gap = '8px'; }}
          >
            View Resume
            <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
