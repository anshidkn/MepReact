import React, { useState } from 'react';
import './SubmitResumeSection.css';

const SubmitResumeSection = ({ 
  image,
  backgroundImage,
  title = "Submit Your Resume"
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    expertise: '',
    experience: '',
    resume: null,
    message: ''
  });

  const [fileName, setFileName] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        resume: file
      }));
      setFileName(file.name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <section 
      className="submit-resume-section"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      <div className="submit-resume-container">
        {/* Left Image */}
        <div className="submit-resume-image">
          <img src={image} alt="Join our team" />
        </div>

        {/* Right Form */}
        <div className="submit-resume-form-wrapper">
          <h2 className="submit-resume-title">{title}</h2>
          
          <form className="submit-resume-form" onSubmit={handleSubmit}>
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
              <div className="form-group">
                <input
                  type="text"
                  name="expertise"
                  placeholder="Area of Expertise"
                  value={formData.expertise}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="experience"
                  placeholder="Years of Experience"
                  value={formData.experience}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group form-group-file">
                <div className="file-input-wrapper">
                  <input
                    type="text"
                    placeholder="Upload your resume *"
                    value={fileName}
                    readOnly
                    className="file-display"
                  />
                  <label className="file-browse-btn">
                    Browse
                    <input
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      hidden
                    />
                  </label>
                </div>
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

            <button type="submit" className="submit-resume-btn">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SubmitResumeSection;