import React from 'react';
import { Link } from 'react-router-dom';
import amemcoLogo from '../../assets/amemcogray.svg';
import faceBookIcon from '../../assets/facebook.svg';
import instagramIcon from '../../assets/instagram.svg';
import linkedinIcon from '../../assets/linkedin.svg';
import './Footer.css';



const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Request a Quote', path: '/quote' },
  ];

  const services = [
    { name: 'Electrical Engineering', path: '/services#electrical' },
    { name: 'HVAC / Mechanical', path: '/services#hvac' },
    { name: 'Plumbing & Drainage', path: '/services#plumbing' },
    { name: 'Fire Fighting Systems', path: '/services#fire' },
    { name: 'Low-Current Systems (ELV)', path: '/services#elv' },
    { name: 'BMS & Automation', path: '/services#bms' },
    { name: 'Annual Maintenance', path: '/services#maintenance' },
    { name: 'Testing & Commissioning', path: '/services#testing' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-company">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <img
                  src={amemcoLogo}
                  alt="AMEMCO Logo"
                  className="footer-logo-image"
                />
              </div>
              <div className="footer-logo-text">
                <p>Al Masaya Electro<br />Mechanical Company</p>
              </div>
            </div>
            <p>
              Delivering high-quality MEP engineering
              solutions with a focus on safety, efficiency,
              and long-term performance.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="footer-column">
            <h4>Our Services</h4>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index}>
                  <Link to={service.path}>{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Info & Social */}
          <div className="footer-column">
            <h4>Company</h4>
            <div className="footer-contact-item">
              <span className="footer-contact-label">Address:</span>
              <span className="footer-contact-value">Abu Hail, Dubai, UAE</span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-label">Phone:</span>
              <span className="footer-contact-value">+971 555135031</span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-label">Email:</span>
              <span className="footer-contact-value">
                <a href="mailto:info@almasayamep.com">info@almasayamep.com</a>
              </span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-label">Website:</span>
              <span className="footer-contact-value">
                <a href="https://almasayamep.com" target="_blank" rel="noopener noreferrer">
                  almasayamep.com
                </a>
              </span>
            </div>

            <div className="footer-social">
              <h5>Follow us on</h5>
              <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src={faceBookIcon} alt="Facebook" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src={instagramIcon} alt="Instagram" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <img src={linkedinIcon} alt="LinkedIn" />
                </a>
              </div>
            </div>

          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} AMEMCO – Al Masaya Electro Mechanical Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;