import React, { useState } from 'react';
import './ProjectsDetailSections.css';

const ProjectDetailGallery = ({ images = [], projectTitle, backgroundImage }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = (e) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      if (e.key === 'ArrowRight') setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, images.length]);

  return (
    <section 
      className="project-detail-gallery"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      <div className="project-detail-gallery-container">
        <h2 className="gallery-title">
          Project <span className="gallery-title-red">Gallery</span>
        </h2>

        <div className="gallery-grid">
          {images.slice(0, 9).map((image, index) => (
            <div 
              key={index} 
              className={`gallery-item gallery-item-${index + 1}`}
              onClick={() => openLightbox(index)}
            >
              <img src={image} alt={`${projectTitle} - Image ${index + 1}`} />
              <div className="gallery-item-overlay">
                <span className="gallery-zoom-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="2"/>
                    <path d="M16 16L20 20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M11 8V14M8 11H14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="gallery-lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6L18 18M6 18L18 6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          
          <button className="lightbox-nav lightbox-prev" onClick={goToPrevious} aria-label="Previous">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 6L9 12L15 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={images[currentImage]} alt={`${projectTitle} - Image ${currentImage + 1}`} />
            <div className="lightbox-counter">
              {currentImage + 1} / {images.length}
            </div>
          </div>

          <button className="lightbox-nav lightbox-next" onClick={goToNext} aria-label="Next">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectDetailGallery;