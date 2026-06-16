import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      {/* Top divider glow */}
      <div className="footer-glow-line" />

      <div className="container footer-inner">
        {/* Left */}
        <div className="footer-left">
          <div className="footer-logo">
            <span className="logo-bracket">&lt;</span>HRS<span className="logo-bracket">/&gt;</span>
          </div>
          <p className="footer-tagline">
            Building intelligent systems that scale.<br />
            <span>New Delhi, India · 2026</span>
          </p>
        </div>

        {/* Center — quick nav */}
        <div className="footer-nav">
          {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((s) => (
            <a
              key={s}
              href={`#${s}`}
              className="footer-link"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(s)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </a>
          ))}
        </div>

        {/* Right — socials */}
        <div className="footer-socials">
          <a href="mailto:harshrs04012004@gmail.com" className="footer-social" aria-label="Email">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/harsh-raj-singh-16b53328a/" target="_blank" rel="noreferrer" className="footer-social" aria-label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          <a href="https://github.com/HarshGRS" target="_blank" rel="noreferrer" className="footer-social" aria-label="GitHub">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
              <path d="M9 18c-4.51 2-5-2-7-2"/>
            </svg>
          </a>
          <a
            href="https://drive.google.com/file/d/1HSRxqErKeOmsgHTUaKlN0aLo4UQLUoSz/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="footer-social"
            aria-label="Resume"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
              <path d="M10 9H8M16 13H8M16 17H8"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {year} Harsh Raj Singh · All Rights Reserved</span>
          <button className="back-to-top" onClick={scrollTop} aria-label="Back to top">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="m18 15-6-6-6 6"/>
            </svg>
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
