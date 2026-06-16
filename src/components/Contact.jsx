import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const contactInfo = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    label: 'Email',
    value: 'harshrs04012004@gmail.com',
    href: 'mailto:harshrs04012004@gmail.com',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.91 6.91l1.27-.84a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/>
      </svg>
    ),
    label: 'Phone',
    value: '+91 7488672705',
    href: 'tel:+917488672705',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Location',
    value: 'New Delhi, India',
    href: null,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    label: 'LinkedIn',
    value: 'Linkedin Profile',
    href: 'https://www.linkedin.com/in/harsh-raj-singh-16b53328a/',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.781 1.226l-.308.156-.318-.052c-1.128-.043-2.144.161-3.002.69l-.226.155-.237-.047c-.627-.206-1.217-.394-1.756-.672l.068-.042a9.87 9.87 0 016.547-2.412c2.576 0 4.961.928 6.842 2.754l-.067.042c-.532.289-1.125.484-1.755.691l-.237.047-.226-.155c-.858-.529-1.874-.733-3.002-.69l-.318.052z"/>
      </svg>
    ),
    label: 'WhatsApp',
    value: 'Chat on WhatsApp',
    href: 'https://wa.me/917488672705',
  },
];

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Valid email required';
    if (!formData.subject.trim()) errs.subject = 'Subject is required';
    if (!formData.message.trim() || formData.message.length < 10) errs.message = 'Message must be at least 10 characters';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setStatus('sending');

    try {
      await emailjs.sendForm(
        'service_cl7uvlr',
        'template_5rgqtgj',
        formRef.current,
        'ElH5_OGZgC5TnQ2o6'
      );
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('EmailJS Error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="section contact-section">
      <div className="contact-accent" />

      <div className="container">
        <p className="section-label reveal">06 — Get In Touch</p>
        <h2 className="section-title reveal delay-1">
          Let's Build<br />
          <span className="gradient-text">SOMETHING GREAT</span>
        </h2>
        <div className="divider reveal delay-2" />
        <p className="section-subtitle reveal delay-2">
          Open to internships, full-time roles, freelance projects, and research collaborations.
          Please Reach out - I reply fast.
        </p>

        <div className="contact-layout">
          {/* Left — info cards */}
          <div className="contact-info">
            {contactInfo.map((item, i) => (
              item.href ? (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  className={`contact-info-card glass-card reveal delay-${i + 1}`}
                >
                  <div className="info-icon">{item.icon}</div>
                  <div>
                    <div className="info-label">{item.label}</div>
                    <div className="info-value">{item.value}</div>
                  </div>
                  <div className="info-arrow">↗</div>
                </a>
              ) : (
                <div key={i} className={`contact-info-card glass-card reveal delay-${i + 1}`}>
                  <div className="info-icon">{item.icon}</div>
                  <div>
                    <div className="info-label">{item.label}</div>
                    <div className="info-value">{item.value}</div>
                  </div>
                </div>
              )
            ))}

            {/* Availability card */}
            <div className="availability-card glass-card reveal delay-5">
              <div className="avail-top">
                <span className="status-dot" />
                <span className="avail-status">Available for Opportunities</span>
              </div>
              <p className="avail-desc">
                Actively looking for SDE / AI-ML roles at product-based companies.
                Let's connect!
              </p>
              <div className="avail-tags">
                <span className="tag">Full-Time</span>
                <span className="tag">Internship</span>
                <span className="tag">Freelance</span>
                <span className="tag">Research</span>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="contact-form-wrap reveal delay-2">
            <div className="form-header">
              <div className="form-title">Send a Message</div>
              <div className="form-subtitle">I'll get back to you within 24 hours.</div>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Harsh Raj Singh"
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    autoComplete="off"
                  />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    autoComplete="off"
                  />
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Job Opportunity / Collaboration / Project"
                  className={`form-input ${errors.subject ? 'error' : ''}`}
                  autoComplete="off"
                />
                {errors.subject && <span className="form-error">{errors.subject}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about the opportunity, project, or just say hi..."
                  className={`form-textarea ${errors.message ? 'error' : ''}`}
                  rows={5}
                />
                {errors.message && <span className="form-error">{errors.message}</span>}
              </div>

              <button
                type="submit"
                className={`form-submit ${status}`}
                disabled={status === 'sending'}
              >
                {status === 'idle' && (
                  <>
                    Send Message
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 2 11 13"/><path d="M22 2 15 22 11 13 2 9l20-7Z"/>
                    </svg>
                  </>
                )}
                {status === 'sending' && (
                  <>
                    <span className="spinner" />
                    Sending...
                  </>
                )}
                {status === 'success' && (
                  <>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                    Message Sent!
                  </>
                )}
                {status === 'error' && (
                  <>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>
                    </svg>
                    Failed — Try Again
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="form-success-msg">
                  🚀 Your message is on its way! I'll reply within 24 hours.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
