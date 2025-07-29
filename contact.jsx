import React from 'react';
import './contact.css';
import {
  FaGithub,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaTelegramPlane
} from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Let’s Build Something Together</h2>
          <p>Tell me about your project—what you need, your timeline, and any budget details. I’ll be in touch within 24 hours!</p>

          <ul className="social-list">
            <li><a href="https://github.com/yourusername" target="_blank" rel="noreferrer"><FaGithub /></a></li>
            <li><a href="https://facebook.com/yourusername" target="_blank" rel="noreferrer"><FaFacebookF /></a></li>
            <li><a href="https://wa.me/yourwhatsapp" target="_blank" rel="noreferrer"><FaWhatsapp /></a></li>
            <li><a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer"><FaLinkedinIn /></a></li>
            <li><a href="https://t.me/yourusername" target="_blank" rel="noreferrer"><FaTelegramPlane /></a></li>
          </ul>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="projectType">Type of Project</label>
            <select id="projectType" name="projectType">
              <option value="">Select one</option>
              <option value="portfolio">Portfolio Site</option>
              <option value="ecommerce">E-commerce</option>
              <option value="blog">Blog / Content</option>
              <option value="custom">Custom App</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="timeline">Timeline (weeks)</label>
            <input type="text" id="timeline" name="timeline" placeholder="e.g., 4–6 weeks" />
          </div>

          <div className="form-group">
            <label htmlFor="budget">Budget Range (USD)</label>
            <input type="text" id="budget" name="budget" placeholder="e.g., 500–1,000" />
          </div>

          <div className="form-group full-width">
            <label htmlFor="message">Project Details *</label>
            <textarea id="message" name="message" rows="6" required placeholder="Describe your idea…"></textarea>
          </div>

          <button type="submit" className="btn-submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
