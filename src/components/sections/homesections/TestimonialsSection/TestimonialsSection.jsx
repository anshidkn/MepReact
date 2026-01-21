import React, { useState } from 'react';
import './TestimonialsSection.css';

// Quote Icon Component
const QuoteIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z"/>
  </svg>
);

// Arrow Icons
const ArrowLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const TestimonialsSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Mariam K.",
      role: "Architect",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
      text: "\"AMEMCO delivered our project ahead of schedule with outstanding quality. Their technical knowledge and professionalism made the entire process smooth.\""
    },
    {
      id: 2,
      name: "Ahmed R.",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      text: "\"Their MEP execution is among the best we have experienced. Excellent coordination, clean workmanship, and strong engineering expertise.\""
    },
    {
      id: 3,
      name: "Sarah M.",
      role: "Property Developer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      text: "\"Working with AMEMCO has been a game-changer for our developments. Their attention to detail and commitment to quality is unmatched.\""
    },
    {
      id: 4,
      name: "John D.",
      role: "Architect",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      text: "\"AMEMCO's MEP solutions have transformed our projects into stunning masterpieces. Their professionalism and expertise are remarkable.\""
    }
  ];

  // Calculate how many slides (pairs) we have
  const totalSlides = Math.ceil(testimonials.length / 2);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  // Get current pair of testimonials to display
  const getCurrentTestimonials = () => {
    const startIndex = activeSlide * 2;
    return testimonials.slice(startIndex, startIndex + 2);
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="testimonials-title">
          What Our <span>Clients Say</span>
        </h2>

        <div className="testimonials-slider">
          <button className="slider-arrow slider-arrow-left" onClick={handlePrev}>
            <ArrowLeft />
          </button>

          <div className="testimonials-cards">
            {getCurrentTestimonials().map((testimonial) => (
              <div className="testimonial-card" key={testimonial.id}>
                <div className="quote-icon">
                  <QuoteIcon />
                </div>
                <div className="testimonial-header">
                  <div className="testimonial-avatar">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="testimonial-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
              </div>
            ))}
          </div>

          <button className="slider-arrow slider-arrow-right" onClick={handleNext}>
            <ArrowRight />
          </button>
        </div>

        <div className="slider-dots">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${index === activeSlide ? 'active' : ''}`}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;