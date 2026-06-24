import React, { useState } from 'react';
import { CarouselImage } from '../types/hotel';

interface HeroCarouselProps {
  images: CarouselImage[];
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const currentImage = images[currentIndex];

  return (
    <div className="carousel-container">
      <div className="carousel-image-wrapper">
        <img
          src={currentImage.url}
          alt={currentImage.title}
          className="carousel-image"
        />
        <div className="carousel-overlay">
          <h2 className="carousel-title">{currentImage.title}</h2>
          <p className="carousel-subtitle">{currentImage.subtitle}</p>
        </div>
      </div>

      <button className="carousel-button prev-button" onClick={prevSlide}>
        ❮
      </button>
      <button className="carousel-button next-button" onClick={nextSlide}>
        ❯
      </button>

      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
