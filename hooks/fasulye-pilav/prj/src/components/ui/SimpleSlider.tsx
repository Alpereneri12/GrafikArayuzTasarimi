import React, { useState, useEffect } from 'react';
import './SimpleSlider.css';

interface SimpleSliderProps {
  images: string[];
  interval: number;
}

const SimpleSlider: React.FC<SimpleSliderProps> = ({ images, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div className="slider">
      <img src={images[currentIndex]} alt="Yemek Görseli" className="slider-image" />
    </div>
  );
};

export default SimpleSlider;