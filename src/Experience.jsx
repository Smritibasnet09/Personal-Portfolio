import React, { useState } from 'react';

const TIMELINE_DATA = [
  {
    id: 1,
    role: 'Freelance AI & Full-Stack Developer',
    org: 'Self-Development & Client Solutions',
    year: 'NOW',
    description:
      'Continuously exploring new technologies, researching advanced AI systems, building predictive pipelines, and pushing the boundaries of what is possible in modern web and intelligent applications.',
    tags: ['AI Agents', 'RAG Pipelines', 'FastAPI', 'Next.js', 'PyTorch'],
  },
  {
    id: 2,
    role: 'IT Development Intern',
    org: 'University Grants Commission (UGC), Nepal',
    year: '2025',
    description:
      'Integrated institutional data operations with modern verification tooling. Supported the central IT department with duplicate record resolution, database sanitation, and reporting workflows.',
    tags: ['Data Cleaning', 'Verification Systems', 'Excel Analytics', 'Database Quality'],
  },
  {
    id: 3,
    role: 'Executive Member & AI Coordinator',
    org: 'AI Club — SSRC Sunway College',
    year: '2024',
    description:
      'Facilitated campus technical study circles, peer workshops on machine learning architectures, and hackathon preparation. Mentored junior students on practical Python & AI applications.',
    tags: ['Technical Leadership', 'Workshop Coordination', 'Mentorship', 'Community Building'],
  },
  {
    id: 4,
    role: 'Data Entry & Analytics Specialist',
    org: 'Dataksha Analytics',
    year: '2023',
    description:
      'Managed client data administration through quality-driven workflows. Maintained relational dataset consistency feeding downstream business intelligence and statistical modeling.',
    tags: ['Data Auditing', 'Quality Control', 'Data Pipelines', 'Spreadsheet Analytics'],
  },
];

export default function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="experience" className="career-viewport-section" aria-label="Career and Experience">
      {/* Glow background ambient */}
      <div className="career-ambient-glow" />

      {/* Section Title */}
      <div className="career-header-center">
        <h2 className="career-main-title">
          My career &amp; <span className="title-purple-gradient">experience</span>
        </h2>
        <p className="career-subtext">
          A progression of hands-on software development, institutional operations, and community leadership.
        </p>
      </div>

      {/* 3-Column Neon Timeline Layout */}
      <div className="timeline-neon-container">
        {/* Central Vertical Neon Line */}
        <div className="neon-vertical-line">
          <div className="neon-line-track" />
          <div 
            className="neon-line-bead"
            style={{
              top: hoveredIndex !== null ? `${(hoveredIndex + 0.5) * 25}%` : '75%',
            }}
          />
        </div>

        {/* Timeline Rows */}
        <div className="timeline-rows-list">
          {TIMELINE_DATA.map((item, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <div
                key={item.id}
                className={`timeline-row-item ${isHovered ? 'row-active' : ''}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Left Column: Role & Organization */}
                <div className="timeline-col-role">
                  <h3 className="timeline-role-name">{item.role}</h3>
                  <span className="timeline-org-name">{item.org}</span>
                </div>

                {/* Center Column: Huge Bold Year */}
                <div className="timeline-col-year">
                  <span className="timeline-year-text">{item.year}</span>
                  <div className="timeline-center-node" />
                </div>

                {/* Right Column: Description & Tags */}
                <div className="timeline-col-desc">
                  <p className="timeline-desc-text">{item.description}</p>
                  <div className="timeline-tags-wrap">
                    {item.tags.map((tag) => (
                      <span key={tag} className="timeline-pill-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
