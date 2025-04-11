
import { useParams } from 'react-router-dom'
import data from './../assets/JsonFileP6.json'
import { useState } from 'react';

function ImageCarousel() {
    const { id } = useParams();
    const appart = data.find((item) => item.id === id);
    const images = appart?.pictures || [];
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
   
  
    const nextImage = () => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    };
  
    const prevImage = () => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };
  
    return (
      <div className="carousel">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="carousel-img"
        />
  
        {images.length > 1 && (
          <>
            <button className="carousel-btn left" onClick={prevImage}>
              &#10094;
            </button>
            <button className="carousel-btn right" onClick={nextImage}>
              &#10095;
            </button>
          </>
        )}
  
        <div className="carousel-counter">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    );
  }

  export default ImageCarousel;