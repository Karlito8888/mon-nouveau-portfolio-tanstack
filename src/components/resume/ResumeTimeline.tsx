import { motion } from "framer-motion";
import type { ResumeItem } from "../../data";

interface ResumeTimelineProps {
  items: ResumeItem[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export function ResumeTimeline({ items }: ResumeTimelineProps) {
  return (
    <div className="resume-container">
      <motion.h1
        className="resume-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Journey
      </motion.h1>

      <motion.div
        className="resume-timeline"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className={`resume-item ${index % 2 === 0 ? "resume-item-left" : "resume-item-right"}`}
            variants={itemVariants}
          >
            {/* Period badge */}
            <div className="resume-period">{item.period}</div>

            {/* Timeline dot */}
            <div
              className={`resume-dot ${item.type === "education" ? "resume-dot-education" : "resume-dot-work"}`}
            >
              {item.type === "education" ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              )}
            </div>

            {/* Card */}
            <div className="resume-card glass">
              <h3 className="resume-card-title">
                {item.title.includes("\n")
                  ? item.title.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < item.title.split("\n").length - 1 && <br />}
                      </span>
                    ))
                  : item.title}
              </h3>
              <p className="resume-card-org">{item.organization}</p>
              {item.location && (
                <p className="resume-card-location">{item.location}</p>
              )}
              {item.description && (
                <p className="resume-card-description">
                  {item.description.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < item.description!.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </p>
              )}
              {item.skills && item.skills.length > 0 && (
                <ul className="resume-card-skills">
                  {item.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
