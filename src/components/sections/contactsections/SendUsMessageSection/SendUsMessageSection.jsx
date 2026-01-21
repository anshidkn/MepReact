import React, { useState } from 'react';
import './SendUsMessageSection.css';

const SendUsMessageSection = ({ 
  image,
  title = "Send Us a Message",
  subtitle = "Fill out the form below and our team will get back to you as soon as possible."
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <section className="send-us-section">
      <div className="send-us-container">
        {/* Left Image */}
        <div className="send-us-image">
          <img src={image} alt="Contact us" />
        </div>

        {/* Right Form */}
        <div className="send-us-form-wrapper">
          <h2 className="send-us-title">{title}</h2>
          <p className="send-us-subtitle">{subtitle}</p>
          
          <form className="send-us-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name *"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name *"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group form-group-full">
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name (Optional)"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group form-group-full">
              <textarea
                name="message"
                placeholder="Write your message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
              ></textarea>
            </div>

            <button type="submit" className="send-us-btn">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SendUsMessageSection;