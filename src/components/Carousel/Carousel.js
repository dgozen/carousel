import React, { useState, useEffect } from "react";
import slideObjects from "../../utility/slideObjects";
import Arrow from "../Arrow/Arrow";
import pause from "../../images/pause.png";
import play from "../../images/play.png";
import "../../App.css";

const Carousel = ({ totalImages }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);
  const slideLength = slideObjects.slice(0, totalImages);

  const toggleAutoPlay = () => {
    setAutoPlay(!autoPlay);
  };;;

  const nextSlide = () => {
    const nextSlide = currentSlide + 1;
    if (nextSlide >= totalImages) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(nextSlide);
    }
  };

  const previousSlide = () => {
    const previousSlide = currentSlide - 1;
    if (previousSlide < 0) {
      setCurrentSlide(totalImages - 1);
    } else {
      setCurrentSlide(previousSlide);
    }
  };

  useEffect(() => {
    const timeout = autoPlay && setTimeout(() => nextSlide(), 5000);
    return () => clearTimeout(timeout);
  }, [currentSlide, autoPlay]);

  return (
    <section aria-label={`carousel of portraits containing ${totalImages} slides`}
      className="container"
    >
      <button
        aria-label="previous image"
        className="buttonArrows previousButton"
        onClick={previousSlide}
      >
        <Arrow />
      </button>
      {slideLength.map((item, index) => {
        return (
          <div
            className={index === currentSlide ? "active" : "deactive"}
            key={index}
          >
            {index === currentSlide && (
              <img
                className="carouselImg"
                src={item.img}
                key={index}
                alt={item.alt}
              />
            )}
          </div>
        );
      })}
      <button
        aria-label="next image"
        className="buttonArrows nextButton"
        onClick={nextSlide}
      >
        <Arrow />
      </button>
      <div className="buttonContainer">
        {[...Array(totalImages).keys()].map((item, index) => {
          return (
            <button
              key={index}
              id="circleButton"
              className={currentSlide === index ? "selected" : "notSelected"}
              aria-label={`navigate to slide ${index}`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          );
        })}
        <button
          aria-label={
            autoPlay
              ? "turn off auto play carousel"
              : "turn on auto play carousel"
          }
          className="autoPlayButton"
          onClick={toggleAutoPlay}
        >
          {autoPlay ? (
            <img className="autoPlayIcon" src={pause} alt="autoplay" aria-hidden={true}/>
          ) : (
            <img className="autoPlayIcon" src={play} alt="autoplay" aria-hidden={true}/>
          )}
        </button>
      </div>
    </section>
  );
};

export default Carousel;
