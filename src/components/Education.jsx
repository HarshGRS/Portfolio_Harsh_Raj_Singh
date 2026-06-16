import React from 'react';
import { education } from '../data/portfolioData';
import './Education.css';

const degreeIcons = ['🎓', '📚', '🏫'];
const accentColors = ['#00d4ff', '#ffd700', '#a78bfa'];

const Education = () => {
  return (
    <div className="section education-section">
      <div className="edu-accent" />

      <div className="container">
        <p className="section-label reveal">05 — Academic Background</p>
        <h2 className="section-title reveal delay-1">
          Education &<br />
          <span className="gradient-text">Qualifications</span>
        </h2>
        <div className="divider reveal delay-2" />

        <div className="edu-grid">
          {education.map((item, i) => (
            <div
              key={i}
              className={`edu-card glass-card reveal delay-${i + 1}`}
              style={{ '--card-color': accentColors[i] }}
            >
              {/* Top color stripe */}
              <div className="edu-stripe" style={{ background: accentColors[i] }} />

              <div className="edu-card-inner">
                {/* Icon + Score */}
                <div className="edu-top-row">
                  <div className="edu-icon">{degreeIcons[i]}</div>
                  <div
                    className="edu-score"
                    style={{ color: accentColors[i], borderColor: accentColors[i] + '30', background: accentColors[i] + '10' }}
                  >
                    {item.score}
                  </div>
                </div>

                {/* Degree */}
                <h3 className="edu-degree">{item.degree}</h3>

                {/* School */}
                <div className="edu-school">{item.school}</div>

                {/* Meta */}
                <div className="edu-meta">
                  <span className="edu-location">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    {item.location}
                  </span>
                  <span className="edu-period">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                      <line x1="16" x2="16" y1="2" y2="6"/>
                      <line x1="8" x2="8" y1="2" y2="6"/>
                      <line x1="3" x2="21" y1="10" y2="10"/>
                    </svg>
                    {item.period}
                  </span>
                </div>

                {/* Bottom glow bar */}
                <div
                  className="edu-bottom-glow"
                  style={{ background: `linear-gradient(90deg, ${accentColors[i]}, transparent)` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Extra info row */}
        <div className="edu-extra reveal delay-4">
          <div className="edu-extra-card glass-card">
            <div className="extra-icon">🏆</div>
            <div>
              <div className="extra-title">Academic Excellence</div>
              <div className="extra-sub">Consistent top performer across all levels — 91% → 94% → 9.4 CGPA</div>
            </div>
          </div>
          <div className="edu-extra-card glass-card">
            <div className="extra-icon">🏛️</div>
            <div>
              <div className="extra-title">GGSIPU Affiliated</div>
              <div className="extra-sub">Guru Gobind Singh Indraprastha University</div>
            </div>
          </div>
          <div className="edu-extra-card glass-card">
            <div className="extra-icon">📅</div>
            <div>
              <div className="extra-title">Graduating in 2027</div>
              <div className="extra-sub">B.Tech CSE · 3rd Year · Actively seeking internships & roles</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
