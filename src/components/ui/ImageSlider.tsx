import { useEffect, useState } from "react";
import "./ImageSlider.css"; 

type ImageSliderProps = {/* bu sayfa ImageSlider bileşeninin tiplerini tanımlar menüdeki dönen resimler için tasarladık*/
  images: string[];
  interval?: number;
};

const ImageSlider: React.FC<ImageSliderProps> = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="slider-container">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`slide-${index}`}
          className={`slider-image ${index === currentIndex ? "active" : ""}`}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
