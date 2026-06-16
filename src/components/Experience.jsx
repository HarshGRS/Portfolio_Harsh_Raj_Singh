import React from 'react';
import { experience, certifications } from '../data/portfolioData';
import './Experience.css';

const Experience = () => {
  return (
    <div className="section experience-section">
      <div className="exp-accent" />

      <div className="container">
        <p className="section-label reveal">04 — Work History</p>
        <h2 className="section-title reveal delay-1">
          Experience &<br />
          <span className="gradient-text">Certifications</span>
        </h2>
        <div className="divider reveal delay-2" />

        <div className="exp-layout">
          {/* Timeline */}
          <div className="timeline">
            <div className="timeline-line" />

            {experience.map((item, i) => (
              <div
                key={i}
                className={`timeline-item reveal delay-${(i % 3) + 1}`}
              >
                {/* Dot */}
                <div
                  className="timeline-dot"
                  style={{ background: item.color, boxShadow: `0 0 14px ${item.color}60` }}
                />

                {/* Card */}
                <div className="exp-card glass-card">
                  {/* Top accent line */}
                  <div className="exp-card-accent" style={{ background: item.color }} />

                  <div className="exp-card-inner">
                    {/* Header */}
                    <div className="exp-header">
                      <div>
                        <div className="exp-badge" style={{ color: item.color, borderColor: item.color + '30', background: item.color + '10' }}>
                          {item.badge}
                        </div>
                        <h3 className="exp-role">{item.role}</h3>
                        <div className="exp-org">{item.org}</div>
                      </div>
                      <div className="exp-meta">
                        <div className="exp-period">{item.period}</div>
                        <div className="exp-location">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                            <circle cx="12" cy="10" r="3"/>
                          </svg>
                          {item.location}
                        </div>
                      </div>
                    </div>

                    {/* Points */}
                    <ul className="exp-points">
                      {item.points.map((pt, j) => (
                        <li key={j} className="exp-point">
                          <span className="point-dot" style={{ background: item.color }} />
                          {pt}
                        </li>
                      ))}
                    </ul>

                    {/* Certificate link */}
                    {item.certLink && (
                      <a
                        href={item.certLink}
                        target="_blank"
                        rel="noreferrer"
                        className="cert-link"
                        style={{ color: item.color, borderColor: item.color + '30' }}
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
                          <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
                          <path d="m9 15 2 2 4-4"/>
                        </svg>
                        View Certificate ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications sidebar */}
          <div className="certs-sidebar">
            <h3 className="certs-title reveal">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
              </svg>
              Certifications
            </h3>

            <div className="certs-list">
              {certifications.map((cert, i) => (
                <a
                  key={i}
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`cert-card glass-card reveal delay-${i + 1}`}
                >
                  <div className="cert-year">{cert.year}</div>
                  <div className="cert-info">
                    <div className="cert-name">{cert.title}</div>
                    <div className="cert-issuer">{cert.issuer}</div>
                  </div>
                  <div className="cert-arrow">↗</div>
                </a>
              ))}
            </div>

            {/* NCC info card */}
            <div className="ncc-card glass-card reveal delay-5">
              <div className="ncc-icon">✈️</div>
              <div>
                <div className="ncc-title">NCC Air Cadet</div>
                <div className="ncc-sub">1 Delhi Air Squadron — Flying Wing</div>
                <div className="ncc-tag">
                  <span className="tag">Leadership</span>
                  <span className="tag">Discipline</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
