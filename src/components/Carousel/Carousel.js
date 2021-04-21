import React, { useState } from "react";
import imageArray from "../../utility/imageArray";
import Arrow from "../Arrow/Arrow";
import styles from "./carousel.module.css";

const Carousel = ({ chunkSize }) => {
  const [currentImg, setcurrentImg] = useState(0);
  const totalImages = imageArray.length;

  const nextHandler = () => {
    const nextImg = currentImg + 1;
    if (nextImg >= totalImages) {
      setcurrentImg(0);
    } else {
      setcurrentImg(nextImg);
    }
  };

  const previousHandler = () => {
    const previousImg = currentImg - 1;
    if (previousImg < 0) {
      setcurrentImg(totalImages - 1);
    } else {
      setcurrentImg(previousImg);
    }
  };

  return (
    <div className={styles.container}>
      <button className={styles.previousButton} onClick={previousHandler}>
        <Arrow />
      </button>
      {imageArray.map((img, index) => {
        return (
          <div>
            {index === currentImg && (
              <img
                className={styles.carouselImg}
                src={img}
                key={index}
                alt={`Portreit ${index} in monochrome`}
              />
            )}
          </div>
        );
      })}
      <button className={styles.nextButton} onClick={nextHandler}>
        <Arrow />
      </button>
    </div>
  );
};

export default Carousel;
