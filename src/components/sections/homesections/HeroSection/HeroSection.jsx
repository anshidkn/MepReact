import React, { useState, useEffect, useCallback } from 'react';
import './HeroSection.css';

const HeroSection = ({ sliderImages }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  // Go to next slide
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  }, [sliderImages.length]);

  // Go to previous slide
  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  }, [sliderImages.length]);

  // Go to specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen flex items-center justify-center text-white text-center overflow-hidden">
      {/* Background Images with Transition */}
      {sliderImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      ))}

      {/* Left Navigation Arrow */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-[42px] h-[42px] items-center justify-center rounded-full bg-black/50 hover:bg-black/70 transition-all z-10 group"
        aria-label="Previous slide"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-white group-hover:scale-110 transition-transform"
        >
          <path
            d="M15 19l-7-7 7-7"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Right Navigation Arrow */}
      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-[42px] h-[42px] items-center justify-center rounded-full bg-black/50 hover:bg-black/70 transition-all z-10 group"
        aria-label="Next slide"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-white group-hover:scale-110 transition-transform"
        >
          <path
            d="M9 5l7 7-7 7"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Content */}
      <div className="relative z-10 px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight text-white">
          Transforming Spaces with Reliable,<br />High-Performance MEP Engineering
        </h1>
        <p className="text-base md:text-lg lg:text-xl mb-8 text-white/90 max-w-3xl mx-auto">
          Al Masaya Electro Mechanical Company powers the UAE's construction sector with precision-engineered Mechanical, Electrical, Plumbing, Fire Fighting & Low-Current solutions that deliver efficiency, safety, and long-term value.
        </p>

        {/* CTA Button */}
        <button
          className="text-white font-semibold rounded-[50px] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:opacity-90 active:translate-y-0"
          style={{
            padding: '16px 20px',
            background: 'linear-gradient(135deg, #B20E29 0%, #7E1222 100%)',
          }}
        >
          Explore Our Services
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 cursor-pointer ${
              index === currentSlide
                ? 'w-[18px] h-[8px] rounded-[20px]'
                : 'w-[8px] h-[8px] rounded-full bg-white/50 hover:bg-white/80'
            }`}
            style={index === currentSlide ? { backgroundColor: '#B20E29' } : {backgroundColor: '#fff'}}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;