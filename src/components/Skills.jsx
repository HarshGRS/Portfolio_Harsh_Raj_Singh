import React, { useState, useEffect, useRef } from 'react';
import { skills, skillBars } from '../data/portfolioData';
import './Skills.css';

const iconMap = {
  Code2: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
  Monitor: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect width="20" height="14" x="2" y="3" rx="2"/><path d="M8 21h8M12 17v4"/>
    </svg>
  ),
  Server: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect width="20" height="8" x="2" y="2" rx="2"/><rect width="20" height="8" x="2" y="14" rx="2"/>
      <line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>
    </svg>
  ),
  Brain: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/>
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/>
    </svg>
  ),
  Database: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>
    </svg>
  ),
  Settings: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  ),
};

const SkillBar = ({ name, level }) => {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), 200);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div className="skill-bar-item" ref={ref}>
      <div className="skill-bar-header">
        <span className="skill-bar-name">{name}</span>
        <span className="skill-bar-pct">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{ width: `${width}%` }}
        />
        <div className="skill-bar-glow" style={{ left: `${width}%` }} />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="section skills-section">
      <div className="container">
        <p className="section-label reveal">02 — Technical Arsenal</p>
        <h2 className="section-title reveal delay-1">
          Skills &<br />
          <span className="gradient-text">Technologies</span>
        </h2>
        <div className="divider reveal delay-2" />

        <div className="skills-layout">
          {/* Skill category cards */}
          <div className="skills-categories">
            {skills.map((cat, i) => (
              <div key={i} className={`skill-cat-card glass-card reveal delay-${(i % 4) + 1}`}>
                <div className="skill-cat-header">
                  <span className="skill-cat-icon">{iconMap[cat.icon]}</span>
                  <span className="skill-cat-title">{cat.category}</span>
                </div>
                <div className="skill-tags">
                  {cat.items.map((item, j) => (
                    <span key={j} className="tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Proficiency bars */}
          <div className="skills-bars-section">
            <h3 className="bars-title reveal">Proficiency Levels</h3>
            <div className="skill-bars">
              {skillBars.map((bar, i) => (
                <div key={i} className={`reveal delay-${i + 1}`}>
                  <SkillBar name={bar.name} level={bar.level} />
                </div>
              ))}
            </div>

            {/* Bottom note */}
            <div className="skills-note reveal delay-6">
              <span className="note-icon">🚀</span>
              <p>
                Currently building an end-to-end <strong>MLOps pipeline</strong> with drift detection,
                auto-retraining, and a 3D React frontend — targeting Google & Amazon interviews.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
