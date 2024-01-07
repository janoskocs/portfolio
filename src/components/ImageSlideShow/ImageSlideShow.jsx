import "./ImageSlideShow.scss";
import { useState, useRef, useEffect } from "react";

const ImageSlideShow = ({ images }) => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 3500;

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshow__slider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((image, index) => (
          <img
            src={`screenshots/${image}`}
            className="slideshow__slide"
            key={index}
          />
        ))}
      </div>

      <div className="slideshow__controls">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshow__dot${
              index === idx ? " slideshow__dot--active" : ""
            }`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlideShow;
