import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin } from 'lucide-react'

const experiences = [
  {
    company: 'CoverPin',
    role: 'Software Engineer (Full Stack)',
    period: 'May 2025 – Present',
    location: 'San Francisco Bay Area, Remote',
    current: true,
    points: [
      'Designed and implemented a complete RBAC backend system enforcing workspace-level resource restrictions; strengthened enterprise readiness and accelerated deal closures.',
      'Designed a stack-based data structure leveraging React Context API to manage sequential modal components, simplifying complex multi-step user interaction flows.',
      'Designed an AI-powered chat app — React frontend as a client-side state machine driving a multi-turn tool-call loop; NestJS service wrapping OpenAI\'s Responses API with persistent conversation state.',
      'Led end-to-end development of a scalable License Management module using Next.js, NestJS, and PostgreSQL.',
      'Architected and shipped a Locations module enabling companies to register operational locations for regulatory compliance; onboarded hundreds of locations.',
    ],
  },
  {
    company: 'Pepper Content',
    role: 'SDE1',
    period: 'June 2022 – April 2025',
    location: 'Mumbai, Remote',
    points: [
      'Revamped the creator onboarding journey by reducing friction, minimizing steps, and implementing structured data collection; improved UX while standardizing backend data models.',
      'Built a KYC verification workflow collecting bank, GST, and Aadhaar details to ensure regulatory compliance and prevent payouts to mismatched bank accounts.',
      'Owned and maintained the internal operations platform, proactively resolving production issues and delivering new feature enhancements.',
      'Improved overall code quality by refactoring legacy components, reducing technical debt, and enforcing best practices.',
    ],
  },
  {
    company: 'Voosh',
    role: 'Software Engineering Intern',
    period: '2022',
    location: 'Bangalore, Remote',
    points: [
      'Developed new reusable UI components.',
      'Helped migrate legacy data from MongoDB to a structured data warehouse on GCP BigQuery, improving data reliability and analytics capability.',
    ],
  },
  {
    company: 'Python Software Foundation',
    role: 'Open Source Contributor — GSoC 2021',
    period: 'Summer 2021',
    location: 'Remote',
    points: [
      'Selected for Google Summer of Code 2021 under the Python Software Foundation to contribute to PyData/Sparse.',
      'Designed and implemented from scratch an ndarray-compatible Python API enabling seamless integration with NumPy-like workflows.',
      'The library is positioned to become the de-facto sparse array implementation in the Python ecosystem, replacing scipy.sparse.',
    ],
  },
]

const education = {
  school: 'Jadavpur University',
  degree: "Bachelor's in Engineering",
  period: '2018 – 2022',
  location: 'Kolkata, WB',
}

function ExperienceCard({ exp, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ position: 'relative', paddingLeft: '32px', paddingBottom: index < experiences.length - 1 ? '36px' : 0 }}
    >
      {/* Timeline line */}
      {index < experiences.length - 1 && (
        <div
          style={{
            position: 'absolute',
            left: '5px',
            top: '20px',
            bottom: 0,
            width: '1px',
            background: 'linear-gradient(to bottom, #3f3f46, transparent)',
          }}
        />
      )}

      {/* Timeline dot */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: '16px',
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          background: exp.current ? '#7c3aed' : '#27272a',
          border: `2px solid ${exp.current ? '#a78bfa' : '#3f3f46'}`,
          boxShadow: exp.current ? '0 0 12px rgba(124,58,237,0.4)' : 'none',
        }}
      />

      <div
        style={{
          background: 'rgba(24,24,27,0.5)',
          border: `1px solid ${exp.current ? 'rgba(109,40,217,0.2)' : '#27272a'}`,
          borderRadius: '14px',
          padding: '24px 28px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '20px',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
              <h3 style={{ color: '#fafafa', fontWeight: 600, fontSize: '17px', margin: 0 }}>
                {exp.company}
              </h3>
              {exp.current && (
                <span
                  style={{
                    padding: '2px 8px',
                    background: 'rgba(109,40,217,0.15)',
                    border: '1px solid rgba(109,40,217,0.3)',
                    color: '#a78bfa',
                    fontSize: '10px',
                    fontFamily: "'JetBrains Mono', monospace",
                    borderRadius: '4px',
                    letterSpacing: '0.06em',
                  }}
                >
                  current
                </span>
              )}
            </div>
            <p style={{ color: '#a78bfa', fontSize: '14px', fontWeight: 500, margin: 0 }}>{exp.role}</p>
          </div>

          <div style={{ textAlign: 'right' }}>
            <p
              style={{
                color: '#71717a',
                fontSize: '13px',
                fontFamily: "'JetBrains Mono', monospace",
                margin: '0 0 4px',
              }}
            >
              {exp.period}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'flex-end' }}>
              <MapPin size={11} color="#52525b" />
              <span style={{ color: '#52525b', fontSize: '12px' }}>{exp.location}</span>
            </div>
          </div>
        </div>

        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {exp.points.map((point, i) => (
            <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span style={{ color: '#7c3aed', marginTop: '2px', flexShrink: 0, fontSize: '12px' }}>▸</span>
              <span style={{ color: '#71717a', fontSize: '14px', lineHeight: 1.65 }}>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true })
  const eduRef = useRef(null)
  const isEduInView = useInView(eduRef, { once: true, margin: '-60px' })

  return (
    <section style={{ padding: '80px 24px', background: '#09090b' }} id="experience">
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
            02 — experience
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
            Where I've worked
          </h2>
        </motion.div>

        <div style={{ marginBottom: '60px' }}>
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>

        {/* Education */}
        <motion.div
          ref={eduRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isEduInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: '#3f3f46',
              fontSize: '11px',
              marginBottom: '16px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            Education
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '8px',
              background: 'rgba(24,24,27,0.4)',
              border: '1px solid #27272a',
              borderRadius: '14px',
              padding: '20px 28px',
            }}
          >
            <div>
              <h3 style={{ color: '#fafafa', fontWeight: 600, fontSize: '16px', margin: '0 0 4px' }}>
                {education.school}
              </h3>
              <p style={{ color: '#71717a', fontSize: '14px', margin: 0 }}>{education.degree}</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ color: '#71717a', fontSize: '13px', fontFamily: "'JetBrains Mono', monospace", margin: '0 0 4px' }}>
                {education.period}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'flex-end' }}>
                <MapPin size={11} color="#52525b" />
                <span style={{ color: '#52525b', fontSize: '12px' }}>{education.location}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
