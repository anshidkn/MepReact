import React from 'react';
import './WeHereToHelpSection.css';

const LocationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#000000"/>
    <circle cx="12" cy="9" r="2.5" fill="#fff"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#000000" strokeWidth="2" fill="none"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#000000" strokeWidth="2" fill="none"/>
    <path d="M22 6l-10 7L2 6" stroke="#000000" strokeWidth="2" fill="none"/>
  </svg>
);

const WebIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="#000000" strokeWidth="2" fill="none"/>
    <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="#000000" strokeWidth="2" fill="none"/>
  </svg>
);

const WeHereToHelpSection = ({ 
  title = "We're Here to",
  titleHighlight = "Help",
  description = "Whether you need MEP consultation, a project quote, or technical support, we are just a message away. Our team will respond promptly to understand your requirements and guide you through the next steps.",
  contactInfo = {
    address: "Abu Hail, Dubai, UAE",
    phone: "+971 585939631",
    email: "info@almasayamep.com",
    website: "www.almasayamep.com"
  },
  mapLocation = {
    lat: 25.2802,
    lng: 55.3438
  },
  backgroundImage
}) => {
  // Google Maps embed URL
  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5!2d${mapLocation.lng}!3d${mapLocation.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE2JzQ4LjciTiA1NcKwMjAnMzcuNyJF!5e0!3m2!1sen!2sae!4v1234567890`;

  return (
    <section 
      className="we-here-section"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      <div className="we-here-container">
        {/* Left - Contact Info */}
        <div className="we-here-content">
          <h2 className="we-here-title">
            {title} <span className="text-red">{titleHighlight}</span>
          </h2>
          <p className="we-here-description">{description}</p>

          <div className="contact-info-section">
            <h3 className="contact-info-title">Contact Information</h3>
            
            <div className="contact-info-list">
              <div className="contact-info-item">
                <LocationIcon />
                <div className="contact-info-text">
                  <span className="contact-label">Office Address</span>
                  <span className="contact-value">{contactInfo.address}</span>
                </div>
              </div>

              <div className="contact-info-item">
                <PhoneIcon />
                <div className="contact-info-text">
                  <span className="contact-label">Phone</span>
                  <a href={`tel:${contactInfo.phone}`} className="contact-value contact-link">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <EmailIcon />
                <div className="contact-info-text">
                  <span className="contact-label">Email</span>
                  <a href={`mailto:${contactInfo.email}`} className="contact-value contact-link">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <WebIcon />
                <div className="contact-info-text">
                  <span className="contact-label">Website</span>
                  <a href={`https://${contactInfo.website}`} target="_blank" rel="noopener noreferrer" className="contact-value contact-link">
                    {contactInfo.website}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Map */}
        <div className="we-here-map">
          <iframe
            title="Office Location"
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default WeHereToHelpSection;