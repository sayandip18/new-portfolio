import { motion } from "framer-motion";
import { ArrowDown, FileText, Mail } from "lucide-react";

const techStack = [
  "TypeScript",
  "React",
  "Next.js",
  "NestJS",
  "PostgreSQL",
  "Node.js",
  "Golang",
  "Python",
  "FastAPI",
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "100px 24px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "-10%",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(109,40,217,0.12) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "-5%",
          width: "350px",
          height: "350px",
          background:
            "radial-gradient(circle, rgba(79,70,229,0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1024px",
          margin: "0 auto",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.p
          {...fadeUp(0.1)}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: "#a78bfa",
            fontSize: "13px",
            marginBottom: "20px",
            letterSpacing: "0.1em",
          }}
        >
          Hello, world —
        </motion.p>

        <motion.h1
          {...fadeUp(0.2)}
          style={{
            fontSize: "clamp(52px, 10vw, 96px)",
            fontWeight: 800,
            color: "#fafafa",
            letterSpacing: "-0.04em",
            lineHeight: 1.0,
            margin: 0,
            marginBottom: "8px",
          }}
        >
          Sayandip
        </motion.h1>
        <motion.h1
          {...fadeUp(0.25)}
          style={{
            fontSize: "clamp(52px, 10vw, 96px)",
            fontWeight: 800,
            color: "#52525b",
            letterSpacing: "-0.04em",
            lineHeight: 1.0,
            margin: 0,
            marginBottom: "32px",
          }}
        >
          Halder
        </motion.h1>

        <motion.div
          {...fadeUp(0.35)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "28px",
          }}
        >
          <div
            style={{ height: "1px", width: "40px", backgroundColor: "#7c3aed" }}
          />
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "#71717a",
              fontSize: "13px",
            }}
          >
            Full Stack Software Engineer
          </span>
        </motion.div>

        <motion.p
          {...fadeUp(0.45)}
          style={{
            color: "#a1a1aa",
            fontSize: "18px",
            lineHeight: 1.75,
            maxWidth: "520px",
            margin: "0 0 36px",
          }}
        >
          I build scalable, production-grade web applications end-to-end — from
          database schema to deployment. My recent work spans AI-powered chat
          interfaces, RBAC systems for enterprise access control, and frontend
          architecture like stack-based modal orchestration for complex
          multi-step user flows. Currently exploring and building AI-powered
          systems on my own.
        </motion.p>

        <motion.div
          {...fadeUp(0.5)}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            marginBottom: "44px",
          }}
        >
          {techStack.map((t) => (
            <span
              key={t}
              style={{
                padding: "4px 12px",
                background: "rgba(24,24,27,0.8)",
                border: "1px solid #27272a",
                color: "#71717a",
                fontSize: "12px",
                fontFamily: "'JetBrains Mono', monospace",
                borderRadius: "9999px",
              }}
            >
              {t}
            </span>
          ))}
        </motion.div>

        <motion.div
          {...fadeUp(0.6)}
          style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 24px",
              background: "#7c3aed",
              color: "#fff",
              fontWeight: 500,
              fontSize: "15px",
              borderRadius: "10px",
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#6d28d9";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#7c3aed";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <FileText size={16} />
            View Resume
          </a>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 24px",
              border: "1px solid #27272a",
              color: "#a1a1aa",
              fontWeight: 500,
              fontSize: "15px",
              borderRadius: "10px",
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#52525b";
              e.currentTarget.style.color = "#fafafa";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#27272a";
              e.currentTarget.style.color = "#a1a1aa";
            }}
          >
            <Mail size={16} />
            Get in touch
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#3f3f46",
          animation: "bounce 2s infinite",
        }}
      >
        <ArrowDown size={20} />
      </motion.div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>
    </section>
  );
}
