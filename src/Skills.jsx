import React from 'react';

const SKILL_SECTIONS = [
  {
    id: 'languages',
    number: '01',
    title: 'Programming Languages',
    skills: ['Python', 'JavaScript', 'SQL'],
  },
  {
    id: 'backend',
    number: '02',
    title: 'Backend Development',
    skills: ['Django', 'Django REST Framework', 'FastAPI', 'REST APIs'],
  },
  {
    id: 'ai-ml',
    number: '03',
    title: 'AI & Machine Learning',
    skills: [
      'Machine Learning',
      'Natural Language Processing',
      'Generative AI',
      'RAG',
      'AI Agents',
      'Scikit-learn',
      'TensorFlow / Keras',
    ],
  },
  {
    id: 'databases',
    number: '04',
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'SQLite', 'Redis', 'MariaDB'],
  },
  {
    id: 'tools',
    number: '05',
    title: 'Tools & DevOps',
    skills: ['Git & GitHub', 'Docker', 'MLflow', 'Apache Airflow', 'Linux', 'VS Code'],
  },
  {
    id: 'other',
    number: '06',
    title: 'Other Technical Skills',
    skills: [
      'Data Cleaning',
      'Exploratory Data Analysis (EDA)',
      'Model Evaluation',
      'API Integration',
      'Technical Documentation',
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-container" aria-label="Technical Skills">
      <span className="section-eyebrow">Expertise</span>
      <h2 className="section-title">Technical <em>Competencies</em></h2>
      <p className="section-subtext">
        Tools, frameworks, and programming languages supported by verified project implementations and coursework.
      </p>

      <div>
        
      </div>

      <div className="skills-grid-six">
        {SKILL_SECTIONS.map(({ id, number, title, skills }) => (
          <div key={id} className="skill-category-box">
            <span className="skill-category-number">{number}</span>
            <h3 className="skill-category-heading">{title}</h3>
            <div className="skill-pills-list">
              {skills.map((skill) => (
                <span key={skill} className="skill-pill-item">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
