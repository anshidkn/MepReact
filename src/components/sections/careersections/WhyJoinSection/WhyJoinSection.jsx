import React from 'react';
import './WhyJoinSection.css';

const CheckIcon = () => (
  <svg 
    width="18" 
    height="18" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="why-join-check-icon"
  >
    <path 
      d="M5 13L9 17L19 7" 
      stroke="#10B981" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const WhyJoinSection = ({ 
  title = "Why Join Our",
  titleHighlight = "Team",
  description = "We believe that strong projects are built by strong teams. At AMEMCO, we provide opportunities to work on diverse projects while maintaining a culture of safety, professionalism, and continuous improvement.",
  benefits = [
    "Professional work environment",
    "Exposure to residential, commercial & industrial projects",
    "Focus on safety & quality standards",
    "Long-term career growth opportunities",
    "Supportive management & teamwork"
  ],
  image,
  backgroundImage
}) => {
  return (
    <section 
      className="why-join-section"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      <div className="why-join-container">
        <div className="why-join-content">
          <h2 className="why-join-title">
            {title}<br />
            <span className="text-red">{titleHighlight}</span>
          </h2>
          <p className="why-join-description">{description}</p>
          
          <ul className="why-join-benefits">
            {benefits.map((benefit, index) => (
              <li key={index} className="why-join-benefit-item">
                <CheckIcon />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="why-join-image">
          <img src={image} alt="Join our team" />
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;