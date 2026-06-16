import React from 'react';
import { personalInfo } from '../data/portfolioData';
import './About.css';

// Import your animated icons
import educationIcon from '../assets/education.gif';
import govtIcon from '../assets/govt.gif';
import aiIcon from '../assets/ai.gif';
import leadershipIcon from '../assets/leadership.gif';
import nccIcon from '../assets/ncc.gif';
import locationIcon from '../assets/location.gif';
import profileImage from '../assets/profile.jpg';
import avatarRingImage from '../assets/avatarring.jpeg';

const highlights = [
  { icon: educationIcon, label: 'B.Tech CSE', sub: 'GTB4CEC Affiliated to GGSIPU · CGPA 9.4' },
  { icon: govtIcon, label: 'Govt.Of India PSUs Intern', sub: 'ONGC & HUDCO' },
  { icon: aiIcon, label: 'AI/ML Focus', sub: 'RAG · NLP · LSTM' },
  { icon: leadershipIcon, label: 'Leadership', sub: '108+ Members Led' },
  { icon: nccIcon, label: 'NCC Cadet', sub: '1 Delhi Air Squadron' },
  { icon: locationIcon, label: 'Based In', sub: 'New Delhi, India' },
];

const About = () => {
  return (
    <div className="section about-section">
      {/* Background accent */}
      <div className="about-accent" />

      <div className="container">
        <div className="about-grid">
          {/* Left — text */}
          <div className="about-text">
            <p className="section-label reveal">01 — Who I Am</p>
            <h2 className="section-title reveal delay-1">
              Engineer by craft.<br />
              <span className="gradient-text">Innovator by drive.</span>
            </h2>
            <div className="divider reveal delay-2" />

            <p className="about-bio reveal delay-2">
              I'm a Computer Science student at <strong>GTB4CEC, GGSIPU</strong> (New Delhi) maintaining a CGPA
              of <strong>9.4</strong>, building AI-powered products that solve real organizational problems. My
              internships at <strong>ONGC [MAHARATNA]</strong> and <strong>HUDCO [NAVRATNA]</strong> i.e two of India's biggest Central
              PSUs gave me the rare opportunity to deploy production-grade AI and full-stack systems inside
              Govt. of India infrastructure.
            </p>

            <p className="about-bio reveal delay-3" style={{ marginTop: '16px' }}>
              Beyond the code, I lead <strong>The Empirical Society</strong> (108+ members), coordinate
              campus placements, and was the Secretary of our IEEE Student Branch. I believe the best engineers
              aren't just problem solvers, they're communicators, disciplined leaders, and builders of communities.
            </p>
          </div>

          {/* Right — highlights grid */}
          <div className="about-highlights">
            {highlights.map((item, i) => (
              <div
                key={i}
                className={`highlight-card glass-card reveal delay-${i + 1}`}
              >
                <div className="highlight-icon">
                  <img src={item.icon} alt={item.label} className="icon-image" />
                </div>
                <div>
                  <div className="highlight-label">{item.label}</div>
                  <div className="highlight-sub">{item.sub}</div>
                </div>
              </div>
            ))}

            {/* Profile card */}
            <div className="profile-card glass-card reveal delay-6">
              <div className="profile-avatar">
                {/*<img src={profileImage} alt="Harsh Raj Singh" className="avatar-image" />*/}
                <img src={avatarRingImage} alt="Avatar Ring" className="avatar-ring-image" />
              </div>
              <div>
                <div className="profile-name">HARSH RAJ SINGH</div>
                <div className="profile-role">AI/ML Engineer · Full Stack Dev</div>
                <div className="profile-meta">
                  <span className="status-dot" />
                  Open to Opportunities
                </div>
              </div>
            </div> 
            <a 
                href="https://drive.google.com/file/d/14KPrt650pipjmjj2X_WEsmONp7viczcC/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Download Resume ↗
              </a>
              <a className="about-actions reveal delay-4 btn-outline" href="mailto:harshrs04012004@gmail.com">
                Email Me
              </a>           
          </div>
        </div>
      </div>
   </div>
  );
};

export default About;