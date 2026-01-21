import React from 'react';
import './MissionVisionValuesSection.css';

const MissionVisionValuesSection = ({ missionImage, visionImage, backgroundImage }) => {
  const coreValues = [
    {
      title: 'Quality Excellence',
      description: 'Delivering work that meets the highest engineering and safety standards.'
    },
    {
      title: 'Safety First',
      description: 'Zero-compromise approach to workplace and system safety.'
    },
    {
      title: 'Integrity & Transparency',
      description: 'Honest communication and ethical business practices.'
    },
    {
      title: 'Innovation',
      description: 'Adopting modern tools, technologies, and efficient systems.'
    },
    {
      title: 'Customer Focus',
      description: 'Understanding client needs and delivering tailored solutions.'
    },
  ];

  return (
    <section 
      className="mvv-section"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      {/* Mission */}
      <div className="mvv-block mvv-mission">
        <div className="mvv-container mvv-container-mission">
          <div className="mvv-image-wrapper mvv-image-wrapper-mission">
            <img src={missionImage} alt="Our Mission" className="mvv-image mvv-image-mission" />
          </div>
          <div className="mvv-content mvv-content-mission">
            <h3 className="mvv-title">Our <span className="text-red">Mission</span></h3>
            <p className="mvv-description">
              To deliver engineered MEP solutions that positively impact the safety, comfort, and efficiency of the spaces we build. We are committed to providing timely, cost-effective, and high-quality services while continuously adopting modern technologies and best engineering practices.
            </p>
          </div>
        </div>
      </div>

      {/* Vision */}
      <div className="mvv-block mvv-vision">
        <div className="mvv-container mvv-container-vision">
          <div className="mvv-content mvv-content-vision">
            <h3 className="mvv-title">Our <span className="text-red">Vision</span></h3>
            <p className="mvv-description">
              To become a leading and trusted MEP contracting company in the UAE, recognized for engineering excellence, innovation, and long-term client partnerships. We aim to grow sustainably by delivering future-ready solutions that exceed expectations.
            </p>
          </div>
          <div className="mvv-image-wrapper mvv-image-wrapper-vision">
            <img src={visionImage} alt="Our Vision" className="mvv-image mvv-image-vision" />
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="mvv-block mvv-values">
        <div className="mvv-values-container">
          <h3 className="mvv-title mvv-values-title">Our <span className="text-red">Core Values</span></h3>
          <div className="mvv-values-list">
            {coreValues.map((value, index) => (
              <div key={index} className="mvv-value-item">
                <h4 className="mvv-value-title">{value.title}</h4>
                <p className="mvv-value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValuesSection;