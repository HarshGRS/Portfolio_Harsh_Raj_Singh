import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import './Projects.css';

const categories = ['All', 'AI / ML', 'Full Stack', 'Frontend', 'Research'];

const ProjectCard = ({ project, index }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      className={`project-card glass-card reveal delay-${(index % 3) + 1} ${project.featured ? 'featured' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(800px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        borderColor: tilt.x !== 0 ? project.color + '50' : undefined,
      }}
    >
      {/* Top bar with color accent */}
      <div className="card-top-bar" style={{ background: project.color }} />

      {/* Header */}
      <div className="card-header">
        <div>
          <div className="card-category" style={{ color: project.color }}>
            {project.category}
            {project.featured && <span className="featured-badge">★ Featured</span>}
          </div>
          <h3 className="card-title">{project.title}</h3>
          <p className="card-subtitle">{project.subtitle}</p>
        </div>
        <div
          className="card-number"
          style={{ color: project.color + '30' }}
        >
          {String(project.id).padStart(2, '0')}
        </div>
      </div>

      <p className="card-desc">{project.description}</p>

      {/* Tags */}
      <div className="card-tags">
        {project.tags.map((tag, i) => (
          <span key={i} className="tag" style={{ borderColor: project.color + '25', color: project.color }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="card-footer">
        <span className="card-hover-hint">Hover to explore →</span>
        <div
          className="card-glow-dot"
          style={{ background: project.color, boxShadow: `0 0 12px ${project.color}` }}
        />
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="section projects-section">
      {/* BG accent */}
      <div className="projects-accent" />

      <div className="container">
        <p className="section-label reveal">03 — Portfolio</p>
        <h2 className="section-title reveal delay-1">
          Featured<br />
          <span className="gradient-text">Projects</span>
        </h2>
        <div className="divider reveal delay-2" />
        <p className="section-subtitle reveal delay-2">
          Production-grade systems built at scale , from Govt. of India PSUs to personal AI experiments.
        </p>

        {/* Filter tabs */}
        <div className="filter-tabs reveal delay-3">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-tab ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className={`projects-grid ${filtered.length <= 2 ? 'few' : ''}`}>
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
