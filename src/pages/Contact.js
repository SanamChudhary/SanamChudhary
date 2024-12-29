import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { ThemeContext } from '../components/ThemeContainer';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '../styles/Contact.css';

const Contact = () => {
  const { theme } = useContext(ThemeContext); 
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('');

    try {
      const response = await fetch('https://formspree.io/f/your_form_id', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setFormStatus('An error occurred. Please try again later.');
    }

    setIsSubmitting(false);
  };

  return (
    <section className={`contact ${theme}`}>
      {/* Theme-specific background color is applied through the theme class */}
      <div className="contact-header">
        <h2>LET'S CONNECT</h2>
        <p>Say hello at <a href="mailto:chysanan@gmail.com">chysanan@gmail.com</a></p>
        <p>For more info, here's my resume:</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/sanam-chaudhary/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="icon linkedin-icon" />
          </a>
          <a href="https://github.com/SanamChudhary" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="icon github-icon" />
          </a>
        </div>
        <div className="pdf-viewer">
          {/* PDF Viewer */}
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <Viewer fileUrl="/resume/Sanam_ChudharyCV.pdf" />
          </Worker>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
        {formStatus && <p className="form-status">{formStatus}</p>}
      </form>
    </section>
  );
};

export default Contact;
