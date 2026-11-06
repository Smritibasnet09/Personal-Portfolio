import React from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  Building2,
  Code2,
  GraduationCap,
  Database,
} from 'lucide-react';

const EXPERIENCES = [
  {
    id: 1,
    role: 'Freelance AI & Full-Stack Developer',
    org: 'Self-Development & Client Solutions',
    period: '2025 — Present',
    current: true,
    location: 'Remote',
    type: 'Freelance / Engineering',
    description:
      'Continuously exploring new technologies, researching advanced AI systems, building predictive pipelines, and pushing the boundaries of what is possible in modern web and intelligent applications.',
    tags: ['AI Agents', 'RAG Pipelines', 'FastAPI', 'Next.js', 'PyTorch'],
    icon: <Code2 size={20} />,
  },
  {
    id: 2,
    role: 'IT Development Intern',
    org: 'University Grants Commission (UGC), Nepal',
    period: '2025',
    current: false,
    location: 'Sanothimi, Bhaktapur',
    type: 'Institutional IT',
    description:
      'Integrated institutional data operations with modern verification tooling. Supported the central IT department with duplicate record resolution, database sanitation, and reporting workflows.',
    tags: ['Data Cleaning', 'Verification Systems', 'Excel Analytics', 'Database Quality'],
    icon: <Building2 size={20} />,
  },
  {
    id: 3,
    role: 'Executive Member & AI Coordinator',
    org: 'AI Club — SSRC Sunway College',
    period: '2024 — 2025',
    current: false,
    location: 'Maitidevi, Kathmandu',
    type: 'Leadership & Mentorship',
    description:
      'Facilitated campus technical study circles, peer workshops on machine learning architectures, and hackathon preparation. Mentored junior students on practical Python & AI applications.',
    tags: ['Technical Leadership', 'Workshop Coordination', 'Mentorship', 'Community Building'],
    icon: <GraduationCap size={20} />,
  },
  {
    id: 4,
    role: 'Data Entry & Analytics Specialist',
    org: 'Dataksha Analytics',
    period: '2023',
    current: false,
    location: 'Kathmandu, Nepal',
    type: 'Data Operations',
    description:
      'Managed client data administration through quality-driven workflows. Maintained relational dataset consistency feeding downstream business intelligence and statistical modeling.',
    tags: ['Data Auditing', 'Quality Control', 'Data Pipelines', 'Spreadsheet Analytics'],
    icon: <Database size={20} />,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="career-viewport-section" aria-label="Career and Experience">
      {/* Section Header */}
      <div className="career-header-center">
        <div className="career-badge-pill">
          <Briefcase size={13} className="career-badge-icon" />
          <span>My Journey</span>
        </div>
        <h2 className="career-main-title">
          My Career &amp; <span className="title-purple-gradient">Experience</span>
        </h2>
        <p className="career-subtext">
          A progression of hands-on software development, institutional operations, and community leadership.
        </p>
        <div className="career-accent-divider" />
      </div>

      {/* Experience Cards Stack */}
      <div className="experience-cards-container">
        {EXPERIENCES.map((item) => (
          <article
            key={item.id}
            className={`experience-card ${item.current ? 'is-current' : ''}`}
          >
            {/* Left accent indicator line */}
            <div className="experience-card-accent-bar" />

            <div className="experience-card-inner">
              {/* Card Header */}
              <div className="experience-card-header">
                {/* Icon & Title info */}
                <div className="experience-header-main">
                  <div className="experience-icon-box" aria-hidden="true">
                    {item.icon}
                  </div>

                  <div className="experience-title-group">
                    <div className="experience-role-row">
                      <h3 className="experience-role-title">{item.role}</h3>
                      {item.current && (
                        <span className="experience-active-pill">
                          <span className="experience-active-dot" />
                          Present
                        </span>
                      )}
                    </div>

                    <div className="experience-meta-row">
                      <span className="experience-org-name">{item.org}</span>
                      <span className="experience-meta-sep">•</span>
                      <span className="experience-location-text">
                        <MapPin size={12} className="experience-location-icon" />
                        {item.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="experience-duration-badge">
                  <Calendar size={13} className="experience-calendar-icon" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Responsibilities Description */}
              <div className="experience-body">
                <p className="experience-description">{item.description}</p>
              </div>

              {/* Technologies / Skills Tags */}
              <div className="experience-footer">
                <div className="experience-tags-list">
                  {item.tags.map((tag) => (
                    <span key={tag} className="experience-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
